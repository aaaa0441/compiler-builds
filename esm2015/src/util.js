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
const /** @type {?} */ DASH_CASE_REGEXP = /-+([a-z0-9])/g;
/**
 * @param {?} input
 * @return {?}
 */
export function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
/**
 * @param {?} input
 * @param {?} defaultValues
 * @return {?}
 */
export function splitAtColon(input, defaultValues) {
    return _splitAt(input, ':', defaultValues);
}
/**
 * @param {?} input
 * @param {?} defaultValues
 * @return {?}
 */
export function splitAtPeriod(input, defaultValues) {
    return _splitAt(input, '.', defaultValues);
}
/**
 * @param {?} input
 * @param {?} character
 * @param {?} defaultValues
 * @return {?}
 */
function _splitAt(input, character, defaultValues) {
    const /** @type {?} */ characterIndex = input.indexOf(character);
    if (characterIndex == -1)
        return defaultValues;
    return [input.slice(0, characterIndex).trim(), input.slice(characterIndex + 1).trim()];
}
/**
 * @param {?} value
 * @param {?} visitor
 * @param {?} context
 * @return {?}
 */
export function visitValue(value, visitor, context) {
    if (Array.isArray(value)) {
        return visitor.visitArray(/** @type {?} */ (value), context);
    }
    if (isStrictStringMap(value)) {
        return visitor.visitStringMap(/** @type {?} */ (value), context);
    }
    if (value == null || typeof value == 'string' || typeof value == 'number' ||
        typeof value == 'boolean') {
        return visitor.visitPrimitive(value, context);
    }
    return visitor.visitOther(value, context);
}
/**
 * @param {?} val
 * @return {?}
 */
export function isDefined(val) {
    return val !== null && val !== undefined;
}
/**
 * @template T
 * @param {?} val
 * @return {?}
 */
export function noUndefined(val) {
    return val === undefined ? /** @type {?} */ ((null)) : val;
}
/**
 * @record
 */
export function ValueVisitor() { }
function ValueVisitor_tsickle_Closure_declarations() {
    /** @type {?} */
    ValueVisitor.prototype.visitArray;
    /** @type {?} */
    ValueVisitor.prototype.visitStringMap;
    /** @type {?} */
    ValueVisitor.prototype.visitPrimitive;
    /** @type {?} */
    ValueVisitor.prototype.visitOther;
}
export class ValueTransformer {
    /**
     * @param {?} arr
     * @param {?} context
     * @return {?}
     */
    visitArray(arr, context) {
        return arr.map(value => visitValue(value, this, context));
    }
    /**
     * @param {?} map
     * @param {?} context
     * @return {?}
     */
    visitStringMap(map, context) {
        const /** @type {?} */ result = {};
        Object.keys(map).forEach(key => { result[key] = visitValue(map[key], this, context); });
        return result;
    }
    /**
     * @param {?} value
     * @param {?} context
     * @return {?}
     */
    visitPrimitive(value, context) { return value; }
    /**
     * @param {?} value
     * @param {?} context
     * @return {?}
     */
    visitOther(value, context) { return value; }
}
export const /** @type {?} */ SyncAsync = {
    assertSync: (value) => {
        if (isPromise(value)) {
            throw new Error(`Illegal state: value cannot be a promise`);
        }
        return value;
    },
    then: (value, cb) => { return isPromise(value) ? value.then(cb) : cb(value); },
    all: (syncAsyncValues) => {
        return syncAsyncValues.some(isPromise) ? Promise.all(syncAsyncValues) : /** @type {?} */ (syncAsyncValues);
    }
};
/**
 * @param {?} msg
 * @return {?}
 */
export function error(msg) {
    throw new Error(`Internal Error: ${msg}`);
}
/**
 * @param {?} msg
 * @param {?=} parseErrors
 * @return {?}
 */
export function syntaxError(msg, parseErrors) {
    const /** @type {?} */ error = Error(msg);
    (/** @type {?} */ (error))[ERROR_SYNTAX_ERROR] = true;
    if (parseErrors)
        (/** @type {?} */ (error))[ERROR_PARSE_ERRORS] = parseErrors;
    return error;
}
const /** @type {?} */ ERROR_SYNTAX_ERROR = 'ngSyntaxError';
const /** @type {?} */ ERROR_PARSE_ERRORS = 'ngParseErrors';
/**
 * @param {?} error
 * @return {?}
 */
export function isSyntaxError(error) {
    return (/** @type {?} */ (error))[ERROR_SYNTAX_ERROR];
}
/**
 * @param {?} error
 * @return {?}
 */
export function getParseErrors(error) {
    return (/** @type {?} */ (error))[ERROR_PARSE_ERRORS] || [];
}
/**
 * @param {?} s
 * @return {?}
 */
export function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
const /** @type {?} */ STRING_MAP_PROTO = Object.getPrototypeOf({});
/**
 * @param {?} obj
 * @return {?}
 */
function isStrictStringMap(obj) {
    return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
/**
 * @param {?} str
 * @return {?}
 */
export function utf8Encode(str) {
    let /** @type {?} */ encoded = '';
    for (let /** @type {?} */ index = 0; index < str.length; index++) {
        let /** @type {?} */ codePoint = str.charCodeAt(index);
        // decode surrogate
        // see https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        if (codePoint >= 0xd800 && codePoint <= 0xdbff && str.length > (index + 1)) {
            const /** @type {?} */ low = str.charCodeAt(index + 1);
            if (low >= 0xdc00 && low <= 0xdfff) {
                index++;
                codePoint = ((codePoint - 0xd800) << 10) + low - 0xdc00 + 0x10000;
            }
        }
        if (codePoint <= 0x7f) {
            encoded += String.fromCharCode(codePoint);
        }
        else if (codePoint <= 0x7ff) {
            encoded += String.fromCharCode(((codePoint >> 6) & 0x1F) | 0xc0, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint <= 0xffff) {
            encoded += String.fromCharCode((codePoint >> 12) | 0xe0, ((codePoint >> 6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint <= 0x1fffff) {
            encoded += String.fromCharCode(((codePoint >> 18) & 0x07) | 0xf0, ((codePoint >> 12) & 0x3f) | 0x80, ((codePoint >> 6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
    }
    return encoded;
}
/**
 * @record
 */
export function OutputContext() { }
function OutputContext_tsickle_Closure_declarations() {
    /** @type {?} */
    OutputContext.prototype.genFilePath;
    /** @type {?} */
    OutputContext.prototype.statements;
    /** @type {?} */
    OutputContext.prototype.constantPool;
    /** @type {?} */
    OutputContext.prototype.importExpr;
}
/**
 * @param {?} token
 * @return {?}
 */
export function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token instanceof Array) {
        return '[' + token.map(stringify).join(', ') + ']';
    }
    if (token == null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return `${token.overriddenName}`;
    }
    if (token.name) {
        return `${token.name}`;
    }
    // WARNING: do not try to `JSON.stringify(token)` here
    // see https://github.com/angular/angular/issues/23440
    const /** @type {?} */ res = token.toString();
    if (res == null) {
        return '' + res;
    }
    const /** @type {?} */ newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
/**
 * Lazily retrieves the reference value from a forwardRef.
 * @param {?} type
 * @return {?}
 */
export function resolveForwardRef(type) {
    if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__')) {
        return type();
    }
    else {
        return type;
    }
}
/**
 * Determine if the argument is shaped like a Promise
 * @param {?} obj
 * @return {?}
 */
export function isPromise(obj) {
    // allow any Promise/A+ compliant thenable.
    // It's up to the caller to ensure that obj.then conforms to the spec
    return !!obj && typeof obj.then === 'function';
}
export class Version {
    /**
     * @param {?} full
     */
    constructor(full) {
        this.full = full;
        const /** @type {?} */ splits = full.split('.');
        this.major = splits[0];
        this.minor = splits[1];
        this.patch = splits.slice(2).join('.');
    }
}
function Version_tsickle_Closure_declarations() {
    /** @type {?} */
    Version.prototype.major;
    /** @type {?} */
    Version.prototype.minor;
    /** @type {?} */
    Version.prototype.patch;
    /** @type {?} */
    Version.prototype.full;
}
/**
 * @record
 */
export function Console() { }
function Console_tsickle_Closure_declarations() {
    /** @type {?} */
    Console.prototype.log;
    /** @type {?} */
    Console.prototype.warn;
}
//# sourceMappingURL=util.js.map