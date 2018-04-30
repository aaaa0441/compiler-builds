/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from './output/output_ast';
import { Identifiers } from './render3/r3_identifiers';
/**
 * @param {?} map
 * @return {?}
 */
function mapToMapExpression(map) {
    var /** @type {?} */ result = Object.keys(map).map(function (key) { return ({ key: key, value: map[key], quoted: false }); });
    return o.literalMap(result);
}
/**
 * @record
 */
export function InjectableDef() { }
function InjectableDef_tsickle_Closure_declarations() {
    /** @type {?} */
    InjectableDef.prototype.expression;
    /** @type {?} */
    InjectableDef.prototype.type;
}
/**
 * @record
 */
export function IvyInjectableDep() { }
function IvyInjectableDep_tsickle_Closure_declarations() {
    /** @type {?} */
    IvyInjectableDep.prototype.token;
    /** @type {?} */
    IvyInjectableDep.prototype.optional;
    /** @type {?} */
    IvyInjectableDep.prototype.self;
    /** @type {?} */
    IvyInjectableDep.prototype.skipSelf;
}
/**
 * @record
 */
export function IvyInjectableMetadata() { }
function IvyInjectableMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    IvyInjectableMetadata.prototype.name;
    /** @type {?} */
    IvyInjectableMetadata.prototype.type;
    /** @type {?} */
    IvyInjectableMetadata.prototype.providedIn;
    /** @type {?|undefined} */
    IvyInjectableMetadata.prototype.useType;
    /** @type {?|undefined} */
    IvyInjectableMetadata.prototype.useClass;
    /** @type {?|undefined} */
    IvyInjectableMetadata.prototype.useFactory;
    /** @type {?|undefined} */
    IvyInjectableMetadata.prototype.useExisting;
    /** @type {?|undefined} */
    IvyInjectableMetadata.prototype.useValue;
}
/**
 * @param {?} meta
 * @return {?}
 */
export function compileIvyInjectable(meta) {
    var /** @type {?} */ ret = o.NULL_EXPR;
    if (meta.useType !== undefined) {
        var /** @type {?} */ args = meta.useType.map(function (dep) { return injectDep(dep); });
        ret = new o.InstantiateExpr(meta.type, args);
    }
    else if (meta.useClass !== undefined) {
        var /** @type {?} */ factory_1 = new o.ReadPropExpr(new o.ReadPropExpr(meta.useClass, 'ngInjectableDef'), 'factory');
        ret = new o.InvokeFunctionExpr(factory_1, []);
    }
    else if (meta.useValue !== undefined) {
        ret = meta.useValue;
    }
    else if (meta.useExisting !== undefined) {
        ret = o.importExpr(Identifiers.inject).callFn([meta.useExisting]);
    }
    else if (meta.useFactory !== undefined) {
        var /** @type {?} */ args = meta.useFactory.deps.map(function (dep) { return injectDep(dep); });
        ret = new o.InvokeFunctionExpr(meta.useFactory.factory, args);
    }
    else {
        throw new Error('No instructions for injectable compiler!');
    }
    var /** @type {?} */ token = meta.type;
    var /** @type {?} */ providedIn = meta.providedIn;
    var /** @type {?} */ factory = o.fn([], [new o.ReturnStatement(ret)], undefined, undefined, meta.name + "_Factory");
    var /** @type {?} */ expression = o.importExpr({
        moduleName: '@angular/core',
        name: 'defineInjectable',
    }).callFn([mapToMapExpression({ token: token, factory: factory, providedIn: providedIn })]);
    var /** @type {?} */ type = new o.ExpressionType(o.importExpr({
        moduleName: '@angular/core',
        name: 'InjectableDef',
    }, [new o.ExpressionType(meta.type)]));
    return {
        expression: expression, type: type,
    };
}
/**
 * @param {?} dep
 * @return {?}
 */
function injectDep(dep) {
    var /** @type {?} */ defaultValue = dep.optional ? o.NULL_EXPR : o.literal(undefined);
    var /** @type {?} */ flags = o.literal(0 /* Default */ | (dep.self && 2 /* Self */ || 0) |
        (dep.skipSelf && 4 /* SkipSelf */ || 0));
    if (!dep.optional && !dep.skipSelf && !dep.self) {
        return o.importExpr(Identifiers.inject).callFn([dep.token]);
    }
    else {
        return o.importExpr(Identifiers.inject).callFn([
            dep.token,
            defaultValue,
            flags,
        ]);
    }
}
//# sourceMappingURL=injectable_compiler_2.js.map