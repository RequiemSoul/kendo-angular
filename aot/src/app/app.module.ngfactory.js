/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from '@angular/forms';
import * as import5 from '@angular/http';
import * as import6 from '@angular/platform-browser/animations';
import * as import7 from '@progress/kendo-angular-buttons/dist/es/button/button.module';
import * as import8 from '@progress/kendo-angular-buttons/dist/es/buttongroup/buttongroup.module';
import * as import9 from '@progress/kendo-angular-popup/dist/es/popup.module';
import * as import10 from '@progress/kendo-angular-buttons/dist/es/listbutton/list.module';
import * as import11 from '@progress/kendo-angular-buttons/dist/es/splitbutton/splitbutton.module';
import * as import12 from '@progress/kendo-angular-buttons/dist/es/dropdownbutton/dropdownbutton.module';
import * as import13 from '@progress/kendo-angular-buttons/dist/es/buttons.module';
import * as import14 from '@progress/kendo-angular-popup/dist/es/popup.service';
import * as import15 from '../../node_modules/@progress/kendo-angular-popup/dist/es/popup.component.ngfactory';
import * as import16 from './app.component.ngfactory';
import * as import17 from '@angular/animations/browser';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import15.PopupComponentNgFactory,
            import16.AppComponentNgFactory
        ], [import16.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_20", {
        get: function () {
            if ((this.__LOCALE_ID_20 == null)) {
                (this.__LOCALE_ID_20 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_21", {
        get: function () {
            if ((this.__NgLocalization_21 == null)) {
                (this.__NgLocalization_21 = new import2.NgLocaleLocalization(this._LOCALE_ID_20));
            }
            return this.__NgLocalization_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_22", {
        get: function () {
            if ((this.__Compiler_22 == null)) {
                (this.__Compiler_22 = new import0.Compiler());
            }
            return this.__Compiler_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_23", {
        get: function () {
            if ((this.__APP_ID_23 == null)) {
                (this.__APP_ID_23 = import0.ɵg());
            }
            return this.__APP_ID_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_24", {
        get: function () {
            if ((this.__IterableDiffers_24 == null)) {
                (this.__IterableDiffers_24 = import0.ɵl());
            }
            return this.__IterableDiffers_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_25", {
        get: function () {
            if ((this.__KeyValueDiffers_25 == null)) {
                (this.__KeyValueDiffers_25 = import0.ɵm());
            }
            return this.__KeyValueDiffers_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_26", {
        get: function () {
            if ((this.__DomSanitizer_26 == null)) {
                (this.__DomSanitizer_26 = new import3.ɵe(this.parent.get(import3.DOCUMENT)));
            }
            return this.__DomSanitizer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_27", {
        get: function () {
            if ((this.__Sanitizer_27 == null)) {
                (this.__Sanitizer_27 = this._DomSanitizer_26);
            }
            return this.__Sanitizer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_28", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_28 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_28 = new import3.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_29", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_29 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_29 = [
                    new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
                    new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT), this._HAMMER_GESTURE_CONFIG_28)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_30", {
        get: function () {
            if ((this.__EventManager_30 == null)) {
                (this.__EventManager_30 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_29, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_31", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_31 == null)) {
                (this.__ɵDomSharedStylesHost_31 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT)));
            }
            return this.__ɵDomSharedStylesHost_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_32", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_32 == null)) {
                (this.__ɵDomRendererFactory2_32 = new import3.ɵDomRendererFactory2(this._EventManager_30, this._ɵDomSharedStylesHost_31));
            }
            return this.__ɵDomRendererFactory2_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_33", {
        get: function () {
            if ((this.__AnimationDriver_33 == null)) {
                (this.__AnimationDriver_33 = import6.ɵb());
            }
            return this.__AnimationDriver_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275AnimationStyleNormalizer_34", {
        get: function () {
            if ((this.__ɵAnimationStyleNormalizer_34 == null)) {
                (this.__ɵAnimationStyleNormalizer_34 = import6.ɵc());
            }
            return this.__ɵAnimationStyleNormalizer_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275AnimationEngine_35", {
        get: function () {
            if ((this.__ɵAnimationEngine_35 == null)) {
                (this.__ɵAnimationEngine_35 = new import6.ɵa(this._AnimationDriver_33, this._ɵAnimationStyleNormalizer_34));
            }
            return this.__ɵAnimationEngine_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_36", {
        get: function () {
            if ((this.__RendererFactory2_36 == null)) {
                (this.__RendererFactory2_36 = import6.ɵd(this._ɵDomRendererFactory2_32, this._ɵAnimationEngine_35, this.parent.get(import0.NgZone)));
            }
            return this.__RendererFactory2_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_37", {
        get: function () {
            if ((this.__ɵSharedStylesHost_37 == null)) {
                (this.__ɵSharedStylesHost_37 = this._ɵDomSharedStylesHost_31);
            }
            return this.__ɵSharedStylesHost_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_38", {
        get: function () {
            if ((this.__Testability_38 == null)) {
                (this.__Testability_38 = new import0.Testability(this.parent.get(import0.NgZone)));
            }
            return this.__Testability_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_39", {
        get: function () {
            if ((this.__Meta_39 == null)) {
                (this.__Meta_39 = new import3.Meta(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Meta_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_40", {
        get: function () {
            if ((this.__Title_40 == null)) {
                (this.__Title_40 = new import3.Title(this.parent.get(import3.DOCUMENT)));
            }
            return this.__Title_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_41", {
        get: function () {
            if ((this.__ɵi_41 == null)) {
                (this.__ɵi_41 = new import4.ɵi());
            }
            return this.__ɵi_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_42", {
        get: function () {
            if ((this.__BrowserXhr_42 == null)) {
                (this.__BrowserXhr_42 = new import5.BrowserXhr());
            }
            return this.__BrowserXhr_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_43", {
        get: function () {
            if ((this.__ResponseOptions_43 == null)) {
                (this.__ResponseOptions_43 = new import5.BaseResponseOptions());
            }
            return this.__ResponseOptions_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_44", {
        get: function () {
            if ((this.__XSRFStrategy_44 == null)) {
                (this.__XSRFStrategy_44 = import5.ɵb());
            }
            return this.__XSRFStrategy_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_45", {
        get: function () {
            if ((this.__XHRBackend_45 == null)) {
                (this.__XHRBackend_45 = new import5.XHRBackend(this._BrowserXhr_42, this._ResponseOptions_43, this._XSRFStrategy_44));
            }
            return this.__XHRBackend_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_46", {
        get: function () {
            if ((this.__RequestOptions_46 == null)) {
                (this.__RequestOptions_46 = new import5.BaseRequestOptions());
            }
            return this.__RequestOptions_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_47", {
        get: function () {
            if ((this.__Http_47 == null)) {
                (this.__Http_47 = import5.ɵc(this._XHRBackend_45, this._RequestOptions_46));
            }
            return this.__Http_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PopupService_48", {
        get: function () {
            if ((this.__PopupService_48 == null)) {
                (this.__PopupService_48 = new import14.PopupService(this._ApplicationRef_5, this.componentFactoryResolver, this, this.parent.get(import14.POPUP_CONTAINER, null)));
            }
            return this.__PopupService_48;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ErrorHandler_1 = import3.ɵa();
        this._APP_INITIALIZER_2 = [
            import0.ɵo,
            import3.ɵc(this.parent.get(import3.NgProbeToken, null), this.parent.get(import0.NgProbeToken, null))
        ];
        this._ApplicationInitStatus_3 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_2);
        this._ɵf_4 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_3);
        this._ApplicationRef_5 = this._ɵf_4;
        this._ApplicationModule_6 = new import0.ApplicationModule(this._ApplicationRef_5);
        this._BrowserModule_7 = new import3.BrowserModule(this.parent.get(import3.BrowserModule, null));
        this._ɵba_8 = new import4.ɵba();
        this._FormsModule_9 = new import4.FormsModule();
        this._HttpModule_10 = new import5.HttpModule();
        this._BrowserAnimationsModule_11 = new import6.BrowserAnimationsModule();
        this._ButtonModule_12 = new import7.ButtonModule();
        this._ButtonGroupModule_13 = new import8.ButtonGroupModule();
        this._PopupModule_14 = new import9.PopupModule();
        this._ListModule_15 = new import10.ListModule();
        this._SplitButtonModule_16 = new import11.SplitButtonModule();
        this._DropDownButtonModule_17 = new import12.DropDownButtonModule();
        this._ButtonsModule_18 = new import13.ButtonsModule();
        this._AppModule_19 = new import1.AppModule();
        return this._AppModule_19;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_1;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_2;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_3;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_4;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_5;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_6;
        }
        if ((token === import3.BrowserModule)) {
            return this._BrowserModule_7;
        }
        if ((token === import4.ɵba)) {
            return this._ɵba_8;
        }
        if ((token === import4.FormsModule)) {
            return this._FormsModule_9;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_10;
        }
        if ((token === import6.BrowserAnimationsModule)) {
            return this._BrowserAnimationsModule_11;
        }
        if ((token === import7.ButtonModule)) {
            return this._ButtonModule_12;
        }
        if ((token === import8.ButtonGroupModule)) {
            return this._ButtonGroupModule_13;
        }
        if ((token === import9.PopupModule)) {
            return this._PopupModule_14;
        }
        if ((token === import10.ListModule)) {
            return this._ListModule_15;
        }
        if ((token === import11.SplitButtonModule)) {
            return this._SplitButtonModule_16;
        }
        if ((token === import12.DropDownButtonModule)) {
            return this._DropDownButtonModule_17;
        }
        if ((token === import13.ButtonsModule)) {
            return this._ButtonsModule_18;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_19;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_20;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_21;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_22;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_23;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_24;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_25;
        }
        if ((token === import3.DomSanitizer)) {
            return this._DomSanitizer_26;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_27;
        }
        if ((token === import3.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_28;
        }
        if ((token === import3.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_29;
        }
        if ((token === import3.EventManager)) {
            return this._EventManager_30;
        }
        if ((token === import3.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_31;
        }
        if ((token === import3.ɵDomRendererFactory2)) {
            return this._ɵDomRendererFactory2_32;
        }
        if ((token === import17.AnimationDriver)) {
            return this._AnimationDriver_33;
        }
        if ((token === import17.ɵAnimationStyleNormalizer)) {
            return this._ɵAnimationStyleNormalizer_34;
        }
        if ((token === import17.ɵAnimationEngine)) {
            return this._ɵAnimationEngine_35;
        }
        if ((token === import0.RendererFactory2)) {
            return this._RendererFactory2_36;
        }
        if ((token === import3.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_37;
        }
        if ((token === import0.Testability)) {
            return this._Testability_38;
        }
        if ((token === import3.Meta)) {
            return this._Meta_39;
        }
        if ((token === import3.Title)) {
            return this._Title_40;
        }
        if ((token === import4.ɵi)) {
            return this._ɵi_41;
        }
        if ((token === import5.BrowserXhr)) {
            return this._BrowserXhr_42;
        }
        if ((token === import5.ResponseOptions)) {
            return this._ResponseOptions_43;
        }
        if ((token === import5.XSRFStrategy)) {
            return this._XSRFStrategy_44;
        }
        if ((token === import5.XHRBackend)) {
            return this._XHRBackend_45;
        }
        if ((token === import5.RequestOptions)) {
            return this._RequestOptions_46;
        }
        if ((token === import5.Http)) {
            return this._Http_47;
        }
        if ((token === import14.PopupService)) {
            return this._PopupService_48;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_4.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_31 && this._ɵDomSharedStylesHost_31.ngOnDestroy());
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map