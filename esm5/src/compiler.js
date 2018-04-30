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
import * as core from './core';
export { core };
export { VERSION } from './version';
export { TextAst, BoundTextAst, AttrAst, PropertyBindingType, BoundElementPropertyAst, BoundEventAst, ReferenceAst, VariableAst, ElementAst, EmbeddedTemplateAst, BoundDirectivePropertyAst, DirectiveAst, ProviderAst, ProviderAstType, NgContentAst, NullTemplateVisitor, RecursiveTemplateAstVisitor, templateVisitAll } from './template_parser/template_ast';
export { CompilerConfig, preserveWhitespacesDefault } from './config';
export { sanitizeIdentifier, identifierName, identifierModuleUrl, viewClassName, rendererTypeName, hostViewClassName, componentFactoryName, CompileSummaryKind, tokenName, tokenReference, CompileStylesheetMetadata, CompileTemplateMetadata, CompileDirectiveMetadata, CompilePipeMetadata, CompileShallowModuleMetadata, CompileNgModuleMetadata, TransitiveCompileNgModuleMetadata, ProviderMeta, flatten, templateSourceUrl, sharedStylesheetJitUrl, ngModuleJitUrl, templateJitUrl } from './compile_metadata';
export { createAotUrlResolver, createAotCompiler } from './aot/compiler_factory';
export { AotCompiler, analyzeNgModules, analyzeAndValidateNgModules, analyzeFile, analyzeFileForInjectables, mergeAnalyzedFiles } from './aot/compiler';
export { GeneratedFile, toTypeScript } from './aot/generated_file';
export { formattedError, isFormattedError } from './aot/formatted_error';
export { StaticReflector } from './aot/static_reflector';
export { StaticSymbol, StaticSymbolCache } from './aot/static_symbol';
export { ResolvedStaticSymbol, StaticSymbolResolver, unescapeIdentifier, unwrapResolvedMetadata } from './aot/static_symbol_resolver';
export { AotSummaryResolver } from './aot/summary_resolver';
export { isLoweredSymbol, createLoweredSymbol } from './aot/util';
export { AstPath } from './ast_path';
export { SummaryResolver, JitSummaryResolver } from './summary_resolver';
export { Identifiers } from './identifiers';
export { JitCompiler } from './jit/compiler';
export { CompileReflector } from './compile_reflector';
export { createUrlResolverWithoutPackagePrefix, createOfflineCompileUrlResolver, UrlResolver, getUrlScheme } from './url_resolver';
export { ResourceLoader } from './resource_loader';
export { DirectiveResolver } from './directive_resolver';
export { PipeResolver } from './pipe_resolver';
export { NgModuleResolver } from './ng_module_resolver';
export { DEFAULT_INTERPOLATION_CONFIG, InterpolationConfig } from './ml_parser/interpolation_config';
export { ElementSchemaRegistry } from './schema/element_schema_registry';
export { Extractor, I18NHtmlParser, MessageBundle, Serializer, Xliff, Xliff2, Xmb, Xtb } from './i18n/index';
export { DirectiveNormalizer } from './directive_normalizer';
export { ParserError, ParseSpan, AST, Quote, EmptyExpr, ImplicitReceiver, Chain, Conditional, PropertyRead, PropertyWrite, SafePropertyRead, KeyedRead, KeyedWrite, BindingPipe, LiteralPrimitive, LiteralArray, LiteralMap, Interpolation, Binary, PrefixNot, NonNullAssert, MethodCall, SafeMethodCall, FunctionCall, ASTWithSource, TemplateBinding, NullAstVisitor, RecursiveAstVisitor, AstTransformer, AstMemoryEfficientTransformer, visitAstChildren, ParsedProperty, ParsedPropertyType, ParsedEvent, ParsedVariable, BoundElementProperty } from './expression_parser/ast';
export { TokenType, Lexer, Token, EOF, isIdentifier, isQuote } from './expression_parser/lexer';
export { SplitInterpolation, TemplateBindingParseResult, Parser, _ParseAST } from './expression_parser/parser';
export { ERROR_COMPONENT_TYPE, CompileMetadataResolver } from './metadata_resolver';
export { Text, Expansion, ExpansionCase, Attribute, Element, Comment, visitAll, RecursiveVisitor, findNode } from './ml_parser/ast';
export { ParseTreeResult, TreeError, HtmlParser } from './ml_parser/html_parser';
export { HtmlTagDefinition, getHtmlTagDefinition } from './ml_parser/html_tags';
export { TagContentType, splitNsName, isNgContainer, isNgContent, isNgTemplate, getNsPrefix, mergeNsAndName, NAMED_ENTITIES, NGSP_UNICODE } from './ml_parser/tags';
export { NgModuleCompiler } from './ng_module_compiler';
export { ArrayType, AssertNotNull, BinaryOperator, BinaryOperatorExpr, BuiltinMethod, BuiltinType, BuiltinTypeName, BuiltinVar, CastExpr, ClassField, ClassMethod, ClassStmt, CommaExpr, CommentStmt, ConditionalExpr, DeclareFunctionStmt, DeclareVarStmt, Expression, ExpressionStatement, ExpressionType, ExternalExpr, ExternalReference, FunctionExpr, IfStmt, InstantiateExpr, InvokeFunctionExpr, InvokeMethodExpr, JSDocCommentStmt, LiteralArrayExpr, LiteralExpr, LiteralMapExpr, MapType, NotExpr, ReadKeyExpr, ReadPropExpr, ReadVarExpr, ReturnStatement, ThrowStmt, TryCatchStmt, Type, WrappedNodeExpr, WriteKeyExpr, WritePropExpr, WriteVarExpr, StmtModifier, Statement, collectExternalReferences } from './output/output_ast';
export { EmitterVisitorContext } from './output/abstract_emitter';
export { debugOutputAstAsTypeScript, TypeScriptEmitter } from './output/ts_emitter';
export { ParseLocation, ParseSourceFile, ParseSourceSpan, ParseErrorLevel, ParseError, typeSourceSpan } from './parse_util';
export { DomElementSchemaRegistry } from './schema/dom_element_schema_registry';
export { CssSelector, SelectorMatcher, SelectorListContext, SelectorContext } from './selector';
export { StylesCompileDependency, CompiledStylesheet, StyleCompiler } from './style_compiler';
export { TemplateParseError, TemplateParseResult, TemplateParser, splitClasses, createElementCssSelector, removeSummaryDuplicates } from './template_parser/template_parser';
export { ViewCompiler } from './view_compiler/view_compiler';
export { getParseErrors, isSyntaxError, syntaxError, Version } from './util';
export { compileIvyInjectable } from './injectable_compiler_2';
// This file only reexports content of the `src` folder. Keep it that way.
//# sourceMappingURL=compiler.js.map