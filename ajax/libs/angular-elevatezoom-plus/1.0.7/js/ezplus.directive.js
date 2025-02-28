(function () {
    'use strict';

    angular.module('ezplus')
        .directive('ezPlus', ezPlus);

    function ezPlus() {
        var service = {
            restrict: 'A',
            scope: {
                ezpModel: '=',
                ezpOptions: '=',
                onComplete: '=ezpOnComplete',
                onDestroy: '=ezpOnDestroy',
                onImageClick: '=ezpOnImageClick',
                onImageSwap: '=ezpOnImageSwap',
                onImageSwapComplete: '=ezpOnImageSwapComplete',
                onShow: '=ezpOnShow',
                onZoomedImageLoaded: '=ezpOnZoomedImageLoaded'
            },
            link: link
        };
        return service;

        ////////////////////////////

        link.$inject = ['$scope', '$element', '$attributes'];
        function link($scope, $element, $attributes) {
            var options = {
                onComplete: function () {
                    if ($scope.onComplete()) {
                        $scope.onComplete()();
                    }
                },
                onDestroy: function () {
                    if ($scope.onDestroy()) {
                        $scope.onDestroy()();
                    }
                },
                onImageClick: function () {
                    if ($scope.onImageClick()) {
                        $scope.onImageClick()();
                    }
                },

                onImageSwap: function () {
                    if ($scope.onImageSwap()) {
                        $scope.onImageSwap()();
                    }
                },
                onImageSwapComplete: function () {
                    if ($scope.onImageSwapComplete()) {
                        $scope.onImageSwapComplete()();
                    }
                },
                onShow: function () {
                    if ($scope.onShow()) {
                        $scope.onShow()();
                    }
                },
                onZoomedImageLoaded: function () {
                    if ($scope.onZoomedImageLoaded()) {
                        $scope.onZoomedImageLoaded()();
                    }
                }
            };

            //generic way that sets all (non-function) parameters of elevate zoom plus.
            if ($scope.ezpOptions) {
                angular.extend(options, $scope.ezpOptions);
            }
            if (options.appendto) {
                options.zoomContainerAppendTo = options.appendto;
            }

            var loader;
            if (options.loader) {
                loader = options.loader;
            }

            $scope.$on("ezp-hidesAll", function (e, msg) {
                var plugin = angular.element($element).data('ezPlus');
                if (plugin) {
                    plugin.showHideWindow('hide');
                    plugin.showHideTint('hide');
                    plugin.showHideLens('hide');
                }
            });
            $scope.$on("ezp-showAll", function (e, msg) {
                var plugin = angular.element($element).data('ezPlus');
                if (plugin) {
                    plugin.showHideWindow('show');
                    plugin.showHideTint('show');
                    plugin.showHideLens('show');
                }
            });
            $scope.$on("ezp-disableZoom", function (e, msg) {
                var plugin = angular.element($element).data('ezPlus');
                if (plugin) {
                    plugin.changeState('disable');
                }
            });
            $scope.$on("ezp-enableZoom", function (e, msg) {
                var plugin = angular.element($element).data('ezPlus');
                if (plugin) {
                    plugin.changeState('enable');
                }
            });
            $scope.$watch('ezpModel', function (newValue, oldValue) {
                var image = newValue;
                var thumbUrl = (image && image.thumb) || '';
                var smallUrl = (image && image.small) || '';
                var largeUrl = (image && image.large) || '';

                var plugin = angular.element($element).data('ezPlus');
                if (plugin) {
                    if (image) {
                        plugin.showHideWindow('hide');
                        plugin.showHideTint('hide');
                        plugin.showHideLens('hide');
                        if (loader) {
                            plugin.swaptheimage(loader, loader);
                        }

                        var initialUrl = getInitialUrl(smallUrl);
                        plugin.swaptheimage(initialUrl, largeUrl);
                    } else {
                        plugin.closeAll();
                    }
                } else {
                    if (image) {

                        var initialUrl = getInitialUrl();
                        if (initialUrl) {
                            $element.attr('src', initialUrl);
                        }

                        $element.attr('data-zoom-image', largeUrl);

                        angular.element($element).ezPlus(options);
                    }
                }

                function getInitialUrl(defaultUrl) {
                    var initialUrl = defaultUrl;
                    if (options.initial === 'thumb') {
                        initialUrl = thumbUrl;
                    } else if (options.initial === 'small') {
                        initialUrl = smallUrl;
                    } else if (options.initial === 'large') {
                        initialUrl = largeUrl;
                    }
                    return initialUrl;
                }
            });

            $scope.$on('$destroy', function () {
                $element.remove();
            });


        }
    }

})
();
