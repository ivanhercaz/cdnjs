(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var Bottleneck,
      DEFAULT_PRIORITY,
      DLList,
      Events,
      LocalDatastore,
      NUM_PRIORITIES,
      RedisDatastore,
      States,
      Sync,
      packagejson,
      parser,
      splice = [].splice;

  NUM_PRIORITIES = 10;

  DEFAULT_PRIORITY = 5;

  parser = require("./parser");

  LocalDatastore = require("./LocalDatastore");

  RedisDatastore = require("./RedisDatastore");

  Events = require("./Events");

  States = require("./States");

  DLList = require("./DLList");

  Sync = require("./Sync");

  packagejson = require("../package.json");

  Bottleneck = function () {
    class Bottleneck {
      constructor(options = {}, ...invalid) {
        var storeOptions;
        this._drainOne = this._drainOne.bind(this);
        this.submit = this.submit.bind(this);
        this.schedule = this.schedule.bind(this);
        this.updateSettings = this.updateSettings.bind(this);
        this.incrementReservoir = this.incrementReservoir.bind(this);
        this._validateOptions(options, invalid);
        parser.load(options, this.instanceDefaults, this);
        this._queues = this._makeQueues();
        this._scheduled = {};
        this._states = new States(["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(this.trackDoneStatus ? ["DONE"] : []));
        this._limiter = null;
        this.Events = new Events(this);
        this._submitLock = new Sync("submit", this);
        this._registerLock = new Sync("register", this);
        storeOptions = parser.load(options, this.storeDefaults, {});
        this._store = function () {
          if (this.datastore === "local") {
            return new LocalDatastore(this, storeOptions, parser.load(options, this.localStoreDefaults, {}));
          } else if (this.datastore === "redis" || this.datastore === "ioredis") {
            return new RedisDatastore(this, storeOptions, parser.load(options, this.redisStoreDefaults, {}));
          } else {
            throw new Bottleneck.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
          }
        }.call(this);
      }

      _validateOptions(options, invalid) {
        if (!(options != null && typeof options === "object" && invalid.length === 0)) {
          throw new Bottleneck.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
        }
      }

      ready() {
        return this._store.ready;
      }

      clients() {
        return this._store.clients;
      }

      _channel() {
        return `b_${this.id}`;
      }

      publish(message) {
        return this._store.__publish__(message);
      }

      disconnect(flush = true) {
        return this._store.__disconnect__(flush);
      }

      chain(_limiter) {
        this._limiter = _limiter;
        return this;
      }

      queued(priority) {
        if (priority != null) {
          return this._queues[priority].length;
        } else {
          return this._queues.reduce(function (a, b) {
            return a + b.length;
          }, 0);
        }
      }

      empty() {
        return this.queued() === 0 && this._submitLock.isEmpty();
      }

      running() {
        return this._store.__running__();
      }

      done() {
        return this._store.__done__();
      }

      jobStatus(id) {
        return this._states.jobStatus(id);
      }

      jobs(status) {
        return this._states.statusJobs(status);
      }

      counts() {
        return this._states.statusCounts();
      }

      _makeQueues() {
        var i, j, ref, results;
        results = [];
        for (i = j = 1, ref = NUM_PRIORITIES; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
          results.push(new DLList());
        }
        return results;
      }

      _sanitizePriority(priority) {
        var sProperty;
        sProperty = ~~priority !== priority ? DEFAULT_PRIORITY : priority;
        if (sProperty < 0) {
          return 0;
        } else if (sProperty > NUM_PRIORITIES - 1) {
          return NUM_PRIORITIES - 1;
        } else {
          return sProperty;
        }
      }

      _find(arr, fn) {
        var ref;
        return (ref = function () {
          var i, j, len, x;
          for (i = j = 0, len = arr.length; j < len; i = ++j) {
            x = arr[i];
            if (fn(x)) {
              return x;
            }
          }
        }()) != null ? ref : [];
      }

      _getFirst(arr) {
        return this._find(arr, function (x) {
          return x.length > 0;
        });
      }

      _randomIndex() {
        return Math.random().toString(36).slice(2);
      }

      check(weight = 1) {
        return this._store.__check__(weight);
      }

      _run(next, wait, index) {
        var _this = this;

        var completed, done;
        this.Events.trigger("debug", [`Scheduling ${next.options.id}`, {
          args: next.args,
          options: next.options
        }]);
        done = false;
        completed = (() => {
          var _ref = _asyncToGenerator(function* (...args) {
            var e, ref, running;
            if (!done) {
              try {
                done = true;
                _this._states.next(next.options.id); // DONE
                clearTimeout(_this._scheduled[index].expiration);
                delete _this._scheduled[index];
                _this.Events.trigger("debug", [`Completed ${next.options.id}`, {
                  args: next.args,
                  options: next.options
                }]);
                _this.Events.trigger("done", [`Completed ${next.options.id}`, {
                  args: next.args,
                  options: next.options
                }]);

                var _ref2 = yield _this._store.__free__(index, next.options.weight);

                running = _ref2.running;

                _this.Events.trigger("debug", [`Freed ${next.options.id}`, {
                  args: next.args,
                  options: next.options
                }]);
                if (running === 0 && _this.empty()) {
                  _this.Events.trigger("idle", []);
                }
                return (ref = next.cb) != null ? ref.apply({}, args) : void 0;
              } catch (error) {
                e = error;
                return _this.Events.trigger("error", [e]);
              }
            }
          });

          return function completed() {
            return _ref.apply(this, arguments);
          };
        })();
        this._states.next(next.options.id); // RUNNING
        return this._scheduled[index] = {
          timeout: setTimeout(() => {
            this.Events.trigger("debug", [`Executing ${next.options.id}`, {
              args: next.args,
              options: next.options
            }]);
            this._states.next(next.options.id); // EXECUTING
            if (this._limiter != null) {
              return this._limiter.submit.apply(this._limiter, Array.prototype.concat(next.options, next.task, next.args, completed));
            } else {
              return next.task.apply({}, next.args.concat(completed));
            }
          }, wait),
          expiration: next.options.expiration != null ? setTimeout(() => {
            return completed(new Bottleneck.prototype.BottleneckError(`This job timed out after ${next.options.expiration} ms.`));
          }, wait + next.options.expiration) : void 0,
          job: next
        };
      }

      _drainOne(capacity) {
        return this._registerLock.schedule(() => {
          var args, index, options, queue;
          if (this.queued() === 0) {
            return this.Promise.resolve(false);
          }
          queue = this._getFirst(this._queues);

          var _queue$first = queue.first();

          options = _queue$first.options;
          args = _queue$first.args;

          if (capacity != null && options.weight > capacity) {
            return this.Promise.resolve(false);
          }
          this.Events.trigger("debug", [`Draining ${options.id}`, { args, options }]);
          index = this._randomIndex();
          return this._store.__register__(index, options.weight, options.expiration).then(({ success, wait, reservoir }) => {
            var empty, next;
            this.Events.trigger("debug", [`Drained ${options.id}`, { success, args, options }]);
            if (success) {
              next = queue.shift();
              empty = this.empty();
              if (empty) {
                this.Events.trigger("empty", []);
              }
              if (reservoir === 0) {
                this.Events.trigger("depleted", [empty]);
              }
              this._run(next, wait, index);
            }
            return this.Promise.resolve(success);
          });
        });
      }

      _drainAll(capacity) {
        return this._drainOne(capacity).then(success => {
          if (success) {
            return this._drainAll();
          } else {
            return this.Promise.resolve(success);
          }
        }).catch(e => {
          return this.Events.trigger("error", [e]);
        });
      }

      _drop(job, message = "This job has been dropped by Bottleneck") {
        var ref;
        this._states.remove(job.options.id);
        if (this.rejectOnDrop) {
          if ((ref = job.cb) != null) {
            ref.apply({}, [new Bottleneck.prototype.BottleneckError(message)]);
          }
        }
        return this.Events.trigger("dropped", [job]);
      }

      stop(options = {}) {
        var done, waitForExecuting;
        options = parser.load(options, this.stopDefaults);
        waitForExecuting = at => {
          var finished;
          finished = () => {
            var counts;
            counts = this._states.counts;
            return counts[0] + counts[1] + counts[2] + counts[3] === at;
          };
          return new this.Promise((resolve, reject) => {
            if (finished()) {
              return resolve();
            } else {
              return this.on("done", () => {
                if (finished()) {
                  this.removeAllListeners("done");
                  return resolve();
                }
              });
            }
          });
        };
        done = options.dropWaitingJobs ? (this._run = next => {
          return this._drop(next, options.dropErrorMessage);
        }, this._drainOne = () => {
          return this.Promise.resolve(false);
        }, this._registerLock.schedule(() => {
          return this._submitLock.schedule(() => {
            var k, ref, v;
            ref = this._scheduled;
            for (k in ref) {
              v = ref[k];
              if (this.jobStatus(v.job.options.id) === "RUNNING") {
                clearTimeout(v.timeout);
                clearTimeout(v.expiration);
                this._drop(v.job, options.dropErrorMessage);
              }
            }
            this._queues.forEach(queue => {
              return queue.forEachShift(job => {
                return this._drop(job, options.dropErrorMessage);
              });
            });
            return waitForExecuting(0);
          });
        })) : this.schedule({
          priority: NUM_PRIORITIES - 1,
          weight: 0
        }, () => {
          return waitForExecuting(1);
        });
        this.submit = (...args) => {
          var _ref3, _ref4, _splice$call, _splice$call2;

          var cb, ref;
          ref = args, (_ref3 = ref, _ref4 = _toArray(_ref3), args = _ref4.slice(0), _ref3), (_splice$call = splice.call(args, -1), _splice$call2 = _slicedToArray(_splice$call, 1), cb = _splice$call2[0], _splice$call);
          return cb != null ? cb.apply({}, [new Bottleneck.prototype.BottleneckError(options.enqueueErrorMessage)]) : void 0;
        };
        this.stop = () => {
          return this.Promise.reject(new Bottleneck.prototype.BottleneckError("stop() has already been called"));
        };
        return done;
      }

      submit(...args) {
        var _this2 = this;

        var cb, job, options, ref, ref1, ref2, task;
        if (typeof args[0] === "function") {
          var _ref5, _ref6, _splice$call3, _splice$call4;

          ref = args, (_ref5 = ref, _ref6 = _toArray(_ref5), task = _ref6[0], args = _ref6.slice(1), _ref5), (_splice$call3 = splice.call(args, -1), _splice$call4 = _slicedToArray(_splice$call3, 1), cb = _splice$call4[0], _splice$call3);
          options = parser.load({}, this.jobDefaults, {});
        } else {
          var _ref7, _ref8, _splice$call5, _splice$call6;

          ref1 = args, (_ref7 = ref1, _ref8 = _toArray(_ref7), options = _ref8[0], task = _ref8[1], args = _ref8.slice(2), _ref7), (_splice$call5 = splice.call(args, -1), _splice$call6 = _slicedToArray(_splice$call5, 1), cb = _splice$call6[0], _splice$call5);
          options = parser.load(options, this.jobDefaults);
        }
        job = { options, task, args, cb };
        options.priority = this._sanitizePriority(options.priority);
        if (options.id === this.jobDefaults.id) {
          options.id = `${options.id}-${this._randomIndex()}`;
        }
        if (this.jobStatus(options.id) != null) {
          if ((ref2 = job.cb) != null) {
            ref2.apply({}, [new Bottleneck.prototype.BottleneckError(`A job with the same id already exists (id=${options.id})`)]);
          }
          return false;
        }
        this._states.start(options.id); // RECEIVED
        this.Events.trigger("debug", [`Queueing ${options.id}`, { args, options }]);
        return this._submitLock.schedule(_asyncToGenerator(function* () {
          var blocked, e, reachedHWM, ref3, shifted, strategy;
          try {
            var _ref10 = yield _this2._store.__submit__(_this2.queued(), options.weight);

            reachedHWM = _ref10.reachedHWM;
            blocked = _ref10.blocked;
            strategy = _ref10.strategy;

            _this2.Events.trigger("debug", [`Queued ${options.id}`, { args, options, reachedHWM, blocked }]);
          } catch (error) {
            e = error;
            _this2._states.remove(options.id);
            _this2.Events.trigger("debug", [`Could not queue ${options.id}`, {
              args,
              options,
              error: e
            }]);
            if ((ref3 = job.cb) != null) {
              ref3.apply({}, [e]);
            }
            return false;
          }
          if (blocked) {
            _this2._queues = _this2._makeQueues();
            _this2._drop(job);
            return true;
          } else if (reachedHWM) {
            shifted = strategy === Bottleneck.prototype.strategy.LEAK ? _this2._getFirst(_this2._queues.slice(options.priority).reverse()).shift() : strategy === Bottleneck.prototype.strategy.OVERFLOW_PRIORITY ? _this2._getFirst(_this2._queues.slice(options.priority + 1).reverse()).shift() : strategy === Bottleneck.prototype.strategy.OVERFLOW ? job : void 0;
            if (shifted != null) {
              _this2._drop(shifted);
            }
            if (shifted == null || strategy === Bottleneck.prototype.strategy.OVERFLOW) {
              if (shifted == null) {
                _this2._drop(job);
              }
              return reachedHWM;
            }
          }
          _this2._states.next(job.options.id); // QUEUED
          _this2._queues[options.priority].push(job);
          yield _this2._drainAll();
          return reachedHWM;
        }));
      }

      schedule(...args) {
        var options, task, wrapped;
        if (typeof args[0] === "function") {
          var _args = args;

          var _args2 = _toArray(_args);

          task = _args2[0];
          args = _args2.slice(1);

          options = parser.load({}, this.jobDefaults, {});
        } else {
          var _args3 = args;

          var _args4 = _toArray(_args3);

          options = _args4[0];
          task = _args4[1];
          args = _args4.slice(2);

          options = parser.load(options, this.jobDefaults);
        }
        wrapped = (...args) => {
          var _ref11, _ref12, _splice$call7, _splice$call8;

          var cb, ref, returned;
          ref = args, (_ref11 = ref, _ref12 = _toArray(_ref11), args = _ref12.slice(0), _ref11), (_splice$call7 = splice.call(args, -1), _splice$call8 = _slicedToArray(_splice$call7, 1), cb = _splice$call8[0], _splice$call7);
          returned = task.apply({}, args);
          return (!((returned != null ? returned.then : void 0) != null && typeof returned.then === "function") ? this.Promise.resolve(returned) : returned).then(function (...args) {
            return cb.apply({}, Array.prototype.concat(null, args));
          }).catch(function (...args) {
            return cb.apply({}, args);
          });
        };
        return new this.Promise((resolve, reject) => {
          return this.submit.apply({}, Array.prototype.concat(options, wrapped, args, function (...args) {
            return (args[0] != null ? reject : (args.shift(), resolve)).apply({}, args);
          })).catch(e => {
            return this.Events.trigger("error", [e]);
          });
        });
      }

      wrap(fn) {
        var wrapped;
        wrapped = (...args) => {
          return this.schedule.apply({}, Array.prototype.concat(fn, args));
        };
        wrapped.withOptions = (options, ...args) => {
          return this.schedule.apply({}, Array.prototype.concat(options, fn, args));
        };
        return wrapped;
      }

      updateSettings(options = {}) {
        var _this3 = this;

        return _asyncToGenerator(function* () {
          yield _this3._store.__updateSettings__(parser.overwrite(options, _this3.storeDefaults));
          parser.overwrite(options, _this3.instanceDefaults, _this3);
          return _this3;
        })();
      }

      currentReservoir() {
        return this._store.__currentReservoir__();
      }

      incrementReservoir(incr = 0) {
        return this._store.__incrementReservoir__(incr);
      }

    };

    Bottleneck.default = Bottleneck;

    Bottleneck.version = Bottleneck.prototype.version = packagejson.version;

    Bottleneck.strategy = Bottleneck.prototype.strategy = {
      LEAK: 1,
      OVERFLOW: 2,
      OVERFLOW_PRIORITY: 4,
      BLOCK: 3
    };

    Bottleneck.BottleneckError = Bottleneck.prototype.BottleneckError = require("./BottleneckError");

    Bottleneck.Group = Bottleneck.prototype.Group = require("./Group");

    Bottleneck.prototype.jobDefaults = {
      priority: DEFAULT_PRIORITY,
      weight: 1,
      expiration: null,
      id: "<no-id>"
    };

    Bottleneck.prototype.storeDefaults = {
      maxConcurrent: null,
      minTime: 0,
      highWater: null,
      strategy: Bottleneck.prototype.strategy.LEAK,
      penalty: null,
      reservoir: null,
      reservoirRefreshInterval: null,
      reservoirRefreshAmount: null
    };

    Bottleneck.prototype.localStoreDefaults = {
      Promise: Promise,
      timeout: null,
      heartbeatInterval: 5000
    };

    Bottleneck.prototype.redisStoreDefaults = {
      Promise: Promise,
      timeout: null,
      heartbeatInterval: 5000,
      clientOptions: {},
      clusterNodes: null,
      clearDatastore: false,
      sharedConnection: null
    };

    Bottleneck.prototype.instanceDefaults = {
      datastore: "local",
      id: "<no-id>",
      rejectOnDrop: true,
      trackDoneStatus: false,
      Promise: Promise
    };

    Bottleneck.prototype.stopDefaults = {
      enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
      dropWaitingJobs: true,
      dropErrorMessage: "This limiter has been stopped."
    };

    return Bottleneck;
  }.call(this);

  module.exports = Bottleneck;
}).call(undefined);
},{"../package.json":16,"./BottleneckError":2,"./DLList":3,"./Events":4,"./Group":5,"./LocalDatastore":7,"./RedisDatastore":9,"./States":11,"./Sync":12,"./parser":15}],2:[function(require,module,exports){
"use strict";

(function () {
  var BottleneckError;

  BottleneckError = class BottleneckError extends Error {};

  module.exports = BottleneckError;
}).call(undefined);
},{}],3:[function(require,module,exports){
"use strict";

(function () {
  var DLList;

  DLList = class DLList {
    constructor() {
      this._first = null;
      this._last = null;
      this.length = 0;
    }

    push(value) {
      var node;
      this.length++;
      node = {
        value,
        next: null
      };
      if (this._last != null) {
        this._last.next = node;
        this._last = node;
      } else {
        this._first = this._last = node;
      }
      return void 0;
    }

    shift() {
      var ref1, value;
      if (this._first == null) {
        return void 0;
      } else {
        this.length--;
      }
      value = this._first.value;
      this._first = (ref1 = this._first.next) != null ? ref1 : this._last = null;
      return value;
    }

    first() {
      if (this._first != null) {
        return this._first.value;
      }
    }

    getArray() {
      var node, ref, results;
      node = this._first;
      results = [];
      while (node != null) {
        results.push((ref = node, node = node.next, ref.value));
      }
      return results;
    }

    forEachShift(cb) {
      var node;
      node = this.shift();
      while (node != null) {
        cb(node), node = this.shift();
      }
      return void 0;
    }

  };

  module.exports = DLList;
}).call(undefined);
},{}],4:[function(require,module,exports){
"use strict";

(function () {
  var Events;

  Events = class Events {
    constructor(instance) {
      this.instance = instance;
      this._events = {};
      this.instance.on = (name, cb) => {
        return this._addListener(name, "many", cb);
      };
      this.instance.once = (name, cb) => {
        return this._addListener(name, "once", cb);
      };
      this.instance.removeAllListeners = (name = null) => {
        if (name != null) {
          return delete this._events[name];
        } else {
          return this._events = {};
        }
      };
    }

    _addListener(name, status, cb) {
      var base;
      if ((base = this._events)[name] == null) {
        base[name] = [];
      }
      this._events[name].push({ cb, status });
      return this.instance;
    }

    trigger(name, args) {
      if (name !== "debug") {
        this.trigger("debug", [`Event triggered: ${name}`, args]);
      }
      if (this._events[name] == null) {
        return;
      }
      this._events[name] = this._events[name].filter(function (listener) {
        return listener.status !== "none";
      });
      return this._events[name].forEach(listener => {
        var e, ret;
        if (listener.status === "none") {
          return;
        }
        if (listener.status === "once") {
          listener.status = "none";
        }
        try {
          ret = listener.cb.apply({}, args);
          if (typeof (ret != null ? ret.then : void 0) === "function") {
            return ret.then(function () {}).catch(e => {
              return this.trigger("error", [e]);
            });
          }
        } catch (error) {
          e = error;
          if ("name" !== "error") {
            return this.trigger("error", [e]);
          }
        }
      });
    }

  };

  module.exports = Events;
}).call(undefined);
},{}],5:[function(require,module,exports){
"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var Events, Group, IORedisConnection, RedisConnection, parser;

  parser = require("./parser");

  Events = require("./Events");

  RedisConnection = require("./RedisConnection");

  IORedisConnection = require("./IORedisConnection");

  Group = function () {
    class Group {
      constructor(limiterOptions = {}) {
        this.deleteKey = this.deleteKey.bind(this);
        this.updateSettings = this.updateSettings.bind(this);
        this.limiterOptions = limiterOptions;
        parser.load(this.limiterOptions, this.defaults, this);
        this.Events = new Events(this);
        this.instances = {};
        this.Bottleneck = require("./Bottleneck");
        this._startAutoCleanup();
        if (this.limiterOptions.datastore === "redis") {
          this._connection = new RedisConnection(Object.assign({}, this.limiterOptions, { Events: this.Events }));
        } else if (this.limiterOptions.datastore === "ioredis") {
          this._connection = new IORedisConnection(Object.assign({}, this.limiterOptions, { Events: this.Events }));
        }
      }

      key(key = "") {
        var ref;
        return (ref = this.instances[key]) != null ? ref : (() => {
          var limiter;
          limiter = this.instances[key] = new this.Bottleneck(Object.assign(this.limiterOptions, {
            id: `group-key-${key}`,
            timeout: this.timeout,
            sharedConnection: this._connection
          }));
          this.Events.trigger("created", [limiter, key]);
          return limiter;
        })();
      }

      deleteKey(key = "") {
        var instance;
        instance = this.instances[key];
        delete this.instances[key];
        return instance != null ? instance.disconnect() : void 0;
      }

      limiters() {
        var k, ref, results, v;
        ref = this.instances;
        results = [];
        for (k in ref) {
          v = ref[k];
          results.push({
            key: k,
            limiter: v
          });
        }
        return results;
      }

      keys() {
        return Object.keys(this.instances);
      }

      _startAutoCleanup() {
        var _this = this;

        var base;
        clearInterval(this.interval);
        return typeof (base = this.interval = setInterval(_asyncToGenerator(function* () {
          var e, k, ref, results, time, v;
          time = Date.now();
          ref = _this.instances;
          results = [];
          for (k in ref) {
            v = ref[k];
            try {
              if (yield v._store.__groupCheck__(time)) {
                results.push(_this.deleteKey(k));
              } else {
                results.push(void 0);
              }
            } catch (error) {
              e = error;
              results.push(v.Events.trigger("error", [e]));
            }
          }
          return results;
        }), this.timeout / 2)).unref === "function" ? base.unref() : void 0;
      }

      updateSettings(options = {}) {
        parser.overwrite(options, this.defaults, this);
        parser.overwrite(options, options, this.limiterOptions);
        if (options.timeout != null) {
          return this._startAutoCleanup();
        }
      }

      disconnect(flush) {
        var ref;
        return (ref = this._connection) != null ? ref.disconnect(flush) : void 0;
      }

    };

    Group.prototype.defaults = {
      timeout: 1000 * 60 * 5
    };

    return Group;
  }.call(this);

  module.exports = Group;
}).call(undefined);
},{"./Bottleneck":1,"./Events":4,"./IORedisConnection":6,"./RedisConnection":8,"./parser":15}],6:[function(require,module,exports){
"use strict";

(function () {
  var Events, IORedisConnection, Scripts, parser;

  parser = require("./parser");

  Events = require("./Events");

  Scripts = require("./Scripts");

  IORedisConnection = function () {
    class IORedisConnection {
      constructor(options) {
        var Redis;
        Redis = eval("require")("ioredis"); // Obfuscated or else Webpack/Angular will try to inline the optional ioredis module
        parser.load(options, this.defaults, this);
        if (this.Events == null) {
          this.Events = new Events(this);
        }
        if (this.clusterNodes != null) {
          this.client = new Redis.Cluster(this.clusterNodes, this.clientOptions);
          this.subClient = new Redis.Cluster(this.clusterNodes, this.clientOptions);
        } else {
          this.client = new Redis(this.clientOptions);
          this.subClient = new Redis(this.clientOptions);
        }
        this.limiters = {};
        this.ready = new this.Promise((resolve, reject) => {
          var count, done, errorListener;
          count = 0;
          errorListener = e => {
            return this.Events.trigger("error", [e]);
          };
          done = () => {
            if (++count === 2) {
              return resolve({
                client: this.client,
                subscriber: this.subClient
              });
            }
          };
          this.client.on("error", errorListener);
          this.client.once("ready", done);
          this.subClient.on("error", errorListener);
          this.subClient.once("ready", done);
          return this.subClient.on("message", (channel, message) => {
            var ref;
            return (ref = this.limiters[channel]) != null ? ref._store.onMessage(message) : void 0;
          });
        });
      }

      loadScripts() {
        return Scripts.names.forEach(name => {
          return this.client.defineCommand(name, {
            lua: Scripts.payload(name)
          });
        });
      }

      addLimiter(instance) {
        return new instance.Promise((resolve, reject) => {
          return this.subClient.subscribe(instance._channel(), () => {
            this.limiters[instance._channel()] = instance;
            return resolve();
          });
        });
      }

      removeLimiter(instance) {
        return delete this.limiters[instance._channel()];
      }

      scriptArgs(name, id, args, cb) {
        var keys;
        keys = Scripts.keys(name, id);
        return [keys.length].concat(keys, args, cb);
      }

      scriptFn(name) {
        return this.client[name].bind(this.client);
      }

      disconnect(flush) {
        var i, k, len, ref;
        ref = Object.keys(this.limiters);
        for (i = 0, len = ref.length; i < len; i++) {
          k = ref[i];
          this.limiters[k]._store.__disconnect__(flush);
        }
        if (flush) {
          return this.Promise.all([this.client.quit(), this.subClient.quit()]);
        } else {
          this.client.disconnect();
          this.subClient.disconnect();
          return this.Promise.resolve();
        }
      }

    };

    IORedisConnection.prototype.defaults = {
      clientOptions: {},
      clusterNodes: null,
      Promise: Promise,
      Events: null
    };

    return IORedisConnection;
  }.call(this);

  module.exports = IORedisConnection;
}).call(undefined);
},{"./Events":4,"./Scripts":10,"./parser":15}],7:[function(require,module,exports){
"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var BottleneckError, LocalDatastore, parser;

  parser = require("./parser");

  BottleneckError = require("./BottleneckError");

  LocalDatastore = class LocalDatastore {
    constructor(instance, storeOptions, storeInstanceOptions) {
      var base;
      this.instance = instance;
      this.storeOptions = storeOptions;
      parser.load(storeInstanceOptions, storeInstanceOptions, this);
      this._nextRequest = Date.now();
      this._lastReservoirRefresh = null;
      this._running = 0;
      this._done = 0;
      this._unblockTime = 0;
      this.ready = this.yieldLoop();
      this.clients = {};
      if (typeof (base = this.heartbeat = setInterval(() => {
        var now, reservoirRefreshActive;
        now = Date.now();
        reservoirRefreshActive = this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null;
        if (reservoirRefreshActive && (this._lastReservoirRefresh == null || now >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval)) {
          this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount;
          this._lastReservoirRefresh = now;
          return this.instance._drainAll(this.computeCapacity());
        }
      }, this.heartbeatInterval)).unref === "function") {
        base.unref();
      }
    }

    __publish__(message) {
      var _this = this;

      return _asyncToGenerator(function* () {
        yield _this.yieldLoop();
        return _this.instance.Events.trigger("message", [message.toString()]);
      })();
    }

    __disconnect__(flush) {
      clearInterval(this.heartbeat);
      return this.Promise.resolve();
    }

    yieldLoop(t = 0) {
      return new this.Promise(function (resolve, reject) {
        return setTimeout(resolve, t);
      });
    }

    computePenalty() {
      var ref;
      return (ref = this.storeOptions.penalty) != null ? ref : 15 * this.storeOptions.minTime || 5000;
    }

    __updateSettings__(options) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        yield _this2.yieldLoop();
        parser.overwrite(options, options, _this2.storeOptions);
        _this2.instance._drainAll(_this2.computeCapacity());
        return true;
      })();
    }

    __running__() {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        yield _this3.yieldLoop();
        return _this3._running;
      })();
    }

    __done__() {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        yield _this4.yieldLoop();
        return _this4._done;
      })();
    }

    __groupCheck__(time) {
      var _this5 = this;

      return _asyncToGenerator(function* () {
        yield _this5.yieldLoop();
        return _this5._nextRequest + _this5.timeout < time;
      })();
    }

    computeCapacity() {
      var maxConcurrent, reservoir;
      var _storeOptions = this.storeOptions;
      maxConcurrent = _storeOptions.maxConcurrent;
      reservoir = _storeOptions.reservoir;

      if (maxConcurrent != null && reservoir != null) {
        return Math.min(maxConcurrent - this._running, reservoir);
      } else if (maxConcurrent != null) {
        return maxConcurrent - this._running;
      } else if (reservoir != null) {
        return reservoir;
      } else {
        return null;
      }
    }

    conditionsCheck(weight) {
      var capacity;
      capacity = this.computeCapacity();
      return capacity == null || weight <= capacity;
    }

    __incrementReservoir__(incr) {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        var reservoir;
        yield _this6.yieldLoop();
        reservoir = _this6.storeOptions.reservoir += incr;
        _this6.instance._drainAll(_this6.computeCapacity());
        return reservoir;
      })();
    }

    __currentReservoir__() {
      var _this7 = this;

      return _asyncToGenerator(function* () {
        yield _this7.yieldLoop();
        return _this7.storeOptions.reservoir;
      })();
    }

    isBlocked(now) {
      return this._unblockTime >= now;
    }

    check(weight, now) {
      return this.conditionsCheck(weight) && this._nextRequest - now <= 0;
    }

    __check__(weight) {
      var _this8 = this;

      return _asyncToGenerator(function* () {
        var now;
        yield _this8.yieldLoop();
        now = Date.now();
        return _this8.check(weight, now);
      })();
    }

    __register__(index, weight, expiration) {
      var _this9 = this;

      return _asyncToGenerator(function* () {
        var now, wait;
        yield _this9.yieldLoop();
        now = Date.now();
        if (_this9.conditionsCheck(weight)) {
          _this9._running += weight;
          if (_this9.storeOptions.reservoir != null) {
            _this9.storeOptions.reservoir -= weight;
          }
          wait = Math.max(_this9._nextRequest - now, 0);
          _this9._nextRequest = now + wait + _this9.storeOptions.minTime;
          return {
            success: true,
            wait,
            reservoir: _this9.storeOptions.reservoir
          };
        } else {
          return {
            success: false
          };
        }
      })();
    }

    strategyIsBlock() {
      return this.storeOptions.strategy === 3;
    }

    __submit__(queueLength, weight) {
      var _this10 = this;

      return _asyncToGenerator(function* () {
        var blocked, now, reachedHWM;
        yield _this10.yieldLoop();
        if (_this10.storeOptions.maxConcurrent != null && weight > _this10.storeOptions.maxConcurrent) {
          throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${_this10.storeOptions.maxConcurrent}`);
        }
        now = Date.now();
        reachedHWM = _this10.storeOptions.highWater != null && queueLength === _this10.storeOptions.highWater && !_this10.check(weight, now);
        blocked = _this10.strategyIsBlock() && (reachedHWM || _this10.isBlocked(now));
        if (blocked) {
          _this10._unblockTime = now + _this10.computePenalty();
          _this10._nextRequest = _this10._unblockTime + _this10.storeOptions.minTime;
        }
        return {
          reachedHWM,
          blocked,
          strategy: _this10.storeOptions.strategy
        };
      })();
    }

    __free__(index, weight) {
      var _this11 = this;

      return _asyncToGenerator(function* () {
        yield _this11.yieldLoop();
        _this11._running -= weight;
        _this11._done += weight;
        _this11.instance._drainAll(_this11.computeCapacity());
        return {
          running: _this11._running
        };
      })();
    }

  };

  module.exports = LocalDatastore;
}).call(undefined);
},{"./BottleneckError":2,"./parser":15}],8:[function(require,module,exports){
"use strict";

(function () {
  var Events, RedisConnection, Scripts, parser;

  parser = require("./parser");

  Events = require("./Events");

  Scripts = require("./Scripts");

  RedisConnection = function () {
    class RedisConnection {
      constructor(options) {
        var Redis;
        Redis = eval("require")("redis"); // Obfuscated or else Webpack/Angular will try to inline the optional redis module
        parser.load(options, this.defaults, this);
        if (this.Events == null) {
          this.Events = new Events(this);
        }
        this.client = Redis.createClient(this.clientOptions);
        this.subClient = Redis.createClient(this.clientOptions);
        this.limiters = {};
        this.shas = {};
        this.ready = new this.Promise((resolve, reject) => {
          var count, done, errorListener;
          count = 0;
          errorListener = e => {
            return this.Events.trigger("error", [e]);
          };
          done = () => {
            if (++count === 2) {
              return resolve({
                client: this.client,
                subscriber: this.subClient
              });
            }
          };
          this.client.on("error", errorListener);
          this.client.once("ready", done);
          this.subClient.on("error", errorListener);
          this.subClient.once("ready", done);
          return this.subClient.on("message", (channel, message) => {
            var ref;
            return (ref = this.limiters[channel]) != null ? ref._store.onMessage(message) : void 0;
          });
        });
      }

      _loadScript(name) {
        return new this.Promise((resolve, reject) => {
          var payload;
          payload = Scripts.payload(name);
          return this.client.multi([["script", "load", payload]]).exec((err, replies) => {
            if (err != null) {
              return reject(err);
            }
            this.shas[name] = replies[0];
            return resolve(replies[0]);
          });
        });
      }

      loadScripts() {
        return this.Promise.all(Scripts.names.map(k => {
          return this._loadScript(k);
        }));
      }

      addLimiter(instance) {
        return new instance.Promise((resolve, reject) => {
          var handler;
          handler = channel => {
            if (channel === instance._channel()) {
              this.subClient.removeListener("subscribe", handler);
              this.limiters[channel] = instance;
              return resolve();
            }
          };
          this.subClient.on("subscribe", handler);
          return this.subClient.subscribe(instance._channel());
        });
      }

      removeLimiter(instance) {
        return delete this.limiters[instance._channel()];
      }

      scriptArgs(name, id, args, cb) {
        var keys;
        keys = Scripts.keys(name, id);
        return [this.shas[name], keys.length].concat(keys, args, cb);
      }

      scriptFn(name) {
        return this.client.evalsha.bind(this.client);
      }

      disconnect(flush) {
        var i, k, len, ref;
        ref = Object.keys(this.limiters);
        for (i = 0, len = ref.length; i < len; i++) {
          k = ref[i];
          this.limiters[k]._store.__disconnect__(flush);
        }
        this.client.end(flush);
        this.subClient.end(flush);
        return this.Promise.resolve();
      }

    };

    RedisConnection.prototype.defaults = {
      clientOptions: {},
      Promise: Promise,
      Events: null
    };

    return RedisConnection;
  }.call(this);

  module.exports = RedisConnection;
}).call(undefined);
},{"./Events":4,"./Scripts":10,"./parser":15}],9:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var BottleneckError, IORedisConnection, RedisConnection, RedisDatastore, parser;

  parser = require("./parser");

  BottleneckError = require("./BottleneckError");

  RedisConnection = require("./RedisConnection");

  IORedisConnection = require("./IORedisConnection");

  RedisDatastore = class RedisDatastore {
    constructor(instance, storeOptions, storeInstanceOptions) {
      this.instance = instance;
      this.storeOptions = storeOptions;
      this.originalId = this.instance.id;
      parser.load(storeInstanceOptions, storeInstanceOptions, this);
      this.clients = {};
      this.connection = this.sharedConnection ? this.sharedConnection : this.instance.datastore === "redis" ? new RedisConnection({
        clientOptions: this.clientOptions,
        Promise: this.Promise,
        Events: this.instance.Events
      }) : this.instance.datastore === "ioredis" ? new IORedisConnection({
        clientOptions: this.clientOptions,
        clusterNodes: this.clusterNodes,
        Promise: this.Promise,
        Events: this.instance.Events
      }) : void 0;
      this.ready = this.connection.ready.then(clients => {
        this.clients = clients;
        return this.connection.loadScripts();
      }).then(() => {
        return this.runScript("init", this.prepareInitSettings(this.clearDatastore));
      }).then(() => {
        return this.connection.addLimiter(this.instance);
      }).then(() => {
        var base;
        if (typeof (base = this.heartbeat = setInterval(() => {
          return this.runScript("heartbeat", []).catch(e => {
            return this.instance.Events.trigger("error", [e]);
          });
        }, this.heartbeatInterval)).unref === "function") {
          base.unref();
        }
        return this.clients;
      });
    }

    __publish__(message) {
      var _this = this;

      return _asyncToGenerator(function* () {
        var client;

        var _ref = yield _this.ready;

        client = _ref.client;

        return client.publish(_this.instance._channel(), `message:${message.toString()}`);
      })();
    }

    onMessage(message) {
      var data, pos, type;
      pos = message.indexOf(":");
      var _ref2 = [message.slice(0, pos), message.slice(pos + 1)];
      type = _ref2[0];
      data = _ref2[1];

      if (type === "capacity") {
        return this.instance._drainAll(data.length > 0 ? ~~data : void 0);
      } else if (type === "message") {
        return this.instance.Events.trigger("message", [data]);
      }
    }

    __disconnect__(flush) {
      clearInterval(this.heartbeat);
      this.connection.removeLimiter(this.instance);
      if (this.sharedConnection == null) {
        return this.connection.disconnect(flush);
      }
    }

    runScript(name, args) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        if (!(name === "init" || name === "heartbeat")) {
          yield _this2.ready;
        }
        args.unshift(Date.now().toString());
        return new _this2.Promise(function (resolve, reject) {
          var arr;
          _this2.instance.Events.trigger("debug", [`Calling Redis script: ${name}.lua`, args]);
          arr = _this2.connection.scriptArgs(name, _this2.originalId, args, function (err, replies) {
            if (err != null) {
              return reject(err);
            }
            return resolve(replies);
          });
          return _this2.connection.scriptFn(name).apply({}, arr);
        }).catch(function (e) {
          if (e.message === "SETTINGS_KEY_NOT_FOUND") {
            return _this2.runScript("init", _this2.prepareInitSettings(false)).then(function () {
              return _this2.runScript(name, args);
            });
          } else {
            return _this2.Promise.reject(e);
          }
        });
      })();
    }

    prepareArray(arr) {
      var i, len, results, x;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        x = arr[i];
        results.push(x != null ? x.toString() : "");
      }
      return results;
    }

    prepareObject(obj) {
      var arr, k, v;
      arr = [];
      for (k in obj) {
        v = obj[k];
        arr.push(k, v != null ? v.toString() : "");
      }
      return arr;
    }

    prepareInitSettings(clear) {
      var args;
      args = this.prepareObject(Object.assign({}, this.storeOptions, {
        id: this.originalId,
        nextRequest: 0, // set to now by init.lua due to retries
        running: 0,
        done: 0,
        unblockTime: 0,
        version: this.instance.version,
        groupTimeout: this.timeout
      }));
      args.unshift(clear ? 1 : 0, this.instance.version);
      return args;
    }

    convertBool(b) {
      return !!b;
    }

    __updateSettings__(options) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        yield _this3.runScript("update_settings", _this3.prepareObject(options));
        return parser.overwrite(options, options, _this3.storeOptions);
      })();
    }

    __running__() {
      return this.runScript("running", []);
    }

    __done__() {
      return this.runScript("done", []);
    }

    __groupCheck__() {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        return _this4.convertBool((yield _this4.runScript("group_check", [])));
      })();
    }

    __incrementReservoir__(incr) {
      return this.runScript("increment_reservoir", [incr]);
    }

    __currentReservoir__() {
      return this.runScript("current_reservoir", []);
    }

    __check__(weight) {
      var _this5 = this;

      return _asyncToGenerator(function* () {
        return _this5.convertBool((yield _this5.runScript("check", _this5.prepareArray([weight]))));
      })();
    }

    __register__(index, weight, expiration) {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        var reservoir, success, wait;

        var _ref3 = yield _this6.runScript("register", _this6.prepareArray([index, weight, expiration]));

        var _ref4 = _slicedToArray(_ref3, 3);

        success = _ref4[0];
        wait = _ref4[1];
        reservoir = _ref4[2];

        return {
          success: _this6.convertBool(success),
          wait,
          reservoir
        };
      })();
    }

    __submit__(queueLength, weight) {
      var _this7 = this;

      return _asyncToGenerator(function* () {
        var blocked, e, maxConcurrent, overweight, reachedHWM, strategy;
        try {
          var _ref5 = yield _this7.runScript("submit", _this7.prepareArray([queueLength, weight]));

          var _ref6 = _slicedToArray(_ref5, 3);

          reachedHWM = _ref6[0];
          blocked = _ref6[1];
          strategy = _ref6[2];

          return {
            reachedHWM: _this7.convertBool(reachedHWM),
            blocked: _this7.convertBool(blocked),
            strategy
          };
        } catch (error) {
          e = error;
          if (e.message.indexOf("OVERWEIGHT") === 0) {
            var _e$message$split = e.message.split(":");

            var _e$message$split2 = _slicedToArray(_e$message$split, 3);

            overweight = _e$message$split2[0];
            weight = _e$message$split2[1];
            maxConcurrent = _e$message$split2[2];

            throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${maxConcurrent}`);
          } else {
            throw e;
          }
        }
      })();
    }

    __free__(index, weight) {
      var _this8 = this;

      return _asyncToGenerator(function* () {
        var running;
        running = yield _this8.runScript("free", _this8.prepareArray([index]));
        return { running };
      })();
    }

  };

  module.exports = RedisDatastore;
}).call(undefined);
},{"./BottleneckError":2,"./IORedisConnection":6,"./RedisConnection":8,"./parser":15}],10:[function(require,module,exports){
"use strict";

(function () {
  var libraries, lua, templates;

  lua = require("./lua.json");

  libraries = {
    get_time: lua["get_time.lua"],
    refresh_capacity: lua["refresh_capacity.lua"],
    conditions_check: lua["conditions_check.lua"],
    refresh_expiration: lua["refresh_expiration.lua"],
    validate_keys: lua["validate_keys.lua"]
  };

  templates = {
    init: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["refresh_capacity", "refresh_expiration"],
      code: lua["init.lua"]
    },
    heartbeat: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity"],
      code: lua["heartbeat.lua"]
    },
    update_settings: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "refresh_expiration"],
      code: lua["update_settings.lua"]
    },
    running: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity"],
      code: lua["running.lua"]
    },
    done: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity"],
      code: lua["done.lua"]
    },
    group_check: {
      keys: function keys(id) {
        return [`b_${id}_settings`];
      },
      libs: [],
      code: lua["group_check.lua"]
    },
    check: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "conditions_check"],
      code: lua["check.lua"]
    },
    submit: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "conditions_check", "refresh_expiration"],
      code: lua["submit.lua"]
    },
    register: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "conditions_check", "refresh_expiration"],
      code: lua["register.lua"]
    },
    free: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity"],
      code: lua["free.lua"]
    },
    current_reservoir: {
      keys: function keys(id) {
        return [`b_${id}_settings`];
      },
      libs: ["validate_keys"],
      code: lua["current_reservoir.lua"]
    },
    increment_reservoir: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "refresh_expiration"],
      code: lua["increment_reservoir.lua"]
    }
  };

  exports.names = Object.keys(templates);

  exports.keys = function (name, id) {
    return templates[name].keys(id);
  };

  exports.payload = function (name) {
    return templates[name].libs.map(function (lib) {
      return libraries[lib];
    }).join("\n") + templates[name].code;
  };
}).call(undefined);
},{"./lua.json":14}],11:[function(require,module,exports){
"use strict";

(function () {
  var BottleneckError, States;

  BottleneckError = require("./BottleneckError");

  States = class States {
    constructor(status1) {
      this.status = status1;
      this.jobs = {};
      this.counts = this.status.map(function () {
        return 0;
      });
    }

    next(id) {
      var current, next;
      current = this.jobs[id];
      next = current + 1;
      if (current != null && next < this.status.length) {
        this.counts[current]--;
        this.counts[next]++;
        return this.jobs[id]++;
      } else if (current != null) {
        this.counts[current]--;
        return delete this.jobs[id];
      }
    }

    start(id, initial = 0) {
      this.jobs[id] = initial;
      return this.counts[initial]++;
    }

    remove(id) {
      var current;
      current = this.jobs[id];
      if (current != null) {
        this.counts[current]--;
        return delete this.jobs[id];
      }
    }

    jobStatus(id) {
      var ref;
      return (ref = this.status[this.jobs[id]]) != null ? ref : null;
    }

    statusJobs(status) {
      var index, k, ref, results, v;
      if (status != null) {
        index = this.status.indexOf(status);
        if (index < 0) {
          throw new BottleneckError(`status must be one of ${this.status.join(', ')}`);
        }
        ref = this.jobs;
        results = [];
        for (k in ref) {
          v = ref[k];
          if (v === index) {
            results.push(k);
          }
        }
        return results;
      } else {
        return Object.keys(this.jobs);
      }
    }

    statusCounts() {
      return this.counts.reduce((acc, v, i) => {
        acc[this.status[i]] = v;
        return acc;
      }, {});
    }

  };

  module.exports = States;
}).call(undefined);
},{"./BottleneckError":2}],12:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

(function () {
  var DLList,
      Sync,
      splice = [].splice;

  DLList = require("./DLList");

  Sync = class Sync {
    constructor(name, instance) {
      this.submit = this.submit.bind(this);
      this.name = name;
      this.instance = instance;
      this._running = 0;
      this._queue = new DLList();
    }

    isEmpty() {
      return this._queue.length === 0;
    }

    _tryToRun() {
      var next;
      if (this._running < 1 && this._queue.length > 0) {
        this._running++;
        next = this._queue.shift();
        return next.task.apply({}, next.args.concat((...args) => {
          var ref;
          this._running--;
          this._tryToRun();
          return (ref = next.cb) != null ? ref.apply({}, args) : void 0;
        }));
      }
    }

    submit(task, ...args) {
      var _ref, _ref2, _splice$call, _splice$call2;

      var cb, ref;
      ref = args, (_ref = ref, _ref2 = _toArray(_ref), args = _ref2.slice(0), _ref), (_splice$call = splice.call(args, -1), _splice$call2 = _slicedToArray(_splice$call, 1), cb = _splice$call2[0], _splice$call);
      this._queue.push({ task, args, cb });
      return this._tryToRun();
    }

    schedule(task, ...args) {
      var wrapped;
      wrapped = function wrapped(...args) {
        var _ref3, _ref4, _splice$call3, _splice$call4;

        var cb, ref;
        ref = args, (_ref3 = ref, _ref4 = _toArray(_ref3), args = _ref4.slice(0), _ref3), (_splice$call3 = splice.call(args, -1), _splice$call4 = _slicedToArray(_splice$call3, 1), cb = _splice$call4[0], _splice$call3);
        return task.apply({}, args).then(function (...args) {
          return cb.apply({}, Array.prototype.concat(null, args));
        }).catch(function (...args) {
          return cb.apply({}, args);
        });
      };
      return new this.instance.Promise((resolve, reject) => {
        return this.submit.apply({}, Array.prototype.concat(wrapped, args, function (...args) {
          return (args[0] != null ? reject : (args.shift(), resolve)).apply({}, args);
        }));
      });
    }

  };

  module.exports = Sync;
}).call(undefined);
},{"./DLList":3}],13:[function(require,module,exports){
"use strict";

(function () {
  module.exports = require("./Bottleneck");
}).call(undefined);
},{"./Bottleneck":1}],14:[function(require,module,exports){
module.exports={
  "check.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\nlocal weight = tonumber(ARGV[2])\n\nlocal capacity = refresh_capacity(executing_key, running_key, settings_key, now, false)[1]\nlocal nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))\n\nreturn conditions_check(capacity, weight) and nextRequest - now <= 0\n",
  "conditions_check.lua": "local conditions_check = function (capacity, weight)\n  return capacity == nil or weight <= capacity\nend\n",
  "current_reservoir.lua": "local settings_key = KEYS[1]\n\nlocal now = tonumber(ARGV[1])\n\nreturn tonumber(redis.call('hget', settings_key, 'reservoir'))\n",
  "done.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\n\nrefresh_capacity(executing_key, running_key, settings_key, now, false)\n\nreturn tonumber(redis.call('hget', settings_key, 'done'))\n",
  "free.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\nlocal index = ARGV[2]\n\nredis.call('zadd', executing_key, 0, index)\n\nreturn refresh_capacity(executing_key, running_key, settings_key, now, false)[2]\n",
  "get_time.lua": "redis.replicate_commands()\n\nlocal get_time = function ()\n  local time = redis.call('time')\n\n  return tonumber(time[1]..string.sub(time[2], 1, 3))\nend\n",
  "group_check.lua": "local settings_key = KEYS[1]\n\nlocal now = tonumber(ARGV[1])\n\nreturn not (redis.call('exists', settings_key) == 1)\n",
  "heartbeat.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\n\nrefresh_capacity(executing_key, running_key, settings_key, now, false)\n",
  "increment_reservoir.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\nlocal incr = tonumber(ARGV[2])\n\nredis.call('hincrby', settings_key, 'reservoir', incr)\n\nlocal reservoir = refresh_capacity(executing_key, running_key, settings_key, now, true)[3]\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(executing_key, running_key, settings_key, 0, 0, groupTimeout)\n\nreturn reservoir\n",
  "init.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\nlocal clear = tonumber(ARGV[2])\nlocal limiter_version = ARGV[3]\n\nif clear == 1 then\n  redis.call('del', settings_key, running_key, executing_key)\nend\n\nif redis.call('exists', settings_key) == 0 then\n  -- Create\n  local args = {'hmset', settings_key}\n\n  for i = 4, #ARGV do\n    table.insert(args, ARGV[i])\n  end\n\n  redis.call(unpack(args))\n  redis.call('hset', settings_key, 'nextRequest', now)\nelse\n\n  -- Apply migrations\n  local current_version = redis.call('hget', settings_key, 'version')\n  if current_version ~= limiter_version then\n    local version_digits = {}\n    for k, v in string.gmatch(current_version, \"([^.]+)\") do\n      table.insert(version_digits, tonumber(k))\n    end\n\n    -- 2.10.0\n    if version_digits[2] <= 9 then\n      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')\n      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')\n      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')\n      redis.call('hsetnx', settings_key, 'done', 0)\n      redis.call('hmset', settings_key, 'version', '2.10.0')\n    end\n  end\n\n  refresh_capacity(executing_key, running_key, settings_key, now, false)\nend\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(executing_key, running_key, settings_key, 0, 0, groupTimeout)\n\nreturn {}\n",
  "refresh_capacity.lua": "local refresh_capacity = function (executing_key, running_key, settings_key, now, always_publish)\n\n  local compute_capacity = function (maxConcurrent, running, reservoir)\n    if maxConcurrent ~= nil and reservoir ~= nil then\n      return math.min((maxConcurrent - running), reservoir)\n    elseif maxConcurrent ~= nil then\n      return maxConcurrent - running\n    elseif reservoir ~= nil then\n      return reservoir\n    else\n      return nil\n    end\n  end\n\n  local settings = redis.call('hmget', settings_key,\n    'id',\n    'maxConcurrent',\n    'running',\n    'reservoir',\n    'reservoirRefreshInterval',\n    'reservoirRefreshAmount',\n    'lastReservoirRefresh'\n  )\n  local id = settings[1]\n  local maxConcurrent = tonumber(settings[2])\n  local running = tonumber(settings[3])\n  local reservoir = tonumber(settings[4])\n  local reservoirRefreshInterval = tonumber(settings[5])\n  local reservoirRefreshAmount = tonumber(settings[6])\n  local lastReservoirRefresh = tonumber(settings[7])\n\n  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)\n\n  --\n  -- Compute 'running' changes\n  --\n  local expired = redis.call('zrangebyscore', executing_key, '-inf', '('..now)\n\n  if #expired > 0 then\n    redis.call('zremrangebyscore', executing_key, '-inf', '('..now)\n\n    local make_batch = function ()\n      return {'hmget', running_key}\n    end\n\n    local flush_batch = function (batch)\n      local weights = redis.call(unpack(batch))\n      batch[1] = 'hdel'\n      local deleted = redis.call(unpack(batch))\n\n      local sum = 0\n      for i = 1, #weights do\n        sum = sum + (tonumber(weights[i]) or 0)\n      end\n      return sum\n    end\n\n    local total = 0\n    local batch_size = 1000\n\n    for i = 1, #expired, batch_size do\n      local batch = make_batch()\n      for j = i, math.min(i + batch_size - 1, #expired) do\n        table.insert(batch, expired[j])\n      end\n      total = total + flush_batch(batch)\n    end\n\n    if total > 0 then\n      redis.call('hincrby', settings_key, 'done', total)\n      running = tonumber(redis.call('hincrby', settings_key, 'running', -total))\n    end\n  end\n\n  --\n  -- Compute 'reservoir' changes\n  --\n  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil\n  if reservoirRefreshActive and (lastReservoirRefresh == nil or now >= lastReservoirRefresh + reservoirRefreshInterval) then\n    reservoir = reservoirRefreshAmount\n    redis.call('hmset', settings_key,\n      'reservoir', reservoir,\n      'lastReservoirRefresh', now\n    )\n  end\n\n  --\n  -- Broadcast capacity changes\n  --\n  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)\n\n  if always_publish or (\n    -- was not unlimited, now unlimited\n    initial_capacity ~= nil and final_capacity == nil\n  ) or (\n    -- capacity was increased\n    initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity\n  ) then\n    redis.call('publish', 'b_'..id, 'capacity:'..final_capacity)\n  end\n\n  return {final_capacity, running, reservoir}\nend\n",
  "refresh_expiration.lua": "local refresh_expiration = function (executing_key, running_key, settings_key, now, nextRequest, groupTimeout)\n\n  if groupTimeout ~= nil then\n    local ttl = (nextRequest + groupTimeout) - now\n\n    redis.call('pexpire', executing_key, ttl)\n    redis.call('pexpire', running_key, ttl)\n    redis.call('pexpire', settings_key, ttl)\n  end\n\nend\n",
  "register.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\nlocal index = ARGV[2]\nlocal weight = tonumber(ARGV[3])\nlocal expiration = tonumber(ARGV[4])\n\nlocal state = refresh_capacity(executing_key, running_key, settings_key, now, false)\nlocal capacity = state[1]\nlocal reservoir = state[3]\n\nlocal settings = redis.call('hmget', settings_key,\n  'nextRequest',\n  'minTime',\n  'groupTimeout'\n)\nlocal nextRequest = tonumber(settings[1])\nlocal minTime = tonumber(settings[2])\nlocal groupTimeout = tonumber(settings[3])\n\nif conditions_check(capacity, weight) then\n\n  if expiration ~= nil then\n    redis.call('zadd', executing_key, now + expiration, index)\n  end\n  redis.call('hset', running_key, index, weight)\n  redis.call('hincrby', settings_key, 'running', weight)\n\n  local wait = math.max(nextRequest - now, 0)\n  local newNextRequest = now + wait + minTime\n\n  if reservoir == nil then\n    redis.call('hset', settings_key,\n    'nextRequest', newNextRequest\n    )\n  else\n    reservoir = reservoir - weight\n    redis.call('hmset', settings_key,\n      'reservoir', reservoir,\n      'nextRequest', newNextRequest\n    )\n  end\n\n  refresh_expiration(executing_key, running_key, settings_key, now, newNextRequest, groupTimeout)\n\n  return {true, wait, reservoir}\n\nelse\n  return {false}\nend\n",
  "running.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\n\nreturn refresh_capacity(executing_key, running_key, settings_key, now, false)[2]\n",
  "submit.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\nlocal queueLength = tonumber(ARGV[2])\nlocal weight = tonumber(ARGV[3])\n\nlocal capacity = refresh_capacity(executing_key, running_key, settings_key, now, false)[1]\n\nlocal settings = redis.call('hmget', settings_key,\n  'maxConcurrent',\n  'highWater',\n  'nextRequest',\n  'strategy',\n  'unblockTime',\n  'penalty',\n  'minTime',\n  'groupTimeout'\n)\nlocal maxConcurrent = tonumber(settings[1])\nlocal highWater = tonumber(settings[2])\nlocal nextRequest = tonumber(settings[3])\nlocal strategy = tonumber(settings[4])\nlocal unblockTime = tonumber(settings[5])\nlocal penalty = tonumber(settings[6])\nlocal minTime = tonumber(settings[7])\nlocal groupTimeout = tonumber(settings[8])\n\nif maxConcurrent ~= nil and weight > maxConcurrent then\n  return redis.error_reply('OVERWEIGHT:'..weight..':'..maxConcurrent)\nend\n\nlocal reachedHWM = (highWater ~= nil and queueLength == highWater\n  and not (\n    conditions_check(capacity, weight)\n    and nextRequest - now <= 0\n  )\n)\n\nlocal blocked = strategy == 3 and (reachedHWM or unblockTime >= now)\n\nif blocked then\n  local computedPenalty = penalty\n  if computedPenalty == nil then\n    if minTime == 0 then\n      computedPenalty = 5000\n    else\n      computedPenalty = 15 * minTime\n    end\n  end\n\n  local newNextRequest = now + computedPenalty + minTime\n\n  redis.call('hmset', settings_key,\n    'unblockTime', now + computedPenalty,\n    'nextRequest', newNextRequest\n  )\n\n  refresh_expiration(executing_key, running_key, settings_key, now, newNextRequest, groupTimeout)\nend\n\nreturn {reachedHWM, blocked, strategy}\n",
  "update_settings.lua": "local settings_key = KEYS[1]\nlocal running_key = KEYS[2]\nlocal executing_key = KEYS[3]\n\nlocal now = tonumber(ARGV[1])\n\nlocal args = {'hmset', settings_key}\n\nfor i = 2, #ARGV do\n  table.insert(args, ARGV[i])\nend\n\nredis.call(unpack(args))\n\nrefresh_capacity(executing_key, running_key, settings_key, now, true)\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(executing_key, running_key, settings_key, 0, 0, groupTimeout)\n\nreturn {}\n",
  "validate_keys.lua": "local settings_key = KEYS[1]\n\nif not (redis.call('exists', settings_key) == 1) then\n  return redis.error_reply('SETTINGS_KEY_NOT_FOUND')\nend\n"
}

},{}],15:[function(require,module,exports){
"use strict";

(function () {
  exports.load = function (received, defaults, onto = {}) {
    var k, ref, v;
    for (k in defaults) {
      v = defaults[k];
      onto[k] = (ref = received[k]) != null ? ref : v;
    }
    return onto;
  };

  exports.overwrite = function (received, defaults, onto = {}) {
    var k, v;
    for (k in received) {
      v = received[k];
      if (defaults[k] !== void 0) {
        onto[k] = v;
      }
    }
    return onto;
  };
}).call(undefined);
},{}],16:[function(require,module,exports){
module.exports={
  "name": "bottleneck",
  "version": "2.10.0",
  "description": "Distributed task scheduler and rate limiter",
  "main": "lib/index.js",
  "typings": "bottleneck.d.ts",
  "scripts": {
    "test": "./node_modules/mocha/bin/mocha test",
    "build": "./scripts/build.sh",
    "compile": "./scripts/build.sh compile"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/SGrondin/bottleneck"
  },
  "keywords": [
    "async rate limiter",
    "rate limiter",
    "rate limiting",
    "async",
    "rate",
    "limiting",
    "limiter",
    "throttle",
    "throttling",
    "load",
    "ddos"
  ],
  "author": {
    "name": "Simon Grondin"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/SGrondin/bottleneck/issues"
  },
  "devDependencies": {
    "@types/es6-promise": "0.0.33",
    "assert": "1.4.x",
    "babel-core": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "browserify": "*",
    "coffeescript": "2.3.x",
    "ejs-cli": "2.0.1",
    "ioredis": "^4.0.0",
    "mocha": "4.x",
    "redis": "^2.8.0",
    "typescript": "^2.6.2",
    "uglify-es": "3.x"
  },
  "dependencies": {}
}

},{}]},{},[13]);
