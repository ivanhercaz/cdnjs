/**!
* tippy.js v5.0.0-beta.1
* (c) 2017-2019 atomiks
* MIT License
*/
var tippy = (function (Popper) {
  'use strict';

  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

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

  var version = "5.0.0-beta.1";

  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  var ua = isBrowser ? navigator.userAgent : '';
  var isIE = /MSIE |Trident\//.test(ua);
  var isUCBrowser = /UCBrowser\//.test(ua);
  var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform);

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
    duration: [325, 275],
    flip: true,
    flipBehavior: 'flip',
    flipOnUpdate: false,
    followCursor: false,
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
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    placement: 'top',
    popperOptions: {},
    role: 'tooltip',
    showOnCreate: false,
    sticky: false,
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
  var SVG_ARROW_SELECTOR = "." + SVG_ARROW_CLASS; // TODO: Work out best way to make these updateable

  var NON_UPDATEABLE_PROPS = ['followCursor'];

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
    return typeof value === 'function' ? value.apply(null, args) : value;
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
      originalFn.apply(null, args);
    }
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
    theme.split(' ').forEach(function (name) {
      if (name) {
        tooltip.classList[action](name + "-theme");
      }
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

  function getDevMessage(message) {
    return '%ctippy.js\n\n' + '%c' + message + '\n\n' + '%c👷‍ This is a development only message. It will be removed in ' + 'production builds.';
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
      var didPassTargetProp = prop === 'target';
      var didPassA11yProp = prop === 'a11y';
      var didPassShowOnInitProp = prop === 'showOnInit';
      var didPassArrowTypeProp = prop === 'arrowType';
      var didPassTouchHoldProp = prop === 'touchHold';
      var didPassSizeProp = prop === 'size';
      var didPassGoogleTheme = prop === 'theme' && value === 'google';
      var didSpecifyPlacementInPopperOptions = prop === 'popperOptions' && value && hasOwnProperty(value, 'placement');
      var didPassOtherUnknownProp = !hasOwnProperty(defaultProps, prop) && !didPassTargetProp && !didPassA11yProp && !didPassShowOnInitProp && !includes(['followCursor'], prop);
      warnWhen(didPassTargetProp, 'The `target` prop was removed in v5 and ' + 'replaced with the `delegate()` method. Read more here: ' + 'https//atomiks.github.io/tippyjs/addons#event-delegation');
      warnWhen(didPassA11yProp, 'The `a11y` prop was removed in v5. Make ' + 'sure the element you are giving a tippy to is natively ' + 'focusable, such as <button> or <input>, not <div> or <span>.');
      warnWhen(didPassShowOnInitProp, 'The `showOnInit` prop was renamed to `showOnCreate` in v5.');
      warnWhen(didPassArrowTypeProp, 'The `arrowType` prop was removed in v5 ' + 'in favor of overloading the `arrow` prop. Specify ' + '`arrow: "' + value + '"` instead.');
      warnWhen(didPassTouchHoldProp, 'The `touchHold` prop was removed in v5 in favor of overloading the ' + '`touch` prop. Specify `touch: "hold"` instead.');
      warnWhen(didPassSizeProp, 'The `size` prop was removed in v5. Instead, use a theme that ' + 'specifies `font-size` and `padding` CSS properties.');
      warnWhen(didPassOtherUnknownProp, '`' + prop + '` is not a valid prop. You ' + 'may have spelled it incorrectly. View all of the valid props ' + 'here: https://atomiks.github.io/tippyjs/all-props/');
      warnWhen(didPassGoogleTheme, 'The included theme `google` was renamed to `material` in v5.');
      warnWhen(didSpecifyPlacementInPopperOptions, 'Specifying `placement` in `popperOptions` is not supported. Use the ' + 'base-level `placement` prop instead.');
    });
  }
  /**
   * Validates the `targets` value passed to `tippy()`
   */

  function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
    throwErrorWhen(didPassFalsyValue, '`tippy()` was passed `' + targets + '` (an invalid falsy value) as its targets argument. Valid types are: ' + 'String (CSS selector), Element, Element[], or NodeList.');
    throwErrorWhen(didPassPlainObject, '`tippy()` was passed a plain object (virtual ' + 'reference element) which is no longer supported in v5. Instead, pass ' + 'a placeholder element like `document.createElement("div")`');
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
      if (hasOwnProperty(partialProps, prop) && !instance.__extraProps[prop]) {
        var didPassFollowCursor = prop === 'followCursor';
        var didPassOtherExtraProp = !didPassFollowCursor;
        warnWhen(didPassFollowCursor, 'The `followCursor` prop was specified, but the instance has not ' + 'been configured with followCursor functionality. In v5, ' + '`followCursor` was moved to `extra-props`. View details: ' + 'https://atomiks.github.io/tippyjs/extra-props/');
        warnWhen(didPassOtherExtraProp, 'The `' + prop + '` prop was specified, but the instance has not been configured ' + 'with ' + prop + ' functionality. View details: ' + 'https://atomiks.github.io/tippyjs/extra-props/');
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
    var props = evaluateProps(reference, collectionProps); // If the reference shouldn't have multiple tippys, return null early

    if (!props.multiple && reference._tippy) {
      return null;
    }
    /* ======================= 🔒 Private members 🔒 ======================= */


    var lastTriggerEventType;
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isBeingDestroyed = false;
    var hasMountCallbackRun = false;
    var didHideDueToDocumentMouseDown = false;
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
    };

    {
      Object.defineProperty(instance, 'set', {
        value: function value() {
          warnWhen(true, '`set()` was renamed to `setProps()` in v5.');
        },
        enumerable: false
      });
      Object.defineProperty(instance, '__extraProps', {
        value: {},
        enumerable: false
      });
    }
    /* ==================== Initial instance mutations =================== */


    reference._tippy = instance;
    popper._tippy = instance;
    addTriggersToEventListenersTarget();

    if (!props.lazy) {
      createPopperInstance();
    }

    if (props.showOnCreate) {
      scheduleShow();
    } // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding


    popper.addEventListener('mouseenter', function () {
      if (instance.props.interactive && instance.state.isVisible && lastTriggerEventType === 'mouseenter') {
        instance.clearDelayTimeouts();
      }
    });
    popper.addEventListener('mouseleave', function () {
      if (instance.props.interactive && lastTriggerEventType === 'mouseenter') {
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

    function getEventListenersTarget() {
      return instance.props.triggerTarget || reference;
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


      if (getEventListenersTarget().contains(event.target)) {
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

    function makeSticky() {
      setTransitionDuration([popper], isIE ? 0 : instance.props.updateDuration);
      var prevRefRect = reference.getBoundingClientRect();

      function updatePosition() {
        var currentRefRect = reference.getBoundingClientRect(); // Only schedule an update if the reference rect has changed

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

      getEventListenersTarget().addEventListener(eventType, handler, options);
      listeners.push({
        eventType: eventType,
        handler: handler,
        options: options
      });
    }

    function addTriggersToEventListenersTarget() {
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

      instance.props.trigger.trim().split(' ').forEach(function (eventType) {
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

    function removeTriggersFromEventListenersTarget() {
      listeners.forEach(function (_ref) {
        var eventType = _ref.eventType,
            handler = _ref.handler,
            options = _ref.options;
        getEventListenersTarget().removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }

    function onTrigger(event) {
      if (didHideDueToDocumentMouseDown || !instance.state.isEnabled || isEventListenerStopped(event)) {
        return;
      }

      if (!instance.state.isVisible) {
        lastTriggerEventType = event.type;

        if (event instanceof MouseEvent) {
          // If scrolling, `mouseenter` events can be fired if the cursor lands
          // over a new target, but `mousemove` events don't get fired. This
          // causes interactive tooltips to get stuck open until the cursor is
          // moved
          mouseMoveListeners.forEach(function (listener) {
            return listener(event);
          });
        }
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
      if (event.target !== getEventListenersTarget()) {
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

        var tooltipStyles = tooltip.style;
        tooltipStyles.top = '0';
        tooltipStyles.left = '0';
        tooltipStyles[isVerticalPlacement ? 'top' : 'left'] = (isSecondaryPlacement ? 1 : -1) * instance.props.distance + "px";
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
      if (!hasMountCallbackRun && currentMountCallback) {
        hasMountCallbackRun = true;
        reflow(popper);
        currentMountCallback();
      }
    }

    function mount() {
      // The mounting callback (`currentMountCallback`) is only run due to a
      // popperInstance update/create
      hasMountCallbackRun = false;
      var appendTo = instance.props.appendTo;
      var parentNode = appendTo === 'parent' ? reference.parentNode : invokeWithArgsOrReturn(appendTo, [reference]); // The popper element needs to exist on the DOM before its position can be
      // updated as Popper.js needs to read its dimensions

      if (!parentNode.contains(popper)) {
        parentNode.appendChild(popper);
      }

      if (instance.popperInstance) {
        setFlipModifierEnabled(instance.popperInstance.modifiers, instance.props.flip);
        instance.popperInstance.enableEventListeners(); // Mounting callback invoked in `onUpdate`

        instance.popperInstance.scheduleUpdate();
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
      var delay = getValueAtIndexOrReturn(instance.props.delay, 0, defaultProps.delay);

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
      var delay = getValueAtIndexOrReturn(instance.props.delay, 1, defaultProps.delay);

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
    } // Cloning as we're deleting non-updateable props in DEV mode


    function setProps(_ref2) {
      var partialProps = _extends({}, _ref2);

      {
        warnWhen(instance.state.isDestroyed, '`setProps()` was called on a destroyed instance. ' + 'This is a no-op but indicates a potential memory leak.');
      }

      if (instance.state.isDestroyed) {
        return;
      }

      {
        validateProps(partialProps);
        validateExtraPropsFunctionality(instance, partialProps);
        NON_UPDATEABLE_PROPS.forEach(function (prop) {
          if (hasOwnProperty(partialProps, prop)) {
            delete partialProps[prop];
            warnWhen(true, 'Cannot update `' + prop + '` prop. Destroy this instance and create a new instance instead.');
          }
        });
      }

      removeTriggersFromEventListenersTarget();
      var prevProps = instance.props;
      var nextProps = evaluateProps(reference, _extends({}, instance.props, {}, partialProps, {
        ignoreAttributes: true
      }));
      nextProps.ignoreAttributes = hasOwnProperty(partialProps, 'ignoreAttributes') ? partialProps.ignoreAttributes || false : prevProps.ignoreAttributes;
      instance.props = nextProps;
      addTriggersToEventListenersTarget();
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
      updatePopperElement(popper, prevProps, nextProps, instance.state.isVisible);
      instance.popperChildren = getChildren(popper);

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
        warnWhen(instance.state.isDestroyed, '`show()` was called on a destroyed instance. ' + 'This is a no-op but indicates a potential memory leak.');
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


      if (getEventListenersTarget().hasAttribute('disabled')) {
        return;
      }

      if (instance.props.onShow(instance) === false) {
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
        } // Double update will apply correct mutations


        instance.popperInstance.update();
        instance.props.onMount(instance);
        instance.state.isMounted = true; // The content should fade in after the backdrop has mostly filled the
        // tooltip element. `clip-path` is the other alternative but is not well-
        // supported and is buggy on some devices.

        content.style.transitionDelay = instance.popperChildren.backdrop ? Math.round(duration / 12) + "ms" : '';

        if (instance.props.sticky) {
          makeSticky();
        }

        setTransitionDuration([popper], instance.props.updateDuration);
        setTransitionDuration(transitionableElements, duration);
        setVisibilityState(transitionableElements, 'visible');
        onTransitionedIn(duration, function () {
          if (instance.props.aria) {
            var node = getEventListenersTarget();
            var attrName = "aria-" + instance.props.aria;
            var currentAttrValue = node.getAttribute(attrName);
            var nextAttrValue = currentAttrValue ? currentAttrValue + " " + tooltip.id : tooltip.id;
            node.setAttribute(attrName, nextAttrValue);
          }

          instance.props.onShown(instance);
          instance.state.isShown = true;
        });
      };

      mount();
    }

    function hide(duration) {
      if (duration === void 0) {
        duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
      }

      {
        warnWhen(instance.state.isDestroyed, '`hide()` was called on a destroyed instance. ' + 'This is a no-op but indicates a potential memory leak.');
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
      popper.style.visibility = 'hidden';
      instance.state.isVisible = false;
      instance.state.isShown = false;
      var transitionableElements = getTransitionableElements();
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'hidden');
      onTransitionedOut(duration, function () {
        if (instance.props.aria) {
          var node = getEventListenersTarget();
          var attrName = "aria-" + instance.props.aria;
          var currentAttrValue = node.getAttribute(attrName);
          var nextAttrValue = currentAttrValue ? currentAttrValue.replace(tooltip.id, '').trim() : null;

          if (nextAttrValue) {
            node.setAttribute(attrName, nextAttrValue);
          } else {
            node.removeAttribute(attrName);
          }
        }

        instance.popperInstance.disableEventListeners();
        instance.popperInstance.options.placement = instance.props.placement;
        popper.parentNode.removeChild(popper);
        instance.props.onHidden(instance);
        instance.state.isMounted = false;
      });
    }

    function destroy() {
      {
        warnWhen(instance.state.isDestroyed, '`destroy()` was called on an already-destroyed ' + 'instance. This is a no-op but indicates a potential memory leak.');
      }

      if (instance.state.isDestroyed) {
        return;
      }

      isBeingDestroyed = true;
      instance.hide(0);
      removeTriggersFromEventListenersTarget();
      delete reference._tippy;

      if (instance.popperInstance) {
        instance.popperInstance.destroy();
      }

      isBeingDestroyed = false;
      instance.state.isDestroyed = true;
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
      warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, '`tippy()` was passed a targets argument that will create more than ' + 'one tippy instance, but only a single element was supplied as the ' + '`content` prop. This means the content will only be appended to the ' + 'last tippy element of the list. Instead, use a function that ' + 'returns a cloned version of the element instead, or pass the ' + '.innerHTML of the element.');
    }

    var instances = elements.reduce(function (acc, reference) {
      var instance = reference && createTippy(reference, props);

      if (instance) {
        {
          validateExtraPropsFunctionality(instance, optionalProps);
        }

        acc.push(instance);
      }

      return acc;
    }, []);
    return isRealElement(targets) ? instances[0] : instances;
  }

  tippy.version = version;
  tippy.defaultProps = defaultProps;
  tippy.currentInput = currentInput;
  /**
   * Mutates the defaultProps object by setting the props specified
   */

  tippy.setDefaultProps = function (partialProps) {
    {
      validateProps(partialProps);
    }

    Object.keys(partialProps).forEach(function (key) {
      // @ts-ignore
      defaultProps[key] = partialProps[key];
    });
  };
  /**
   * Hides all visible poppers on the document
   */


  tippy.hideAll = function (_temp) {
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
  };

  {
    Object.defineProperty(tippy, 'group', {
      value: function value() {
        warnWhen(true, '`tippy.group()` was removed in v5 and replaced with ' + '`createSingleton()`. Read more here: ' + 'https://atomiks.github.io/tippyjs/addons#singleton');
      },
      enumerable: false
    });
    Object.defineProperty(tippy, 'setDefaults', {
      value: function value() {
        warnWhen(true, '`tippy.setDefaults()` was renamed to `tippy.setDefaultProps()` in v5.');
      },
      enumerable: false
    });
    Object.defineProperty(tippy, 'defaults', {
      get: function get() {
        warnWhen(true, 'The `tippy.defaults` property was renamed to `tippy.defaultProps` ' + 'in v5.');
        return undefined;
      },
      enumerable: false
    });
  }
  /**
   * Auto-init tooltips for elements with a `data-tippy="..."` attribute
   */


  function autoInit() {
    arrayFrom(document.querySelectorAll('[data-tippy]')).forEach(function (el) {
      var content = el.getAttribute('data-tippy');

      if (content) {
        tippy(el, {
          content: content
        });
      }
    });
  }

  if (isBrowser) {
    setTimeout(autoInit);
  }

  return tippy;

}(Popper));
//# sourceMappingURL=tippy.iife.js.map
