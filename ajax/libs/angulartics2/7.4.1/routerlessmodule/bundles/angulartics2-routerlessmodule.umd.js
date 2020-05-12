(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angulartics2')) :
    typeof define === 'function' && define.amd ? define('angulartics2/routerlessmodule', ['exports', '@angular/core', 'angulartics2'], factory) :
    (factory((global.angulartics2 = global.angulartics2 || {}, global.angulartics2.routerlessmodule = {}),global.ng.core,global.angulartics2));
}(this, (function (exports,core,angulartics2) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Angulartics2RouterlessModule = /** @class */ (function () {
        function Angulartics2RouterlessModule() {
        }
        /**
         * @param {?=} settings
         * @return {?}
         */
        Angulartics2RouterlessModule.forRoot = /**
         * @param {?=} settings
         * @return {?}
         */
            function (settings) {
                if (settings === void 0) {
                    settings = {};
                }
                return {
                    ngModule: Angulartics2RouterlessModule,
                    providers: [
                        { provide: angulartics2.ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                        angulartics2.RouterlessTracking,
                        angulartics2.Angulartics2,
                    ],
                };
            };
        Angulartics2RouterlessModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [angulartics2.Angulartics2OnModule],
                    },] }
        ];
        return Angulartics2RouterlessModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Angulartics2RouterlessModule = Angulartics2RouterlessModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angulartics2-routerlessmodule.umd.js.map