var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, Component, ElementRef, OnDestroy, Input, EventEmitter, Renderer2, ContentChild, NgZone, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, transition, animate, useAnimation, animation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { Footer, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
const showAnimation = animation([
    style({ transform: '{{transform}}', opacity: 0 }),
    animate('{{transition}}', style({ transform: 'none', opacity: 1 }))
]);
const hideAnimation = animation([
    animate('{{transition}}', style({ transform: '{{transform}}', opacity: 0 }))
]);
let ConfirmDialog = class ConfirmDialog {
    constructor(el, renderer, confirmationService, zone, cd) {
        this.el = el;
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.zone = zone;
        this.cd = cd;
        this.acceptIcon = 'pi pi-check';
        this.acceptLabel = 'Yes';
        this.acceptVisible = true;
        this.rejectIcon = 'pi pi-times';
        this.rejectLabel = 'No';
        this.rejectVisible = true;
        this.closeOnEscape = true;
        this.blockScroll = true;
        this.closable = true;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.focusTrap = true;
        this.defaultFocus = 'accept';
        this._position = "center";
        this.transformOptions = "scale(0.7)";
        this.subscription = this.confirmationService.requireConfirmation$.subscribe(confirmation => {
            if (!confirmation) {
                this.hide();
                return;
            }
            if (confirmation.key === this.key) {
                this.confirmation = confirmation;
                this.confirmationOptions = {
                    message: this.confirmation.message || this.message,
                    icon: this.confirmation.icon || this.icon,
                    header: this.confirmation.header || this.header,
                    rejectVisible: this.confirmation.rejectVisible == null ? this.rejectVisible : this.confirmation.rejectVisible,
                    acceptVisible: this.confirmation.acceptVisible == null ? this.acceptVisible : this.confirmation.acceptVisible,
                    acceptLabel: this.confirmation.acceptLabel || this.acceptLabel,
                    rejectLabel: this.confirmation.rejectLabel || this.rejectLabel,
                    acceptIcon: this.confirmation.acceptIcon || this.acceptIcon,
                    rejectIcon: this.confirmation.rejectIcon || this.rejectIcon,
                    acceptButtonStyleClass: this.confirmation.acceptButtonStyleClass || this.acceptButtonStyleClass,
                    rejectButtonStyleClass: this.confirmation.rejectButtonStyleClass || this.rejectButtonStyleClass,
                    defaultFocus: this.confirmation.defaultFocus || this.defaultFocus,
                    blockScroll: (this.confirmation.blockScroll === false || this.confirmation.blockScroll === true) ? this.confirmation.blockScroll : this.blockScroll
                };
                if (this.confirmation.accept) {
                    this.confirmation.acceptEvent = new EventEmitter();
                    this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
                }
                if (this.confirmation.reject) {
                    this.confirmation.rejectEvent = new EventEmitter();
                    this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
                }
                this.visible = true;
            }
        });
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        if (this._visible && !this.maskVisible) {
            this.maskVisible = true;
        }
    }
    get position() {
        return this._position;
    }
    ;
    set position(value) {
        this._position = value;
        switch (value) {
            case 'topleft':
            case 'bottomleft':
            case 'left':
                this.transformOptions = "translate3d(-100%, 0px, 0px)";
                break;
            case 'topright':
            case 'bottomright':
            case 'right':
                this.transformOptions = "translate3d(100%, 0px, 0px)";
                break;
            case 'bottom':
                this.transformOptions = "translate3d(0px, 100%, 0px)";
                break;
            case 'top':
                this.transformOptions = "translate3d(0px, -100%, 0px)";
                break;
            default:
                this.transformOptions = "scale(0.7)";
                break;
        }
    }
    option(name) {
        const source = this.confirmationOptions || this;
        if (source.hasOwnProperty(name)) {
            return source[name];
        }
        return undefined;
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.wrapper = this.container.parentElement;
                this.contentContainer = DomHandler.findSingle(this.container, '.ui-dialog-content');
                const element = this.getElementToFocus();
                if (element) {
                    element.focus();
                }
                this.appendContainer();
                this.moveOnTop();
                this.bindGlobalListeners();
                this.enableModality();
                break;
        }
    }
    onAnimationEnd(event) {
        switch (event.toState) {
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    getElementToFocus() {
        switch (this.option('defaultFocus')) {
            case 'accept':
                return DomHandler.findSingle(this.container, 'button.ui-confirmdialog-acceptbutton');
            case 'reject':
                return DomHandler.findSingle(this.container, 'button.ui-confirmdialog-rejectbutton');
            case 'close':
                return DomHandler.findSingle(this.container, 'a.ui-dialog-titlebar-close');
            case 'none':
                return null;
            //backward compatibility
            default:
                return DomHandler.findSingle(this.container, 'button.ui-confirmdialog-acceptbutton');
        }
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.wrapper);
            else
                DomHandler.appendChild(this.wrapper, this.appendTo);
        }
    }
    restoreAppend() {
        if (this.wrapper && this.appendTo) {
            this.el.nativeElement.appendChild(this.wrapper);
        }
    }
    enableModality() {
        if (this.option('blockScroll')) {
            DomHandler.addClass(document.body, 'ui-overflow-hidden');
        }
    }
    disableModality() {
        this.maskVisible = false;
        if (this.option('blockScroll')) {
            DomHandler.removeClass(document.body, 'ui-overflow-hidden');
        }
        if (this.container) {
            this.cd.detectChanges();
        }
    }
    close(event) {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        event.preventDefault();
    }
    hide() {
        this.visible = false;
        this.confirmation = null;
        this.confirmationOptions = null;
    }
    moveOnTop() {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
            this.wrapper.style.zIndex = String(this.baseZIndex + (DomHandler.zindex - 1));
        }
    }
    getMaskClass() {
        let maskClass = { 'ui-widget-overlay ui-dialog-mask': true, 'ui-dialog-visible': this.maskVisible, 'ui-dialog-mask-scrollblocker': this.blockScroll };
        maskClass[this.getPositionClass().toString()] = true;
        return maskClass;
    }
    getPositionClass() {
        const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
        const pos = positions.find(item => item === this.position);
        return pos ? `ui-dialog-${pos}` : '';
    }
    bindGlobalListeners() {
        if ((this.closeOnEscape && this.closable) || this.focusTrap && !this.documentEscapeListener) {
            this.documentEscapeListener = this.renderer.listen('document', 'keydown', (event) => {
                if (event.which == 27 && (this.closeOnEscape && this.closable)) {
                    if (parseInt(this.container.style.zIndex) === (DomHandler.zindex + this.baseZIndex) && this.visible) {
                        this.close(event);
                    }
                }
                if (event.which === 9 && this.focusTrap) {
                    event.preventDefault();
                    let focusableElements = DomHandler.getFocusableElements(this.container);
                    if (focusableElements && focusableElements.length > 0) {
                        if (!document.activeElement) {
                            focusableElements[0].focus();
                        }
                        else {
                            let focusedIndex = focusableElements.indexOf(document.activeElement);
                            if (event.shiftKey) {
                                if (focusedIndex == -1 || focusedIndex === 0)
                                    focusableElements[focusableElements.length - 1].focus();
                                else
                                    focusableElements[focusedIndex - 1].focus();
                            }
                            else {
                                if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                    focusableElements[0].focus();
                                else
                                    focusableElements[focusedIndex + 1].focus();
                            }
                        }
                    }
                }
            });
        }
    }
    unbindGlobalListeners() {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    }
    onOverlayHide() {
        this.disableModality();
        this.unbindGlobalListeners();
        this.container = null;
    }
    ngOnDestroy() {
        this.restoreAppend();
        this.onOverlayHide();
        this.subscription.unsubscribe();
    }
    accept() {
        if (this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide();
    }
    reject() {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
    }
};
ConfirmDialog.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ConfirmationService },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], ConfirmDialog.prototype, "header", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "icon", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "message", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "style", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "styleClass", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "acceptIcon", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "acceptLabel", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "acceptVisible", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "rejectIcon", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "rejectLabel", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "rejectVisible", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "acceptButtonStyleClass", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "rejectButtonStyleClass", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "closeOnEscape", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "blockScroll", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "rtl", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "closable", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "appendTo", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "key", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "autoZIndex", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "baseZIndex", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "transitionOptions", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "focusTrap", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "defaultFocus", void 0);
__decorate([
    Input()
], ConfirmDialog.prototype, "visible", null);
__decorate([
    Input()
], ConfirmDialog.prototype, "position", null);
__decorate([
    ContentChild(Footer)
], ConfirmDialog.prototype, "footer", void 0);
__decorate([
    ViewChild('content')
], ConfirmDialog.prototype, "contentViewChild", void 0);
ConfirmDialog = __decorate([
    Component({
        selector: 'p-confirmDialog',
        template: `
        <div [class]="maskStyleClass" [ngClass]="getMaskClass()" *ngIf="maskVisible">
            <div [ngClass]="{'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl}" [ngStyle]="style" [class]="styleClass" (mousedown)="moveOnTop()"
                [@animation]="{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}" (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)" *ngIf="visible">
                <div class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top">
                    <span class="ui-dialog-title" *ngIf="option('header')">{{option('header')}}</span>
                    <div class="ui-dialog-titlebar-icons">
                        <a *ngIf="closable" [ngClass]="{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}" tabindex="0" role="button" (click)="close($event)" (keydown.enter)="close($event)">
                            <span class="pi pi-times"></span>
                        </a>
                    </div>
                </div>
                <div #content class="ui-dialog-content ui-widget-content">
                    <i [ngClass]="'ui-confirmdialog-icon'" [class]="option('icon')" *ngIf="option('icon')"></i>
                    <span class="ui-confirmdialog-message" [innerHTML]="option('message')"></span>
                </div>
                <div class="ui-dialog-footer ui-widget-content" *ngIf="footer">
                    <ng-content select="p-footer"></ng-content>
                </div>
                <div class="ui-dialog-footer ui-widget-content" *ngIf="!footer">
                    <button type="button" pButton [icon]="option('acceptIcon')" [label]="option('acceptLabel')" (click)="accept()" [ngClass]="'ui-confirmdialog-acceptbutton'" [class]="option('acceptButtonStyleClass')" *ngIf="option('acceptVisible')"></button>
                    <button type="button" pButton [icon]="option('rejectIcon')" [label]="option('rejectLabel')" (click)="reject()" [ngClass]="'ui-confirmdialog-rejectbutton'" [class]="option('rejectButtonStyleClass')" *ngIf="option('rejectVisible')"></button>
                </div>
            </div>
        </div>
    `,
        animations: [
            trigger('animation', [
                transition('void => visible', [
                    useAnimation(showAnimation)
                ]),
                transition('visible => void', [
                    useAnimation(hideAnimation)
                ])
            ])
        ],
        changeDetection: ChangeDetectionStrategy.Default
    })
], ConfirmDialog);
export { ConfirmDialog };
let ConfirmDialogModule = class ConfirmDialogModule {
};
ConfirmDialogModule = __decorate([
    NgModule({
        imports: [CommonModule, ButtonModule],
        exports: [ConfirmDialog, ButtonModule, SharedModule],
        declarations: [ConfirmDialog]
    })
], ConfirmDialogModule);
export { ConfirmDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3ByaW1lbmcvY29uZmlybWRpYWxvZy8iLCJzb3VyY2VzIjpbImNvbmZpcm1kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzSyxPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFpQixZQUFZLEVBQUUsU0FBUyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0csT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDaEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUdoRCxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDNUIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDakQsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDdEUsQ0FBQyxDQUFDO0FBRUgsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUs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QUFDO1FBQ2xELFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUNoQyxDQUFDO0dBQ1csbUJBQW1CLENBQUk7U0FBdkIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixPbkRlc3Ryb3ksSW5wdXQsRXZlbnRFbWl0dGVyLFJlbmRlcmVyMixDb250ZW50Q2hpbGQsTmdab25lLFZpZXdDaGlsZCxDaGFuZ2VEZXRlY3RvclJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RyaWdnZXIsc3R5bGUsdHJhbnNpdGlvbixhbmltYXRlLEFuaW1hdGlvbkV2ZW50LCB1c2VBbmltYXRpb24sIGFuaW1hdGlvbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtGb290ZXIsU2hhcmVkTW9kdWxlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHtDb25maXJtYXRpb259IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7Q29uZmlybWF0aW9uU2VydmljZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259ICAgZnJvbSAncnhqcyc7XG5cbmNvbnN0IHNob3dBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAne3t0cmFuc2Zvcm19fScsIG9wYWNpdHk6IDAgfSksXG4gICAgYW5pbWF0ZSgne3t0cmFuc2l0aW9ufX0nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ25vbmUnLCBvcGFjaXR5OiAxIH0pKVxuXSk7XG5cbmNvbnN0IGhpZGVBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAgIGFuaW1hdGUoJ3t7dHJhbnNpdGlvbn19Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd7e3RyYW5zZm9ybX19Jywgb3BhY2l0eTogMCB9KSlcbl0pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtY29uZmlybURpYWxvZycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwibWFza1N0eWxlQ2xhc3NcIiBbbmdDbGFzc109XCJnZXRNYXNrQ2xhc3MoKVwiICpuZ0lmPVwibWFza1Zpc2libGVcIj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyd1aS1kaWFsb2cgdWktY29uZmlybWRpYWxvZyB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbCB1aS1zaGFkb3cnOnRydWUsJ3VpLWRpYWxvZy1ydGwnOnJ0bH1cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKG1vdXNlZG93bik9XCJtb3ZlT25Ub3AoKVwiXG4gICAgICAgICAgICAgICAgW0BhbmltYXRpb25dPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3RyYW5zZm9ybTogdHJhbnNmb3JtT3B0aW9ucywgdHJhbnNpdGlvbjogdHJhbnNpdGlvbk9wdGlvbnN9fVwiIChAYW5pbWF0aW9uLnN0YXJ0KT1cIm9uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiIChAYW5pbWF0aW9uLmRvbmUpPVwib25BbmltYXRpb25FbmQoJGV2ZW50KVwiICpuZ0lmPVwidmlzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1kaWFsb2ctdGl0bGViYXIgdWktd2lkZ2V0LWhlYWRlciB1aS1oZWxwZXItY2xlYXJmaXggdWktY29ybmVyLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVpLWRpYWxvZy10aXRsZVwiICpuZ0lmPVwib3B0aW9uKCdoZWFkZXInKVwiPnt7b3B0aW9uKCdoZWFkZXInKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZGlhbG9nLXRpdGxlYmFyLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImNsb3NhYmxlXCIgW25nQ2xhc3NdPVwieyd1aS1kaWFsb2ctdGl0bGViYXItaWNvbiB1aS1kaWFsb2ctdGl0bGViYXItY2xvc2UgdWktY29ybmVyLWFsbCc6dHJ1ZX1cIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIiAoa2V5ZG93bi5lbnRlcik9XCJjbG9zZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaSBwaS10aW1lc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAjY29udGVudCBjbGFzcz1cInVpLWRpYWxvZy1jb250ZW50IHVpLXdpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cIid1aS1jb25maXJtZGlhbG9nLWljb24nXCIgW2NsYXNzXT1cIm9wdGlvbignaWNvbicpXCIgKm5nSWY9XCJvcHRpb24oJ2ljb24nKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1jb25maXJtZGlhbG9nLW1lc3NhZ2VcIiBbaW5uZXJIVE1MXT1cIm9wdGlvbignbWVzc2FnZScpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1kaWFsb2ctZm9vdGVyIHVpLXdpZGdldC1jb250ZW50XCIgKm5nSWY9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWRpYWxvZy1mb290ZXIgdWktd2lkZ2V0LWNvbnRlbnRcIiAqbmdJZj1cIiFmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbaWNvbl09XCJvcHRpb24oJ2FjY2VwdEljb24nKVwiIFtsYWJlbF09XCJvcHRpb24oJ2FjY2VwdExhYmVsJylcIiAoY2xpY2spPVwiYWNjZXB0KClcIiBbbmdDbGFzc109XCIndWktY29uZmlybWRpYWxvZy1hY2NlcHRidXR0b24nXCIgW2NsYXNzXT1cIm9wdGlvbignYWNjZXB0QnV0dG9uU3R5bGVDbGFzcycpXCIgKm5nSWY9XCJvcHRpb24oJ2FjY2VwdFZpc2libGUnKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIFtpY29uXT1cIm9wdGlvbigncmVqZWN0SWNvbicpXCIgW2xhYmVsXT1cIm9wdGlvbigncmVqZWN0TGFiZWwnKVwiIChjbGljayk9XCJyZWplY3QoKVwiIFtuZ0NsYXNzXT1cIid1aS1jb25maXJtZGlhbG9nLXJlamVjdGJ1dHRvbidcIiBbY2xhc3NdPVwib3B0aW9uKCdyZWplY3RCdXR0b25TdHlsZUNsYXNzJylcIiAqbmdJZj1cIm9wdGlvbigncmVqZWN0VmlzaWJsZScpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICB1c2VBbmltYXRpb24oc2hvd0FuaW1hdGlvbilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHVzZUFuaW1hdGlvbihoaWRlQW5pbWF0aW9uKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFjY2VwdEljb246IHN0cmluZyA9ICdwaSBwaS1jaGVjayc7XG5cbiAgICBASW5wdXQoKSBhY2NlcHRMYWJlbDogc3RyaW5nID0gJ1llcyc7XG5cbiAgICBASW5wdXQoKSBhY2NlcHRWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHJlamVjdEljb246IHN0cmluZyA9ICdwaSBwaS10aW1lcyc7XG5cbiAgICBASW5wdXQoKSByZWplY3RMYWJlbDogc3RyaW5nID0gJ05vJztcblxuICAgIEBJbnB1dCgpIHJlamVjdFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgYWNjZXB0QnV0dG9uU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcmVqZWN0QnV0dG9uU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgY2xvc2VPbkVzY2FwZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBibG9ja1Njcm9sbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBydGw6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBjbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBhcHBlbmRUbzogYW55O1xuXG4gICAgQElucHV0KCkga2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJzE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuICAgIEBJbnB1dCgpIGZvY3VzVHJhcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBkZWZhdWx0Rm9jdXM6IHN0cmluZyA9ICdhY2NlcHQnO1xuXG4gICAgQElucHV0KCkgZ2V0IHZpc2libGUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gICAgfVxuICAgIHNldCB2aXNpYmxlKHZhbHVlOmFueSkge1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Zpc2libGUgJiYgIXRoaXMubWFza1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFza1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBASW5wdXQoKSBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICAgIH07XG5cbiAgICBzZXQgcG9zaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlO1xuXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcGxlZnQnOlxuICAgICAgICAgICAgY2FzZSAnYm90dG9tbGVmdCc6XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybU9wdGlvbnMgPSBcInRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9wcmlnaHQnOlxuICAgICAgICAgICAgY2FzZSAnYm90dG9tcmlnaHQnOlxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtT3B0aW9ucyA9IFwidHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1PcHRpb25zID0gXCJ0cmFuc2xhdGUzZCgwcHgsIDEwMCUsIDBweClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybU9wdGlvbnMgPSBcInRyYW5zbGF0ZTNkKDBweCwgLTEwMCUsIDBweClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybU9wdGlvbnMgPSBcInNjYWxlKDAuNylcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQENvbnRlbnRDaGlsZChGb290ZXIpIGZvb3RlcjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb247XG5cbiAgICBfdmlzaWJsZTogYm9vbGVhbjtcblxuICAgIG1hc2tWaXNpYmxlOiBib29sZWFuO1xuXG4gICAgZG9jdW1lbnRFc2NhcGVMaXN0ZW5lcjogYW55O1xuXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIHdyYXBwZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgY29udGVudENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIHByZVdpZHRoOiBudW1iZXI7XG5cbiAgICBfcG9zaXRpb246IHN0cmluZyA9IFwiY2VudGVyXCI7XG5cbiAgICB0cmFuc2Zvcm1PcHRpb25zOiBhbnkgPSBcInNjYWxlKDAuNylcIjtcblxuICAgIGNvbmZpcm1hdGlvbk9wdGlvbnM6IENvbmZpcm1hdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSwgcHVibGljIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UucmVxdWlyZUNvbmZpcm1hdGlvbiQuc3Vic2NyaWJlKGNvbmZpcm1hdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbmZpcm1hdGlvbi5rZXkgPT09IHRoaXMua2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24gPSBjb25maXJtYXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb25PcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLmNvbmZpcm1hdGlvbi5tZXNzYWdlfHx0aGlzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246IHRoaXMuY29uZmlybWF0aW9uLmljb258fHRoaXMuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0aGlzLmNvbmZpcm1hdGlvbi5oZWFkZXJ8fHRoaXMuaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICByZWplY3RWaXNpYmxlOiB0aGlzLmNvbmZpcm1hdGlvbi5yZWplY3RWaXNpYmxlID09IG51bGwgPyB0aGlzLnJlamVjdFZpc2libGUgOiB0aGlzLmNvbmZpcm1hdGlvbi5yZWplY3RWaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICBhY2NlcHRWaXNpYmxlOiB0aGlzLmNvbmZpcm1hdGlvbi5hY2NlcHRWaXNpYmxlID09IG51bGwgPyB0aGlzLmFjY2VwdFZpc2libGUgOiB0aGlzLmNvbmZpcm1hdGlvbi5hY2NlcHRWaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICBhY2NlcHRMYWJlbDogdGhpcy5jb25maXJtYXRpb24uYWNjZXB0TGFiZWx8fHRoaXMuYWNjZXB0TGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdExhYmVsOiB0aGlzLmNvbmZpcm1hdGlvbi5yZWplY3RMYWJlbHx8dGhpcy5yZWplY3RMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0SWNvbjogdGhpcy5jb25maXJtYXRpb24uYWNjZXB0SWNvbiB8fCB0aGlzLmFjY2VwdEljb24sXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdEljb246IHRoaXMuY29uZmlybWF0aW9uLnJlamVjdEljb24gfHwgdGhpcy5yZWplY3RJY29uLFxuICAgICAgICAgICAgICAgICAgICBhY2NlcHRCdXR0b25TdHlsZUNsYXNzOiB0aGlzLmNvbmZpcm1hdGlvbi5hY2NlcHRCdXR0b25TdHlsZUNsYXNzIHx8IHRoaXMuYWNjZXB0QnV0dG9uU3R5bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0QnV0dG9uU3R5bGVDbGFzczogdGhpcy5jb25maXJtYXRpb24ucmVqZWN0QnV0dG9uU3R5bGVDbGFzcyB8fCB0aGlzLnJlamVjdEJ1dHRvblN0eWxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRGb2N1czogdGhpcy5jb25maXJtYXRpb24uZGVmYXVsdEZvY3VzIHx8IHRoaXMuZGVmYXVsdEZvY3VzLFxuICAgICAgICAgICAgICAgICAgICBibG9ja1Njcm9sbDogKHRoaXMuY29uZmlybWF0aW9uLmJsb2NrU2Nyb2xsID09PSBmYWxzZSB8fCB0aGlzLmNvbmZpcm1hdGlvbi5ibG9ja1Njcm9sbCA9PT0gdHJ1ZSkgPyB0aGlzLmNvbmZpcm1hdGlvbi5ibG9ja1Njcm9sbCA6IHRoaXMuYmxvY2tTY3JvbGxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlybWF0aW9uLmFjY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbi5hY2NlcHRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24uYWNjZXB0RXZlbnQuc3Vic2NyaWJlKHRoaXMuY29uZmlybWF0aW9uLmFjY2VwdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlybWF0aW9uLnJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbi5yZWplY3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24ucmVqZWN0RXZlbnQuc3Vic2NyaWJlKHRoaXMuY29uZmlybWF0aW9uLnJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3B0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLmNvbmZpcm1hdGlvbk9wdGlvbnMgfHwgdGhpcztcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIG9uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGV2ZW50LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy5jb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5jb250YWluZXIsICcudWktZGlhbG9nLWNvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnRUb0ZvY3VzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlT25Ub3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZU1vZGFsaXR5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQW5pbWF0aW9uRW5kKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQudG9TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAndm9pZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlIaWRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEVsZW1lbnRUb0ZvY3VzKCkge1xuICAgICAgICBzd2l0Y2godGhpcy5vcHRpb24oJ2RlZmF1bHRGb2N1cycpKSB7XG4gICAgICAgICAgICBjYXNlICdhY2NlcHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5jb250YWluZXIsICdidXR0b24udWktY29uZmlybWRpYWxvZy1hY2NlcHRidXR0b24nKTtcblxuICAgICAgICAgICAgY2FzZSAncmVqZWN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuY29udGFpbmVyLCAnYnV0dG9uLnVpLWNvbmZpcm1kaWFsb2ctcmVqZWN0YnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuY29udGFpbmVyLCAnYS51aS1kaWFsb2ctdGl0bGViYXItY2xvc2UnKTtcblxuICAgICAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIC8vYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuY29udGFpbmVyLCAnYnV0dG9uLnVpLWNvbmZpcm1kaWFsb2ctYWNjZXB0YnV0dG9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRDb250YWluZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyA9PT0gJ2JvZHknKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlciwgdGhpcy5hcHBlbmRUbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlQXBwZW5kKCkge1xuICAgICAgICBpZiAodGhpcy53cmFwcGVyICYmIHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlTW9kYWxpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbignYmxvY2tTY3JvbGwnKSkge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAndWktb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlTW9kYWxpdHkoKSB7XG4gICAgICAgIHRoaXMubWFza1Zpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb24oJ2Jsb2NrU2Nyb2xsJykpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3VpLW92ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5jb25maXJtYXRpb24ucmVqZWN0RXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLnJlamVjdEV2ZW50LmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9uT3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgbW92ZU9uVG9wKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvWkluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKCsrRG9tSGFuZGxlci56aW5kZXgpKTtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKERvbUhhbmRsZXIuemluZGV4IC0gMSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWFza0NsYXNzKCkge1xuICAgICAgICBsZXQgbWFza0NsYXNzID0geyd1aS13aWRnZXQtb3ZlcmxheSB1aS1kaWFsb2ctbWFzayc6IHRydWUsICd1aS1kaWFsb2ctdmlzaWJsZSc6IHRoaXMubWFza1Zpc2libGUsICd1aS1kaWFsb2ctbWFzay1zY3JvbGxibG9ja2VyJzogdGhpcy5ibG9ja1Njcm9sbH07XG4gICAgICAgIG1hc2tDbGFzc1t0aGlzLmdldFBvc2l0aW9uQ2xhc3MoKS50b1N0cmluZygpXSA9IHRydWU7XG4gICAgICAgIHJldHVybiBtYXNrQ2xhc3M7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb25DbGFzcygpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICd0b3BsZWZ0JywgJ3RvcHJpZ2h0JywgJ2JvdHRvbScsICdib3R0b21sZWZ0JywgJ2JvdHRvbXJpZ2h0J107XG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9ucy5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5wb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHBvcyA/IGB1aS1kaWFsb2ctJHtwb3N9YCA6ICcnO1xuICAgIH1cblxuICAgIGJpbmRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICgodGhpcy5jbG9zZU9uRXNjYXBlICYmIHRoaXMuY2xvc2FibGUpIHx8IHRoaXMuZm9jdXNUcmFwICYmICF0aGlzLmRvY3VtZW50RXNjYXBlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRFc2NhcGVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09IDI3ICYmICh0aGlzLmNsb3NlT25Fc2NhcGUgJiYgdGhpcy5jbG9zYWJsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuY29udGFpbmVyLnN0eWxlLnpJbmRleCkgPT09IChEb21IYW5kbGVyLnppbmRleCArIHRoaXMuYmFzZVpJbmRleCkgJiYgdGhpcy52aXNpYmxlKcKge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDkgJiYgdGhpcy5mb2N1c1RyYXApIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9jdXNhYmxlRWxlbWVudHMgPSBEb21IYW5kbGVyLmdldEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMgJiYgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2N1c2VkSW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPT0gLTEgfHwgZm9jdXNlZEluZGV4ID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNlZEluZGV4IC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPT0gLTEgfHwgZm9jdXNlZEluZGV4ID09PSAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2VkSW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudEVzY2FwZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RXNjYXBlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRFc2NhcGVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk92ZXJsYXlIaWRlKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVNb2RhbGl0eSgpO1xuICAgICAgICB0aGlzLnVuYmluZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZUFwcGVuZCgpO1xuICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBhY2NlcHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm1hdGlvbi5hY2NlcHRFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24uYWNjZXB0RXZlbnQuZW1pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmVqZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25maXJtYXRpb24ucmVqZWN0RXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLnJlamVjdEV2ZW50LmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLEJ1dHRvbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0NvbmZpcm1EaWFsb2csQnV0dG9uTW9kdWxlLFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQ29uZmlybURpYWxvZ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybURpYWxvZ01vZHVsZSB7IH1cbiJdfQ==