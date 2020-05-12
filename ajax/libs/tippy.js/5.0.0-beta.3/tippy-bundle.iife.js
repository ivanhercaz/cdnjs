/**!
* tippy.js v5.0.0-beta.3
* (c) 2017-2019 atomiks
* MIT License
*/
var tippy = (function (Popper) {
  'use strict';

  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  var css = ".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100% - 10px);transition-timing-function:cubic-bezier(.165,.84,.44,1)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;line-height:1.4;background-color:#333;overflow:hidden;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top] .tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom] .tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left] .tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right] .tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-arrow]{overflow:visible}.tippy-tooltip[data-animatefill]{background-color:transparent!important}.tippy-tooltip[data-interactive]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{border-color:transparent;border-style:solid;position:absolute}.tippy-arrow[data-state=hidden]{opacity:0}.tippy-content{padding:.3125rem .5625rem}";

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var version = "5.0.0-beta.3";

  var defaultProps = {
    allowHTML: true,
    animateFill: false,
    animation: 'fade',
    appendTo: function appendTo() {
      return document.body;
    },
    aria: 'describedby',
    arrow: true,
    boundary: 'scrollParent',
    content: '',
    delay: 0,
    distance: 10,
    duration: [300, 250],
    flip: true,
    flipBehavior: 'flip',
    flipOnUpdate: false,
    hideOnClick: true,
    ignoreAttributes: false,
    inertia: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    lazy: true,
    maxWidth: 350,
    multiple: false,
    offset: 0,
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onPropsUpdated: function onPropsUpdated() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    placement: 'top',
    popperOptions: {},
    role: 'tooltip',
    showOnCreate: false,
    theme: '',
    touch: true,
    trigger: 'mouseenter focus',
    triggerTarget: null,
    updateDuration: 0,
    zIndex: 9999
    /**
     * If the setProps() method encounters one of these, the popperInstance must be
     * recreated
     */

  };
  var POPPER_INSTANCE_DEPENDENCIES = ['arrow', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];

  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  var ua = isBrowser ? navigator.userAgent : '';
  var isIE = /MSIE |Trident\//.test(ua);
  var isUCBrowser = /UCBrowser\//.test(ua);
  var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform);

  var PASSIVE = {
    passive: true
  };
  var PREVENT_OVERFLOW_PADDING = 5;
  var ROUND_ARROW_INNER_HTML = '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>';
  var IOS_CLASS = "tippy-iOS";
  var POPPER_CLASS = "tippy-popper";
  var TOOLTIP_CLASS = "tippy-tooltip";
  var CONTENT_CLASS = "tippy-content";
  var BACKDROP_CLASS = "tippy-backdrop";
  var ARROW_CLASS = "tippy-arrow";
  var SVG_ARROW_CLASS = "tippy-svg-arrow";
  var POPPER_SELECTOR = "." + POPPER_CLASS;
  var TOOLTIP_SELECTOR = "." + TOOLTIP_CLASS;
  var CONTENT_SELECTOR = "." + CONTENT_CLASS;
  var BACKDROP_SELECTOR = "." + BACKDROP_CLASS;
  var ARROW_SELECTOR = "." + ARROW_CLASS;
  var SVG_ARROW_SELECTOR = "." + SVG_ARROW_CLASS;

  var currentInput = {
    isTouch: false
  };
  var lastMouseMoveTime = 0;
  /**
   * When a `touchstart` event is fired, it's assumed the user is using touch
   * input. We'll bind a `mousemove` event listener to listen for mouse input in
   * the future. This way, the `isTouch` property is fully dynamic and will handle
   * hybrid devices that use a mix of touch + mouse input.
   */

  function onDocumentTouchStart() {
    if (currentInput.isTouch) {
      return;
    }

    currentInput.isTouch = true;

    if (isIOS) {
      document.body.classList.add(IOS_CLASS);
    }

    if (window.performance) {
      document.addEventListener('mousemove', onDocumentMouseMove);
    }
  }
  /**
   * When two `mousemove` event are fired consecutively within 20ms, it's assumed
   * the user is using mouse input again. `mousemove` can fire on touch devices as
   * well, but very rarely that quickly.
   */

  function onDocumentMouseMove() {
    var now = performance.now();

    if (now - lastMouseMoveTime < 20) {
      currentInput.isTouch = false;
      document.removeEventListener('mousemove', onDocumentMouseMove);

      if (!isIOS) {
        document.body.classList.remove(IOS_CLASS);
      }
    }

    lastMouseMoveTime = now;
  }
  /**
   * When an element is in focus and has a tippy, leaving the tab/window and
   * returning causes it to show again. For mouse users this is unexpected, but
   * for keyboard use it makes sense.
   * TODO: find a better technique to solve this problem
   */

  function onWindowBlur() {
    var _document = document,
        activeElement = _document.activeElement;
    var instance = activeElement._tippy;

    if (activeElement && activeElement.blur && instance && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
  /**
   * Adds the needed global event listeners
   */

  function bindGlobalEventListeners() {
    document.addEventListener('touchstart', onDocumentTouchStart, _extends({}, PASSIVE, {
      capture: true
    }));
    window.addEventListener('blur', onWindowBlur);
  }

  var keys = Object.keys(defaultProps);
  /**
   * Returns an object of optional props from data-tippy-* attributes
   */

  function getDataAttributeProps(reference) {
    var props = keys.reduce(function (acc, key) {
      var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

      if (!valueAsString) {
        return acc;
      }

      if (key === 'content') {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e) {
          acc[key] = valueAsString;
        }
      }

      return acc;
    }, {});
    return props;
  }

  /**
   * Determines if the value is a reference element
   */

  function isReferenceElement(value) {
    return !!(value && value._tippy && !value.classList.contains(POPPER_CLASS));
  }
  /**
   * Safe .hasOwnProperty check, for prototype-less objects
   */

  function hasOwnProperty(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  /**
   * Returns an array of elements based on the value
   */

  function getArrayOfElements(value) {
    if (isRealElement(value)) {
      return [value];
    }

    if (value instanceof NodeList) {
      return arrayFrom(value);
    }

    if (Array.isArray(value)) {
      return value;
    }

    return arrayFrom(document.querySelectorAll(value));
  }
  /**
   * Returns a value at a given index depending on if it's an array or number
   */

  function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v = value[index];
      return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }

    return value;
  }
  /**
   * Prevents errors from being thrown while accessing nested modifier objects
   * in `popperOptions`
   */

  function getModifier(obj, key) {
    return obj && obj.modifiers && obj.modifiers[key];
  }
  /**
   * Determines if the value is a real element
   */

  function isRealElement(value) {
    return value instanceof Element;
  }
  /**
   * Firefox extensions don't allow setting .innerHTML directly, this will trick
   * it
   */

  function innerHTML() {
    return 'innerHTML';
  }
  /**
   * Evaluates a function if one, or returns the value
   */

  function invokeWithArgsOrReturn(value, args) {
    return typeof value === 'function' ? value.apply(void 0, args) : value;
  }
  /**
   * Sets a popperInstance `flip` modifier's enabled state
   */

  function setFlipModifierEnabled(modifiers, value) {
    modifiers.filter(function (m) {
      return m.name === 'flip';
    })[0].enabled = value;
  }
  /**
   * Returns a new `div` element
   */

  function div() {
    return document.createElement('div');
  }
  /**
   * Applies a transition duration to a list of elements
   */

  function setTransitionDuration(els, value) {
    els.forEach(function (el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  /**
   * Sets the visibility state to elements so they can begin to transition
   */

  function setVisibilityState(els, state) {
    els.forEach(function (el) {
      if (el) {
        el.setAttribute('data-state', state);
      }
    });
  }
  /**
   * Evaluates the props object by merging data attributes and disabling
   * conflicting props where necessary
   */

  function evaluateProps(reference, props) {
    var out = _extends({}, props, {
      content: invokeWithArgsOrReturn(props.content, [reference])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference));

    if (out.animateFill) {
      out.arrow = false;
    }

    if (out.arrow || isUCBrowser) {
      out.animateFill = false;
    }

    if (out.interactive) {
      out.aria = null;
    }

    return out;
  }
  /**
   * Debounce utility. To avoid bloating bundle size, we're only passing 1
   * argument here, a more generic function would pass all arguments. Only
   * `onMouseMove` uses this which takes the event object for now.
   */

  function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) {
      return fn;
    }

    var timeout;
    return function (arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn(arg);
      }, ms);
    };
  }
  /**
   * Preserves the original function invocation when another function replaces it
   */

  function preserveInvocation(originalFn, currentFn, args) {
    if (originalFn && originalFn !== currentFn) {
      originalFn.apply(void 0, args);
    }
  }
  /**
   * Deletes properties from an object (pure)
   */

  function removeProperties(obj, keys) {
    var clone = _extends({}, obj);

    keys.forEach(function (key) {
      delete clone[key];
    });
    return clone;
  }
  /**
   * Ponyfill for Array.from - converts iterable values to an array
   */

  function arrayFrom(value) {
    return [].slice.call(value);
  }
  /**
   * Works like Element.prototype.closest, but uses a callback instead
   */

  function closestCallback(element, callback) {
    while (element) {
      if (callback(element)) {
        return element;
      }

      element = element.parentElement;
    }

    return null;
  }
  /**
   * Determines if an array or string includes a string
   */

  function includes(a, b) {
    return a.indexOf(b) > -1;
  }
  /**
   * Creates an array from string of values separated by whitespace
   */

  function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
  }
  /**
   * Returns the `nextValue` if `nextValue` is not `undefined`, otherwise returns
   * `currentValue`
   */

  function useIfDefined(nextValue, currentValue) {
    return nextValue !== undefined ? nextValue : currentValue;
  }
  /**
   * Converts a value that's an array or single value to an array
   */

  function normalizeToArray(value) {
    // @ts-ignore
    return [].concat(value);
  }

  /**
   * Sets the innerHTML of an element
   */

  function setInnerHTML(element, html) {
    element[innerHTML()] = isRealElement(html) ? html[innerHTML()] : html;
  }
  /**
   * Sets the content of a tooltip
   */

  function setContent(contentEl, props) {
    if (isRealElement(props.content)) {
      setInnerHTML(contentEl, '');
      contentEl.appendChild(props.content);
    } else if (typeof props.content !== 'function') {
      var key = props.allowHTML ? 'innerHTML' : 'textContent';
      contentEl[key] = props.content;
    }
  }
  /**
   * Returns the child elements of a popper element
   */

  function getChildren(popper) {
    return {
      tooltip: popper.querySelector(TOOLTIP_SELECTOR),
      backdrop: popper.querySelector(BACKDROP_SELECTOR),
      content: popper.querySelector(CONTENT_SELECTOR),
      arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(SVG_ARROW_SELECTOR)
    };
  }
  /**
   * Adds `data-inertia` attribute
   */

  function addInertia(tooltip) {
    tooltip.setAttribute('data-inertia', '');
  }
  /**
   * Removes `data-inertia` attribute
   */

  function removeInertia(tooltip) {
    tooltip.removeAttribute('data-inertia');
  }
  /**
   * Creates an arrow element and returns it
   */

  function createArrowElement(arrow) {
    var arrowElement = div();

    if (arrow === true) {
      arrowElement.className = ARROW_CLASS;
    } else {
      arrowElement.className = SVG_ARROW_CLASS;

      if (isRealElement(arrow)) {
        arrowElement.appendChild(arrow);
      } else {
        setInnerHTML(arrowElement, arrow === 'round' ? ROUND_ARROW_INNER_HTML : arrow);
      }
    }

    return arrowElement;
  }
  /**
   * Creates a backdrop element and returns it
   */

  function createBackdropElement(isVisible) {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    backdrop.setAttribute('data-state', isVisible ? 'visible' : 'hidden');
    return backdrop;
  }
  /**
   * Adds interactive-related attributes
   */

  function addInteractive(tooltip) {
    tooltip.setAttribute('data-interactive', '');
  }
  /**
   * Removes interactive-related attributes
   */

  function removeInteractive(tooltip) {
    tooltip.removeAttribute('data-interactive');
  }
  /**
   * Add/remove transitionend listener from tooltip
   */

  function updateTransitionEndListener(tooltip, action, listener) {
    var eventName = isUCBrowser && document.body.style.webkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend';
    tooltip[action + 'EventListener'](eventName, listener);
  }
  /**
   * Returns the popper's placement, ignoring shifting (top-start, etc)
   */

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }
  /**
   * Triggers reflow
   */

  function reflow(popper) {
    void popper.offsetHeight;
  }
  /**
   * Adds/removes theme from tooltip's classList
   */

  function updateTheme(tooltip, action, theme) {
    splitBySpaces(theme).forEach(function (name) {
      tooltip.classList[action](name + "-theme");
    });
  }
  /**
   * Constructs the popper element and returns it
   */

  function createPopperElement(id, props) {
    var popper = div();
    popper.className = POPPER_CLASS;
    popper.style.position = 'absolute';
    popper.style.top = '0';
    popper.style.left = '0';
    var tooltip = div();
    tooltip.className = TOOLTIP_CLASS;
    tooltip.id = "tippy-" + id;
    tooltip.setAttribute('data-state', 'hidden');
    tooltip.setAttribute('tabindex', '-1');
    updateTheme(tooltip, 'add', props.theme);
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute('data-state', 'hidden');

    if (props.interactive) {
      addInteractive(tooltip);
    }

    if (props.arrow) {
      tooltip.setAttribute('data-arrow', '');
      tooltip.appendChild(createArrowElement(props.arrow));
    }

    if (props.animateFill) {
      tooltip.appendChild(createBackdropElement(false));
      tooltip.setAttribute('data-animatefill', '');
    }

    if (props.inertia) {
      addInertia(tooltip);
    }

    setContent(content, props);
    tooltip.appendChild(content);
    popper.appendChild(tooltip);
    updatePopperElement(popper, props, props, false);
    return popper;
  }
  /**
   * Updates the popper element based on the new props
   */

  function updatePopperElement(popper, prevProps, nextProps, isVisible) {
    var _getChildren = getChildren(popper),
        tooltip = _getChildren.tooltip,
        content = _getChildren.content,
        backdrop = _getChildren.backdrop,
        arrow = _getChildren.arrow;

    popper.style.zIndex = '' + nextProps.zIndex;
    tooltip.setAttribute('data-animation', nextProps.animation);
    tooltip.style.maxWidth = nextProps.maxWidth + (typeof nextProps.maxWidth === 'number' ? 'px' : '');

    if (nextProps.role) {
      tooltip.setAttribute('role', nextProps.role);
    } else {
      tooltip.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content) {
      setContent(content, nextProps);
    } // animateFill


    if (!prevProps.animateFill && nextProps.animateFill) {
      tooltip.appendChild(createBackdropElement(isVisible));
      tooltip.setAttribute('data-animatefill', '');
    } else if (prevProps.animateFill && !nextProps.animateFill) {
      tooltip.removeChild(backdrop);
      tooltip.removeAttribute('data-animatefill');
    } // arrow


    if (!prevProps.arrow && nextProps.arrow) {
      // false to true
      tooltip.appendChild(createArrowElement(nextProps.arrow));
      tooltip.setAttribute('data-arrow', '');
    } else if (prevProps.arrow && !nextProps.arrow) {
      // true to false
      tooltip.removeChild(arrow);
      tooltip.removeAttribute('data-arrow');
    } else if (prevProps.arrow !== nextProps.arrow) {
      // true to 'round' or vice-versa
      tooltip.removeChild(arrow);
      tooltip.appendChild(createArrowElement(nextProps.arrow));
    } // interactive


    if (!prevProps.interactive && nextProps.interactive) {
      addInteractive(tooltip);
    } else if (prevProps.interactive && !nextProps.interactive) {
      removeInteractive(tooltip);
    } // inertia


    if (!prevProps.inertia && nextProps.inertia) {
      addInertia(tooltip);
    } else if (prevProps.inertia && !nextProps.inertia) {
      removeInertia(tooltip);
    } // theme


    if (prevProps.theme !== nextProps.theme) {
      updateTheme(tooltip, 'remove', prevProps.theme);
      updateTheme(tooltip, 'add', nextProps.theme);
    }
  }
  /**
   * Determines if the mouse cursor is outside of the popper's interactive border
   * region
   */

  function isCursorOutsideInteractiveBorder(popperPlacement, popperRect, event, props) {
    if (!popperPlacement) {
      return true;
    }

    var x = event.clientX,
        y = event.clientY;
    var interactiveBorder = props.interactiveBorder,
        distance = props.distance;
    var exceedsTop = popperRect.top - y > (popperPlacement === 'top' ? interactiveBorder + distance : interactiveBorder);
    var exceedsBottom = y - popperRect.bottom > (popperPlacement === 'bottom' ? interactiveBorder + distance : interactiveBorder);
    var exceedsLeft = popperRect.left - x > (popperPlacement === 'left' ? interactiveBorder + distance : interactiveBorder);
    var exceedsRight = x - popperRect.right > (popperPlacement === 'right' ? interactiveBorder + distance : interactiveBorder);
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  }

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
      var didSpecifyPlacementInPopperOptions = prop === 'popperOptions' && value && hasOwnProperty(value, 'placement');
      var didPassUnknownProp = !hasOwnProperty(defaultProps, prop) && !includes(['a11y', 'arrowType', 'followCursor', 'showOnInit', 'size', 'target', 'touchHold'], prop);
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

  var plugins = [];
  function use(plugin) {
    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
    }
  }

  var idCounter = 1; // Workaround for IE11's lack of new MouseEvent constructor

  var mouseMoveListeners = [];
  /**
   * Creates and returns a Tippy object. We're using a closure pattern instead of
   * a class so that the exposed object API is clean without private members
   * prefixed with `_`.
   */

  function createTippy(reference, collectionProps) {
    var props = evaluateProps(reference, collectionProps); // If the reference shouldn't have multiple tippys, return null early

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
    var lastTriggerEvent;
    var currentMountCallback;
    var currentTransitionEndListener;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    /* ======================= 🔑 Public members 🔑 ======================= */

    var id = idCounter++;
    var popper = createPopperElement(id, props);
    var popperChildren = getChildren(popper);
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
      popper: popper,
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
      /* ==================== Initial instance mutations =================== */

    };
    reference._tippy = instance;
    popper._tippy = instance;
    var instancePlugins = plugins.map(function (plugin) {
      return plugin(instance);
    });
    invokeHook('onCreate', [instance]);
    addListenersToTriggerTarget();
    handleAriaExpandedAttribute();

    if (!props.lazy) {
      createPopperInstance();
    }

    if (props.showOnCreate) {
      scheduleShow();
    } // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding


    popper.addEventListener('mouseenter', function () {
      if (instance.props.interactive && instance.state.isVisible) {
        instance.clearDelayTimeouts();
      }
    });
    popper.addEventListener('mouseleave', function () {
      if (instance.props.interactive && includes(instance.props.trigger, 'mouseenter')) {
        document.addEventListener('mousemove', debouncedOnMouseMove);
      }
    });
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

    function getCurrentTarget() {
      return lastTriggerEvent ? lastTriggerEvent.target : reference;
    }

    function getDelay(isShow) {
      // For touch or keyboard input, force `0` delay for UX reasons
      return currentInput.isTouch || (lastTriggerEvent ? lastTriggerEvent.type === 'focus' : true) ? 0 : getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }

    function invokeHook(hook, args, shouldInvokePropsHook) {
      if (shouldInvokePropsHook === void 0) {
        shouldInvokePropsHook = true;
      }

      if (shouldInvokePropsHook) {
        var _instance$props;

        // @ts-ignore
        (_instance$props = instance.props)[hook].apply(_instance$props, args);
      }

      instancePlugins.forEach(function (plugin) {
        if (hasOwnProperty(plugin, hook)) {
          // @ts-ignore
          plugin[hook].apply(plugin, args);
        }
      });
    }

    function handleAriaDescribedByAttribute() {
      var aria = instance.props.aria;

      if (!aria) {
        return;
      }

      var attr = "aria-" + aria;
      var id = tooltip.id;
      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
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
      });
    }

    function handleAriaExpandedAttribute() {
      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        if (instance.props.interactive) {
          node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
        } else {
          node.removeAttribute('aria-expanded');
        }
      });
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
      if (instance.props.interactive && popper.contains(event.target)) {
        return;
      } // Clicked on the event listeners target


      if (getCurrentTarget().contains(event.target)) {
        if (currentInput.isTouch) {
          return;
        }

        if (instance.state.isVisible && includes(instance.props.trigger, 'click')) {
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
        if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
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
          updateTransitionEndListener(tooltip, 'remove', listener);
          callback();
        }
      } // Make callback synchronous if duration is 0
      // `transitionend` won't fire otherwise


      if (duration === 0) {
        return callback();
      }

      updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
      updateTransitionEndListener(tooltip, 'add', listener);
      currentTransitionEndListener = listener;
    }

    function on(eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }

      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        node.addEventListener(eventType, handler, options);
        listeners.push({
          node: node,
          eventType: eventType,
          handler: handler,
          options: options
        });
      });
    }

    function addListenersToTriggerTarget() {
      if (getIsCustomTouchBehavior()) {
        on('touchstart', onTrigger, PASSIVE);
        on('touchend', onMouseLeave, PASSIVE);
      } // `click` for keyboard. Mouse uses `mousedown` (onDocumentMouseDown)


      if (!includes(instance.props.trigger, 'click')) {
        on('click', function () {
          if (!currentInput.isTouch && instance.props.hideOnClick === true) {
            instance.hide();
          }
        });
      }

      splitBySpaces(instance.props.trigger).forEach(function (eventType) {
        if (eventType === 'manual') {
          return;
        }

        on(eventType, onTrigger);

        switch (eventType) {
          case 'mouseenter':
            on('mouseleave', onMouseLeave);
            break;

          case 'focus':
            on(isIE ? 'focusout' : 'blur', onBlur);
            break;
        }
      });
    }

    function removeListenersFromTriggerTarget() {
      listeners.forEach(function (_ref) {
        var node = _ref.node,
            eventType = _ref.eventType,
            handler = _ref.handler,
            options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }

    function onTrigger(event) {
      if (didHideDueToDocumentMouseDown || !instance.state.isEnabled || isEventListenerStopped(event)) {
        return;
      }

      lastTriggerEvent = event;
      handleAriaExpandedAttribute();

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

        if (currentInput.isTouch && value === 'hold' && duration) {
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
      var isCursorOverReferenceOrPopper = closestCallback(event.target, function (el) {
        return el === reference || el === popper;
      });

      if (isCursorOverReferenceOrPopper) {
        return;
      }

      if (isCursorOutsideInteractiveBorder(getBasePlacement(instance.state.currentPlacement), popper.getBoundingClientRect(), event, instance.props)) {
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
      if (event.target !== getCurrentTarget()) {
        return;
      } // If focus was moved to within the popper


      if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
        return;
      }

      scheduleHide(event);
    }

    function isEventListenerStopped(event) {
      var supportsTouch = 'ontouchstart' in window;
      var isTouchEvent = includes(event.type, 'touch');
      var isCustomTouch = getIsCustomTouchBehavior();
      return supportsTouch && currentInput.isTouch && isCustomTouch && !isTouchEvent || currentInput.isTouch && !isCustomTouch && isTouchEvent;
    }

    function createPopperInstance() {
      var popperOptions = instance.props.popperOptions;
      var arrow = instance.popperChildren.arrow;
      var preventOverflowModifier = getModifier(popperOptions, 'preventOverflow');

      function applyMutations(data) {
        instance.state.currentPlacement = data.placement;

        if (instance.props.flip && !instance.props.flipOnUpdate) {
          if (data.flipped) {
            instance.popperInstance.options.placement = data.placement;
          }

          setFlipModifierEnabled(instance.popperInstance.modifiers, false);
        }

        tooltip.setAttribute('data-placement', data.placement);

        if (data.attributes['x-out-of-boundaries'] !== false) {
          tooltip.setAttribute('data-out-of-boundaries', '');
        } else {
          tooltip.removeAttribute('data-out-of-boundaries');
        }

        var basePlacement = getBasePlacement(data.placement);
        var isVerticalPlacement = includes(['top', 'bottom'], basePlacement);
        var isSecondaryPlacement = includes(['bottom', 'right'], basePlacement); // Apply `distance` prop

        tooltip.style.top = '0';
        tooltip.style.left = '0';
        tooltip.style[isVerticalPlacement ? 'top' : 'left'] = (isSecondaryPlacement ? 1 : -1) * instance.props.distance + "px";
      }

      var config = _extends({
        eventsEnabled: false,
        placement: instance.props.placement
      }, popperOptions, {
        modifiers: _extends({}, popperOptions && popperOptions.modifiers, {
          preventOverflow: _extends({
            boundariesElement: instance.props.boundary,
            padding: PREVENT_OVERFLOW_PADDING
          }, preventOverflowModifier),
          // Adds the `distance` calculation to preventOverflow padding
          tippySetPreventOverflowPadding: {
            enabled: true,
            order: 299,
            fn: function fn(data) {
              var basePlacement = getBasePlacement(data.placement);
              var padding = preventOverflowModifier && preventOverflowModifier.padding !== undefined ? preventOverflowModifier.padding : PREVENT_OVERFLOW_PADDING;
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
          arrow: _extends({
            element: arrow,
            enabled: !!arrow
          }, getModifier(popperOptions, 'arrow')),
          flip: _extends({
            enabled: instance.props.flip,
            padding: instance.props.distance + PREVENT_OVERFLOW_PADDING,
            behavior: instance.props.flipBehavior
          }, getModifier(popperOptions, 'flip')),
          offset: _extends({
            offset: instance.props.offset
          }, getModifier(popperOptions, 'offset'))
        }),
        onCreate: function onCreate(data) {
          applyMutations(data);
          preserveInvocation(popperOptions && popperOptions.onCreate, config.onCreate, [data]);
          runMountCallback();
        },
        onUpdate: function onUpdate(data) {
          applyMutations(data);
          preserveInvocation(popperOptions && popperOptions.onUpdate, config.onUpdate, [data]);
          runMountCallback();
        }
      });

      instance.popperInstance = new Popper(reference, popper, config);
    }

    function runMountCallback() {
      // Only invoke currentMountCallback after 2 updates
      // This fixes some bugs in Popper.js (TODO: aim for only 1 update)
      if (popperUpdates === 0) {
        popperUpdates++; // 1

        instance.popperInstance.update();
      } else if (currentMountCallback && popperUpdates === 1) {
        popperUpdates++; // 2

        reflow(popper);
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

      var node = getCurrentTarget();

      if (instance.props.interactive && appendTo === defaultProps.appendTo || appendTo === 'parent') {
        parentNode = node.parentNode;
      } else {
        parentNode = invokeWithArgsOrReturn(appendTo, [node]);
      } // The popper element needs to exist on the DOM before its position can be
      // updated as Popper.js needs to read its dimensions


      if (!parentNode.contains(popper)) {
        parentNode.appendChild(popper);
      }

      {
        // Accessibility check
        warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, INTERACTIVE_A11Y_WARNING);
      }

      if (instance.popperInstance) {
        setFlipModifierEnabled(instance.popperInstance.modifiers, instance.props.flip);
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
        invokeHook('onTrigger', [instance, event]);
      }

      addDocumentMouseDownListener();
      var delay = getDelay(true);

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
      invokeHook('onUntrigger', [instance, event]);

      if (!instance.state.isVisible) {
        removeDocumentMouseDownListener();
        return;
      }

      instance.state.isScheduledToShow = false;
      var delay = getDelay(false);

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
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
      }

      if (instance.state.isDestroyed) {
        return;
      }

      {
        validateProps(partialProps);
      }

      removeListenersFromTriggerTarget();
      var prevProps = instance.props;
      var nextProps = evaluateProps(reference, _extends({}, instance.props, {}, partialProps, {
        ignoreAttributes: true
      }));
      nextProps.ignoreAttributes = hasOwnProperty(partialProps, 'ignoreAttributes') ? partialProps.ignoreAttributes || false : prevProps.ignoreAttributes;
      instance.props = nextProps;
      addListenersToTriggerTarget();
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
      updatePopperElement(popper, prevProps, nextProps, instance.state.isVisible);
      instance.popperChildren = getChildren(popper); // Ensure stale aria-expanded attributes are removed

      if (prevProps.triggerTarget && !nextProps.triggerTarget) {
        normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
          node.removeAttribute('aria-expanded');
        });
      } else if (nextProps.triggerTarget) {
        reference.removeAttribute('aria-expanded');
      }

      handleAriaExpandedAttribute();

      if (instance.popperInstance) {
        if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
          return hasOwnProperty(partialProps, prop) && partialProps[prop] !== prevProps[prop];
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

      invokeHook('onPropsUpdated', [instance, partialProps]);
    }

    function setContent(content) {
      instance.setProps({
        content: content
      });
    }

    function show(duration, shouldPreventPopperTransition) {
      if (duration === void 0) {
        duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
      }

      if (shouldPreventPopperTransition === void 0) {
        shouldPreventPopperTransition = true;
      }

      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
      } // Early bail-out


      var isAlreadyVisible = instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;

      if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
        return;
      } // Normalize `disabled` behavior across browsers.
      // Firefox allows events on disabled elements, but Chrome doesn't.
      // Using a wrapper element (i.e. <span>) is recommended.


      if (getCurrentTarget().hasAttribute('disabled')) {
        return;
      }

      var isPrevented = instance.props.onShow(instance) === false;
      invokeHook('onShow', [instance], false);

      if (isPrevented) {
        return;
      }

      addDocumentMouseDownListener();
      popper.style.visibility = 'visible';
      instance.state.isVisible = true; // Prevent a transition of the popper from its previous position and of the
      // elements at a different placement.

      var transitionableElements = getTransitionableElements();
      setTransitionDuration(shouldPreventPopperTransition ? transitionableElements.concat(popper) : transitionableElements, 0);

      currentMountCallback = function currentMountCallback() {
        if (!instance.state.isVisible) {
          return;
        }

        instance.state.isMounted = true;
        invokeHook('onMount', [instance]); // The content should fade in after the backdrop has mostly filled the
        // tooltip element. `clip-path` is the other alternative but is not well-
        // supported and is buggy on some devices.

        content.style.transitionDelay = instance.popperChildren.backdrop ? Math.round(duration / 12) + "ms" : '';
        setTransitionDuration([popper], instance.props.updateDuration);
        setTransitionDuration(transitionableElements, duration);
        setVisibilityState(transitionableElements, 'visible');
        handleAriaDescribedByAttribute();
        handleAriaExpandedAttribute();
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      };

      mount();
    }

    function hide(duration) {
      if (duration === void 0) {
        duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
      }

      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
      } // Early bail-out


      var isAlreadyHidden = !instance.state.isVisible && !isBeingDestroyed;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled && !isBeingDestroyed;

      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }

      var isPrevented = instance.props.onHide(instance) === false;
      invokeHook('onHide', [instance], false);

      if (isPrevented && !isBeingDestroyed) {
        return;
      }

      removeDocumentMouseDownListener();
      popper.style.visibility = 'hidden';
      instance.state.isVisible = false;
      instance.state.isShown = false;
      var transitionableElements = getTransitionableElements();
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'hidden');
      handleAriaDescribedByAttribute();
      handleAriaExpandedAttribute();
      onTransitionedOut(duration, function () {
        instance.popperInstance.disableEventListeners();
        instance.popperInstance.options.placement = instance.props.placement;
        popper.parentNode.removeChild(popper);
        instance.state.isMounted = false;
        invokeHook('onHidden', [instance]);
      });
    }

    function destroy() {
      {
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
      invokeHook('onDestroy', [instance]);
    }
  }

  /**
   * Exported module
   */

  function tippy(targets, optionalProps) {
    {
      validateTargets(targets);
      validateProps(optionalProps);
    }

    bindGlobalEventListeners();

    var props = _extends({}, defaultProps, {}, optionalProps);

    var elements = getArrayOfElements(targets);

    {
      var isSingleContentElement = isRealElement(props.content);
      var isMoreThanOneReferenceElement = elements.length > 1;
      warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, CONTENT_WARNING);
    }

    var instances = elements.reduce(function (acc, reference) {
      var instance = reference && createTippy(reference, props);

      if (instance) {
        acc.push(instance);
      }

      return acc;
    }, []);
    return isRealElement(targets) ? instances[0] : instances;
  }

  tippy.version = version;
  tippy.defaultProps = defaultProps;
  tippy.setDefaultProps = setDefaultProps;
  tippy.currentInput = currentInput;
  tippy.plugins = plugins;
  tippy.use = use;
  /**
   * Mutates the defaultProps object by setting the props specified
   */

  function setDefaultProps(partialProps) {
    {
      validateProps(partialProps);
    }

    Object.keys(partialProps).forEach(function (key) {
      // @ts-ignore
      defaultProps[key] = partialProps[key];
    });
  }
  /**
   * Hides all visible poppers on the document
   */


  function hideAll(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        excludedReferenceOrInstance = _ref.exclude,
        duration = _ref.duration;

    arrayFrom(document.querySelectorAll(POPPER_SELECTOR)).forEach(function (popper) {
      var instance = popper._tippy;

      if (instance) {
        var isExcluded = false;

        if (excludedReferenceOrInstance) {
          isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : popper === excludedReferenceOrInstance.popper;
        }

        if (!isExcluded) {
          instance.hide(duration);
        }
      }
    });
  }

  /**
   * Injects a string of CSS styles to a style node in <head>
   */
  function injectCSS(css) {
    var style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-tippy-stylesheet', '');
    var head = document.head;
    var firstStyleOrLinkTag = head.querySelector('style,link');

    if (firstStyleOrLinkTag) {
      head.insertBefore(style, firstStyleOrLinkTag);
    } else {
      head.appendChild(style);
    }
  }

  /**
   * Re-uses a single tippy element for many different tippy instances.
   * Replaces v4's `tippy.group()`.
   */

  function createSingleton(tippyInstances, optionalProps) {
    {
      throwErrorWhen(!Array.isArray(tippyInstances), createInvalidCreateSingletonArgumentError(String(tippyInstances)));
    }

    tippyInstances.forEach(function (instance) {
      instance.disable();
    });
    var currentAria;
    var currentTarget;

    var _defaultProps$optiona = _extends({}, defaultProps, {}, optionalProps),
        aria = _defaultProps$optiona.aria,
        _onTrigger = _defaultProps$optiona.onTrigger,
        _onMount = _defaultProps$optiona.onMount,
        _onUntrigger = _defaultProps$optiona.onUntrigger,
        _onPropsUpdated = _defaultProps$optiona.onPropsUpdated,
        _onDestroy = _defaultProps$optiona.onDestroy;

    function handleAriaDescribedByAttribute(id, isInteractive, isShow) {
      if (!currentAria) {
        return;
      }

      if (isShow && !isInteractive) {
        currentTarget.setAttribute("aria-" + currentAria, id);
      } else {
        currentTarget.removeAttribute("aria-" + currentAria);
      }
    }

    var references = tippyInstances.map(function (instance) {
      return instance.reference;
    });
    var singleton = tippy(document.createElement('div'), _extends({
      aria: null,
      triggerTarget: references,
      onMount: function onMount(instance) {
        preserveInvocation(_onMount, instance.props.onMount, [instance]);
        handleAriaDescribedByAttribute(instance.popperChildren.tooltip.id, instance.props.interactive, true);
      },
      onUntrigger: function onUntrigger(instance, event) {
        preserveInvocation(_onUntrigger, instance.props.onUntrigger, [instance, event]);
        handleAriaDescribedByAttribute(instance.popperChildren.tooltip.id, instance.props.interactive, false);
      },
      onTrigger: function onTrigger(instance, event) {
        preserveInvocation(_onTrigger, instance.props.onTrigger, [instance, event]);
        var target = event.currentTarget;
        var index = references.indexOf(target);
        currentTarget = target;
        currentAria = aria;

        if (instance.state.isVisible) {
          handleAriaDescribedByAttribute(instance.popperChildren.tooltip.id, instance.props.interactive, true);
        }

        instance.setContent(tippyInstances[index].props.content);

        instance.reference.getBoundingClientRect = function () {
          return target.getBoundingClientRect();
        }; // @ts-ignore - awaiting popper.js@1.16.0 release


        instance.reference.referenceNode = instance.props.appendTo === 'parent' ? target.parentNode : invokeWithArgsOrReturn(instance.props.appendTo, [target]);
      },
      onPropsUpdated: function onPropsUpdated(instance, partialProps) {
        preserveInvocation(_onPropsUpdated, instance.props.onPropsUpdated, [instance]);
        aria = useIfDefined(partialProps.aria, aria);
        _onTrigger = useIfDefined(partialProps.onTrigger, _onTrigger);
        _onMount = useIfDefined(partialProps.onMount, _onMount);
        _onUntrigger = useIfDefined(partialProps.onUntrigger, _onUntrigger);
        _onPropsUpdated = useIfDefined(partialProps.onPropsUpdated, _onPropsUpdated);
        _onDestroy = useIfDefined(partialProps.onDestroy, _onDestroy);
      },
      onDestroy: function onDestroy(instance) {
        preserveInvocation(_onDestroy, instance.props.onDestroy, [instance]);
        tippyInstances.forEach(function (instance) {
          instance.enable();
        });
      }
    }, optionalProps));
    return singleton;
  }

  /**
   * Creates a delegate instance that controls the creation of tippy instances
   * for child elements (`target` CSS selector).
   */
  function delegate(targets, props) {
    {
      throwErrorWhen(!props || !props.target, MISSING_TARGET_WARNING);
    }

    var listeners = [];
    var childTippyInstances = [];
    var target = props.target;
    var nativeProps = removeProperties(props, ['target']);
    var trigger = props.trigger || tippy.defaultProps.trigger;
    var returnValue = tippy(targets, _extends({}, nativeProps, {
      trigger: 'manual'
    }));

    function onTrigger(event) {
      if (event.target) {
        var targetNode = event.target.closest(target);

        if (targetNode) {
          var instance = tippy(targetNode, _extends({}, nativeProps, {
            showOnCreate: true
          }));

          if (instance) {
            childTippyInstances = childTippyInstances.concat(instance);
          }
        }
      }
    }

    function on(element, eventType, listener, options) {
      if (options === void 0) {
        options = false;
      }

      element.addEventListener(eventType, listener, options);
      listeners.push({
        element: element,
        eventType: eventType,
        listener: listener,
        options: options
      });
    }

    function addEventListeners(instance) {
      var reference = instance.reference;
      splitBySpaces(trigger).forEach(function (eventType) {
        switch (eventType) {
          case 'mouseenter':
            {
              on(reference, 'mouseover', onTrigger);
              break;
            }

          case 'focus':
            {
              on(reference, 'focusin', onTrigger);
              break;
            }

          case 'click':
            {
              on(reference, 'click', onTrigger);
            }
        }
      });
    }

    function removeEventListeners() {
      listeners.forEach(function (_ref) {
        var element = _ref.element,
            eventType = _ref.eventType,
            listener = _ref.listener,
            options = _ref.options;
        element.removeEventListener(eventType, listener, options);
      });
      listeners = [];
    }

    function applyMutations(instance) {
      var originalDestroy = instance.destroy;

      instance.destroy = function (shouldDestroyChildInstances) {
        if (shouldDestroyChildInstances === void 0) {
          shouldDestroyChildInstances = true;
        }

        if (shouldDestroyChildInstances) {
          childTippyInstances.forEach(function (instance) {
            instance.destroy();
          });
        }

        childTippyInstances = [];
        removeEventListeners();
        originalDestroy();
      };

      addEventListeners(instance);
      instance.setProps({
        trigger: 'manual'
      });
    }

    if (Array.isArray(returnValue)) {
      returnValue.forEach(applyMutations);
    } else {
      applyMutations(returnValue);
    }

    return returnValue;
  }

  function followCursor(instance) {
    var reference = instance.reference,
        popper = instance.popper; // Internal state

    var lastMouseMoveEvent;
    var firstTriggerEventType = null;
    var isPopperInstanceCreated = false;
    var normalizedPlacement;
    var shouldBypassSetPropsHook = false; // These are controlled by this plugin, so we need to store the user's
    // original prop value

    var placement;
    var flipOnUpdate;

    function setPrivateProps(props) {
      placement = useIfDefined(props.placement, placement);
      flipOnUpdate = useIfDefined(props.flipOnUpdate, flipOnUpdate);
    } // Due to `getVirtualOffsets()`, we need to reverse the placement if it's
    // shifted (start -> end, and vice-versa)


    function setNormalizedPlacement() {
      var shift = placement.split('-')[1];
      normalizedPlacement = instance.props.followCursor && shift ? placement.replace(shift, shift === 'start' ? 'end' : 'start') : placement;
      shouldBypassSetPropsHook = true;
      instance.setProps({
        placement: normalizedPlacement
      });
      shouldBypassSetPropsHook = false;
    }

    function resetReference() {
      if (instance.popperInstance) {
        instance.popperInstance.reference = reference;
      }
    }

    function addListener() {
      document.addEventListener('mousemove', onMouseMove);
    }

    function removeListener() {
      document.removeEventListener('mousemove', onMouseMove);
    }

    function onMouseMove(event) {
      if (firstTriggerEventType === 'focus' || !event) {
        return;
      }

      var _lastMouseMoveEvent = lastMouseMoveEvent = event,
          clientX = _lastMouseMoveEvent.clientX,
          clientY = _lastMouseMoveEvent.clientY;

      if (!instance.props.followCursor || !instance.popperInstance || !isPopperInstanceCreated) {
        return;
      } // If the instance is interactive, avoid updating the position unless it's
      // over the reference element


      var isCursorOverReference = closestCallback(event.target, function (el) {
        return el === reference;
      });
      var rect = reference.getBoundingClientRect();
      var followCursor = instance.props.followCursor;
      var isHorizontal = followCursor === 'horizontal';
      var isVertical = followCursor === 'vertical';
      var isVerticalPlacement = includes(['top', 'bottom'], getBasePlacement(instance.state.currentPlacement)); // The virtual reference needs some size to prevent itself from overflowing

      var _getVirtualOffsets = getVirtualOffsets(popper, isVerticalPlacement),
          size = _getVirtualOffsets.size,
          x = _getVirtualOffsets.x,
          y = _getVirtualOffsets.y;

      if (isCursorOverReference || !instance.props.interactive) {
        instance.popperInstance.reference = {
          // These `client` values don't get used by Popper.js if they are 0
          clientWidth: 0,
          clientHeight: 0,
          // This will exist in next Popper.js feature release to fix #532
          // @ts-ignore
          referenceNode: reference,
          getBoundingClientRect: function getBoundingClientRect() {
            return {
              width: isVerticalPlacement ? size : 0,
              height: isVerticalPlacement ? 0 : size,
              top: (isHorizontal ? rect.top : clientY) - y,
              bottom: (isHorizontal ? rect.bottom : clientY) + y,
              left: (isVertical ? rect.left : clientX) - x,
              right: (isVertical ? rect.right : clientX) + x
            };
          }
        };
        instance.popperInstance.update();
      } // "initial" behavior


      if (currentInput.isTouch || instance.props.followCursor === 'initial' && instance.state.isVisible) {
        removeListener();
      }
    }

    return {
      onCreate: function onCreate() {
        setPrivateProps(instance.props);
        setNormalizedPlacement();
        var popperOptions = instance.props.popperOptions;
        instance.setProps({
          popperOptions: _extends({}, popperOptions, {
            // Technically we should try and preserve `onCreate` if `.setProps()`
            // is called after the instance is created, but before the
            // popperInstance is created, but this correctness seems extremely
            // unlikely to be needed
            onCreate: function onCreate(data) {
              if (popperOptions && popperOptions.onCreate) {
                popperOptions.onCreate(data);
              }

              isPopperInstanceCreated = true;
            }
          })
        });
      },
      onPropsUpdated: function onPropsUpdated(_, partialProps) {
        if (!shouldBypassSetPropsHook) {
          setPrivateProps(partialProps);

          if (partialProps.placement !== placement) {
            setNormalizedPlacement();
          }
        }

        onMouseMove(lastMouseMoveEvent);

        if (!instance.props.followCursor) {
          resetReference();
        }
      },
      onMount: function onMount() {
        // Popper's scroll listeners make sense for `true`, where the cursor
        // follows both axes. TODO: somehow keep scroll listeners for vertical
        // scrolling for "vertical", and horizontal scrolling for "horizontal".
        if ( // Touch devices always emulate "initial"
        currentInput.isTouch || firstTriggerEventType !== 'focus' && instance.props.followCursor !== true) {
          instance.popperInstance.disableEventListeners();
        }

        onMouseMove(lastMouseMoveEvent);
      },
      onTrigger: function onTrigger(_, event) {
        // Tapping on touch devices can trigger `mouseenter` then `focus`
        if (!firstTriggerEventType) {
          firstTriggerEventType = event.type;
        }

        if (event instanceof MouseEvent) {
          lastMouseMoveEvent = event;
        }

        if (firstTriggerEventType === 'focus') {
          resetReference();
        }

        if (instance.props.followCursor && firstTriggerEventType !== 'focus' && // Touch devices can add two listeners due to `mouseenter` + `focus`
        !(event.type === 'focus' && currentInput.isTouch) && !(instance.state.isMounted && instance.props.followCursor === 'initial')) {
          // Force `flipOnUpdate: true` in followCursor mode, as it's better UX
          // and works better with initial flips
          instance.setProps({
            flipOnUpdate: true
          });
          addListener();
        } else {
          instance.setProps({
            flipOnUpdate: flipOnUpdate
          });
        }
      },
      onUntrigger: function onUntrigger() {
        // The listener gets added in `onTrigger()`, but due to potential delay(s)
        // the instance made be untriggered before it shows. `onHidden()` will
        // therefore never be invoked.
        if (!instance.state.isVisible) {
          removeListener();
        }

        firstTriggerEventType = null;
      },
      onHidden: function onHidden() {
        // If scheduled to show before unmounting (e.g. delay: [500, 0]), the
        // listener should not be removed
        if (!instance.state.isScheduledToShow) {
          removeListener();
        }

        instance.popperInstance.options.placement = normalizedPlacement;
      }
    };
  }
  function getVirtualOffsets(popper, isVerticalPlacement) {
    var size = isVerticalPlacement ? popper.offsetWidth : popper.offsetHeight;
    return {
      size: size,
      x: isVerticalPlacement ? size : 0,
      y: isVerticalPlacement ? 0 : size
    };
  }

  function sticky(instance) {
    var reference = instance.reference,
        popper = instance.popper;

    function shouldCheck(value) {
      return instance.props.sticky === true || instance.props.sticky === value;
    }

    var prevRefRect = shouldCheck('reference') ? reference.getBoundingClientRect() : null;
    var prevPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;

    function updatePosition() {
      var currentRefRect = shouldCheck('reference') ? reference.getBoundingClientRect() : null;
      var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null; // Schedule an update if the reference rect has changed

      if (shouldCheck('reference') && areRectsDifferent(prevRefRect, currentRefRect) || shouldCheck('popper') && areRectsDifferent(prevPopRect, currentPopRect)) {
        instance.popperInstance.update();
      }

      prevRefRect = currentRefRect;
      prevPopRect = currentPopRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    return {
      onMount: function onMount() {
        if (instance.props.sticky) {
          updatePosition();
        }
      }
    };
  }

  function areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) {
      return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
    }

    return true;
  }

  if (isBrowser) {
    injectCSS(css);
  }

  tippy.use(followCursor);
  tippy.use(sticky);
  tippy.createSingleton = createSingleton;
  tippy.delegate = delegate;
  tippy.hideAll = hideAll;

  return tippy;

}(Popper));
//# sourceMappingURL=tippy-bundle.iife.js.map
