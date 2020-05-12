'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BodyClass = exports.RootClass = exports.For = exports.Choose = exports.If = exports.canUseDOM = exports.getDisplayName = exports.isStatelessComponent = exports.classNames = exports.autoBind = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoBind2 = require('./auto-bind');

var _autoBind3 = _interopRequireDefault(_autoBind2);

var _classNames2 = require('./class-names');

var _classNames3 = _interopRequireDefault(_classNames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var autoBind = exports.autoBind = _autoBind3.default.react;

var classNames = exports.classNames = _classNames3.default;

var isStatelessComponent = exports.isStatelessComponent = function isStatelessComponent(Component) {
	return !(typeof Component.prototype !== 'undefined' && typeof Component.prototype.render === 'function');
};

var getDisplayName = exports.getDisplayName = function getDisplayName(Component) {
	return Component.displayName || Component.name || 'Component';
};

var canUseDOM = exports.canUseDOM = typeof window !== 'undefined' && 'document' in window && 'createElement' in window.document;

var If = exports.If = function If(props) {
	return props.condition ? props.render ? props.render() : props.children : null;
};
If.propTypes = {
	condition: _propTypes2.default.bool.isRequired,
	children: _propTypes2.default.node,
	render: _propTypes2.default.func
};

var Choose = exports.Choose = function Choose(props) {
	var when = null;
	var otherwise = null;

	_react2.default.Children.forEach(props.children, function (children) {
		if (children.props.condition === undefined) {
			otherwise = children;
		} else if (!when && children.props.condition === true) {
			when = children;
		}
	});

	return when || otherwise;
};
Choose.propTypes = {
	children: _propTypes2.default.node
};

Choose.When = If;

Choose.Otherwise = function (_ref) {
	var render = _ref.render,
	    children = _ref.children;
	return render ? render() : children;
};
Choose.Otherwise.propTypes = {
	children: _propTypes2.default.node,
	render: _propTypes2.default.func
};

var For = exports.For = function For(_ref2) {
	var render = _ref2.render,
	    of = _ref2.of;
	return of.map(function (item, index) {
		return render(item, index);
	});
};
For.propTypes = {
	of: _propTypes2.default.array.isRequired,
	render: _propTypes2.default.func.isRequired
};

var ElementClass = function (_React$PureComponent) {
	_inherits(ElementClass, _React$PureComponent);

	function ElementClass() {
		_classCallCheck(this, ElementClass);

		return _possibleConstructorReturn(this, (ElementClass.__proto__ || Object.getPrototypeOf(ElementClass)).apply(this, arguments));
	}

	_createClass(ElementClass, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _props = this.props,
			    add = _props.add,
			    remove = _props.remove;
			var classList = this.element.classList;


			if (add) {
				classList.add.apply(classList, _toConsumableArray(add.trim().split(' ')));
			}

			if (remove) {
				classList.remove.apply(classList, _toConsumableArray(remove.trim().split(' ')));
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var _props2 = this.props,
			    add = _props2.add,
			    remove = _props2.remove;
			var classList = this.element.classList;


			if (add) {
				classList.remove.apply(classList, _toConsumableArray(add.trim().split(' ')));
			}

			if (remove) {
				classList.add.apply(classList, _toConsumableArray(remove.trim().split(' ')));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return ElementClass;
}(_react2.default.PureComponent);

ElementClass.propTypes = {
	add: _propTypes2.default.string,
	remove: _propTypes2.default.string
};

var RootClass = exports.RootClass = function (_ElementClass) {
	_inherits(RootClass, _ElementClass);

	function RootClass() {
		_classCallCheck(this, RootClass);

		var _this2 = _possibleConstructorReturn(this, (RootClass.__proto__ || Object.getPrototypeOf(RootClass)).call(this));

		_this2.element = document.documentElement;
		return _this2;
	}

	return RootClass;
}(ElementClass);

RootClass.propTypes = ElementClass.propTypes;

var BodyClass = exports.BodyClass = function (_ElementClass2) {
	_inherits(BodyClass, _ElementClass2);

	function BodyClass() {
		_classCallCheck(this, BodyClass);

		var _this3 = _possibleConstructorReturn(this, (BodyClass.__proto__ || Object.getPrototypeOf(BodyClass)).call(this));

		_this3.element = document.body;
		return _this3;
	}

	return BodyClass;
}(ElementClass);

BodyClass.propTypes = ElementClass.propTypes;