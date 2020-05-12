'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.canUseDOM = exports.BodyClass = exports.RootClass = exports.If = exports.classNames = exports.autoBind = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoBind2 = require('auto-bind');

var _autoBind3 = _interopRequireDefault(_autoBind2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const autoBind = exports.autoBind = _autoBind3.default.react; /* eslint-disable no-unused-vars */
const classNames = exports.classNames = (...args) => {
	const ret = new Set();

	for (const item of args) {
		const type = typeof item;

		if (type === 'string' && item.length > 0) {
			ret.add(item);
		} else if (type === 'object' && item !== null) {
			for (const [key, value] of Object.entries(item)) {
				if (value) {
					ret.add(key);
				}
			}
		}
	}

	return [...ret].join(' ');
};

const If = exports.If = props => props.condition ? props.render ? props.render() : props.children : null;
If.propTypes = {
	condition: _propTypes2.default.bool.isRequired,
	children: _propTypes2.default.node,
	render: _propTypes2.default.func
};

class ElementClass extends _react2.default.PureComponent {
	componentWillMount() {
		const { add, remove } = this.props;
		const { classList } = this.element;

		if (add) {
			classList.add(...add.trim().split(' '));
		}

		if (remove) {
			classList.remove(...remove.trim().split(' '));
		}
	}

	componentWillUnmount() {
		const { add, remove } = this.props;
		const { classList } = this.element;

		if (add) {
			classList.remove(...add.trim().split(' '));
		}

		if (remove) {
			classList.add(...remove.trim().split(' '));
		}
	}

	render() {
		return null;
	}
}
ElementClass.propTypes = {
	add: _propTypes2.default.string,
	remove: _propTypes2.default.string
};

class RootClass extends ElementClass {
	constructor() {
		super();
		this.element = document.documentElement;
	}
}
exports.RootClass = RootClass;
RootClass.propTypes = ElementClass.propTypes;

class BodyClass extends ElementClass {
	constructor() {
		super();
		this.element = document.body;
	}
}
exports.BodyClass = BodyClass;
BodyClass.propTypes = ElementClass.propTypes;

const canUseDOM = exports.canUseDOM = typeof window !== 'undefined' && 'document' in window && 'createElement' in window.document;