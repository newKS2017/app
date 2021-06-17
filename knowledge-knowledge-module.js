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