import { ATN } from "antlr4ts/atn/ATN";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class ASN_3gppLexer extends Lexer {
    static readonly TAG = 1;
    static readonly A_ROND = 2;
    static readonly STAR = 3;
    static readonly ASSIGN_OP = 4;
    static readonly BOOLEAN_LITERAL = 5;
    static readonly TRUE_LITERAL = 6;
    static readonly FALSE_LITERAL = 7;
    static readonly DOT = 8;
    static readonly DOUBLE_DOT = 9;
    static readonly ELLIPSIS = 10;
    static readonly APOSTROPHE = 11;
    static readonly AMPERSAND = 12;
    static readonly LESS_THAN = 13;
    static readonly GREATER_THAN = 14;
    static readonly LESS_THAN_SLASH = 15;
    static readonly SLASH_GREATER_THAN = 16;
    static readonly TRUE_SMALL_LITERAL = 17;
    static readonly FALSE_SMALL_LITERAL = 18;
    static readonly INTEGER_LITERAL = 19;
    static readonly L_BRACE = 20;
    static readonly R_BRACE = 21;
    static readonly COMMA = 22;
    static readonly L_PARAN = 23;
    static readonly R_PARAN = 24;
    static readonly MINUS = 25;
    static readonly ENUMERATED_LITERAL = 26;
    static readonly REAL_LITERAL = 27;
    static readonly PLUS_INFINITY_LITERAL = 28;
    static readonly MINUS_INFINITY_LITERAL = 29;
    static readonly BIT_LITERAL = 30;
    static readonly STRING_LITERAL = 31;
    static readonly CONTAINING_LITERAL = 32;
    static readonly OCTET_LITERAL = 33;
    static readonly NULL_LITERAL = 34;
    static readonly SEQUENCE_LITERAL = 35;
    static readonly OPTIONAL_LITERAL = 36;
    static readonly DEFAULT_LITERAL = 37;
    static readonly COMPONENTS_LITERAL = 38;
    static readonly OF_LITERAL = 39;
    static readonly SET_LITERAL = 40;
    static readonly EXCLAM = 41;
    static readonly ALL_LITERAL = 42;
    static readonly EXCEPT_LITERAL = 43;
    static readonly POWER = 44;
    static readonly PIPE = 45;
    static readonly UNION_LITERAL = 46;
    static readonly INTERSECTION_LITERAL = 47;
    static readonly INCLUDES_LITERAL = 48;
    static readonly MIN_LITERAL = 49;
    static readonly MAX_LITERAL = 50;
    static readonly SIZE_LITERAL = 51;
    static readonly FROM_LITERAL = 52;
    static readonly WITH_LITERAL = 53;
    static readonly COMPONENT_LITERAL = 54;
    static readonly PRESENT_LITERAL = 55;
    static readonly ABSENT_LITERAL = 56;
    static readonly PATTERN_LITERAL = 57;
    static readonly TYPE_IDENTIFIER_LITERAL = 58;
    static readonly ABSTRACT_SYNTAX_LITERAL = 59;
    static readonly CLASS_LITERAL = 60;
    static readonly UNIQUE_LITERAL = 61;
    static readonly SYNTAX_LITERAL = 62;
    static readonly L_BRACKET = 63;
    static readonly R_BRACKET = 64;
    static readonly INSTANCE_LITERAL = 65;
    static readonly SEMI_COLON = 66;
    static readonly IMPORTS_LITERAL = 67;
    static readonly EXPORTS_LITERAL = 68;
    static readonly EXTENSIBILITY_LITERAL = 69;
    static readonly IMPLIED_LITERAL = 70;
    static readonly EXPLICIT_LITERAL = 71;
    static readonly TAGS_LITERAL = 72;
    static readonly IMPLICIT_LITERAL = 73;
    static readonly AUTOMATIC_LITERAL = 74;
    static readonly DEFINITIONS_LITERAL = 75;
    static readonly BEGIN_LITERAL = 76;
    static readonly END_LITERAL = 77;
    static readonly DOUBLE_L_BRACKET = 78;
    static readonly DOUBLE_R_BRACKET = 79;
    static readonly COLON = 80;
    static readonly CHOICE_LITERAL = 81;
    static readonly UNIVERSAL_LITERAL = 82;
    static readonly APPLICATION_LITERAL = 83;
    static readonly PRIVATE_LITERAL = 84;
    static readonly EMBEDDED_LITERAL = 85;
    static readonly PDV_LITERAL = 86;
    static readonly EXTERNAL_LITERAL = 87;
    static readonly OBJECT_LITERAL = 88;
    static readonly IDENTIFIER_LITERAL = 89;
    static readonly RELATIVE_OID_LITERAL = 90;
    static readonly CHARACTER_LITERAL = 91;
    static readonly CONSTRAINED_LITERAL = 92;
    static readonly BY_LITERAL = 93;
    static readonly A_ROND_DOT = 94;
    static readonly ENCODED_LITERAL = 95;
    static readonly COMMENT = 96;
    static readonly UNRESTRICTEDCHARACTERSTRINGTYPE = 97;
    static readonly EXTENSTIONENDMARKER = 98;
    static readonly NUMBER = 99;
    static readonly WS = 100;
    static readonly LINE_COMMENT = 101;
    static readonly BSTRING = 102;
    static readonly HSTRING = 103;
    static readonly CSTRING = 104;
    static readonly IDENTIFIER = 105;
    static readonly channelNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    constructor(input: CharStream);
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    readonly channelNames: string[];
    readonly modeNames: string[];
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private LINE_COMMENT_sempred;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
