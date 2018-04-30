/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileDirectiveSummary, CompilePipeSummary } from '../compile_metadata';
import { SecurityContext } from '../core';
import { ASTWithSource, BindingPipe, BoundElementProperty, ParsedEvent, ParsedProperty, ParsedVariable, RecursiveAstVisitor } from '../expression_parser/ast';
import { Parser } from '../expression_parser/parser';
import { InterpolationConfig } from '../ml_parser/interpolation_config';
import { ParseError, ParseSourceSpan } from '../parse_util';
import { ElementSchemaRegistry } from '../schema/element_schema_registry';
/**
 * Parses bindings in templates and in the directive host area.
 */
export declare class BindingParser {
    private _exprParser;
    private _interpolationConfig;
    private _schemaRegistry;
    private _targetErrors;
    pipesByName: Map<string, CompilePipeSummary> | null;
    private _usedPipes;
    constructor(_exprParser: Parser, _interpolationConfig: InterpolationConfig, _schemaRegistry: ElementSchemaRegistry, pipes: CompilePipeSummary[] | null, _targetErrors: ParseError[]);
    getUsedPipes(): CompilePipeSummary[];
    createBoundHostProperties(dirMeta: CompileDirectiveSummary, sourceSpan: ParseSourceSpan): ParsedProperty[] | null;
    createDirectiveHostPropertyAsts(dirMeta: CompileDirectiveSummary, elementSelector: string, sourceSpan: ParseSourceSpan): BoundElementProperty[] | null;
    createDirectiveHostEventAsts(dirMeta: CompileDirectiveSummary, sourceSpan: ParseSourceSpan): ParsedEvent[] | null;
    parseInterpolation(value: string, sourceSpan: ParseSourceSpan): ASTWithSource;
    parseInlineTemplateBinding(tplKey: string, tplValue: string, sourceSpan: ParseSourceSpan, targetMatchableAttrs: string[][], targetProps: ParsedProperty[], targetVars: ParsedVariable[]): void;
    private _parseTemplateBindings(tplKey, tplValue, sourceSpan);
    parseLiteralAttr(name: string, value: string | null, sourceSpan: ParseSourceSpan, targetMatchableAttrs: string[][], targetProps: ParsedProperty[]): void;
    parsePropertyBinding(name: string, expression: string, isHost: boolean, sourceSpan: ParseSourceSpan, targetMatchableAttrs: string[][], targetProps: ParsedProperty[]): void;
    parsePropertyInterpolation(name: string, value: string, sourceSpan: ParseSourceSpan, targetMatchableAttrs: string[][], targetProps: ParsedProperty[]): boolean;
    private _parsePropertyAst(name, ast, sourceSpan, targetMatchableAttrs, targetProps);
    private _parseAnimation(name, expression, sourceSpan, targetMatchableAttrs, targetProps);
    private _parseBinding(value, isHostBinding, sourceSpan);
    createBoundElementProperty(elementSelector: string, boundProp: ParsedProperty): BoundElementProperty;
    parseEvent(name: string, expression: string, sourceSpan: ParseSourceSpan, targetMatchableAttrs: string[][], targetEvents: ParsedEvent[]): void;
    private _parseAnimationEvent(name, expression, sourceSpan, targetEvents);
    private _parseRegularEvent(name, expression, sourceSpan, targetMatchableAttrs, targetEvents);
    private _parseAction(value, sourceSpan);
    private _reportError(message, sourceSpan, level?);
    private _reportExpressionParserErrors(errors, sourceSpan);
    private _checkPipes(ast, sourceSpan);
    /**
     * @param propName the name of the property / attribute
     * @param sourceSpan
     * @param isAttr true when binding to an attribute
     */
    private _validatePropertyOrAttributeName(propName, sourceSpan, isAttr);
}
export declare class PipeCollector extends RecursiveAstVisitor {
    pipes: Map<string, BindingPipe>;
    visitPipe(ast: BindingPipe, context: any): any;
}
export declare function calcPossibleSecurityContexts(registry: ElementSchemaRegistry, selector: string, propName: string, isAttribute: boolean): SecurityContext[];
