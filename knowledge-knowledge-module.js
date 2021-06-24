(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["knowledge-knowledge-module"],{

/***/ "/zO+":
/*!************************************************!*\
  !*** ./src/app/knowledge/knowledge.routing.ts ***!
  \************************************************/
/*! exports provided: KnowledgeRouting, routeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeRouting", function() { return KnowledgeRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeds", function() { return routeds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge/knowledge.component */ "Jzt8");





const routes = [
    { path: '', redirectTo: 'interview', pathMatch: 'full' },
    { path: 'interview', component: _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_2__["KnowledgeComponent"] }
    // { path: '**', component: PageNotFoundComponent }
];
class KnowledgeRouting {
}
KnowledgeRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KnowledgeRouting });
KnowledgeRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function KnowledgeRouting_Factory(t) { return new (t || KnowledgeRouting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KnowledgeRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowledgeRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routeds = [
    _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_2__["KnowledgeComponent"]
];


/***/ }),

/***/ "GR68":
/*!******************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js ***!
  \******************************************************************************************/
/*! exports provided: AnimationCurves, AnimationDuration, collapseMotion, fadeMotion, helpMotion, moveUpMotion, notificationMotion, slideAlertMotion, slideMotion, treeCollapseMotion, zoomBadgeMotion, zoomBigMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDuration", function() { return AnimationDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseMotion", function() { return collapseMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeMotion", function() { return fadeMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helpMotion", function() { return helpMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveUpMotion", function() { return moveUpMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationMotion", function() { return notificationMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAlertMotion", function() { return slideAlertMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideMotion", function() { return slideMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeCollapseMotion", function() { return treeCollapseMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomBadgeMotion", function() { return zoomBadgeMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomBigMotion", function() { return zoomBigMotion; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");


/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class AnimationDuration {
}
AnimationDuration.SLOW = '0.3s'; // Modal
AnimationDuration.BASE = '0.2s';
AnimationDuration.FAST = '0.1s'; // Tooltip
class AnimationCurves {
}
AnimationCurves.EASE_BASE_OUT = 'cubic-bezier(0.7, 0.3, 0.1, 1)';
AnimationCurves.EASE_BASE_IN = 'cubic-bezier(0.9, 0, 0.3, 0.7)';
AnimationCurves.EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
AnimationCurves.EASE_IN = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
AnimationCurves.EASE_IN_OUT = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
AnimationCurves.EASE_OUT_BACK = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
AnimationCurves.EASE_IN_BACK = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
AnimationCurves.EASE_IN_OUT_BACK = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
AnimationCurves.EASE_OUT_CIRC = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
AnimationCurves.EASE_IN_CIRC = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
AnimationCurves.EASE_IN_OUT_CIRC = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
AnimationCurves.EASE_OUT_QUINT = 'cubic-bezier(0.23, 1, 0.32, 1)';
AnimationCurves.EASE_IN_QUINT = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
AnimationCurves.EASE_IN_OUT_QUINT = 'cubic-bezier(0.86, 0, 0.07, 1)';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const collapseMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapseMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, overflow: 'hidden', borderTopWidth: '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`))
]);
const treeCollapseMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('treeCollapseMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('nz-tree-node:leave,nz-tree-builtin-node:leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(0, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0, 'padding-bottom': 0 }))])
        ], {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('nz-tree-node:enter,nz-tree-builtin-node:enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', height: 0, opacity: 0, 'padding-bottom': 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(0, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', height: '*', opacity: '*', 'padding-bottom': '*' }))
            ])
        ], {
            optional: true
        })
    ])
]);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const fadeMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])
]);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const helpMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('helpMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(-5px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(-5px)'
        }))
    ])
]);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const moveUpMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveUpMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const notificationMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('notificationMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enterRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enterRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(5%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enterLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enterLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-5%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scaleY(1)',
            transformOrigin: '0% 0%'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear')
    ])
]);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const ANIMATION_TRANSITION_IN = `${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_QUINT}`;
const ANIMATION_TRANSITION_OUT = `${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_QUINT}`;
const slideMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scaleY(0.8)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scaleY(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(ANIMATION_TRANSITION_IN)]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(ANIMATION_TRANSITION_OUT)])
]);
const slideAlertMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideAlertMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT_CIRC}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }))
    ])
]);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const zoomBigMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('zoomBigMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => active', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.8)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_CIRC}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_OUT_CIRC}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.8)'
        }))
    ])
]);
const zoomBadgeMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('zoomBadgeMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_OUT_BACK}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(1) translate(50%, -50%)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_BACK}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0) translate(50%, -50%)'
        }))
    ])
]);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-core-animation.js.map

/***/ }),

/***/ "Jzt8":
/*!************************************************************!*\
  !*** ./src/app/knowledge/knowledge/knowledge.component.ts ***!
  \************************************************************/
/*! exports provided: KnowledgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeComponent", function() { return KnowledgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _knowledge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../knowledge.service */ "brSq");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "EZ1+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _public_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/footer/footer.component */ "C9Yq");








function KnowledgeComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const it_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](it_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", it_r2.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function KnowledgeComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnowledgeComponent_ng_container_4_div_1_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.indexPage == i_r3);
} }
function KnowledgeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.indexPage + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nowData.length);
} }
class KnowledgeComponent {
    constructor(service, message) {
        this.service = service;
        this.message = message;
        this.value = ''; //搜索框
        this.nowData = []; //存放数据
        this.indexPage = 0; //第几页
    }
    ngOnInit() {
        if (localStorage.getItem('value') || localStorage.getItem('indexPage')) { //如果有值，就用值去获取数据
            this.value = localStorage.getItem('value');
            this.submit(this.value, true);
        }
        else {
            this.nowData = this.service.dataList;
        }
    }
    ngOnDestroy() {
        localStorage.removeItem('indexPage');
        localStorage.removeItem('value');
    }
    // 获取焦点
    focus() {
        console.log('focus');
    }
    // 失去焦点
    blur() {
        console.log('blur');
    }
    // 点击取消
    cancel() {
        console.log('cancel');
    }
    // 点击清除
    clear(value) {
        console.log('clear:' + value);
    }
    // 回车触发搜索
    submit(value, isV = false) {
        let arr = [];
        this.service.dataList.forEach(it => {
            if (it.title.indexOf(value) != -1) {
                arr.push(it);
            }
        });
        if (arr.length == 0) {
            if (isV) { //没有数据并且是刷新页面的时候
                if (localStorage.getItem('indexPage')) {
                    this.indexPage = parseInt(localStorage.getItem('indexPage'));
                }
                this.nowData = this.service.dataList;
            }
            else {
                this.message.error('没有匹配到数据');
            }
        }
        else {
            if (isV) {
                if (localStorage.getItem('indexPage')) {
                    this.indexPage = parseInt(localStorage.getItem('indexPage'));
                }
            }
            else {
                this.indexPage = 0;
                localStorage.setItem('value', value);
                localStorage.setItem('indexPage', this.indexPage.toString());
            }
            this.nowData = arr;
        }
    }
    // 输入触发
    change(value) {
        console.log(value);
        let a = '1';
    }
    // 翻页
    turnPage(isBoolean) {
        if (isBoolean) { // 下一页
            if (this.indexPage == this.nowData.length - 1) {
                this.message.warning('已经是最后一条数据了');
                return;
            }
            else {
                this.indexPage++;
            }
        }
        else {
            if (this.indexPage == 0) {
                this.message.warning('已经是第一条数据了');
                return;
            }
            else {
                this.indexPage--;
            }
        }
        localStorage.setItem('indexPage', this.indexPage.toString());
    }
}
KnowledgeComponent.ɵfac = function KnowledgeComponent_Factory(t) { return new (t || KnowledgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"])); };
KnowledgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnowledgeComponent, selectors: [["app-knowledge"]], decls: 11, vars: 9, consts: [[1, "knowledge"], [1, "search"], [3, "placeholder", "defaultValue", "ngModel", "ngModelChange", "onBlur", "onFocus", "onCancel", "onClear", "onSubmit"], [1, "content"], [4, "ngFor", "ngForOf"], ["class", "page", 4, "ngIf"], [1, "left", 3, "click"], [3, "type", "size"], [1, "right", 3, "click"], [4, "ngIf"], [3, "innerHTML"], [1, "page"]], template: function KnowledgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "SearchBar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KnowledgeComponent_Template_SearchBar_ngModelChange_2_listener($event) { return ctx.value = $event; })("onBlur", function KnowledgeComponent_Template_SearchBar_onBlur_2_listener() { return ctx.blur(); })("onFocus", function KnowledgeComponent_Template_SearchBar_onFocus_2_listener() { return ctx.focus(); })("onCancel", function KnowledgeComponent_Template_SearchBar_onCancel_2_listener() { return ctx.cancel(); })("onClear", function KnowledgeComponent_Template_SearchBar_onClear_2_listener() { return ctx.clear(ctx.value); })("onSubmit", function KnowledgeComponent_Template_SearchBar_onSubmit_2_listener() { return ctx.submit(ctx.value); })("ngModelChange", function KnowledgeComponent_Template_SearchBar_ngModelChange_2_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KnowledgeComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KnowledgeComponent_div_5_Template, 6, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnowledgeComponent_Template_a_click_6_listener() { return ctx.turnPage(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "Icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnowledgeComponent_Template_a_click_8_listener() { return ctx.turnPage(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "Icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "\u641C\u7D22")("defaultValue", "\u8FD9\u662F\u9ED8\u8BA4\u503C")("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nowData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nowData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "left")("size", "md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "right")("size", "md");
    } }, directives: [ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_3__["SearchBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _public_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".knowledge[_ngcontent-%COMP%] {\n  position: relative;\n}\n.knowledge[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n}\n.knowledge[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2.5rem 0.5rem 2.2rem;\n}\n.knowledge[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0.5rem;\n  bottom: 2.2rem;\n  font-size: 0.8rem;\n  background: rgba(221, 221, 221, 0.62);\n  padding: 0 0.3rem;\n  border-radius: 0.3rem;\n  color: red;\n}\na[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40%;\n  border-radius: 50%;\n  background: rgba(0, 188, 212, 0.16);\n  height: 1.5rem;\n  width: 1.5rem;\n  text-align: center;\n}\na.left[_ngcontent-%COMP%] {\n  left: 0.2rem;\n}\na.right[_ngcontent-%COMP%] {\n  right: 0.2rem;\n}\n  h1 {\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n  h2 {\n  font-size: 0.7rem;\n  padding-top: 0.4rem;\n}\n  h3 {\n  font-size: 0.6rem;\n  font-weight: bold;\n}\n  p {\n  font-size: 0.6rem;\n}\n  .am-icon-md {\n  height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxrbm93bGVkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFFUjtBQUFJO0VBQ0ksNkJBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBR1o7QUFDQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFBO0VBQ0ksWUFBQTtBQUdKO0FBREE7RUFDSSxhQUFBO0FBSUo7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUdSO0FBREk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLGlCQUFBO0FBR1I7QUFESTtFQUNJLGNBQUE7QUFHUiIsImZpbGUiOiJrbm93bGVkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua25vd2xlZGdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnNlYXJjaHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAyLjVyZW0gMC41cmVtIDIuMnJlbTtcclxuICAgICAgICAucGFnZXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICByaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICBib3R0b206IDIuMnJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMjEgMjIxIDIyMSAvIDYyJSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmF7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxODgsMjEyLDAuMTYpO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmEubGVmdHtcclxuICAgIGxlZnQ6MC4ycmVtO1xyXG59XHJcbmEucmlnaHR7XHJcbiAgICByaWdodDowLjJyZW07XHJcbn1cclxuLy8gXHJcbjo6bmctZGVlcHtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTouOHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTouN3JlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTouNnJlbTtcclxuICAgIH1cclxuICAgIC5hbS1pY29uLW1ke1xyXG4gICAgICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowledgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-knowledge',
                templateUrl: './knowledge.component.html',
                styleUrls: ['./knowledge.component.scss']
            }]
    }], function () { return [{ type: _knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "PScX":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-message.js ***!
  \***********************************************************************************/
/*! exports provided: NzMNComponent, NzMNContainerComponent, NzMNService, NzMessageComponent, NzMessageContainerComponent, NzMessageModule, NzMessageService, NzMessageServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMNComponent", function() { return NzMNComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMNContainerComponent", function() { return NzMNContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMNService", function() { return NzMNService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMessageComponent", function() { return NzMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMessageContainerComponent", function() { return NzMessageContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMessageModule", function() { return NzMessageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMessageService", function() { return NzMessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMessageServiceModule", function() { return NzMessageServiceModule; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "JwMs");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");














/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */








function NzMessageContainerComponent_nz_message_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-message", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("destroyed", function NzMessageContainerComponent_nz_message_1_Template_nz_message_destroyed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.remove($event.id, $event.userAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instance_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("instance", instance_r1);
} }
function NzMessageComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 10);
} }
function NzMessageComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 11);
} }
function NzMessageComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
} }
function NzMessageComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
} }
function NzMessageComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 14);
} }
function NzMessageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r5.instance.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
let globalCounter = 0;
class NzMNService {
    constructor(nzSingletonService, overlay, injector) {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.injector = injector;
    }
    remove(id) {
        if (this.container) {
            if (id) {
                this.container.remove(id);
            }
            else {
                this.container.removeAll();
            }
        }
    }
    getInstanceId() {
        return `${this.componentPrefix}-${globalCounter++}`;
    }
    withContainer(ctor) {
        let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
        if (containerInstance) {
            return containerInstance;
        }
        const overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy: this.overlay.position().global()
        });
        const componentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](ctor, null, this.injector);
        const componentRef = overlayRef.attach(componentPortal);
        const overlayPane = overlayRef.overlayElement;
        overlayPane.style.zIndex = '1010';
        if (!containerInstance) {
            this.container = containerInstance = componentRef.instance;
            this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
        }
        return containerInstance;
    }
}
class NzMNContainerComponent {
    constructor(cdr, nzConfigService) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.instances = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateConfig();
    }
    ngOnInit() {
        this.subscribeConfigChange();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    create(data) {
        const instance = this.onCreate(data);
        if (this.instances.length >= this.config.nzMaxStack) {
            this.instances = this.instances.slice(1);
        }
        this.instances = [...this.instances, instance];
        this.readyInstances();
        return instance;
    }
    remove(id, userAction = false) {
        this.instances.some((instance, index) => {
            if (instance.messageId === id) {
                this.instances.splice(index, 1);
                this.instances = [...this.instances];
                this.onRemove(instance, userAction);
                this.readyInstances();
                return true;
            }
            return false;
        });
    }
    removeAll() {
        this.instances.forEach(i => this.onRemove(i, false));
        this.instances = [];
        this.readyInstances();
    }
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        return instance;
    }
    onRemove(instance, userAction) {
        instance.onClose.next(userAction);
        instance.onClose.complete();
    }
    readyInstances() {
        this.cdr.detectChanges();
    }
    mergeOptions(options) {
        const { nzDuration, nzAnimate, nzPauseOnHover } = this.config;
        return Object.assign({ nzDuration, nzAnimate, nzPauseOnHover }, options);
    }
}
NzMNContainerComponent.ɵfac = function NzMNContainerComponent_Factory(t) { return new (t || NzMNContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"])); };
NzMNContainerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzMNContainerComponent });
NzMNContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMNContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"] }]; }, null); })();
class NzMNComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.animationStateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userAction = false;
        this.eraseTimer = null;
    }
    ngOnInit() {
        this.options = this.instance.options;
        if (this.options.nzAnimate) {
            this.instance.state = 'enter';
            this.animationStateChanged
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event.phaseName === 'done' && event.toState === 'leave'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(() => {
                clearTimeout(this.closeTimer);
                this.destroyed.next({ id: this.instance.messageId, userAction: this.userAction });
            });
        }
        this.autoClose = this.options.nzDuration > 0;
        if (this.autoClose) {
            this.initErase();
            this.startEraseTimeout();
        }
    }
    ngOnDestroy() {
        if (this.autoClose) {
            this.clearEraseTimeout();
        }
        this.animationStateChanged.complete();
    }
    onEnter() {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.clearEraseTimeout();
            this.updateTTL();
        }
    }
    onLeave() {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.startEraseTimeout();
        }
    }
    destroy(userAction = false) {
        this.userAction = userAction;
        if (this.options.nzAnimate) {
            this.instance.state = 'leave';
            this.cdr.detectChanges();
            this.closeTimer = setTimeout(() => {
                this.closeTimer = undefined;
                this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
            }, 200);
        }
        else {
            this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
        }
    }
    initErase() {
        this.eraseTTL = this.options.nzDuration;
        this.eraseTimingStart = Date.now();
    }
    updateTTL() {
        if (this.autoClose) {
            this.eraseTTL -= Date.now() - this.eraseTimingStart;
        }
    }
    startEraseTimeout() {
        if (this.eraseTTL > 0) {
            this.clearEraseTimeout();
            this.eraseTimer = setTimeout(() => this.destroy(), this.eraseTTL);
            this.eraseTimingStart = Date.now();
        }
        else {
            this.destroy();
        }
    }
    clearEraseTimeout() {
        if (this.eraseTimer !== null) {
            clearTimeout(this.eraseTimer);
            this.eraseTimer = null;
        }
    }
}
NzMNComponent.ɵfac = function NzMNComponent_Factory(t) { return new (t || NzMNComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NzMNComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzMNComponent });
NzMNComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMNComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_COMPONENT_NAME = 'message';
const NZ_MESSAGE_DEFAULT_CONFIG = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24,
    nzDirection: 'ltr'
};
class NzMessageContainerComponent extends NzMNContainerComponent {
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dir = 'ltr';
        this.instances = [];
        const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        this.dir = (config === null || config === void 0 ? void 0 : config.nzDirection) || 'ltr';
    }
    subscribeConfigChange() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.updateConfig();
            const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (config) {
                const { nzDirection } = config;
                this.dir = nzDirection || this.dir;
            }
        });
    }
    updateConfig() {
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["toCssPixel"])(this.config.nzTop);
        this.cdr.markForCheck();
    }
}
NzMessageContainerComponent.ɵfac = function NzMessageContainerComponent_Factory(t) { return new (t || NzMessageContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"])); };
NzMessageContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzMessageContainerComponent, selectors: [["nz-message-container"]], exportAs: ["nzMessageContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[1, "ant-message"], [3, "instance", "destroyed", 4, "ngFor", "ngForOf"], [3, "instance", "destroyed"]], template: function NzMessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzMessageContainerComponent_nz_message_1_Template, 1, 1, "nz-message", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.top);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-message-rtl", ctx.dir === "rtl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.instances);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], NzMessageComponent]; }, encapsulation: 2, changeDetection: 0 });
NzMessageContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMessageContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-message-container',
                exportAs: 'nzMessageContainer',
                preserveWhitespaces: false,
                template: `
    <div class="ant-message" [class.ant-message-rtl]="dir === 'rtl'" [style.top]="top">
      <nz-message *ngFor="let instance of instances" [instance]="instance" (destroyed)="remove($event.id, $event.userAction)"></nz-message>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMessageServiceModule {
}
NzMessageServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzMessageServiceModule });
NzMessageServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzMessageServiceModule_Factory(t) { return new (t || NzMessageServiceModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMessageServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMessageService extends NzMNService {
    constructor(nzSingletonService, overlay, injector) {
        super(nzSingletonService, overlay, injector);
        this.componentPrefix = 'message-';
    }
    success(content, options) {
        return this.createInstance({ type: 'success', content }, options);
    }
    error(content, options) {
        return this.createInstance({ type: 'error', content }, options);
    }
    info(content, options) {
        return this.createInstance({ type: 'info', content }, options);
    }
    warning(content, options) {
        return this.createInstance({ type: 'warning', content }, options);
    }
    loading(content, options) {
        return this.createInstance({ type: 'loading', content }, options);
    }
    create(type, content, options) {
        return this.createInstance({ type, content }, options);
    }
    createInstance(message, options) {
        this.container = this.withContainer(NzMessageContainerComponent);
        return this.container.create(Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this.getInstanceId(),
            options
        }));
    }
}
NzMessageService.ɵfac = function NzMessageService_Factory(t) { return new (t || NzMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzSingletonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
NzMessageService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NzMessageService_Factory() { return new NzMessageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzSingletonService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"])); }, token: NzMessageService, providedIn: NzMessageServiceModule });
NzMessageService.ctorParameters = () => [
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzSingletonService"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: NzMessageServiceModule
            }]
    }], function () { return [{ type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzSingletonService"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMessageComponent extends NzMNComponent {
    constructor(cdr) {
        super(cdr);
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
}
NzMessageComponent.ɵfac = function NzMessageComponent_Factory(t) { return new (t || NzMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NzMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzMessageComponent, selectors: [["nz-message"]], inputs: { instance: "instance" }, outputs: { destroyed: "destroyed" }, exportAs: ["nzMessage"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 9, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]], template: function NzMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@moveUpMotion.done", function NzMessageComponent_Template_div_animation_moveUpMotion_done_0_listener($event) { return ctx.animationStateChanged.next($event); })("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzMessageComponent_i_4_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NzMessageComponent_i_5_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NzMessageComponent_i_6_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NzMessageComponent_i_7_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NzMessageComponent_i_8_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@moveUpMotion", ctx.instance.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ant-message-" + ctx.instance.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.instance.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.instance.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__["moveUpMotion"]] }, changeDetection: 0 });
NzMessageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NzMessageComponent.propDecorators = {
    instance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-message',
                exportAs: 'nzMessage',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__["moveUpMotion"]],
                template: `
    <div
      class="ant-message-notice"
      [@moveUpMotion]="instance.state"
      (@moveUpMotion.done)="animationStateChanged.next($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div class="ant-message-notice-content">
        <div class="ant-message-custom-content" [ngClass]="'ant-message-' + instance.type">
          <ng-container [ngSwitch]="instance.type">
            <i *ngSwitchCase="'success'" nz-icon nzType="check-circle"></i>
            <i *ngSwitchCase="'info'" nz-icon nzType="info-circle"></i>
            <i *ngSwitchCase="'warning'" nz-icon nzType="exclamation-circle"></i>
            <i *ngSwitchCase="'error'" nz-icon nzType="close-circle"></i>
            <i *ngSwitchCase="'loading'" nz-icon nzType="loading"></i>
          </ng-container>
          <ng-container *nzStringTemplateOutlet="instance.content">
            <span [innerHTML]="instance.content"></span>
          </ng-container>
        </div>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], instance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMessageModule {
}
NzMessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzMessageModule });
NzMessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzMessageModule_Factory(t) { return new (t || NzMessageModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], NzMessageServiceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzMessageModule, { declarations: function () { return [NzMessageContainerComponent, NzMessageComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], NzMessageServiceModule]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], NzMessageServiceModule],
                declarations: [NzMessageContainerComponent, NzMessageComponent],
                entryComponents: [NzMessageContainerComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-message.js.map

/***/ }),

/***/ "brSq":
/*!************************************************!*\
  !*** ./src/app/knowledge/knowledge.service.ts ***!
  \************************************************/
/*! exports provided: KnowledgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeService", function() { return KnowledgeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class KnowledgeService {
    constructor() {
        this.dataList = [
            {
                title: '观察者模式和发布订阅',
                content: `
        <h2>观察者模式</h2>
        <p>观察者模式指的是一个对象（Subject）维持一系列依赖于它的对象（Observer），当有关状态发生变更时 Subject 对象则通知一系列 Observer 对象进行更新。</p>
        <p>在观察者模式中，Subject 对象拥有添加、删除和通知一系列 Observer 的方法等等，而 Observer 对象拥有更新方法等等。</p>
        <p>在 Subject 对象添加了一系列 Observer 对象之后，Subject 对象则维持着这一系列 Observer 对象，当有关状态发生变更时 Subject 对象则会通知这一系列 Observer 对象进行更新。</p>
        <p>// 被观察者</p>
        <p>class Subject{</p>
        <p>&nbsp;&nbsp;constructor(name){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.observers = []; //存放所有观察者</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.state = '天气晴朗';</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;// 接受观察者方法</p>
        <p>&nbsp;&nbsp;attach(observer){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.observers.push(observer);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;setState(newState){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.state = newState;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.observers.forEach(it=>{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it.update(newState);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;})</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>// 观察者</p>
        <p>class Observer{</p>
        <p>&nbsp;&nbsp;constructor(name){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;update(state){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;//每次被观察者数据发生变化这里都会更新</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(this.name)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(state)</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>let sub = new Subject('男');</p>
        <p>let o1 = new Observer('A');</p>
        <p>let o2 = new Observer('B');</p>
        <p>sub.attach(o1);</p>
        <p>sub.attach(o2);</p>
        <p>sub.setState('下雨了');</p>
        <hr>
        <h2>发布订阅</h2>
        <p>发布订阅模式指的是希望接收通知的对象（Subscriber）基于一个主题通过自定义事件订阅主题，被激活事件的对象（Publisher）通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。</p>
        // 发布订阅 发布和订阅没有关系 中间通过数组进行关联
        function Events(){
          this.callbacks = []; //接收很多函数
          this.results = [];
        }
        // 订阅
        Events.prototype.on = function(callback){ //传一个函数
          this.callbacks.push(callback);
        }
        // 发布
        Events.prototype.emit = function(data){
          this.results.push(data);
          // 发布后，许多之前的函数依次执行
          this.callbacks.forEach(cb=>{
            cb(this.results);//cb是callbacks中的每一个参数，每一个回调函数，回调函数又将this.results作为参数
          })
        }
        let e = new Events();
        // on传了一个函数作为参数
        e.on(function(res){
          // if(res.length == 2){
            console.log(res)
          // }
        })
        e.emit();
      `
            },
            {
                title: 'promise、await和定时器的执行顺序',
                content: `
      <h2>Promise内的任务为立即执行任务，也可以理解为同步任务。而then方法中的任务是微任务，会放在微任务列表中</h2>
      <h2>async函数主要通过await关键字实现异步任务同步写法。如果没有await关键字，那么async函数跟普通函数没区别</h2>
      <h2>setTimeout函数是一个宏任务，需要等到script整体的宏任务执行完再执行</h2>
      <h2>执行顺序：</h2>
      <p>1、立即执行函数和代码</p>
      <p>2、微任务</p>
      <p>3、宏任务（script和定时器）</p>
      `
            },
            {
                title: '数据类型',
                content: `
        <h2>原始数据类型7种：</h2>
        <p>string、number、boolean、null、undefined、symbol、bigint</p>
        <h2>引用数据类型object：</h2>
        <p>object、array、function ... </p>
      `
            },
            {
                title: 'angular的生命周期',
                content: `
      <p>ngOnChanges：组件输入属性发生变化时调用，首次在constructor之前调用，会触发多次</p>
      <p>ngOnInit：只有组件初始化时调用一次，可以安全的使用组件中的方法</p>
      <p>ngDoCheck：脏值检查，通常和ngOnChanges不会同时出现</p>
      <p>ngAfterContentInit：组件内容初始化后调用</p>
      <p>ngAfterContentChecked：组件内容每次检查后调用</p>
      <p>AfterViewInit：在组件视图初始化后调用，在这里安全的使用@ViewChild引用的元素</p>
      <p>ngAfterViewChecked：在组件视图每次检查后调用</p>
      <p>ngOnDestory：组件销毁</p>
      `
            },
            {
                title: 'angular组件和指令的区别',
                content: `
      
      `
            },
            {
                title: 'angular路由传参的几种方式',
                content: `
      
      `
            },
            {
                title: 'angular的好处',
                content: `
      <h2>Angular简化了MVC</h2>
      <p>模型 - 视图 - 控制器（MVC）体系结构将应用程序分解为三个不同的组件，是开发面向用户的应用程序的常用策略。大多数Web开发框架都要求开发人员通过分别为每个组件设计和编写代码来实现MVC架构，然后编写更多代码将组件连接在一起。</p>
      <p>Angular通过自动将不同的组件放在一起来简化和简化此过程，从而节省您的时间。因此，尽管Angular当然不是唯一支持MVC架构的框架（它也可以通过Vue和React完成，但是在这种情况下将组件放在一起需要更多的努力），它使得构建它比其他框架更容易和更快MVC架构。</p>
      <h2>大Angular生态系统</h2>
      <p>在技​​术生态系统方面，Angular更大更好。拥有庞大的个人和公司社区的技术更容易使用，因为支持很多，兼容性很普遍，并且技术被放弃的风险很低。</p>
      <p>Angular拥有所有这些优势。它由Google的专门团队支持和构建，Google本身使用Angular。该公司还提供了Angular长期支持（LTS）。这意味着该技术巨头计划坚持使用Angular，并在未来进行扩展。</p>
      <p>Angular生态系统的优势并不仅限于谷歌。Angular还拥有一个非常庞大的用户社区，他们愿意互相支持。这个社区提供了另一个支持和活力的来源。</p>
      <p>就市场份额而言，Angular 似乎在JavaScript框架中位居第二，仅次于React，但在Vue面前。对于它的价值，Angular采用率似乎比React的增长速度更快（尽管Vue增长最快），因此Angular可能超越React成为不久的将来最受欢迎的框架。</p>
      <h2>Angular Universal和服务器端呈现</h2>
      <p>服务器端呈现是一种允许Web服务器生成通常由客户端构建的内容（换句话说，最终用户的浏览器）的技术。由于多种原因，服务器端呈现很有用。它使网页抓取工具可以轻松访问网页。它还提高了性能，尤其是在移动和低功耗设备上，由于资源不足，这些设备很难在客户端快速呈现内容。并且通过促进更快的页面加载时间来帮助用户满意。</p>
      <p>常规Angular应用程序在浏览器中执行，并在DOM中呈现页面以响应用户的操作。但是，Angular社区提供了一个用于更改此行为的简单工具：Angular Universal，它允许通过服务器端呈现在服务器上生成静态应用程序页面。通过将Angular Universal与应用程序集成，可以生成服务器端页面并响应来自浏览器的请求。</p>
      <p>使用Vue，React和大多数其他JavaScript框架进行服务器端渲染也是可能的，但它涉及更多步骤。使用Angular Universal，您只需打包您的应用程序以在服务器端运行并使用Universal进行部署。</p>
      <h2>Angular材料设计</h2>
      <p>从Angular 5.0开始，Angular功能在其框架中集成了对Material Design的支持。Material Design是一个开源工具集，可帮助开发人员快速构建有吸引力的界面。它简化了在Web，移动和桌面上工作的现代UI组件的创建。</p>
      <p>Material Design主题和模板已预先配置为与Angular一起使用，使其易于集成到Angular项目中。此外，Material Design组件可以与Angular上的服务器端呈现结合使用，从而可以轻松地将它们合并到基于Angular的应用程序中，该应用程序利用上述服务器端性能改进。</p>
      <p>大多数其他框架也适用于Material Design，但并非所有框架都为其提供官方的集成支持。</p>
      <h2>Angular下的层次依赖注入</h2>
      <p>Angular提供了分层依赖注入，这对于为应用程序组装数据服务特别有用。在分层依赖注入中，有一个与app的组件树平行的注入器树。通过依赖注入，类会从外部源请求依赖性，而不是自己创建依赖项。这可以提高性能。它还允许Web开发人员在外部导入依赖项而不是在应用程序中配置它们，从而简化了Web开发人员的工作。Angular在实例化时为类提供声明的依赖项。Angular依赖注入框架允许用户从可注入服务类提供数据，该服务类在其自己的文件中单独定义。服务所需的任何依赖项都可以“注入”其构造函数，并在运行时“注入”对象。这允许在需要时覆盖注入的对象，并在整个应用程序中提供一致性。</p>
      <h2>Angular的模块化设计</h2>
      <p>在Angular中，一切都被组织成模块，从服务到指令的所有内容都必须组织成一个或多个模块。模块通过将代码划分为功能和可重用的块来增加代码的可重用性。它们还极大地简化了组织中的分工，以及代码的一致性和维护。</p>
      <p>可以肯定的是，Angular在其模块化设计中绝不是独一无二的。模块化在许多现代编程语言和框架中很常见。</p>
      <p>不过，我认为Angular特别模块化，因为不仅可以使用模块化架构来配置和部署基本代码组件（如函数），还可以使用Angular构建的任何对象。这种模块化在当今的微服务和分布式架构时代尤其有利，它们更容易与具有模块化设计的应用程序集成，因此可以作为跨大型基础架构的不同服务部分进行部署。</p>
      <p>在大多数方面，Vue提供与Angular相同的模块化功能。React并不如此，因为React没有将模块化设计作为主要目标.。</p>
      <p>(banq注：React是函数式风格，这与面向对象的模块化视角不同，管道化本身也是一种可组装的动态模块，这里有作者的偏见！)</p>
      <h2>Angular单元测试</h2>
      <p>Angular已准备好进行单元测试。单元测试是开发人员可以在软件交付管道中执行的第一类测试之一，以确保其代码满足预期的期望。单元测试允许开发人员在将新功能添加到应用程序的主代码库之前对其进行彻底测试。这样，可以快速检测到错误并与主代码库隔离，这使得它们更容易解决。</p>
      <p>理论上，用任何编程语言编写的代码都可以进行单元测试。但是，单元测试兼容性是Angular的明确设计目标，这意味着开发人员不必修改他们的代码或使用特殊的测试工具来使用Angular进行单元测试。</p>
      <h2>Angular使用TypeScript基础</h2>
      <p>Angular应用程序是使用TypeScript构建的，TypeScript是JavaScript的超集。这意味着您可以将ES5或ES2015 + JavaScript代码插入.ts文件，它将完美运行。这也意味着只要在构建期间创建了正确的映射文件，就可以在浏览器或编辑器中直接调试TypeScript代码。</p>
      <p>这不仅有助于简化您的工作流程并帮助您避免将文件从一种格式转换为另一种格式，而且因为使用TypeScript可以提高您及早发现错误的几率。请记住，如果您对TypeScript不满意，可以选择退出Angular中特定于TypeScript的功能。</p>
      <p>Vue对TypeScript的支持有限（尽管Vue开发人员表示将在即将发布的Vue 3.0版本中进行更改）。对于React，它可以与TypeScript一起使用，但只有在将它添加到项目中时才能使用; TypeScript没有内置到React中。 </p>
      <h2>不可否认，并非上述所有功能都是Angular独有的。您可以在其他Web框架中找到其中一些。但是当你将所有这些功能放在一起时，Angular因其多功能性，模块化和层次依赖注入而脱颖而出。如果这些特征对您的项目很重要，那么Angular可能最适合您的编程需求。</h2>
      `
            },
            {
                title: '==和===的区别，什么情况下用==',
                content: `
      
      `
            },
            {
                title: '数组方法，字符串方法',
                content: `
      
      `
            },
            {
                title: '常用的es6功能',
                content: `
      <h2>Set() - 数组去重</h2>
      <p>new Set([1,2,1,3,2,4,2,3]) // {1, 2, 3, 4}</p>
      <p>Array.from(new Set([1,2,1,3,2,4,2,3])) // [1, 2, 3, 4]</p>
      <p>Array.from()方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例</p>
      `
            },
            {
                title: 'null和undefined的区别',
                content: `
      
      `
            },
            {
                title: '',
                content: `
      
      `
            },
            {
                title: 'typeof和instanceof类型判断',
                content: `
        <h2>typeof对于原始类型来说，除了null都可以显示正确的类型</h2>
        <p>typeof 1 // number</p>
        <p>typeof '1' // string</p>
        <p>typeof undefined // undefined</p>
        <p>typeof true // boolean</p>
        <p>typeof Symbol() // symbol</p>
        <h2>typeof对于对象来说，除了函数都会显示object，所以说typeof并不能准确判断变量到底是什么类型</h2>
        <p>typeof [] // object </p>
        <p>typeof {} // object</p>
        <p>typeof console.log // function</p>
        <h2>如果我们想判断一个对象的正确类型，这是可以考虑使用instanceof，它的内部机制是通过原型链来判断的</h2>
        <p>const Person = function (){}</p>
        <p>const p1 = new Person()</p>
        <p>P1 instanceof Person // true</p>
        <p>var str = 'string';</p>
        <p>str instanceof String // false</p>
        <p>var str2 = new String('string');</p>
        <p>str2 instanceof String // true</p>
        <h2>对于原始类型，如果用instanceof判断类型，需要new，否则为false</h2>
      `
            },
            {
                title: '类型转换',
                content: `
        <h2>在JS中类型转换只有三种，分别是 转为布尔值、转为数字、转为字符串</h2>
        <p>转Boolean：在条件判断时，除了undefined、null、false、NaN、''、0、-0，其他所有值都转为true，包括所有对象。</p>
        <h2>对象转为原始类型：对象在转换类型时，会调用内置的ToPrimitive函数，该函数算法逻辑如下</h2>
        <p>如果已经是原始类型了，就不需要转换了</p>
        <p>调用x.valueOf() 如果转换为基础类型，就返回转换的值</p>
        <p>调用x.toString() 如果转换为基础类型，就返回转换的值</p>
        <p>如果都没有返回原始类型，就会报错</p>
      `
            },
            {
                title: '闭包',
                content: `
        <h2>闭包的定义其实很简单：函数A内部有一个函数B，函数B可以访问到函数A中的变量，那么函数B就是闭包。</h2>
        <h2>闭包存在的意义就是让我们可以间接访问函数内部的变量。</h2>
        <h2>经典面试题：循环中使用闭包解决var定义函数的问题：</h2>
        <p>for(var i=0;i<5;i++){</p>
        <p>&nbsp;&nbsp;setTimeout(function timer(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(i)</p>
        <p>&nbsp;&nbsp;},1000)</p>
        <p>}</p>
        <h2>因为setTimeout是个异步函数，所以会先把循环全部执行完毕，这时候i就是5了，所有会一直输入5。</h2>
        <h3>第一种解决办法（推荐）：使用let定义i来解决</h3>
        <p>for(let i=0;i<5;i++){</p>
        <p>&nbsp;&nbsp;setTimeout(function timer(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(i)</p>
        <p>&nbsp;&nbsp;},1000)</p>
        <p>}</p>
        <hr>
        <h3>第二种解决办法：使用闭包来解决</h3>
        <p>for(var i=0;i<5;i++){</p>
        <p>&nbsp;&nbsp;;(function(t){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(function timer(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(i)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;},1000)</p>
        <p>&nbsp;&nbsp;})(i)</p>
        <p>}</p>
      `
            },
            {
                title: '深拷贝浅拷贝',
                content: `
        <h2>浅拷贝：首先可以通过Object.assign来解决这个问题，Object.assign只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址。</h2>
        <p>let a = { age:30 };</p>
        <p>let b = Object.assign({},a);</p>
        <p>a.age = 1;</p>
        <p>console.log(b.age) // 30</p>
        <h2>还可以通过展开运算符...来实现浅拷贝</h2>
        <p>let a = { age:30 };</p>
        <p>let b = { ...a };</p>
        <p>a.age = 1;</p>
        <p>console.log(b.age) // 30</p>
        <h2>通过浅拷贝能够解决大部分问题，但是当我们遇到以下情况就需要使用深拷贝了：</h2>
        <p>let a = {</p>
        <p>&nbsp;&nbsp;age:30,</p>
        <p>&nbsp;&nbsp;jobs:{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;type:'c'</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>let b = { ...a };</p>
        <p>a.jobs.type = 'A';</p>
        <p>console.log(b.jobs.type) // A 浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，就需要用深拷贝</p>
        <h2>深拷贝：JSON.parse(JSON.stringify(a))</h2>
        <p>a.jobs.type = 'A';</p>
        <p>console.log(b.jobs.type) // c</p>
        <p>该方法有局限性：会忽略undefined、会忽略symbol、不能序列化函数、不能解决循环引用的对象</p>
      `
            },
            {
                title: '原型',
                content: `
        <h2>原型链就是多个对象通过_proto_的方式连接了起来。为什么obj可以访问到valueOf函数，就是因为obj通过原型链找到了valueOf函数。</h2>
        <p>Object是所有对象的爸爸，所有对象都可以通过_proto_找到它。</p>
        <p>Function是所有函数的爸爸，所有函数都可以通过_proto_找到它。</p>
        <p>函数的prototype是一个对象。</p>
        <p>对象的_proto_属性指向原型，_proto_将对象和原型连接起来组成了原型链。</p>
      `
            },
            {
                title: 'var、let和const的区别',
                content: `
        <h2>什么是提升？什么是暂时性死区？var、let和const的区别是什么？</h2>
        <p>函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部。</p>
        <p>var存在提升，我们能在声明之前使用。let和const因为暂时性死区的原因，不能在声明前使用。</p>
        <p>var在全局作用域下声明变量会导致变量挂载在window上，let和const不会。</p>
        <p>let和const作用基本一致，但const声明的变量不能再次赋值。</p>
      `
            },
            {
                title: '原型继承和Class继承',
                content: `
        <h2>原型如何实现继承？Class如何实现继承？Class本质是什么？</h2>
        <p>class:其实在jS中并不存在类，class只是语法糖，本质还是函数</p>
        <p>class Parent(){  }</p>
        <p>Parent instanceof Function // true</p>
        <hr>
        <h3>组合继承：组合继承是最常用的继承方式</h3>
        <p>function Parent(value){
        <p>&nbsp;&nbsp;this.val = value;
        <p>}
        <p>Parent.prototype.getValue = function(){</p>
        <p>&nbsp;&nbsp;console.log(this.val)</p>
        <p>}</p>
        <p>function Child(value){</p>
        <p>&nbsp;&nbsp;Parent.call(this,value);</p>
        <p>}</p>
        <p>Child.prototype = new Parent();</p>
        <p>const child = new Child(1);</p>
        <p>child.getValue() // 1</p>
        <p>child instanceof Parent // true</p>
        <h2>以上继承的方式核心是在子类的构造函数中通过 Parent.call(this) 继承父类的属性，然后改变子类的原型为 new Parent() 来继承父类的函数。</h2>
        <h2>这种继承方式有点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，但是也存在一个缺点就是在继承父类函数的时候调用了父类的构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费。</h2>
        <hr>
        <h3>组合类继承：这种继承方式对组合继承进行了优化，组合继承缺点在于继承父类函数时调用了构造函数，我们只需要优化掉这点就行。</h3>
        <p>function Parent(value){</p>
        <p>&nbsp;&nbsp;this.val = value;</p>
        <p>}</p>
        <p>Parent.prototype.getValue = function(){</p>
        <p>&nbsp;&nbsp;console.log(this.val)</p>
        <p>}</p>
        <p>function Child(value){</p>
        <p>&nbsp;&nbsp;Parent.call(this,value);</p>
        <p>}</p>
        <p>Child.prototype = Object.create(Parent.ptototype,{</p>
        <p>&nbsp;&nbsp;constructor:{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;value:Child,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;enumerable:false,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;writable:true,</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;configurable:true</p>
        <p>&nbsp;&nbsp;}</p>
        <p>})</p>
        <p>const child = new Child(1);</p>
        <p>child.getValue() // 1</p>
        <p>child instanceof Parent // true</p>
        <h2>以上继承实现的核心就是将父类的原型赋值给子类，并且将构造函数设置为子类，这样既解决了无用的父类属性问题，还能正确的找到子类的构造函数。</h2>
        <hr>
        <h3>class类继承：以上两种继承方式都是通过原型去解决的，在ES6中，我们可以使用class去实现继承，并且实现起来很简单。</h3>
        <p>class Parent{</p>
        <p>&nbsp;&nbsp;constructor(value){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.val = value;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>getValue(){</p>
        <p>&nbsp;&nbsp;console.log(this.val)</p>
        <p>}</p>
        <p>class Child extends Parent{</p>
        <p>&nbsp;&nbsp;constructor(value){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;super(value)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.val = value;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>let child = new Child(1);</p>
        <p>child.getValue() // 1</p>
        <p>child instanceof Parent // true</p>
        <h2>class实现继承的核心在于使用 extends 表明继承自哪个父类，并且在子类构造函数中必须调用super，因为这段代码可以看成 Parent.call(this,value)</h2>
      `
            },
            {
                title: '模块化',
                content: `
        <h2>为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？</h2>
        <p>&nbsp;&nbsp;1、解决命名冲突</p>
        <p>&nbsp;&nbsp;2、提供复用性</p>
        <p>&nbsp;&nbsp;3、提高代码可维护性</p>
        <hr>
        <h2>立即执行函数：</h2>
        <p>&nbsp;&nbsp;使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题。</p>
        <p>&nbsp;&nbsp;(function(globalVariable){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;globalVariable.test = function(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// ... 声明各种变量、函数，都不会污染全局作用域</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;})(globalVariable)</p>
      `
            },
            {
                title: '实现一个简单的promise',
                content: `
        <h2>// 三个常量用于表示状态</h2>
        <p>const Pending = 'pending';</p>
        <p>const Resolved = 'resolved';</p>
        <p>const Rejected = 'rejected';</p>
        <p>function Promise(fn){</p>
        <p>const that = this;</p>
        <p>this.state = Pending;</p>
        <p>// value变量用来保存resolve或者reject中传入的值</p>
        <p>this.value = null; </p>
        <p>// 用于保存then中的回调，因为当执行玩Promise时状态可能还是等待中</p>
        <p>that.resolvedCallbacks = [];</p>
        <p>that.rejectedCallbacks = [];</p>
        <p>function resolve(value){</p>
        <p>&nbsp;&nbsp;// 首先两个函数都得判断当前状态是否为等待中</p>
        <p>&nbsp;&nbsp;if(that.state === Pending){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.state = Resolved;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.value = value;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;// 遍历回调数组并执行</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.resolvedCallbacks.map(cd=>{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cd(that.value);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;})</p>
        <p>}</p>
        <p>function reject(value){</p>
        <p>&nbsp;&nbsp;if(that.state === Pending){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.state = Rejected;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.value = value;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;that.rejectedCallbacks.map(cb=>{</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cb(that.value);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;})</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>// 完成以上两个函数以后，我们就该实现如何执行Promise中传入的函数了</p>
        <p>try{</p>
        <p>&nbsp;&nbsp;fn(resolve,reject);</p>
        <p>}cach(e){</p>
        <p>&nbsp;&nbsp;reject(e);</p>
        <p>}</p>
        <p>// 最后我们来实现较为复杂的then函数</p>
        <p>Promise.prototype.then = function(onFulfilled,onRejected){</p>
        <p>&nbsp;&nbsp;const that = this;</p>
        <p>&nbsp;&nbsp;// 判断两个参数是否为函数类型，因为这两个参数是可选参数</p>
        <p>&nbsp;&nbsp;onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;</p>
        <p>&nbsp;&nbsp;onRejected = typeof onRejected === 'function' ? onRejected : e=>throw e;</p>
        <p>&nbsp;&nbsp;// 当状态不是等待态时，就去执行相对应的函数。如果是等待态，就往回调函数中push</p>
        <p>&nbsp;&nbsp;if(this.state === Pending){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.resolvedCallbacks.push(onFulfilled);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;this.rejectedCallbacks.push(onRejected);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;if(this.state === Resolved){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;onFulfilled(that.value);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;if(this.state === Rejected){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;onRejected(that.value);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
      `
            },
            {
                title: '手写call、apply和bind函数',
                content: `
        <h2>不传入第一个参数，那么上下文默认为window</h2>
        <h2>改变了this指向，让新的对象可以执行该函数，并能接受参数</h2>
        <h2>实现call：</h2>
        <p>首先context为可选参数，如果不传默认上下文为window</p>
        <p>接下来给context创建一个fn属性，并将值设置为需要调用的函数</p>
        <p>因为call可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来</p>
        <p>然后调用函数并将对象上的函数删除</p>
        <p>Function.prototype.myCall = function(context){</p>
        <p>&nbsp;&nbsp;if(typeof this !== 'function'){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;throw new TypeError('Error);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p> context = context || window;</p>
        <p> context.fn = this;</p>
        <p> const args = [...arguments].slice(1);</p>
        <p> const result = context.fn(...args);</p>
        <p> delete context.fn;</p>
        <p> return result;</p>
        <h2>实现apply：</h2>
        <p> Function.prototype.myApply = function(context){</p>
        <p> &nbsp;&nbsp;if(typeof this !== 'function'){</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;throw new TypeError('Error');</p>
        <p> &nbsp;&nbsp;}</p>
        <p> }</p>
        <p> context = context || window;</p>
        <p> context.fn = this;</p>
        <p> let result;</p>
        <p> // 处理参数和call有区别</p>
        <p> if(arguments[1]){</p>
        <p> &nbsp;&nbsp;result = context.fn(...arguments[1]);</p>
        <p> }else{</p>
        <p> &nbsp;&nbsp;result = context.fn();</p>
        <p> }</p>
        <p> delete context.fn;</p>
        <p> return result;</p>
        <h2>bind实现：</h2>
        <p>bind是实现对比其他两个函数略微的复杂了一些，因为bind需要返回一个函数，需要判断一些边界问题</p>
        <p>bind返回了一个函数，对于函数来说有两种方式调用，一种是直接调用，一种是通过new的方式</p>
        <p>对于直接调用来说，这里选择了apply的方式实现，但是对于参数需要注意以下情况</p>
        <p>因为bind可以实现类似这样的代码 f.bind(obj,1)(2)，所以我们需要将两边的参数拼接起来，于是就有了这样的实现 args.concat(...arguments)</p>
        <p>通过new的方式，不会被任何方式改变this，所以我们需要忽略传入的this</p>
        <p>Function.prototype.myApply = function(context){</p>
        <p>&nbsp;&nbsp;if(typeof this !== 'function'){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;throw new TypeError('Error');</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
        <p>const _this = this;</p>
        <p>const args = [...arguments].slice(1);</p>
        <p>// 返回一个函数</p>
        <p>return function F(){</p>
        <p>&nbsp;&nbsp;// 因为返回了一个函数，我们可以new F()，所以需要判断</p>
        <p>&nbsp;&nbsp;if(this instanceof F){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;return new _this(...args,...arguments);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;return _this.apply(context,args.concat(...arguments))</p>
        <p>}</p>
      `
            },
            {
                title: 'new',
                content: `
        <h2>new的原理是什么？通过new的方式创建对象和通过字面量创建有什么区别？</h2>
        </p>在调用new的过程中会发生4件事：</p>
        </p>&nbsp;&nbsp;1、新生成了一个对象</p>
        </p>&nbsp;&nbsp;2、链接到原型</p>
        </p>&nbsp;&nbsp;3、绑定this</p>
        </p>&nbsp;&nbsp;4、返回新对象</p>
        <h2>实现一个new：</h2>
        <p>&nbsp;&nbsp;1、创建一个空对象</p>
        <p>&nbsp;&nbsp;2、获取构造函数</p>
        <p>&nbsp;&nbsp;3、设置空对象的原型</p>
        <p>&nbsp;&nbsp;4、绑定this并执行构造函数</p>
        <p>&nbsp;&nbsp;5、确保返回值为对象</p>
        <p>&nbsp;&nbsp;function cerate(){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;let obj = {};</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;let Con = [].shift.call(arguments);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;obj._proto_ = Con.prototype;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;let result = Con.apply(obj,arguments);</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;return result instanceof Object ? result : obj;</p>
        <p>&nbsp;&nbsp;}
        <p>对于对象来说，其实都是通过new产生的，无论是function Foo() 还是 let {a:1}</p>
        <p>对于创建一个对象来说，更推荐使用字面量的方式创建对象（无论性能上还是可读性），因为使用new Object()的方式创建对象需要通过作用域一层层找到Object，但是使用字面量的方式就没有这个问题</p>
        <p>function Foo(){</p>
        <p>&nbsp;&nbsp;// function 就是个语法糖，内部等同于 new Function()</p>
        <p>}</p>
        <p>let a = {b:1};//这个字面量内部也是使用了new Object()</p>
      `
            }, {
                title: 'instanceof的原理',
                content: `
        <h2>instanceof可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的prototype</h2>
        <h2>实现instanceof：</h2>
        <p>&nbsp;&nbsp;首先获取类型的原型</p>
        <p>&nbsp;&nbsp;然后获得对象的原型</p>
        <p>&nbsp;&nbsp;一直循环判断对象的原型是否等于类型的原型，知道对象原型为null，因为原型链最终为null</p>
        <p>function myInstanceof(left,right){</p>
        <p>&nbsp;&nbsp;let prototype = right.prototype;</p>
        <p>&nbsp;&nbsp;left = left._proto_;</p>
        <p>&nbsp;&nbsp;while(true){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;if(left === null || left === undefined){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;return false;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;if(prototype === left){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;return true;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;left = left._prpto_;</p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
      `
            }, {
                title: '跨域',
                content: `
        <h2>什么是跨域？为什么浏览器要使用同源策略？有几种方式可以解决跨域问题？了解预检请求？</h2>
        <p>因为浏览器出于安全考虑，有同源策略。如果协议、域名或者端口有一个不同，就是跨域，ajax请求会失败</p>
        <p>那么是出于什么安全考虑才会引入这种机制呢？其实主要是用来防止CSRF攻击的，CSRF攻击是利用用户的登录态发起恶意请求</p>
        <p>在没有同源策略的情况下，A网站可以被任意其他来源的ajax访问到内容。如果你当前A网站还存在登录态，那么对方就可以通过ajax获得你的任何信息。当然跨域并不能完全阻止CSRF</p>
        <p>请求跨域了，那么请求到底发出去没有？请求必然是发出去了，但是浏览器拦截了响应。你可能会疑问明明通过表单的方式可以发起跨域请求，为什么ajax就不会。归根结底，跨域是为了阻止用户读取到另一个域名下的内容，ajax可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止CSRF，因为毕竟请求发出去了</p>
        <h2>解决跨域的几种方式：</h2>
        <p>JSONP：</p>
        <p>JSONP的原理很简单，就是利用<script>标签没有跨域限制的漏洞。通过script标签指向一个需要访问的地址并提供一个回调函数来接收数据</p>
        <p><script src="http://dome/api?param1=a&param2=b&callback=jsonp"></script></p>
        <p><script></p>
        <p>&nbsp;&nbsp;function jsonp(data){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(data)</p>
        <p>&nbsp;&nbsp;}</p>
        <p></script></p>
        <p>JSONP使用简单且兼容性不错，但是只限于get请求</p>
        <p>在开发中可能会遇到多个JSONP请求的回调函数名是相同的，这时候就需要自己封装一个JSONP</p>
        <p>function jsonp(url,jsonpCallback,success){</p>
        <p>&nbsp;&nbsp;let script = document.createElement('script');</p>
        <p>&nbsp;&nbsp;script.src = url;</p>
        <p>&nbsp;&nbsp;script.async = true;</p>
        <p>&nbsp;&nbsp;script.type = 'text/javascript';</p>
        <p>&nbsp;&nbsp;window[jsonpCallback] = function(data){</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;success && success(data);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>&nbsp;&nbsp;document.body.appendChild(srcipt);</p>
        <p>}</p>
        <p>jsonp('http://dome/api','callback',function(value){</p>
        <p>&nbsp;&nbsp;console.log(value)</p>
        <p>});</p>
        <p>localhost和127.0.0.1虽然都指向是本机，但也属于跨域。</p>
      `
            },
            {
                title: '性能优化',
                content: `
        <p>1、图片编码优化，尽量使用svg和字体图标</p>
        <p>2、图片懒加载</p>
        <p>3、模块、组件按需加载</p>
        <p>4、防抖（禁止连续多次重复调用接口）</p>
        <p>5、代码优化（缩小体积）</p>
        <p>6、css样式优化，避免使用table布局（table要等其他的内容完全下载之后才会显示，比div+css慢），避免设置多层内联样式，避免使用css表达式calc()</p>
        <p>7、减少多DOM的操作</p>
        <p>8、减少http请求</p>
        <p></p>
      `
            },
            {
                title: 'cookies，sessionStorage和localStorage的区别',
                content: `
        <h2>sessionstorage(session)中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁，因为sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的</h2>
        <p>web storage和cookie的区别：</p>
        <p>web storage和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域使用。除此之外，web storage拥有setItem，getItem，removeItem，clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。但是cookie也是不可或缺的，cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在，而web storage仅仅是为了在本地存储数据而生。</p>
      `
            },
            {
                title: 'CSS中link和@import的区别',
                content: `
        <h2>link属于HTML标签，而@import是css中提供的。在页面加载的时候，link会同时被加载，而@import引用的css会在页面加载完成后才会加载引用的css。link引入样式的权重大于@import的引用（@import是将引用的样式导入到当前的页面中）</h2>
      `
            },
            {
                title: '水平居中flex',
                content: `
        <p>div{</p>
        <p>&nbsp;&nbsp;display:flex;</p>
        <p>&nbsp;&nbsp;justify-content:center;</p>
        <p>&nbsp;&nbsp;align-items:center;</p>
        <p>}</p>
      `
            }
        ];
    }
}
KnowledgeService.ɵfac = function KnowledgeService_Factory(t) { return new (t || KnowledgeService)(); };
KnowledgeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KnowledgeService, factory: KnowledgeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowledgeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jz7c":
/*!***********************************************!*\
  !*** ./src/app/knowledge/knowledge.module.ts ***!
  \***********************************************/
/*! exports provided: KnowledgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeModule", function() { return KnowledgeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "EZ1+");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/public.module */ "UFnY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _knowledge_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./knowledge.routing */ "/zO+");
/* harmony import */ var _knowledge_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./knowledge.service */ "brSq");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./knowledge/knowledge.component */ "Jzt8");
 //在根模块导入BrowserModule，BrowserAnimationsModule，HttpClientModule，其他模块只需要导入CommonModule就可以使用双向绑定


 //公用组件引入
 //使用双向绑定





class KnowledgeModule {
}
KnowledgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: KnowledgeModule });
KnowledgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function KnowledgeModule_Factory(t) { return new (t || KnowledgeModule)(); }, providers: [
        _knowledge_service__WEBPACK_IMPORTED_MODULE_6__["KnowledgeService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdMobileModule"],
            _public_public_module__WEBPACK_IMPORTED_MODULE_3__["PublicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _knowledge_routing__WEBPACK_IMPORTED_MODULE_5__["KnowledgeRouting"],
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__["NzMessageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KnowledgeModule, { declarations: [_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_8__["KnowledgeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdMobileModule"],
        _public_public_module__WEBPACK_IMPORTED_MODULE_3__["PublicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _knowledge_routing__WEBPACK_IMPORTED_MODULE_5__["KnowledgeRouting"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__["NzMessageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KnowledgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    ..._knowledge_routing__WEBPACK_IMPORTED_MODULE_5__["routeds"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdMobileModule"],
                    _public_public_module__WEBPACK_IMPORTED_MODULE_3__["PublicModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _knowledge_routing__WEBPACK_IMPORTED_MODULE_5__["KnowledgeRouting"],
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__["NzMessageModule"]
                ],
                providers: [
                    _knowledge_service__WEBPACK_IMPORTED_MODULE_6__["KnowledgeService"]
                ],
                bootstrap: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=knowledge-knowledge-module.js.map