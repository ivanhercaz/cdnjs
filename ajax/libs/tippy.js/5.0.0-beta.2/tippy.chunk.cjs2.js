/**!
* tippy.js v5.0.0-beta.2
* (c) 2017-2019 atomiks
* MIT License
*/
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var popper = require('./tippy.chunk.cjs.js');
var Popper = _interopDefault(require('popper.js'));

var version = "5.0.0-beta.2";

var CONTENT_WARNING = "\n  tippy() was passed an Element as the `content` prop, but more than one tippy\n  instance was created by this invocation. This means the content element will \n  only be appended to the last tippy instance.\n\n  Instead, pass the .innerHTML of the element, or use a function that returns a\n  cloned version of the element instead.\n\n  1) content: () => element.cloneNode(true)\n  2) content: element.innerHTML\n";
var TARGET_WARNING = "\n  The `target` prop was removed in v5 and replaced with the delegate() method \n  in order to conserve bundle size.\n  \n  Read more: https//atomiks.github.io/tippyjs/addons#event-delegation\n";
var A11Y_WARNING = "\n  The `a11y` prop was removed in v5. Make sure the element you are giving a\n  tippy to is natively focusable, such as <button> or <input>, not <div> or \n  <span>.\n";
var SHOW_ON_INIT_WARNING = "\n  The `showOnInit` prop was renamed to `showOnCreate` in v5.\n";
var ARROW_TYPE_WARNING = "\n  The `arrowType` prop was removed in v5 in favor of overloading the `arrow`\n  prop.\n\n  Before: {arrow: true, arrowType: \"round\"}\n  After: {arrow: \"round\"}\n";
var TOUCH_HOLD_WARNING = "\n  The `touchHold` prop was removed in v5 in favor of overloading the `touch`\n  prop.\n\n  Before: {touchHold: true}\n  After: {touch: \"hold\"}\n";
var SIZE_WARNING = "\n  The `size` prop was removed in v5. Instead, use a theme that specifies CSS\n  padding and font-size properties.\n";
var GOOGLE_THEME_WARNING = "\n  The included theme \"google\" was renamed to \"material\" in v5.\n";
var PLACEMENT_WARNING = "\n  Specifying placement in `popperOptions` is not supported. Use the base-level\n  `placement` prop instead.\n\n  Before: {popperOptions: {placement: \"bottom\"}}\n  After: {placement: \"bottom\"}\n";
var VIRTUAL_REFERENCE_OBJECT_WARNING = "\n  tippy() was passed a plain object which is no longer supported as a method\n  of virtual positioning. Instead, pass a placeholder element like:\n\n  tippy(document.createElement(\"div\"))\n\n  You can override its getBoundingClientRect() method, just like a regular plain\n  object.\n";
var FOLLOW_CURSOR_WARNING = "\n  The `followCursor` prop was specified, but the instance has not been \n  configured with followCursor functionality.\n\n  In v5, `followCursor` was moved to a separate piece of code in order to \n  conserve bundle size.\n\n  Read more: https://atomiks.github.io/tippyjs/extra-props/\n";
var ARRAY_MISTAKE_ERROR = "\n  First argument to createSingleton() must be an *array* of tippy instances. The\n  passed value was a *single* tippy instance.\n";
var EXISTING_SINGLETON_ERROR = "\n  The passed tippy instance(s) are already part of an existing singleton\n  instance. Make sure you destroy the previous singleton before calling\n  createSingleton() again.\n";
var MISSING_TARGET_WARNING = "\n  You must specify a `target` prop indicating the CSS selector string\n  matching the target elements that should receive a tippy.\n";
var INTERACTIVE_A11Y_WARNING = "\n  Interactive tippy element may not be accessible via keyboard navigation.\n\n  Ensure the tippy element is directly after the reference (or triggerTarget)\n  element in the DOM source order. Using a wrapper <div> or <span> element\n  around it can solve this.\n";
function createInvalidCreateSingletonArgumentError(arg) {
  return "\n    The first argument passed to createSingleton() must be an array of tippy\n    instances.\n\n    The passed value was: " + arg + "\n  ";
}
function createInvalidTargetsArgumentError(targets) {
  return "\n    tippy() was passed `" + targets + "` as its targets (first) argument.\n\n    Valid types are: String, Element, Element[], or NodeList.\n  ";
}
function createUnknownPropWarning(prop) {
  return "\n    The `" + prop + "` prop is not a valid prop. You may have spelled it \n    incorrectly.\n\n    All props: https://atomiks.github.io/tippyjs/all-props/\n  ";
}
function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return "\n    " + method + "() was called on a" + txt + "destroyed instance. This is a no-op but\n    indicates a potential memory leak.\n  ";
}

function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
}
/**
 * Helpful wrapper around `console.warn()`.
 * TODO: Should we use a cache so it only warns a single time and not spam the
 * console? (Need to consider hot reloading and invalidation though). Chrome
 * already batches warnings as well.
 */

function warnWhen(condition, message) {
  if (condition) {
    var _console;

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
/**
 * Helpful wrapper around thrown errors
 */

function throwErrorWhen(condition, message) {
  if (condition) {
    throw new Error(message);
  }
}
/**
 * Validates props with the valid `defaultProps` object
 */

function validateProps(partialProps) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  Object.keys(partialProps).forEach(function (prop) {
    var value = partialProps[prop];
    var didSpecifyPlacementInPopperOptions = prop === 'popperOptions' && value && popper.hasOwnProperty(value, 'placement');
    var didPassUnknownProp = !popper.hasOwnProperty(popper.defaultProps, prop) && !popper.includes(['a11y', 'arrowType', 'followCursor', 'showOnInit', 'size', 'target', 'touchHold'], prop);
    warnWhen(prop === 'target', TARGET_WARNING);
    warnWhen(prop === 'a11y', A11Y_WARNING);
    warnWhen(prop === 'showOnInit', SHOW_ON_INIT_WARNING);
    warnWhen(prop === 'arrowType', ARROW_TYPE_WARNING);
    warnWhen(prop === 'touchHold', TOUCH_HOLD_WARNING);
    warnWhen(prop === 'size', SIZE_WARNING);
    warnWhen(prop === 'theme' && value === 'google', GOOGLE_THEME_WARNING);
    warnWhen(didSpecifyPlacementInPopperOptions, PLACEMENT_WARNING);
    warnWhen(didPassUnknownProp, createUnknownPropWarning(prop));
  });
}
/**
 * Validates the `targets` value passed to `tippy()`
 */

function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  throwErrorWhen(didPassFalsyValue, createInvalidTargetsArgumentError(targets));
  throwErrorWhen(didPassPlainObject, VIRTUAL_REFERENCE_OBJECT_WARNING);
}
/**
 * Ensures the instance has been configured with the extra prop's functionality
 * if the user is specifying it as a prop
 */

function validateExtraPropsFunctionality(instance, partialProps) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  var extraProps = ['followCursor'];
  extraProps.forEach(function (prop) {
    if (popper.hasOwnProperty(partialProps, prop) && !instance.__extraProps[prop]) {
      warnWhen(prop === 'followCursor', FOLLOW_CURSOR_WARNING);
    }
  });
}

var idCounter = 1; // Workaround for IE11's lack of new MouseEvent constructor

var mouseMoveListeners = [];
/**
 * Creates and returns a Tippy object. We're using a closure pattern instead of
 * a class so that the exposed object API is clean without private members
 * prefixed with `_`.
 */

function createTippy(reference, collectionProps) {
  var props = popper.evaluateProps(reference, collectionProps); // If the reference shouldn't have multiple tippys, return null early

  if (!props.multiple && reference._tippy) {
    return null;
  }
  /* ======================= 🔒 Private members 🔒 ======================= */


  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isBeingDestroyed = false;
  var didHideDueToDocumentMouseDown = false;
  var popperUpdates = 0;
  var currentMountCallback;
  var currentTransitionEndListener;
  var listeners = [];
  var debouncedOnMouseMove = popper.debounce(onMouseMove, props.interactiveDebounce);
  /* ======================= 🔑 Public members 🔑 ======================= */

  var id = idCounter++;
  var popper$1 = popper.createPopperElement(id, props);
  var popperChildren = popper.getChildren(popper$1);
  var popperInstance = null; // These two elements are static

  var tooltip = popperChildren.tooltip,
      content = popperChildren.content;
  var state = {
    // The current real placement (`data-placement` attribute)
    currentPlacement: props.placement,
    // Does the instance have a pending timeout for show()?
    isScheduledToShow: false,
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: popper$1,
    popperChildren: popperChildren,
    popperInstance: popperInstance,
    props: props,
    state: state,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    enable: enable,
    disable: disable,
    destroy: destroy
  };

  if (process.env.NODE_ENV !== "production") {
    Object.defineProperty(instance, '__extraProps', {
      value: {},
      enumerable: false
    });
  }
  /* ==================== Initial instance mutations =================== */


  reference._tippy = instance;
  popper$1._tippy = instance;
  addListenersToTriggerTarget();
  handleAriaExpandedAttribute();

  if (!props.lazy) {
    createPopperInstance();
  }

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper$1.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper$1.addEventListener('mouseleave', function () {
    if (instance.props.interactive && popper.includes(instance.props.trigger, 'mouseenter')) {
      document.addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  props.onCreate(instance);
  return instance;
  /* ======================= 🔒 Private methods 🔒 ======================= */

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getTransitionableElements() {
    return [tooltip, content, instance.popperChildren.backdrop];
  }

  function getTriggerTarget() {
    return instance.props.triggerTarget || reference;
  }

  function handleAriaDescribedByAttribute() {
    var aria = instance.props.aria;

    if (!aria) {
      return;
    }

    var attr = "aria-" + aria;
    var node = getTriggerTarget();
    var id = tooltip.id;
    var currentValue = node.getAttribute(attr);

    if (instance.state.isVisible) {
      node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
    } else {
      var nextValue = currentValue && currentValue.replace(id, '').trim();

      if (nextValue) {
        node.setAttribute(attr, nextValue);
      } else {
        node.removeAttribute(attr);
      }
    }
  }

  function handleAriaExpandedAttribute() {
    var attr = 'aria-expanded';
    var node = getTriggerTarget();

    if (instance.props.interactive) {
      node.setAttribute(attr, instance.state.isVisible ? 'true' : 'false');
    } else {
      node.removeAttribute(attr);
    }
  }

  function cleanupInteractiveMouseListeners() {
    document.body.removeEventListener('mouseleave', scheduleHide);
    document.removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentMouseDown(event) {
    // Clicked on interactive popper
    if (instance.props.interactive && popper$1.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getTriggerTarget().contains(event.target)) {
      if (popper.currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && popper.includes(instance.props.trigger, 'click')) {
        return;
      }
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus`. This lets a tippy with
      // `focus` trigger know that it should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentMouseDownListener();
      }
    }
  }

  function addDocumentMouseDownListener() {
    document.addEventListener('mousedown', onDocumentMouseDown, true);
  }

  function removeDocumentMouseDownListener() {
    document.removeEventListener('mousedown', onDocumentMouseDown, true);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper$1.parentNode && popper$1.parentNode.contains(popper$1)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    /**
     * Listener added as the `transitionend` handler
     */
    function listener(event) {
      if (event.target === tooltip) {
        popper.updateTransitionEndListener(tooltip, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    popper.updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
    popper.updateTransitionEndListener(tooltip, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    getTriggerTarget().addEventListener(eventType, handler, options);
    listeners.push({
      eventType: eventType,
      handler: handler,
      options: options
    });
  }

  function addListenersToTriggerTarget() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, popper.PASSIVE);
      on('touchend', onMouseLeave, popper.PASSIVE);
    } // `click` for keyboard. Mouse uses `mousedown` (onDocumentMouseDown)


    if (!popper.includes(instance.props.trigger, 'click')) {
      on('click', function () {
        if (!popper.currentInput.isTouch && instance.props.hideOnClick === true) {
          instance.hide();
        }
      });
    }

    popper.splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(popper.isIE ? 'focusout' : 'blur', onBlur);
          break;
      }
    });
  }

  function removeListenersFromTriggerTarget() {
    listeners.forEach(function (_ref) {
      var eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      getTriggerTarget().removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    if (didHideDueToDocumentMouseDown || !instance.state.isEnabled || isEventListenerStopped(event)) {
      return;
    }

    if (!instance.state.isVisible && event instanceof MouseEvent) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && instance.props.hideOnClick !== false && instance.state.isVisible) {
      scheduleHide(event);
    } else {
      var _getNormalizedTouchSe = getNormalizedTouchSettings(),
          value = _getNormalizedTouchSe[0],
          duration = _getNormalizedTouchSe[1];

      if (popper.currentInput.isTouch && value === 'hold' && duration) {
        // We can hijack the show timeout here, it will be cleared by
        // `scheduleHide()` when necessary
        showTimeout = setTimeout(function () {
          scheduleShow(event);
        }, duration);
      } else {
        scheduleShow(event);
      }
    }
  }

  function onMouseMove(event) {
    var isCursorOverReferenceOrPopper = popper.closestCallback(event.target, function (el) {
      return el === reference || el === popper$1;
    });

    if (isCursorOverReferenceOrPopper) {
      return;
    }

    if (popper.isCursorOutsideInteractiveBorder(popper.getBasePlacement(instance.state.currentPlacement), popper$1.getBoundingClientRect(), event, instance.props)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    if (isEventListenerStopped(event)) {
      return;
    }

    if (instance.props.interactive) {
      document.body.addEventListener('mouseleave', scheduleHide);
      document.addEventListener('mousemove', debouncedOnMouseMove);
      mouseMoveListeners.push(debouncedOnMouseMove);
      return;
    }

    scheduleHide(event);
  }

  function onBlur(event) {
    if (event.target !== getTriggerTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper$1.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    var supportsTouch = 'ontouchstart' in window;
    var isTouchEvent = popper.includes(event.type, 'touch');
    var isCustomTouch = getIsCustomTouchBehavior();
    return supportsTouch && popper.currentInput.isTouch && isCustomTouch && !isTouchEvent || popper.currentInput.isTouch && !isCustomTouch && isTouchEvent;
  }

  function createPopperInstance() {
    var popperOptions = instance.props.popperOptions;
    var arrow = instance.popperChildren.arrow;
    var preventOverflowModifier = popper.getModifier(popperOptions, 'preventOverflow');

    function applyMutations(data) {
      instance.state.currentPlacement = data.placement;

      if (instance.props.flip && !instance.props.flipOnUpdate) {
        if (data.flipped) {
          instance.popperInstance.options.placement = data.placement;
        }

        popper.setFlipModifierEnabled(instance.popperInstance.modifiers, false);
      }

      tooltip.setAttribute('data-placement', data.placement);

      if (data.attributes['x-out-of-boundaries'] !== false) {
        tooltip.setAttribute('data-out-of-boundaries', '');
      } else {
        tooltip.removeAttribute('data-out-of-boundaries');
      }

      var basePlacement = popper.getBasePlacement(data.placement);
      var isVerticalPlacement = popper.includes(['top', 'bottom'], basePlacement);
      var isSecondaryPlacement = popper.includes(['bottom', 'right'], basePlacement); // Apply `distance` prop

      var tooltipStyles = tooltip.style;
      tooltipStyles.top = '0';
      tooltipStyles.left = '0';
      tooltipStyles[isVerticalPlacement ? 'top' : 'left'] = (isSecondaryPlacement ? 1 : -1) * instance.props.distance + "px";
    }

    var config = popper._extends({
      eventsEnabled: false,
      placement: instance.props.placement
    }, popperOptions, {
      modifiers: popper._extends({}, popperOptions && popperOptions.modifiers, {
        preventOverflow: popper._extends({
          boundariesElement: instance.props.boundary,
          padding: popper.PREVENT_OVERFLOW_PADDING
        }, preventOverflowModifier),
        // Adds the `distance` calculation to preventOverflow padding
        tippySetPreventOverflowPadding: {
          enabled: true,
          order: 299,
          fn: function fn(data) {
            var basePlacement = popper.getBasePlacement(data.placement);
            var padding = preventOverflowModifier && preventOverflowModifier.padding !== undefined ? preventOverflowModifier.padding : popper.PREVENT_OVERFLOW_PADDING;
            var isPaddingNumber = typeof padding === 'number';
            var paddingObject = {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            };
            var computedPadding = Object.keys(paddingObject).reduce(function (obj, key) {
              obj[key] = isPaddingNumber ? padding : padding[key];

              if (basePlacement === key) {
                obj[key] = isPaddingNumber ? padding + instance.props.distance : (padding[basePlacement] || 0) + instance.props.distance;
              }

              return obj;
            }, paddingObject);
            instance.popperInstance.modifiers.filter(function (m) {
              return m.name === 'preventOverflow';
            })[0].padding = computedPadding;
            return data;
          }
        },
        arrow: popper._extends({
          element: arrow,
          enabled: !!arrow
        }, popper.getModifier(popperOptions, 'arrow')),
        flip: popper._extends({
          enabled: instance.props.flip,
          padding: instance.props.distance + popper.PREVENT_OVERFLOW_PADDING,
          behavior: instance.props.flipBehavior
        }, popper.getModifier(popperOptions, 'flip')),
        offset: popper._extends({
          offset: instance.props.offset
        }, popper.getModifier(popperOptions, 'offset'))
      }),
      onCreate: function onCreate(data) {
        applyMutations(data);
        popper.preserveInvocation(popperOptions && popperOptions.onCreate, config.onCreate, [data]);
        runMountCallback();
      },
      onUpdate: function onUpdate(data) {
        applyMutations(data);
        popper.preserveInvocation(popperOptions && popperOptions.onUpdate, config.onUpdate, [data]);
        runMountCallback();
      }
    });

    instance.popperInstance = new Popper(reference, popper$1, config);
  }

  function runMountCallback() {
    // Only invoke currentMountCallback after 2 updates
    // This fixes some bugs in Popper.js (TODO: aim for only 1 update)
    if (popperUpdates === 0) {
      popperUpdates++; // 1

      instance.popperInstance.update();
    } else if (currentMountCallback && popperUpdates === 1) {
      popperUpdates++; // 2

      popper.reflow(popper$1);
      currentMountCallback();
    }
  }

  function mount() {
    // The mounting callback (`currentMountCallback`) is only run due to a
    // popperInstance update/create
    popperUpdates = 0;
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    if (instance.props.interactive && appendTo === popper.defaultProps.appendTo || appendTo === 'parent') {
      parentNode = getTriggerTarget().parentNode;
    } else {
      parentNode = popper.invokeWithArgsOrReturn(appendTo, [reference]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper.js needs to read its dimensions


    if (!parentNode.contains(popper$1)) {
      parentNode.appendChild(popper$1);
    }

    if (process.env.NODE_ENV !== "production") {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === popper.defaultProps.appendTo && getTriggerTarget().nextElementSibling !== popper$1, INTERACTIVE_A11Y_WARNING);
    }

    if (instance.popperInstance) {
      popper.setFlipModifierEnabled(instance.popperInstance.modifiers, instance.props.flip);
      instance.popperInstance.enableEventListeners(); // Mounting callback invoked in `onUpdate`

      instance.popperInstance.update();
    } else {
      // Mounting callback invoked in `onCreate`
      createPopperInstance();
      instance.popperInstance.enableEventListeners();
    }
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    instance.state.isScheduledToShow = true;

    if (!instance.popperInstance) {
      createPopperInstance();
    }

    if (event) {
      instance.props.onTrigger(instance, event);
    }

    addDocumentMouseDownListener();
    var delay = popper.getValueAtIndexOrReturn(instance.props.delay, 0, popper.defaultProps.delay);

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    instance.props.onUntrigger(instance, event);

    if (!instance.state.isVisible) {
      removeDocumentMouseDownListener();
      return;
    }

    instance.state.isScheduledToShow = false;
    var delay = popper.getValueAtIndexOrReturn(instance.props.delay, 1, popper.defaultProps.delay);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  }
  /* ======================= 🔑 Public methods 🔑 ======================= */


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    if (process.env.NODE_ENV !== "production") {
      partialProps = popper._extends({}, partialProps);
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      validateProps(partialProps);
      validateExtraPropsFunctionality(instance, partialProps);
    }

    removeListenersFromTriggerTarget();
    var prevProps = instance.props;
    var nextProps = popper.evaluateProps(reference, popper._extends({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    nextProps.ignoreAttributes = popper.hasOwnProperty(partialProps, 'ignoreAttributes') ? partialProps.ignoreAttributes || false : prevProps.ignoreAttributes;
    instance.props = nextProps;
    addListenersToTriggerTarget();
    cleanupInteractiveMouseListeners();
    debouncedOnMouseMove = popper.debounce(onMouseMove, nextProps.interactiveDebounce);
    popper.updatePopperElement(popper$1, prevProps, nextProps, instance.state.isVisible);
    instance.popperChildren = popper.getChildren(popper$1);
    handleAriaExpandedAttribute();

    if (instance.popperInstance) {
      if (popper.POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
        return popper.hasOwnProperty(partialProps, prop) && partialProps[prop] !== prevProps[prop];
      })) {
        instance.popperInstance.destroy();
        createPopperInstance();

        if (instance.state.isVisible) {
          instance.popperInstance.enableEventListeners();
        }
      } else {
        instance.popperInstance.update();
      }
    }
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show(duration, shouldPreventPopperTransition) {
    if (duration === void 0) {
      duration = popper.getValueAtIndexOrReturn(instance.props.duration, 0, popper.defaultProps.duration);
    }

    if (shouldPreventPopperTransition === void 0) {
      shouldPreventPopperTransition = true;
    }

    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = popper.currentInput.isTouch && !instance.props.touch;

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getTriggerTarget().hasAttribute('disabled')) {
      return;
    }

    if (instance.props.onShow(instance) === false) {
      return;
    }

    addDocumentMouseDownListener();
    popper$1.style.visibility = 'visible';
    instance.state.isVisible = true; // Prevent a transition of the popper from its previous position and of the
    // elements at a different placement.

    var transitionableElements = getTransitionableElements();
    popper.setTransitionDuration(shouldPreventPopperTransition ? transitionableElements.concat(popper$1) : transitionableElements, 0);

    currentMountCallback = function currentMountCallback() {
      if (!instance.state.isVisible) {
        return;
      }

      instance.props.onMount(instance);
      instance.state.isMounted = true; // The content should fade in after the backdrop has mostly filled the
      // tooltip element. `clip-path` is the other alternative but is not well-
      // supported and is buggy on some devices.

      content.style.transitionDelay = instance.popperChildren.backdrop ? Math.round(duration / 12) + "ms" : '';

      if (instance.props.sticky) {
        makeSticky(instance);
      }

      popper.setTransitionDuration([popper$1], instance.props.updateDuration);
      popper.setTransitionDuration(transitionableElements, duration);
      popper.setVisibilityState(transitionableElements, 'visible');
      handleAriaDescribedByAttribute();
      handleAriaExpandedAttribute();
      onTransitionedIn(duration, function () {
        instance.props.onShown(instance);
        instance.state.isShown = true;
      });
    };

    mount();
  }

  function hide(duration) {
    if (duration === void 0) {
      duration = popper.getValueAtIndexOrReturn(instance.props.duration, 1, popper.defaultProps.duration);
    }

    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible && !isBeingDestroyed;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled && !isBeingDestroyed;

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    if (instance.props.onHide(instance) === false && !isBeingDestroyed) {
      return;
    }

    removeDocumentMouseDownListener();
    popper$1.style.visibility = 'hidden';
    instance.state.isVisible = false;
    instance.state.isShown = false;
    var transitionableElements = getTransitionableElements();
    popper.setTransitionDuration(transitionableElements, duration);
    popper.setVisibilityState(transitionableElements, 'hidden');
    handleAriaDescribedByAttribute();
    handleAriaExpandedAttribute();
    onTransitionedOut(duration, function () {
      instance.popperInstance.disableEventListeners();
      instance.popperInstance.options.placement = instance.props.placement;
      popper$1.parentNode.removeChild(popper$1);
      instance.props.onHidden(instance);
      instance.state.isMounted = false;
    });
  }

  function destroy() {
    if (process.env.NODE_ENV !== "production") {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    isBeingDestroyed = true;
    instance.hide(0);
    removeListenersFromTriggerTarget();
    delete reference._tippy;

    if (instance.popperInstance) {
      instance.popperInstance.destroy();
    }

    isBeingDestroyed = false;
    instance.state.isDestroyed = true;
  }
}
/**
 * Updates the position of the tippy on every animation frame to ensure it stays
 * stuck to the reference element.
 * Optimized by ensuring the reference's clientRect has actually changed before
 * scheduling an update.
 */

function makeSticky(instance) {
  var prevRefRect = instance.reference.getBoundingClientRect();

  function updatePosition() {
    var currentRefRect = instance.reference.getBoundingClientRect(); // Only schedule an update if the reference rect has changed

    if (prevRefRect.top !== currentRefRect.top || prevRefRect.right !== currentRefRect.right || prevRefRect.bottom !== currentRefRect.bottom || prevRefRect.left !== currentRefRect.left) {
      instance.popperInstance.scheduleUpdate();
    }

    prevRefRect = currentRefRect;

    if (instance.state.isMounted) {
      requestAnimationFrame(updatePosition);
    }
  }

  updatePosition();
}

/**
 * Exported module
 */
function tippy(targets, optionalProps) {
  if (process.env.NODE_ENV !== "production") {
    validateTargets(targets);
    validateProps(optionalProps);
  }

  popper.bindGlobalEventListeners();

  var props = popper._extends({}, popper.defaultProps, {}, optionalProps);

  var elements = popper.getArrayOfElements(targets);

  if (process.env.NODE_ENV !== "production") {
    var isSingleContentElement = popper.isRealElement(props.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, CONTENT_WARNING);
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, props);

    if (instance) {
      if (process.env.NODE_ENV !== "production") {
        validateExtraPropsFunctionality(instance, optionalProps);
      }

      acc.push(instance);
    }

    return acc;
  }, []);
  return popper.isRealElement(targets) ? instances[0] : instances;
}

tippy.version = version;
tippy.defaultProps = popper.defaultProps;
tippy.currentInput = popper.currentInput;
/**
 * Mutates the defaultProps object by setting the props specified
 */

tippy.setDefaultProps = function (partialProps) {
  if (process.env.NODE_ENV !== "production") {
    validateProps(partialProps);
  }

  Object.keys(partialProps).forEach(function (key) {
    // @ts-ignore
    popper.defaultProps[key] = partialProps[key];
  });
};
/**
 * Hides all visible poppers on the document
 */


tippy.hideAll = function (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  popper.arrayFrom(document.querySelectorAll(popper.POPPER_SELECTOR)).forEach(function (popper$1) {
    var instance = popper$1._tippy;

    if (instance) {
      var isExcluded = false;

      if (excludedReferenceOrInstance) {
        isExcluded = popper.isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : popper$1 === excludedReferenceOrInstance.popper;
      }

      if (!isExcluded) {
        instance.hide(duration);
      }
    }
  });
};
/**
 * Auto-init tooltips for elements with a `data-tippy="..."` attribute
 */


function autoInit() {
  popper.arrayFrom(document.querySelectorAll('[data-tippy]')).forEach(function (el) {
    var content = el.getAttribute('data-tippy');

    if (content) {
      tippy(el, {
        content: content
      });
    }
  });
}

if (popper.isBrowser) {
  setTimeout(autoInit);
}

exports.ARRAY_MISTAKE_ERROR = ARRAY_MISTAKE_ERROR;
exports.EXISTING_SINGLETON_ERROR = EXISTING_SINGLETON_ERROR;
exports.MISSING_TARGET_WARNING = MISSING_TARGET_WARNING;
exports.createInvalidCreateSingletonArgumentError = createInvalidCreateSingletonArgumentError;
exports.throwErrorWhen = throwErrorWhen;
exports.tippy = tippy;
//# sourceMappingURL=tippy.chunk.cjs2.js.map
