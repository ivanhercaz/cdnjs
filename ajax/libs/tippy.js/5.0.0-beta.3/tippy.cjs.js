/**!
* tippy.js v5.0.0-beta.3
* (c) 2017-2019 atomiks
* MIT License
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./tippy.chunk.cjs.js');
require('popper.js');

/**
 * Re-uses a single tippy element for many different tippy instances.
 * Replaces v4's `tippy.group()`.
 */

function createSingleton(tippyInstances, optionalProps) {
  if (process.env.NODE_ENV !== "production") {
    index.throwErrorWhen(!Array.isArray(tippyInstances), index.createInvalidCreateSingletonArgumentError(String(tippyInstances)));
  }

  tippyInstances.forEach(function (instance) {
    instance.disable();
  });
  var currentAria;
  var currentTarget;

  var _defaultProps$optiona = index._extends({}, index.defaultProps, {}, optionalProps),
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
  var singleton = index.tippy(document.createElement('div'), index._extends({
    aria: null,
    triggerTarget: references,
    onMount: function onMount(instance) {
      index.preserveInvocation(_onMount, instance.props.onMount, [instance]);
      handleAriaDescribedByAttribute(instance.popperChildren.tooltip.id, instance.props.interactive, true);
    },
    onUntrigger: function onUntrigger(instance, event) {
      index.preserveInvocation(_onUntrigger, instance.props.onUntrigger, [instance, event]);
      handleAriaDescribedByAttribute(instance.popperChildren.tooltip.id, instance.props.interactive, false);
    },
    onTrigger: function onTrigger(instance, event) {
      index.preserveInvocation(_onTrigger, instance.props.onTrigger, [instance, event]);
      var target = event.currentTarget;
      var index$1 = references.indexOf(target);
      currentTarget = target;
      currentAria = aria;

      if (instance.state.isVisible) {
        handleAriaDescribedByAttribute(instance.popperChildren.tooltip.id, instance.props.interactive, true);
      }

      instance.setContent(tippyInstances[index$1].props.content);

      instance.reference.getBoundingClientRect = function () {
        return target.getBoundingClientRect();
      }; // @ts-ignore - awaiting popper.js@1.16.0 release


      instance.reference.referenceNode = instance.props.appendTo === 'parent' ? target.parentNode : index.invokeWithArgsOrReturn(instance.props.appendTo, [target]);
    },
    onPropsUpdated: function onPropsUpdated(instance, partialProps) {
      index.preserveInvocation(_onPropsUpdated, instance.props.onPropsUpdated, [instance]);
      aria = index.useIfDefined(partialProps.aria, aria);
      _onTrigger = index.useIfDefined(partialProps.onTrigger, _onTrigger);
      _onMount = index.useIfDefined(partialProps.onMount, _onMount);
      _onUntrigger = index.useIfDefined(partialProps.onUntrigger, _onUntrigger);
      _onPropsUpdated = index.useIfDefined(partialProps.onPropsUpdated, _onPropsUpdated);
      _onDestroy = index.useIfDefined(partialProps.onDestroy, _onDestroy);
    },
    onDestroy: function onDestroy(instance) {
      index.preserveInvocation(_onDestroy, instance.props.onDestroy, [instance]);
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
  if (process.env.NODE_ENV !== "production") {
    index.throwErrorWhen(!props || !props.target, index.MISSING_TARGET_WARNING);
  }

  var listeners = [];
  var childTippyInstances = [];
  var target = props.target;
  var nativeProps = index.removeProperties(props, ['target']);
  var trigger = props.trigger || index.tippy.defaultProps.trigger;
  var returnValue = index.tippy(targets, index._extends({}, nativeProps, {
    trigger: 'manual'
  }));

  function onTrigger(event) {
    if (event.target) {
      var targetNode = event.target.closest(target);

      if (targetNode) {
        var instance = index.tippy(targetNode, index._extends({}, nativeProps, {
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
    index.splitBySpaces(trigger).forEach(function (eventType) {
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
    placement = index.useIfDefined(props.placement, placement);
    flipOnUpdate = index.useIfDefined(props.flipOnUpdate, flipOnUpdate);
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


    var isCursorOverReference = index.closestCallback(event.target, function (el) {
      return el === reference;
    });
    var rect = reference.getBoundingClientRect();
    var followCursor = instance.props.followCursor;
    var isHorizontal = followCursor === 'horizontal';
    var isVertical = followCursor === 'vertical';
    var isVerticalPlacement = index.includes(['top', 'bottom'], index.getBasePlacement(instance.state.currentPlacement)); // The virtual reference needs some size to prevent itself from overflowing

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


    if (index.currentInput.isTouch || instance.props.followCursor === 'initial' && instance.state.isVisible) {
      removeListener();
    }
  }

  return {
    onCreate: function onCreate() {
      setPrivateProps(instance.props);
      setNormalizedPlacement();
      var popperOptions = instance.props.popperOptions;
      instance.setProps({
        popperOptions: index._extends({}, popperOptions, {
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
      index.currentInput.isTouch || firstTriggerEventType !== 'focus' && instance.props.followCursor !== true) {
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
      !(event.type === 'focus' && index.currentInput.isTouch) && !(instance.state.isMounted && instance.props.followCursor === 'initial')) {
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

exports.default = index.tippy;
exports.hideAll = index.hideAll;
exports.createSingleton = createSingleton;
exports.delegate = delegate;
exports.followCursor = followCursor;
exports.sticky = sticky;
//# sourceMappingURL=tippy.cjs.js.map
