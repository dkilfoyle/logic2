// Generated from c:\code\logic2\src\grammar\vlg.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var vlgListener = require('./vlgListener').vlgListener;
var vlgVisitor = require('./vlgVisitor').vlgVisitor;

 /* eslint-disable */ 
var grammarFileName = "vlg.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003R\u027c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0007\u0003\u0083\n\u0003\f\u0003\u000e",
    "\u0003\u0086\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u008e\n\u0004\u0003\u0004\u0005",
    "\u0004\u0091\n\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u0095\n\u0004",
    "\f\u0004\u000e\u0004\u0098\u000b\u0004\u0003\u0004\u0005\u0004\u009b",
    "\n\u0004\u0003\u0004\u0005\u0004\u009e\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u00a5\n\u0005\u0003",
    "\u0005\u0005\u0005\u00a8\n\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "\u00ac\n\u0005\f\u0005\u000e\u0005\u00af\u000b\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007\u00bf\n\u0007\f\u0007\u000e\u0007\u00c2\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\b\u00c8\n\b\u0003\b\u0005",
    "\b\u00cb\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t\u00d2\n",
    "\t\f\t\u000e\t\u00d5\u000b\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00e1\n\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00e6\n\f",
    "\f\f\u000e\f\u00e9\u000b\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r\u00ef",
    "\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00fa\n\u000f\f\u000f",
    "\u000e\u000f\u00fd\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0007",
    "\u0011\u0108\n\u0011\f\u0011\u000e\u0011\u010b\u000b\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u011c\n\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u0123\n\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0007\u0016\u012b\n\u0016\f\u0016\u000e\u0016\u012e\u000b\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0133\n\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0007\u0018\u0138\n\u0018\f\u0018\u000e\u0018",
    "\u013b\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0140",
    "\n\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0144\n\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0007\u001a\u014d\n\u001a\f\u001a\u000e\u001a\u0150\u000b\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007",
    "\u001b\u0158\n\u001b\f\u001b\u000e\u001b\u015b\u000b\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d",
    "\u0169\n\u001d\f\u001d\u000e\u001d\u016c\u000b\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u0175\n\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0007#\u0192\n#\f#\u000e#\u0195",
    "\u000b#\u0005#\u0197\n#\u0003$\u0003$\u0003%\u0005%\u019c\n%\u0003%",
    "\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0005\'\u01a4\n\'\u0003(\u0003",
    "(\u0007(\u01a8\n(\f(\u000e(\u01ab\u000b(\u0003(\u0003(\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0005)\u01b5\n)\u0003*\u0003*\u0003*\u0003",
    "*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u01c2\n+\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0006,\u01c9\n,\r,\u000e,\u01ca\u0003",
    ",\u0005,\u01ce\n,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003-\u0003.\u0003",
    ".\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u00030\u0003",
    "0\u00030\u00030\u00070\u01e4\n0\f0\u000e0\u01e7\u000b0\u00030\u0003",
    "0\u00031\u00031\u00031\u00031\u00031\u00031\u00071\u01f1\n1\f1\u000e",
    "1\u01f4\u000b1\u00031\u00031\u00031\u00032\u00032\u00032\u00032\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00032\u00052\u0204\n2\u00032\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00032\u00072\u0218\n2\f2\u000e",
    "2\u021b\u000b2\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00053\u0229\n3\u00033\u00033\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00033\u00033\u00073\u0235\n3\f3\u000e",
    "3\u0238\u000b3\u00034\u00034\u00035\u00035\u00036\u00036\u00056\u0240",
    "\n6\u00037\u00037\u00038\u00038\u00039\u00039\u00039\u00039\u00059\u024a",
    "\n9\u0003:\u0003:\u0003;\u0003;\u0003;\u0007;\u0251\n;\f;\u000e;\u0254",
    "\u000b;\u0003<\u0003<\u0003<\u0007<\u0259\n<\f<\u000e<\u025c\u000b<",
    "\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003>\u0003>\u0003>\u0003",
    ">\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0005",
    ">\u0271\n>\u0003?\u0003?\u0007?\u0275\n?\f?\u000e?\u0278\u000b?\u0003",
    "?\u0003?\u0003?\u0002\u0004bd@\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhjlnprtvxz|\u0002\u000f\u0003\u0002\f\r\u0003\u0002\u0017$\u0003",
    "\u0002)*\u0004\u0002@@HH\u0004\u0002<<AB\u0003\u0002EF\u0003\u0002A",
    "B\u0003\u0002CD\u0003\u0002GN\u0004\u0002=?CD\u0003\u0002;<\u0004\u0002",
    ";;AB\u0005\u0002ABEFKL\u0002\u0288\u0002~\u0003\u0002\u0002\u0002\u0004",
    "\u0084\u0003\u0002\u0002\u0002\u0006\u008a\u0003\u0002\u0002\u0002\b",
    "\u00a1\u0003\u0002\u0002\u0002\n\u00b2\u0003\u0002\u0002\u0002\f\u00ba",
    "\u0003\u0002\u0002\u0002\u000e\u00c5\u0003\u0002\u0002\u0002\u0010\u00ce",
    "\u0003\u0002\u0002\u0002\u0012\u00d6\u0003\u0002\u0002\u0002\u0014\u00e0",
    "\u0003\u0002\u0002\u0002\u0016\u00e2\u0003\u0002\u0002\u0002\u0018\u00ec",
    "\u0003\u0002\u0002\u0002\u001a\u00f2\u0003\u0002\u0002\u0002\u001c\u00f5",
    "\u0003\u0002\u0002\u0002\u001e\u0100\u0003\u0002\u0002\u0002 \u0104",
    "\u0003\u0002\u0002\u0002\"\u010e\u0003\u0002\u0002\u0002$\u0113\u0003",
    "\u0002\u0002\u0002&\u0119\u0003\u0002\u0002\u0002(\u0120\u0003\u0002",
    "\u0002\u0002*\u0127\u0003\u0002\u0002\u0002,\u0132\u0003\u0002\u0002",
    "\u0002.\u0134\u0003\u0002\u0002\u00020\u013c\u0003\u0002\u0002\u0002",
    "2\u0147\u0003\u0002\u0002\u00024\u0153\u0003\u0002\u0002\u00026\u015e",
    "\u0003\u0002\u0002\u00028\u0164\u0003\u0002\u0002\u0002:\u016f\u0003",
    "\u0002\u0002\u0002<\u0179\u0003\u0002\u0002\u0002>\u017b\u0003\u0002",
    "\u0002\u0002@\u0181\u0003\u0002\u0002\u0002B\u0184\u0003\u0002\u0002",
    "\u0002D\u0196\u0003\u0002\u0002\u0002F\u0198\u0003\u0002\u0002\u0002",
    "H\u019b\u0003\u0002\u0002\u0002J\u019f\u0003\u0002\u0002\u0002L\u01a3",
    "\u0003\u0002\u0002\u0002N\u01a5\u0003\u0002\u0002\u0002P\u01b4\u0003",
    "\u0002\u0002\u0002R\u01b6\u0003\u0002\u0002\u0002T\u01ba\u0003\u0002",
    "\u0002\u0002V\u01c3\u0003\u0002\u0002\u0002X\u01d1\u0003\u0002\u0002",
    "\u0002Z\u01d5\u0003\u0002\u0002\u0002\\\u01d9\u0003\u0002\u0002\u0002",
    "^\u01df\u0003\u0002\u0002\u0002`\u01ea\u0003\u0002\u0002\u0002b\u0203",
    "\u0003\u0002\u0002\u0002d\u0228\u0003\u0002\u0002\u0002f\u0239\u0003",
    "\u0002\u0002\u0002h\u023b\u0003\u0002\u0002\u0002j\u023f\u0003\u0002",
    "\u0002\u0002l\u0241\u0003\u0002\u0002\u0002n\u0243\u0003\u0002\u0002",
    "\u0002p\u0249\u0003\u0002\u0002\u0002r\u024b\u0003\u0002\u0002\u0002",
    "t\u024d\u0003\u0002\u0002\u0002v\u0255\u0003\u0002\u0002\u0002x\u025d",
    "\u0003\u0002\u0002\u0002z\u0270\u0003\u0002\u0002\u0002|\u0272\u0003",
    "\u0002\u0002\u0002~\u007f\u0005\u0004\u0003\u0002\u007f\u0080\u0007",
    "\u0002\u0002\u0003\u0080\u0003\u0003\u0002\u0002\u0002\u0081\u0083\u0005",
    "\b\u0005\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u0086\u0003",
    "\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003",
    "\u0002\u0002\u0002\u0085\u0087\u0003\u0002\u0002\u0002\u0086\u0084\u0003",
    "\u0002\u0002\u0002\u0087\u0088\u0005\u0006\u0004\u0002\u0088\u0089\u0007",
    "\u0002\u0002\u0003\u0089\u0005\u0003\u0002\u0002\u0002\u008a\u008b\u0007",
    "\u0003\u0002\u0002\u008b\u008d\u00076\u0002\u0002\u008c\u008e\u0005",
    "\n\u0006\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008d\u008e\u0003",
    "\u0002\u0002\u0002\u008e\u0090\u0003\u0002\u0002\u0002\u008f\u0091\u0005",
    "\f\u0007\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0090\u0091\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0096\u0007",
    "\u0004\u0002\u0002\u0093\u0095\u0005\u0014\u000b\u0002\u0094\u0093\u0003",
    "\u0002\u0002\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u009a\u0003",
    "\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009b\u0005",
    "\u0016\f\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009a\u009b\u0003",
    "\u0002\u0002\u0002\u009b\u009d\u0003\u0002\u0002\u0002\u009c\u009e\u0005",
    " \u0011\u0002\u009d\u009c\u0003\u0002\u0002\u0002\u009d\u009e\u0003",
    "\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\u0007",
    "\u0005\u0002\u0002\u00a0\u0007\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007",
    "\u0003\u0002\u0002\u00a2\u00a4\u0007Q\u0002\u0002\u00a3\u00a5\u0005",
    "\n\u0006\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003",
    "\u0002\u0002\u0002\u00a5\u00a7\u0003\u0002\u0002\u0002\u00a6\u00a8\u0005",
    "\f\u0007\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00ad\u0007",
    "\u0004\u0002\u0002\u00aa\u00ac\u0005\u0014\u000b\u0002\u00ab\u00aa\u0003",
    "\u0002\u0002\u0002\u00ac\u00af\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003",
    "\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007",
    "\u0005\u0002\u0002\u00b1\t\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007",
    "\u0006\u0002\u0002\u00b3\u00b4\u0007\u0007\u0002\u0002\u00b4\u00b5\u0007",
    "\b\u0002\u0002\u00b5\u00b6\u0007Q\u0002\u0002\u00b6\u00b7\u0007@\u0002",
    "\u0002\u00b7\u00b8\u0005p9\u0002\u00b8\u00b9\u0007\t\u0002\u0002\u00b9",
    "\u000b\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u0007\u0002\u0002\u00bb",
    "\u00c0\u0005\u000e\b\u0002\u00bc\u00bd\u0007\n\u0002\u0002\u00bd\u00bf",
    "\u0005\u000e\b\u0002\u00be\u00bc\u0003\u0002\u0002\u0002\u00bf\u00c2",
    "\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1",
    "\u0003\u0002\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002\u0002\u00c2\u00c0",
    "\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\t\u0002\u0002\u00c4\r\u0003",
    "\u0002\u0002\u0002\u00c5\u00c7\u0005\u0012\n\u0002\u00c6\u00c8\u0007",
    "\u000b\u0002\u0002\u00c7\u00c6\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003",
    "\u0002\u0002\u0002\u00c8\u00ca\u0003\u0002\u0002\u0002\u00c9\u00cb\u0005",
    "x=\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002",
    "\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00cd\u0005\u0010",
    "\t\u0002\u00cd\u000f\u0003\u0002\u0002\u0002\u00ce\u00d3\u0007Q\u0002",
    "\u0002\u00cf\u00d0\u0007\n\u0002\u0002\u00d0\u00d2\u0007Q\u0002\u0002",
    "\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2\u00d5\u0003\u0002\u0002\u0002",
    "\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002",
    "\u00d4\u0011\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002",
    "\u00d6\u00d7\t\u0002\u0002\u0002\u00d7\u0013\u0003\u0002\u0002\u0002",
    "\u00d8\u00e1\u0005&\u0014\u0002\u00d9\u00e1\u0005(\u0015\u0002\u00da",
    "\u00e1\u0005$\u0013\u0002\u00db\u00e1\u0005> \u0002\u00dc\u00e1\u0005",
    ":\u001e\u0002\u00dd\u00e1\u00050\u0019\u0002\u00de\u00e1\u0005@!\u0002",
    "\u00df\u00e1\u0005B\"\u0002\u00e0\u00d8\u0003\u0002\u0002\u0002\u00e0",
    "\u00d9\u0003\u0002\u0002\u0002\u00e0\u00da\u0003\u0002\u0002\u0002\u00e0",
    "\u00db\u0003\u0002\u0002\u0002\u00e0\u00dc\u0003\u0002\u0002\u0002\u00e0",
    "\u00dd\u0003\u0002\u0002\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e0",
    "\u00df\u0003\u0002\u0002\u0002\u00e1\u0015\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0007\u000e\u0002\u0002\u00e3\u00e7\u0007\u000f\u0002\u0002\u00e4",
    "\u00e6\u0005\u0018\r\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e6",
    "\u00e9\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7",
    "\u00e8\u0003\u0002\u0002\u0002\u00e8\u00ea\u0003\u0002\u0002\u0002\u00e9",
    "\u00e7\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007\u0010\u0002\u0002\u00eb",
    "\u0017\u0003\u0002\u0002\u0002\u00ec\u00ee\u0005\u001a\u000e\u0002\u00ed",
    "\u00ef\u0005\u001c\u000f\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ee",
    "\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0",
    "\u00f1\u0007\u0004\u0002\u0002\u00f1\u0019\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0007\u0006\u0002\u0002\u00f3\u00f4\u00077\u0002\u0002\u00f4",
    "\u001b\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007\u0011\u0002\u0002\u00f6",
    "\u00fb\u0005\u001e\u0010\u0002\u00f7\u00f8\u0007\n\u0002\u0002\u00f8",
    "\u00fa\u0005\u001e\u0010\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00fa",
    "\u00fd\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002\u00fb",
    "\u00fc\u0003\u0002\u0002\u0002\u00fc\u00fe\u0003\u0002\u0002\u0002\u00fd",
    "\u00fb\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007\u0012\u0002\u0002\u00ff",
    "\u001d\u0003\u0002\u0002\u0002\u0100\u0101\u0005j6\u0002\u0101\u0102",
    "\u0007@\u0002\u0002\u0102\u0103\u0005b2\u0002\u0103\u001f\u0003\u0002",
    "\u0002\u0002\u0104\u0105\u0007\u0013\u0002\u0002\u0105\u0109\u0007\u000f",
    "\u0002\u0002\u0106\u0108\u0005\"\u0012\u0002\u0107\u0106\u0003\u0002",
    "\u0002\u0002\u0108\u010b\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002",
    "\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010c\u0003\u0002",
    "\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c\u010d\u0007\u0010",
    "\u0002\u0002\u010d!\u0003\u0002\u0002\u0002\u010e\u010f\u0007Q\u0002",
    "\u0002\u010f\u0110\u0007@\u0002\u0002\u0110\u0111\u0007Q\u0002\u0002",
    "\u0111\u0112\u0007\u0004\u0002\u0002\u0112#\u0003\u0002\u0002\u0002",
    "\u0113\u0114\u0007\u0014\u0002\u0002\u0114\u0115\u0007Q\u0002\u0002",
    "\u0115\u0116\u0007@\u0002\u0002\u0116\u0117\u0005b2\u0002\u0117\u0118",
    "\u0007\u0004\u0002\u0002\u0118%\u0003\u0002\u0002\u0002\u0119\u011b",
    "\u0007\u0015\u0002\u0002\u011a\u011c\u0005x=\u0002\u011b\u011a\u0003",
    "\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011d\u0003",
    "\u0002\u0002\u0002\u011d\u011e\u0005.\u0018\u0002\u011e\u011f\u0007",
    "\u0004\u0002\u0002\u011f\'\u0003\u0002\u0002\u0002\u0120\u0122\u0007",
    "\u000b\u0002\u0002\u0121\u0123\u0005x=\u0002\u0122\u0121\u0003\u0002",
    "\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002",
    "\u0002\u0002\u0124\u0125\u0005*\u0016\u0002\u0125\u0126\u0007\u0004",
    "\u0002\u0002\u0126)\u0003\u0002\u0002\u0002\u0127\u012c\u0005,\u0017",
    "\u0002\u0128\u0129\u0007\n\u0002\u0002\u0129\u012b\u0005,\u0017\u0002",
    "\u012a\u0128\u0003\u0002\u0002\u0002\u012b\u012e\u0003\u0002\u0002\u0002",
    "\u012c\u012a\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002\u0002\u0002",
    "\u012d+\u0003\u0002\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002",
    "\u012f\u0133\u0007Q\u0002\u0002\u0130\u0131\u0007Q\u0002\u0002\u0131",
    "\u0133\u0005x=\u0002\u0132\u012f\u0003\u0002\u0002\u0002\u0132\u0130",
    "\u0003\u0002\u0002\u0002\u0133-\u0003\u0002\u0002\u0002\u0134\u0139",
    "\u0007Q\u0002\u0002\u0135\u0136\u0007\n\u0002\u0002\u0136\u0138\u0007",
    "Q\u0002\u0002\u0137\u0135\u0003\u0002\u0002\u0002\u0138\u013b\u0003",
    "\u0002\u0002\u0002\u0139\u0137\u0003\u0002\u0002\u0002\u0139\u013a\u0003",
    "\u0002\u0002\u0002\u013a/\u0003\u0002\u0002\u0002\u013b\u0139\u0003",
    "\u0002\u0002\u0002\u013c\u013d\u0007Q\u0002\u0002\u013d\u013f\u0007",
    "Q\u0002\u0002\u013e\u0140\u00052\u001a\u0002\u013f\u013e\u0003\u0002",
    "\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0143\u0003\u0002",
    "\u0002\u0002\u0141\u0144\u00054\u001b\u0002\u0142\u0144\u00058\u001d",
    "\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0143\u0142\u0003\u0002\u0002",
    "\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145\u0146\u0007\u0004\u0002",
    "\u0002\u01461\u0003\u0002\u0002\u0002\u0147\u0148\u0007\u0006\u0002",
    "\u0002\u0148\u0149\u0007\u0007\u0002\u0002\u0149\u014e\u0005b2\u0002",
    "\u014a\u014b\u0007\n\u0002\u0002\u014b\u014d\u0005b2\u0002\u014c\u014a",
    "\u0003\u0002\u0002\u0002\u014d\u0150\u0003\u0002\u0002\u0002\u014e\u014c",
    "\u0003\u0002\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0151",
    "\u0003\u0002\u0002\u0002\u0150\u014e\u0003\u0002\u0002\u0002\u0151\u0152",
    "\u0007\t\u0002\u0002\u01523\u0003\u0002\u0002\u0002\u0153\u0154\u0007",
    "\u0007\u0002\u0002\u0154\u0159\u00056\u001c\u0002\u0155\u0156\u0007",
    "\n\u0002\u0002\u0156\u0158\u00056\u001c\u0002\u0157\u0155\u0003\u0002",
    "\u0002\u0002\u0158\u015b\u0003\u0002\u0002\u0002\u0159\u0157\u0003\u0002",
    "\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a\u015c\u0003\u0002",
    "\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015c\u015d\u0007\t",
    "\u0002\u0002\u015d5\u0003\u0002\u0002\u0002\u015e\u015f\u0007\u0016",
    "\u0002\u0002\u015f\u0160\u0007Q\u0002\u0002\u0160\u0161\u0007\u0007",
    "\u0002\u0002\u0161\u0162\u0005b2\u0002\u0162\u0163\u0007\t\u0002\u0002",
    "\u01637\u0003\u0002\u0002\u0002\u0164\u0165\u0007\u0007\u0002\u0002",
    "\u0165\u016a\u0005b2\u0002\u0166\u0167\u0007\n\u0002\u0002\u0167\u0169",
    "\u0005b2\u0002\u0168\u0166\u0003\u0002\u0002\u0002\u0169\u016c\u0003",
    "\u0002\u0002\u0002\u016a\u0168\u0003\u0002\u0002\u0002\u016a\u016b\u0003",
    "\u0002\u0002\u0002\u016b\u016d\u0003\u0002\u0002\u0002\u016c\u016a\u0003",
    "\u0002\u0002\u0002\u016d\u016e\u0007\t\u0002\u0002\u016e9\u0003\u0002",
    "\u0002\u0002\u016f\u0170\u0005<\u001f\u0002\u0170\u0171\u0007\u0007",
    "\u0002\u0002\u0171\u0174\u0007Q\u0002\u0002\u0172\u0173\u0007\n\u0002",
    "\u0002\u0173\u0175\u0005v<\u0002\u0174\u0172\u0003\u0002\u0002\u0002",
    "\u0174\u0175\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002\u0002\u0002",
    "\u0176\u0177\u0007\t\u0002\u0002\u0177\u0178\u0007\u0004\u0002\u0002",
    "\u0178;\u0003\u0002\u0002\u0002\u0179\u017a\t\u0003\u0002\u0002\u017a",
    "=\u0003\u0002\u0002\u0002\u017b\u017c\u0007%\u0002\u0002\u017c\u017d",
    "\u0005j6\u0002\u017d\u017e\u0007@\u0002\u0002\u017e\u017f\u0005d3\u0002",
    "\u017f\u0180\u0007\u0004\u0002\u0002\u0180?\u0003\u0002\u0002\u0002",
    "\u0181\u0182\u0007&\u0002\u0002\u0182\u0183\u0005L\'\u0002\u0183A\u0003",
    "\u0002\u0002\u0002\u0184\u0185\u0007\'\u0002\u0002\u0185\u0186\u0007",
    "(\u0002\u0002\u0186\u0187\u0007\u0007\u0002\u0002\u0187\u0188\u0005",
    "D#\u0002\u0188\u0189\u0007\t\u0002\u0002\u0189\u018a\u0005L\'\u0002",
    "\u018aC\u0003\u0002\u0002\u0002\u018b\u0197\u0005F$\u0002\u018c\u0193",
    "\u0005H%\u0002\u018d\u018e\u0007\u0018\u0002\u0002\u018e\u0192\u0005",
    "H%\u0002\u018f\u0190\u0007\n\u0002\u0002\u0190\u0192\u0005H%\u0002\u0191",
    "\u018d\u0003\u0002\u0002\u0002\u0191\u018f\u0003\u0002\u0002\u0002\u0192",
    "\u0195\u0003\u0002\u0002\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0193",
    "\u0194\u0003\u0002\u0002\u0002\u0194\u0197\u0003\u0002\u0002\u0002\u0195",
    "\u0193\u0003\u0002\u0002\u0002\u0196\u018b\u0003\u0002\u0002\u0002\u0196",
    "\u018c\u0003\u0002\u0002\u0002\u0197E\u0003\u0002\u0002\u0002\u0198",
    "\u0199\u0007E\u0002\u0002\u0199G\u0003\u0002\u0002\u0002\u019a\u019c",
    "\u0005J&\u0002\u019b\u019a\u0003\u0002\u0002\u0002\u019b\u019c\u0003",
    "\u0002\u0002\u0002\u019c\u019d\u0003\u0002\u0002\u0002\u019d\u019e\u0005",
    "z>\u0002\u019eI\u0003\u0002\u0002\u0002\u019f\u01a0\t\u0004\u0002\u0002",
    "\u01a0K\u0003\u0002\u0002\u0002\u01a1\u01a4\u0005N(\u0002\u01a2\u01a4",
    "\u0005P)\u0002\u01a3\u01a1\u0003\u0002\u0002\u0002\u01a3\u01a2\u0003",
    "\u0002\u0002\u0002\u01a4M\u0003\u0002\u0002\u0002\u01a5\u01a9\u0007",
    "\u000f\u0002\u0002\u01a6\u01a8\u0005P)\u0002\u01a7\u01a6\u0003\u0002",
    "\u0002\u0002\u01a8\u01ab\u0003\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002",
    "\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa\u01ac\u0003\u0002",
    "\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007\u0010",
    "\u0002\u0002\u01adO\u0003\u0002\u0002\u0002\u01ae\u01af\u0005R*\u0002",
    "\u01af\u01b0\u0007\u0004\u0002\u0002\u01b0\u01b5\u0003\u0002\u0002\u0002",
    "\u01b1\u01b5\u0005T+\u0002\u01b2\u01b5\u0005V,\u0002\u01b3\u01b5\u0005",
    "\\/\u0002\u01b4\u01ae\u0003\u0002\u0002\u0002\u01b4\u01b1\u0003\u0002",
    "\u0002\u0002\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b4\u01b3\u0003\u0002",
    "\u0002\u0002\u01b5Q\u0003\u0002\u0002\u0002\u01b6\u01b7\u0005j6\u0002",
    "\u01b7\u01b8\t\u0005\u0002\u0002\u01b8\u01b9\u0005b2\u0002\u01b9S\u0003",
    "\u0002\u0002\u0002\u01ba\u01bb\u0007+\u0002\u0002\u01bb\u01bc\u0007",
    "\u0007\u0002\u0002\u01bc\u01bd\u0005b2\u0002\u01bd\u01be\u0007\t\u0002",
    "\u0002\u01be\u01c1\u0005L\'\u0002\u01bf\u01c0\u0007,\u0002\u0002\u01c0",
    "\u01c2\u0005L\'\u0002\u01c1\u01bf\u0003\u0002\u0002\u0002\u01c1\u01c2",
    "\u0003\u0002\u0002\u0002\u01c2U\u0003\u0002\u0002\u0002\u01c3\u01c4",
    "\u0007-\u0002\u0002\u01c4\u01c5\u0007\u0007\u0002\u0002\u01c5\u01c6",
    "\u0005z>\u0002\u01c6\u01c8\u0007\t\u0002\u0002\u01c7\u01c9\u0005X-\u0002",
    "\u01c8\u01c7\u0003\u0002\u0002\u0002\u01c9\u01ca\u0003\u0002\u0002\u0002",
    "\u01ca\u01c8\u0003\u0002\u0002\u0002\u01ca\u01cb\u0003\u0002\u0002\u0002",
    "\u01cb\u01cd\u0003\u0002\u0002\u0002\u01cc\u01ce\u0005Z.\u0002\u01cd",
    "\u01cc\u0003\u0002\u0002\u0002\u01cd\u01ce\u0003\u0002\u0002\u0002\u01ce",
    "\u01cf\u0003\u0002\u0002\u0002\u01cf\u01d0\u0007.\u0002\u0002\u01d0",
    "W\u0003\u0002\u0002\u0002\u01d1\u01d2\u0005b2\u0002\u01d2\u01d3\u0007",
    "/\u0002\u0002\u01d3\u01d4\u0005L\'\u0002\u01d4Y\u0003\u0002\u0002\u0002",
    "\u01d5\u01d6\u00070\u0002\u0002\u01d6\u01d7\u0007/\u0002\u0002\u01d7",
    "\u01d8\u0005L\'\u0002\u01d8[\u0003\u0002\u0002\u0002\u01d9\u01da\u0007",
    "1\u0002\u0002\u01da\u01db\u0007\u0007\u0002\u0002\u01db\u01dc\u0005",
    "|?\u0002\u01dc\u01dd\u0007\t\u0002\u0002\u01dd\u01de\u0007\u0004\u0002",
    "\u0002\u01de]\u0003\u0002\u0002\u0002\u01df\u01e0\u0007\u0011\u0002",
    "\u0002\u01e0\u01e5\u0005b2\u0002\u01e1\u01e2\u0007\n\u0002\u0002\u01e2",
    "\u01e4\u0005b2\u0002\u01e3\u01e1\u0003\u0002\u0002\u0002\u01e4\u01e7",
    "\u0003\u0002\u0002\u0002\u01e5\u01e3\u0003\u0002\u0002\u0002\u01e5\u01e6",
    "\u0003\u0002\u0002\u0002\u01e6\u01e8\u0003\u0002\u0002\u0002\u01e7\u01e5",
    "\u0003\u0002\u0002\u0002\u01e8\u01e9\u0007\u0012\u0002\u0002\u01e9_",
    "\u0003\u0002\u0002\u0002\u01ea\u01eb\u0007\u0011\u0002\u0002\u01eb\u01ec",
    "\u0005b2\u0002\u01ec\u01ed\u0007\u0011\u0002\u0002\u01ed\u01f2\u0005",
    "b2\u0002\u01ee\u01ef\u0007\n\u0002\u0002\u01ef\u01f1\u0005b2\u0002\u01f0",
    "\u01ee\u0003\u0002\u0002\u0002\u01f1\u01f4\u0003\u0002\u0002\u0002\u01f2",
    "\u01f0\u0003\u0002\u0002\u0002\u01f2\u01f3\u0003\u0002\u0002\u0002\u01f3",
    "\u01f5\u0003\u0002\u0002\u0002\u01f4\u01f2\u0003\u0002\u0002\u0002\u01f5",
    "\u01f6\u0007\u0012\u0002\u0002\u01f6\u01f7\u0007\u0012\u0002\u0002\u01f7",
    "a\u0003\u0002\u0002\u0002\u01f8\u01f9\b2\u0001\u0002\u01f9\u0204\u0005",
    "p9\u0002\u01fa\u0204\u0005z>\u0002\u01fb\u0204\u0005^0\u0002\u01fc\u0204",
    "\u0005`1\u0002\u01fd\u01fe\u0007\u0007\u0002\u0002\u01fe\u01ff\u0005",
    "b2\u0002\u01ff\u0200\u0007\t\u0002\u0002\u0200\u0204\u0003\u0002\u0002",
    "\u0002\u0201\u0202\t\u0006\u0002\u0002\u0202\u0204\u0005b2\b\u0203\u01f8",
    "\u0003\u0002\u0002\u0002\u0203\u01fa\u0003\u0002\u0002\u0002\u0203\u01fb",
    "\u0003\u0002\u0002\u0002\u0203\u01fc\u0003\u0002\u0002\u0002\u0203\u01fd",
    "\u0003\u0002\u0002\u0002\u0203\u0201\u0003\u0002\u0002\u0002\u0204\u0219",
    "\u0003\u0002\u0002\u0002\u0205\u0206\f\u0007\u0002\u0002\u0206\u0207",
    "\t\u0007\u0002\u0002\u0207\u0218\u0005b2\b\u0208\u0209\f\u0006\u0002",
    "\u0002\u0209\u020a\t\b\u0002\u0002\u020a\u0218\u0005b2\u0007\u020b\u020c",
    "\f\u0005\u0002\u0002\u020c\u020d\t\t\u0002\u0002\u020d\u0218\u0005b",
    "2\u0006\u020e\u020f\f\u0004\u0002\u0002\u020f\u0210\t\n\u0002\u0002",
    "\u0210\u0218\u0005b2\u0005\u0211\u0212\f\u0003\u0002\u0002\u0212\u0213",
    "\u00072\u0002\u0002\u0213\u0214\u0005b2\u0002\u0214\u0215\u0007/\u0002",
    "\u0002\u0215\u0216\u0005b2\u0004\u0216\u0218\u0003\u0002\u0002\u0002",
    "\u0217\u0205\u0003\u0002\u0002\u0002\u0217\u0208\u0003\u0002\u0002\u0002",
    "\u0217\u020b\u0003\u0002\u0002\u0002\u0217\u020e\u0003\u0002\u0002\u0002",
    "\u0217\u0211\u0003\u0002\u0002\u0002\u0218\u021b\u0003\u0002\u0002\u0002",
    "\u0219\u0217\u0003\u0002\u0002\u0002\u0219\u021a\u0003\u0002\u0002\u0002",
    "\u021ac\u0003\u0002\u0002\u0002\u021b\u0219\u0003\u0002\u0002\u0002",
    "\u021c\u021d\b3\u0001\u0002\u021d\u0229\u0005p9\u0002\u021e\u0229\u0005",
    "z>\u0002\u021f\u0229\u0005^0\u0002\u0220\u0229\u0005`1\u0002\u0221\u0222",
    "\u0007\u0007\u0002\u0002\u0222\u0223\u0005d3\u0002\u0223\u0224\u0007",
    "\t\u0002\u0002\u0224\u0229\u0003\u0002\u0002\u0002\u0225\u0226\u0005",
    "h5\u0002\u0226\u0227\u0005d3\u0005\u0227\u0229\u0003\u0002\u0002\u0002",
    "\u0228\u021c\u0003\u0002\u0002\u0002\u0228\u021e\u0003\u0002\u0002\u0002",
    "\u0228\u021f\u0003\u0002\u0002\u0002\u0228\u0220\u0003\u0002\u0002\u0002",
    "\u0228\u0221\u0003\u0002\u0002\u0002\u0228\u0225\u0003\u0002\u0002\u0002",
    "\u0229\u0236\u0003\u0002\u0002\u0002\u022a\u022b\f\u0004\u0002\u0002",
    "\u022b\u022c\u0005f4\u0002\u022c\u022d\u0005d3\u0005\u022d\u0235\u0003",
    "\u0002\u0002\u0002\u022e\u022f\f\u0003\u0002\u0002\u022f\u0230\u0007",
    "2\u0002\u0002\u0230\u0231\u0005d3\u0002\u0231\u0232\u0007/\u0002\u0002",
    "\u0232\u0233\u0005d3\u0004\u0233\u0235\u0003\u0002\u0002\u0002\u0234",
    "\u022a\u0003\u0002\u0002\u0002\u0234\u022e\u0003\u0002\u0002\u0002\u0235",
    "\u0238\u0003\u0002\u0002\u0002\u0236\u0234\u0003\u0002\u0002\u0002\u0236",
    "\u0237\u0003\u0002\u0002\u0002\u0237e\u0003\u0002\u0002\u0002\u0238",
    "\u0236\u0003\u0002\u0002\u0002\u0239\u023a\t\u000b\u0002\u0002\u023a",
    "g\u0003\u0002\u0002\u0002\u023b\u023c\t\f\u0002\u0002\u023ci\u0003\u0002",
    "\u0002\u0002\u023d\u0240\u0005z>\u0002\u023e\u0240\u0005^0\u0002\u023f",
    "\u023d\u0003\u0002\u0002\u0002\u023f\u023e\u0003\u0002\u0002\u0002\u0240",
    "k\u0003\u0002\u0002\u0002\u0241\u0242\t\r\u0002\u0002\u0242m\u0003\u0002",
    "\u0002\u0002\u0243\u0244\t\u000e\u0002\u0002\u0244o\u0003\u0002\u0002",
    "\u0002\u0245\u024a\u00077\u0002\u0002\u0246\u024a\u00079\u0002\u0002",
    "\u0247\u024a\u00078\u0002\u0002\u0248\u024a\u0007:\u0002\u0002\u0249",
    "\u0245\u0003\u0002\u0002\u0002\u0249\u0246\u0003\u0002\u0002\u0002\u0249",
    "\u0247\u0003\u0002\u0002\u0002\u0249\u0248\u0003\u0002\u0002\u0002\u024a",
    "q\u0003\u0002\u0002\u0002\u024b\u024c\u0007Q\u0002\u0002\u024cs\u0003",
    "\u0002\u0002\u0002\u024d\u0252\u0005r:\u0002\u024e\u024f\u0007\n\u0002",
    "\u0002\u024f\u0251\u0005r:\u0002\u0250\u024e\u0003\u0002\u0002\u0002",
    "\u0251\u0254\u0003\u0002\u0002\u0002\u0252\u0250\u0003\u0002\u0002\u0002",
    "\u0252\u0253\u0003\u0002\u0002\u0002\u0253u\u0003\u0002\u0002\u0002",
    "\u0254\u0252\u0003\u0002\u0002\u0002\u0255\u025a\u0005z>\u0002\u0256",
    "\u0257\u0007\n\u0002\u0002\u0257\u0259\u0005z>\u0002\u0258\u0256\u0003",
    "\u0002\u0002\u0002\u0259\u025c\u0003\u0002\u0002\u0002\u025a\u0258\u0003",
    "\u0002\u0002\u0002\u025a\u025b\u0003\u0002\u0002\u0002\u025bw\u0003",
    "\u0002\u0002\u0002\u025c\u025a\u0003\u0002\u0002\u0002\u025d\u025e\u0007",
    "3\u0002\u0002\u025e\u025f\u0005b2\u0002\u025f\u0260\u0007/\u0002\u0002",
    "\u0260\u0261\u0005b2\u0002\u0261\u0262\u00074\u0002\u0002\u0262y\u0003",
    "\u0002\u0002\u0002\u0263\u0271\u0007Q\u0002\u0002\u0264\u0265\u0007",
    "Q\u0002\u0002\u0265\u0266\u00073\u0002\u0002\u0266\u0267\u0005b2\u0002",
    "\u0267\u0268\u00074\u0002\u0002\u0268\u0271\u0003\u0002\u0002\u0002",
    "\u0269\u026a\u0007Q\u0002\u0002\u026a\u026b\u00073\u0002\u0002\u026b",
    "\u026c\u0005b2\u0002\u026c\u026d\u0007/\u0002\u0002\u026d\u026e\u0005",
    "b2\u0002\u026e\u026f\u00074\u0002\u0002\u026f\u0271\u0003\u0002\u0002",
    "\u0002\u0270\u0263\u0003\u0002\u0002\u0002\u0270\u0264\u0003\u0002\u0002",
    "\u0002\u0270\u0269\u0003\u0002\u0002\u0002\u0271{\u0003\u0002\u0002",
    "\u0002\u0272\u0276\u00075\u0002\u0002\u0273\u0275\u000b\u0002\u0002",
    "\u0002\u0274\u0273\u0003\u0002\u0002\u0002\u0275\u0278\u0003\u0002\u0002",
    "\u0002\u0276\u0274\u0003\u0002\u0002\u0002\u0276\u0277\u0003\u0002\u0002",
    "\u0002\u0277\u0279\u0003\u0002\u0002\u0002\u0278\u0276\u0003\u0002\u0002",
    "\u0002\u0279\u027a\u00075\u0002\u0002\u027a}\u0003\u0002\u0002\u0002",
    "7\u0084\u008d\u0090\u0096\u009a\u009d\u00a4\u00a7\u00ad\u00c0\u00c7",
    "\u00ca\u00d3\u00e0\u00e7\u00ee\u00fb\u0109\u011b\u0122\u012c\u0132\u0139",
    "\u013f\u0143\u014e\u0159\u016a\u0174\u0191\u0193\u0196\u019b\u01a3\u01a9",
    "\u01b4\u01c1\u01ca\u01cd\u01e5\u01f2\u0203\u0217\u0219\u0228\u0234\u0236",
    "\u023f\u0249\u0252\u025a\u0270\u0276"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'module'", "';'", "'endmodule'", "'#'", "'('", 
                     "'parameter'", "')'", "','", "'reg'", "'input'", "'output'", 
                     "'test'", "'begin'", "'end'", "'{'", "'}'", "'$display'", 
                     "'localparam'", "'wire'", "'.'", "'and'", "'or'", "'xor'", 
                     "'nand'", "'nor'", "'xnor'", "'not'", "'control'", 
                     "'response'", "'buffer'", "'sevenseg'", "'number'", 
                     "'led'", "'ledbar'", "'assign'", "'initial'", "'always'", 
                     "'@'", "'posedge'", "'negedge'", "'if'", "'else'", 
                     "'case'", "'endcase'", "':'", "'default'", "'$error'", 
                     "'?'", "'['", "']'", "'\"'", "'Main'", null, null, 
                     null, null, "'!'", "'~'", "'~&'", "'~|'", "'^'", "'='", 
                     "'+'", "'-'", "'&'", "'|'", "'*'", "'/'", "'<'", "'<='", 
                     "'>'", "'>='", "'=='", "'!='", "'<<'", "'>>'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "MAIN", 
                      "Decimal_number", "Binary_number", "Octal_number", 
                      "Hex_number", "NOT", "NEG", "NAND", "NOR", "XOR", 
                      "ASSIGN", "PLUS", "MINUS", "AND", "OR", "MUL", "DIV", 
                      "LT", "LTE", "GT", "GTE", "EQUAL", "NOTEQUAL", "SHL", 
                      "SHR", "One_line_comment", "Block_comment", "IDENTIFIER", 
                      "White_space" ];

var ruleNames =  [ "source_text", "modules", "module_main", "module", "module_parameter", 
                   "module_ports", "port_declaration", "port_identifier_list", 
                   "port_direction", "module_item", "test_bench", "test_time", 
                   "time_stamp", "time_assignment_list", "time_assignment", 
                   "display_bench", "display_assignment", "localparam_declaration", 
                   "net_declaration", "reg_declaration", "register_identifier_list", 
                   "register_identifier", "simple_identifier_list", "module_instantiation", 
                   "parameter_value_assignment", "named_module_connections_list", 
                   "named_port_connection", "ordered_module_connections_list", 
                   "gate_instantiation", "gate_type", "net_assignment", 
                   "initial_construct", "always_construct", "event_list", 
                   "event_every", "event_primary", "event_type", "statement_block", 
                   "seq_block", "statement", "blocking_assignment", "conditional_statement", 
                   "case_statement", "case_clause", "case_default", "error_statement", 
                   "concatenation", "multiple_concatenation", "expression", 
                   "expr", "binary_gate_op", "unary_gate_op", "lvalue", 
                   "unary_operator", "binary_operator", "number", "defined_connection_id", 
                   "defined_connection_id_list", "identifier_list", "range", 
                   "identifier", "string" ];

function vlgParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

vlgParser.prototype = Object.create(antlr4.Parser.prototype);
vlgParser.prototype.constructor = vlgParser;

Object.defineProperty(vlgParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

vlgParser.EOF = antlr4.Token.EOF;
vlgParser.T__0 = 1;
vlgParser.T__1 = 2;
vlgParser.T__2 = 3;
vlgParser.T__3 = 4;
vlgParser.T__4 = 5;
vlgParser.T__5 = 6;
vlgParser.T__6 = 7;
vlgParser.T__7 = 8;
vlgParser.T__8 = 9;
vlgParser.T__9 = 10;
vlgParser.T__10 = 11;
vlgParser.T__11 = 12;
vlgParser.T__12 = 13;
vlgParser.T__13 = 14;
vlgParser.T__14 = 15;
vlgParser.T__15 = 16;
vlgParser.T__16 = 17;
vlgParser.T__17 = 18;
vlgParser.T__18 = 19;
vlgParser.T__19 = 20;
vlgParser.T__20 = 21;
vlgParser.T__21 = 22;
vlgParser.T__22 = 23;
vlgParser.T__23 = 24;
vlgParser.T__24 = 25;
vlgParser.T__25 = 26;
vlgParser.T__26 = 27;
vlgParser.T__27 = 28;
vlgParser.T__28 = 29;
vlgParser.T__29 = 30;
vlgParser.T__30 = 31;
vlgParser.T__31 = 32;
vlgParser.T__32 = 33;
vlgParser.T__33 = 34;
vlgParser.T__34 = 35;
vlgParser.T__35 = 36;
vlgParser.T__36 = 37;
vlgParser.T__37 = 38;
vlgParser.T__38 = 39;
vlgParser.T__39 = 40;
vlgParser.T__40 = 41;
vlgParser.T__41 = 42;
vlgParser.T__42 = 43;
vlgParser.T__43 = 44;
vlgParser.T__44 = 45;
vlgParser.T__45 = 46;
vlgParser.T__46 = 47;
vlgParser.T__47 = 48;
vlgParser.T__48 = 49;
vlgParser.T__49 = 50;
vlgParser.T__50 = 51;
vlgParser.MAIN = 52;
vlgParser.Decimal_number = 53;
vlgParser.Binary_number = 54;
vlgParser.Octal_number = 55;
vlgParser.Hex_number = 56;
vlgParser.NOT = 57;
vlgParser.NEG = 58;
vlgParser.NAND = 59;
vlgParser.NOR = 60;
vlgParser.XOR = 61;
vlgParser.ASSIGN = 62;
vlgParser.PLUS = 63;
vlgParser.MINUS = 64;
vlgParser.AND = 65;
vlgParser.OR = 66;
vlgParser.MUL = 67;
vlgParser.DIV = 68;
vlgParser.LT = 69;
vlgParser.LTE = 70;
vlgParser.GT = 71;
vlgParser.GTE = 72;
vlgParser.EQUAL = 73;
vlgParser.NOTEQUAL = 74;
vlgParser.SHL = 75;
vlgParser.SHR = 76;
vlgParser.One_line_comment = 77;
vlgParser.Block_comment = 78;
vlgParser.IDENTIFIER = 79;
vlgParser.White_space = 80;

vlgParser.RULE_source_text = 0;
vlgParser.RULE_modules = 1;
vlgParser.RULE_module_main = 2;
vlgParser.RULE_module = 3;
vlgParser.RULE_module_parameter = 4;
vlgParser.RULE_module_ports = 5;
vlgParser.RULE_port_declaration = 6;
vlgParser.RULE_port_identifier_list = 7;
vlgParser.RULE_port_direction = 8;
vlgParser.RULE_module_item = 9;
vlgParser.RULE_test_bench = 10;
vlgParser.RULE_test_time = 11;
vlgParser.RULE_time_stamp = 12;
vlgParser.RULE_time_assignment_list = 13;
vlgParser.RULE_time_assignment = 14;
vlgParser.RULE_display_bench = 15;
vlgParser.RULE_display_assignment = 16;
vlgParser.RULE_localparam_declaration = 17;
vlgParser.RULE_net_declaration = 18;
vlgParser.RULE_reg_declaration = 19;
vlgParser.RULE_register_identifier_list = 20;
vlgParser.RULE_register_identifier = 21;
vlgParser.RULE_simple_identifier_list = 22;
vlgParser.RULE_module_instantiation = 23;
vlgParser.RULE_parameter_value_assignment = 24;
vlgParser.RULE_named_module_connections_list = 25;
vlgParser.RULE_named_port_connection = 26;
vlgParser.RULE_ordered_module_connections_list = 27;
vlgParser.RULE_gate_instantiation = 28;
vlgParser.RULE_gate_type = 29;
vlgParser.RULE_net_assignment = 30;
vlgParser.RULE_initial_construct = 31;
vlgParser.RULE_always_construct = 32;
vlgParser.RULE_event_list = 33;
vlgParser.RULE_event_every = 34;
vlgParser.RULE_event_primary = 35;
vlgParser.RULE_event_type = 36;
vlgParser.RULE_statement_block = 37;
vlgParser.RULE_seq_block = 38;
vlgParser.RULE_statement = 39;
vlgParser.RULE_blocking_assignment = 40;
vlgParser.RULE_conditional_statement = 41;
vlgParser.RULE_case_statement = 42;
vlgParser.RULE_case_clause = 43;
vlgParser.RULE_case_default = 44;
vlgParser.RULE_error_statement = 45;
vlgParser.RULE_concatenation = 46;
vlgParser.RULE_multiple_concatenation = 47;
vlgParser.RULE_expression = 48;
vlgParser.RULE_expr = 49;
vlgParser.RULE_binary_gate_op = 50;
vlgParser.RULE_unary_gate_op = 51;
vlgParser.RULE_lvalue = 52;
vlgParser.RULE_unary_operator = 53;
vlgParser.RULE_binary_operator = 54;
vlgParser.RULE_number = 55;
vlgParser.RULE_defined_connection_id = 56;
vlgParser.RULE_defined_connection_id_list = 57;
vlgParser.RULE_identifier_list = 58;
vlgParser.RULE_range = 59;
vlgParser.RULE_identifier = 60;
vlgParser.RULE_string = 61;


function Source_textContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_source_text;
    return this;
}

Source_textContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Source_textContext.prototype.constructor = Source_textContext;

Source_textContext.prototype.modules = function() {
    return this.getTypedRuleContext(ModulesContext,0);
};

Source_textContext.prototype.EOF = function() {
    return this.getToken(vlgParser.EOF, 0);
};

Source_textContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterSource_text(this);
	}
};

Source_textContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitSource_text(this);
	}
};

Source_textContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitSource_text(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Source_textContext = Source_textContext;

vlgParser.prototype.source_text = function() {

    var localctx = new Source_textContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, vlgParser.RULE_source_text);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.modules();
        this.state = 125;
        this.match(vlgParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_modules;
    return this;
}

ModulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModulesContext.prototype.constructor = ModulesContext;

ModulesContext.prototype.module_main = function() {
    return this.getTypedRuleContext(Module_mainContext,0);
};

ModulesContext.prototype.EOF = function() {
    return this.getToken(vlgParser.EOF, 0);
};

ModulesContext.prototype.module = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ModuleContext);
    } else {
        return this.getTypedRuleContext(ModuleContext,i);
    }
};

ModulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModules(this);
	}
};

ModulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModules(this);
	}
};

ModulesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModules(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.ModulesContext = ModulesContext;

vlgParser.prototype.modules = function() {

    var localctx = new ModulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, vlgParser.RULE_modules);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 127;
                this.module(); 
            }
            this.state = 132;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 133;
        this.module_main();
        this.state = 134;
        this.match(vlgParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_mainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_main;
    return this;
}

Module_mainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_mainContext.prototype.constructor = Module_mainContext;

Module_mainContext.prototype.MAIN = function() {
    return this.getToken(vlgParser.MAIN, 0);
};

Module_mainContext.prototype.module_parameter = function() {
    return this.getTypedRuleContext(Module_parameterContext,0);
};

Module_mainContext.prototype.module_ports = function() {
    return this.getTypedRuleContext(Module_portsContext,0);
};

Module_mainContext.prototype.module_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Module_itemContext);
    } else {
        return this.getTypedRuleContext(Module_itemContext,i);
    }
};

Module_mainContext.prototype.test_bench = function() {
    return this.getTypedRuleContext(Test_benchContext,0);
};

Module_mainContext.prototype.display_bench = function() {
    return this.getTypedRuleContext(Display_benchContext,0);
};

Module_mainContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule_main(this);
	}
};

Module_mainContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule_main(this);
	}
};

Module_mainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule_main(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Module_mainContext = Module_mainContext;

vlgParser.prototype.module_main = function() {

    var localctx = new Module_mainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, vlgParser.RULE_module_main);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(vlgParser.T__0);
        this.state = 137;
        this.match(vlgParser.MAIN);
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 138;
            this.module_parameter();
        }

        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__4) {
            this.state = 141;
            this.module_ports();
        }

        this.state = 144;
        this.match(vlgParser.T__1);
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (vlgParser.T__8 - 9)) | (1 << (vlgParser.T__17 - 9)) | (1 << (vlgParser.T__18 - 9)) | (1 << (vlgParser.T__20 - 9)) | (1 << (vlgParser.T__21 - 9)) | (1 << (vlgParser.T__22 - 9)) | (1 << (vlgParser.T__23 - 9)) | (1 << (vlgParser.T__24 - 9)) | (1 << (vlgParser.T__25 - 9)) | (1 << (vlgParser.T__26 - 9)) | (1 << (vlgParser.T__27 - 9)) | (1 << (vlgParser.T__28 - 9)) | (1 << (vlgParser.T__29 - 9)) | (1 << (vlgParser.T__30 - 9)) | (1 << (vlgParser.T__31 - 9)) | (1 << (vlgParser.T__32 - 9)) | (1 << (vlgParser.T__33 - 9)) | (1 << (vlgParser.T__34 - 9)) | (1 << (vlgParser.T__35 - 9)) | (1 << (vlgParser.T__36 - 9)))) !== 0) || _la===vlgParser.IDENTIFIER) {
            this.state = 145;
            this.module_item();
            this.state = 150;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 152;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__11) {
            this.state = 151;
            this.test_bench();
        }

        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__16) {
            this.state = 154;
            this.display_bench();
        }

        this.state = 157;
        this.match(vlgParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module;
    return this;
}

ModuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleContext.prototype.constructor = ModuleContext;

ModuleContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

ModuleContext.prototype.module_parameter = function() {
    return this.getTypedRuleContext(Module_parameterContext,0);
};

ModuleContext.prototype.module_ports = function() {
    return this.getTypedRuleContext(Module_portsContext,0);
};

ModuleContext.prototype.module_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Module_itemContext);
    } else {
        return this.getTypedRuleContext(Module_itemContext,i);
    }
};

ModuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule(this);
	}
};

ModuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule(this);
	}
};

ModuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.ModuleContext = ModuleContext;

vlgParser.prototype.module = function() {

    var localctx = new ModuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, vlgParser.RULE_module);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(vlgParser.T__0);
        this.state = 160;
        this.match(vlgParser.IDENTIFIER);
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 161;
            this.module_parameter();
        }

        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__4) {
            this.state = 164;
            this.module_ports();
        }

        this.state = 167;
        this.match(vlgParser.T__1);
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (vlgParser.T__8 - 9)) | (1 << (vlgParser.T__17 - 9)) | (1 << (vlgParser.T__18 - 9)) | (1 << (vlgParser.T__20 - 9)) | (1 << (vlgParser.T__21 - 9)) | (1 << (vlgParser.T__22 - 9)) | (1 << (vlgParser.T__23 - 9)) | (1 << (vlgParser.T__24 - 9)) | (1 << (vlgParser.T__25 - 9)) | (1 << (vlgParser.T__26 - 9)) | (1 << (vlgParser.T__27 - 9)) | (1 << (vlgParser.T__28 - 9)) | (1 << (vlgParser.T__29 - 9)) | (1 << (vlgParser.T__30 - 9)) | (1 << (vlgParser.T__31 - 9)) | (1 << (vlgParser.T__32 - 9)) | (1 << (vlgParser.T__33 - 9)) | (1 << (vlgParser.T__34 - 9)) | (1 << (vlgParser.T__35 - 9)) | (1 << (vlgParser.T__36 - 9)))) !== 0) || _la===vlgParser.IDENTIFIER) {
            this.state = 168;
            this.module_item();
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 174;
        this.match(vlgParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_parameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_parameter;
    return this;
}

Module_parameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_parameterContext.prototype.constructor = Module_parameterContext;

Module_parameterContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Module_parameterContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Module_parameterContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Module_parameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule_parameter(this);
	}
};

Module_parameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule_parameter(this);
	}
};

Module_parameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule_parameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Module_parameterContext = Module_parameterContext;

vlgParser.prototype.module_parameter = function() {

    var localctx = new Module_parameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, vlgParser.RULE_module_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(vlgParser.T__3);
        this.state = 177;
        this.match(vlgParser.T__4);
        this.state = 178;
        this.match(vlgParser.T__5);
        this.state = 179;
        this.match(vlgParser.IDENTIFIER);
        this.state = 180;
        this.match(vlgParser.ASSIGN);
        this.state = 181;
        this.number();
        this.state = 182;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_portsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_ports;
    return this;
}

Module_portsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_portsContext.prototype.constructor = Module_portsContext;

Module_portsContext.prototype.port_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Port_declarationContext);
    } else {
        return this.getTypedRuleContext(Port_declarationContext,i);
    }
};

Module_portsContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule_ports(this);
	}
};

Module_portsContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule_ports(this);
	}
};

Module_portsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule_ports(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Module_portsContext = Module_portsContext;

vlgParser.prototype.module_ports = function() {

    var localctx = new Module_portsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, vlgParser.RULE_module_ports);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(vlgParser.T__4);
        this.state = 185;
        this.port_declaration();
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 186;
            this.match(vlgParser.T__7);
            this.state = 187;
            this.port_declaration();
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 193;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Port_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_port_declaration;
    this.reg = null; // Token
    this.bitDim = null; // RangeContext
    return this;
}

Port_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Port_declarationContext.prototype.constructor = Port_declarationContext;

Port_declarationContext.prototype.port_direction = function() {
    return this.getTypedRuleContext(Port_directionContext,0);
};

Port_declarationContext.prototype.port_identifier_list = function() {
    return this.getTypedRuleContext(Port_identifier_listContext,0);
};

Port_declarationContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

Port_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterPort_declaration(this);
	}
};

Port_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitPort_declaration(this);
	}
};

Port_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitPort_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Port_declarationContext = Port_declarationContext;

vlgParser.prototype.port_declaration = function() {

    var localctx = new Port_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, vlgParser.RULE_port_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.port_direction();
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__8) {
            this.state = 196;
            localctx.reg = this.match(vlgParser.T__8);
        }

        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__48) {
            this.state = 199;
            localctx.bitDim = this.range();
        }

        this.state = 202;
        this.port_identifier_list();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Port_identifier_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_port_identifier_list;
    return this;
}

Port_identifier_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Port_identifier_listContext.prototype.constructor = Port_identifier_listContext;

Port_identifier_listContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
    }
};


Port_identifier_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterPort_identifier_list(this);
	}
};

Port_identifier_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitPort_identifier_list(this);
	}
};

Port_identifier_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitPort_identifier_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Port_identifier_listContext = Port_identifier_listContext;

vlgParser.prototype.port_identifier_list = function() {

    var localctx = new Port_identifier_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, vlgParser.RULE_port_identifier_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(vlgParser.IDENTIFIER);
        this.state = 209;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 205;
                this.match(vlgParser.T__7);
                this.state = 206;
                this.match(vlgParser.IDENTIFIER); 
            }
            this.state = 211;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Port_directionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_port_direction;
    return this;
}

Port_directionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Port_directionContext.prototype.constructor = Port_directionContext;


Port_directionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterPort_direction(this);
	}
};

Port_directionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitPort_direction(this);
	}
};

Port_directionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitPort_direction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Port_directionContext = Port_directionContext;

vlgParser.prototype.port_direction = function() {

    var localctx = new Port_directionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, vlgParser.RULE_port_direction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.T__9 || _la===vlgParser.T__10)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_item;
    return this;
}

Module_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_itemContext.prototype.constructor = Module_itemContext;


 
Module_itemContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AlwaysContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AlwaysContext.prototype = Object.create(Module_itemContext.prototype);
AlwaysContext.prototype.constructor = AlwaysContext;

vlgParser.AlwaysContext = AlwaysContext;

AlwaysContext.prototype.always_construct = function() {
    return this.getTypedRuleContext(Always_constructContext,0);
};
AlwaysContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAlways(this);
	}
};

AlwaysContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAlways(this);
	}
};

AlwaysContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAlways(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InstanceContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InstanceContext.prototype = Object.create(Module_itemContext.prototype);
InstanceContext.prototype.constructor = InstanceContext;

vlgParser.InstanceContext = InstanceContext;

InstanceContext.prototype.module_instantiation = function() {
    return this.getTypedRuleContext(Module_instantiationContext,0);
};
InstanceContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterInstance(this);
	}
};

InstanceContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitInstance(this);
	}
};

InstanceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitInstance(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RegContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RegContext.prototype = Object.create(Module_itemContext.prototype);
RegContext.prototype.constructor = RegContext;

vlgParser.RegContext = RegContext;

RegContext.prototype.reg_declaration = function() {
    return this.getTypedRuleContext(Reg_declarationContext,0);
};
RegContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterReg(this);
	}
};

RegContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitReg(this);
	}
};

RegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitReg(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InitialContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InitialContext.prototype = Object.create(Module_itemContext.prototype);
InitialContext.prototype.constructor = InitialContext;

vlgParser.InitialContext = InitialContext;

InitialContext.prototype.initial_construct = function() {
    return this.getTypedRuleContext(Initial_constructContext,0);
};
InitialContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterInitial(this);
	}
};

InitialContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitInitial(this);
	}
};

InitialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitInitial(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GateContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GateContext.prototype = Object.create(Module_itemContext.prototype);
GateContext.prototype.constructor = GateContext;

vlgParser.GateContext = GateContext;

GateContext.prototype.gate_instantiation = function() {
    return this.getTypedRuleContext(Gate_instantiationContext,0);
};
GateContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterGate(this);
	}
};

GateContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitGate(this);
	}
};

GateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitGate(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NetContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NetContext.prototype = Object.create(Module_itemContext.prototype);
NetContext.prototype.constructor = NetContext;

vlgParser.NetContext = NetContext;

NetContext.prototype.net_declaration = function() {
    return this.getTypedRuleContext(Net_declarationContext,0);
};
NetContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNet(this);
	}
};

NetContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNet(this);
	}
};

NetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LocalparamContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LocalparamContext.prototype = Object.create(Module_itemContext.prototype);
LocalparamContext.prototype.constructor = LocalparamContext;

vlgParser.LocalparamContext = LocalparamContext;

LocalparamContext.prototype.localparam_declaration = function() {
    return this.getTypedRuleContext(Localparam_declarationContext,0);
};
LocalparamContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterLocalparam(this);
	}
};

LocalparamContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitLocalparam(this);
	}
};

LocalparamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitLocalparam(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignContext.prototype = Object.create(Module_itemContext.prototype);
AssignContext.prototype.constructor = AssignContext;

vlgParser.AssignContext = AssignContext;

AssignContext.prototype.net_assignment = function() {
    return this.getTypedRuleContext(Net_assignmentContext,0);
};
AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};



vlgParser.Module_itemContext = Module_itemContext;

vlgParser.prototype.module_item = function() {

    var localctx = new Module_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, vlgParser.RULE_module_item);
    try {
        this.state = 222;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__18:
            localctx = new NetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 214;
            this.net_declaration();
            break;
        case vlgParser.T__8:
            localctx = new RegContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 215;
            this.reg_declaration();
            break;
        case vlgParser.T__17:
            localctx = new LocalparamContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 216;
            this.localparam_declaration();
            break;
        case vlgParser.T__34:
            localctx = new AssignContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 217;
            this.net_assignment();
            break;
        case vlgParser.T__20:
        case vlgParser.T__21:
        case vlgParser.T__22:
        case vlgParser.T__23:
        case vlgParser.T__24:
        case vlgParser.T__25:
        case vlgParser.T__26:
        case vlgParser.T__27:
        case vlgParser.T__28:
        case vlgParser.T__29:
        case vlgParser.T__30:
        case vlgParser.T__31:
        case vlgParser.T__32:
        case vlgParser.T__33:
            localctx = new GateContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 218;
            this.gate_instantiation();
            break;
        case vlgParser.IDENTIFIER:
            localctx = new InstanceContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 219;
            this.module_instantiation();
            break;
        case vlgParser.T__35:
            localctx = new InitialContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 220;
            this.initial_construct();
            break;
        case vlgParser.T__36:
            localctx = new AlwaysContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 221;
            this.always_construct();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_benchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_test_bench;
    return this;
}

Test_benchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_benchContext.prototype.constructor = Test_benchContext;

Test_benchContext.prototype.test_time = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Test_timeContext);
    } else {
        return this.getTypedRuleContext(Test_timeContext,i);
    }
};

Test_benchContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTest_bench(this);
	}
};

Test_benchContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTest_bench(this);
	}
};

Test_benchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTest_bench(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Test_benchContext = Test_benchContext;

vlgParser.prototype.test_bench = function() {

    var localctx = new Test_benchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, vlgParser.RULE_test_bench);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(vlgParser.T__11);
        this.state = 225;
        this.match(vlgParser.T__12);
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__3) {
            this.state = 226;
            this.test_time();
            this.state = 231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 232;
        this.match(vlgParser.T__13);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Test_timeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_test_time;
    return this;
}

Test_timeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Test_timeContext.prototype.constructor = Test_timeContext;

Test_timeContext.prototype.time_stamp = function() {
    return this.getTypedRuleContext(Time_stampContext,0);
};

Test_timeContext.prototype.time_assignment_list = function() {
    return this.getTypedRuleContext(Time_assignment_listContext,0);
};

Test_timeContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTest_time(this);
	}
};

Test_timeContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTest_time(this);
	}
};

Test_timeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTest_time(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Test_timeContext = Test_timeContext;

vlgParser.prototype.test_time = function() {

    var localctx = new Test_timeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, vlgParser.RULE_test_time);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.time_stamp();
        this.state = 236;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__14) {
            this.state = 235;
            this.time_assignment_list();
        }

        this.state = 238;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Time_stampContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_time_stamp;
    this.num = null; // Token
    return this;
}

Time_stampContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_stampContext.prototype.constructor = Time_stampContext;

Time_stampContext.prototype.Decimal_number = function() {
    return this.getToken(vlgParser.Decimal_number, 0);
};

Time_stampContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTime_stamp(this);
	}
};

Time_stampContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTime_stamp(this);
	}
};

Time_stampContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTime_stamp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Time_stampContext = Time_stampContext;

vlgParser.prototype.time_stamp = function() {

    var localctx = new Time_stampContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, vlgParser.RULE_time_stamp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(vlgParser.T__3);
        this.state = 241;
        localctx.num = this.match(vlgParser.Decimal_number);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Time_assignment_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_time_assignment_list;
    return this;
}

Time_assignment_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_assignment_listContext.prototype.constructor = Time_assignment_listContext;

Time_assignment_listContext.prototype.time_assignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Time_assignmentContext);
    } else {
        return this.getTypedRuleContext(Time_assignmentContext,i);
    }
};

Time_assignment_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTime_assignment_list(this);
	}
};

Time_assignment_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTime_assignment_list(this);
	}
};

Time_assignment_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTime_assignment_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Time_assignment_listContext = Time_assignment_listContext;

vlgParser.prototype.time_assignment_list = function() {

    var localctx = new Time_assignment_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, vlgParser.RULE_time_assignment_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(vlgParser.T__14);
        this.state = 244;
        this.time_assignment();
        this.state = 249;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 245;
            this.match(vlgParser.T__7);
            this.state = 246;
            this.time_assignment();
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 252;
        this.match(vlgParser.T__15);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Time_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_time_assignment;
    this.lhs = null; // LvalueContext
    this.rhs = null; // ExpressionContext
    return this;
}

Time_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_assignmentContext.prototype.constructor = Time_assignmentContext;

Time_assignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Time_assignmentContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

Time_assignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Time_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTime_assignment(this);
	}
};

Time_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTime_assignment(this);
	}
};

Time_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTime_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Time_assignmentContext = Time_assignmentContext;

vlgParser.prototype.time_assignment = function() {

    var localctx = new Time_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, vlgParser.RULE_time_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        localctx.lhs = this.lvalue();
        this.state = 255;
        this.match(vlgParser.ASSIGN);
        this.state = 256;
        localctx.rhs = this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Display_benchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_display_bench;
    return this;
}

Display_benchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Display_benchContext.prototype.constructor = Display_benchContext;

Display_benchContext.prototype.display_assignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Display_assignmentContext);
    } else {
        return this.getTypedRuleContext(Display_assignmentContext,i);
    }
};

Display_benchContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterDisplay_bench(this);
	}
};

Display_benchContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitDisplay_bench(this);
	}
};

Display_benchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitDisplay_bench(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Display_benchContext = Display_benchContext;

vlgParser.prototype.display_bench = function() {

    var localctx = new Display_benchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, vlgParser.RULE_display_bench);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(vlgParser.T__16);
        this.state = 259;
        this.match(vlgParser.T__12);
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.IDENTIFIER) {
            this.state = 260;
            this.display_assignment();
            this.state = 265;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 266;
        this.match(vlgParser.T__13);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Display_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_display_assignment;
    this.lhs = null; // Token
    this.rhs = null; // Token
    return this;
}

Display_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Display_assignmentContext.prototype.constructor = Display_assignmentContext;

Display_assignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Display_assignmentContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
    }
};


Display_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterDisplay_assignment(this);
	}
};

Display_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitDisplay_assignment(this);
	}
};

Display_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitDisplay_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Display_assignmentContext = Display_assignmentContext;

vlgParser.prototype.display_assignment = function() {

    var localctx = new Display_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, vlgParser.RULE_display_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        localctx.lhs = this.match(vlgParser.IDENTIFIER);
        this.state = 269;
        this.match(vlgParser.ASSIGN);
        this.state = 270;
        localctx.rhs = this.match(vlgParser.IDENTIFIER);
        this.state = 271;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Localparam_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_localparam_declaration;
    return this;
}

Localparam_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Localparam_declarationContext.prototype.constructor = Localparam_declarationContext;

Localparam_declarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Localparam_declarationContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Localparam_declarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Localparam_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterLocalparam_declaration(this);
	}
};

Localparam_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitLocalparam_declaration(this);
	}
};

Localparam_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitLocalparam_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Localparam_declarationContext = Localparam_declarationContext;

vlgParser.prototype.localparam_declaration = function() {

    var localctx = new Localparam_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, vlgParser.RULE_localparam_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(vlgParser.T__17);
        this.state = 274;
        this.match(vlgParser.IDENTIFIER);
        this.state = 275;
        this.match(vlgParser.ASSIGN);
        this.state = 276;
        this.expression(0);
        this.state = 277;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Net_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_net_declaration;
    this.bitDim = null; // RangeContext
    this.ids = null; // Simple_identifier_listContext
    return this;
}

Net_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Net_declarationContext.prototype.constructor = Net_declarationContext;

Net_declarationContext.prototype.simple_identifier_list = function() {
    return this.getTypedRuleContext(Simple_identifier_listContext,0);
};

Net_declarationContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

Net_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNet_declaration(this);
	}
};

Net_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNet_declaration(this);
	}
};

Net_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNet_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Net_declarationContext = Net_declarationContext;

vlgParser.prototype.net_declaration = function() {

    var localctx = new Net_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, vlgParser.RULE_net_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(vlgParser.T__18);
        this.state = 281;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__48) {
            this.state = 280;
            localctx.bitDim = this.range();
        }

        this.state = 283;
        localctx.ids = this.simple_identifier_list();
        this.state = 284;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Reg_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_reg_declaration;
    this.bitDim = null; // RangeContext
    this.ids = null; // Register_identifier_listContext
    return this;
}

Reg_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Reg_declarationContext.prototype.constructor = Reg_declarationContext;

Reg_declarationContext.prototype.register_identifier_list = function() {
    return this.getTypedRuleContext(Register_identifier_listContext,0);
};

Reg_declarationContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

Reg_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterReg_declaration(this);
	}
};

Reg_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitReg_declaration(this);
	}
};

Reg_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitReg_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Reg_declarationContext = Reg_declarationContext;

vlgParser.prototype.reg_declaration = function() {

    var localctx = new Reg_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, vlgParser.RULE_reg_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(vlgParser.T__8);
        this.state = 288;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__48) {
            this.state = 287;
            localctx.bitDim = this.range();
        }

        this.state = 290;
        localctx.ids = this.register_identifier_list();
        this.state = 291;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Register_identifier_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_register_identifier_list;
    return this;
}

Register_identifier_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Register_identifier_listContext.prototype.constructor = Register_identifier_listContext;

Register_identifier_listContext.prototype.register_identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Register_identifierContext);
    } else {
        return this.getTypedRuleContext(Register_identifierContext,i);
    }
};

Register_identifier_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterRegister_identifier_list(this);
	}
};

Register_identifier_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitRegister_identifier_list(this);
	}
};

Register_identifier_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitRegister_identifier_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Register_identifier_listContext = Register_identifier_listContext;

vlgParser.prototype.register_identifier_list = function() {

    var localctx = new Register_identifier_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, vlgParser.RULE_register_identifier_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.register_identifier();
        this.state = 298;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 294;
            this.match(vlgParser.T__7);
            this.state = 295;
            this.register_identifier();
            this.state = 300;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Register_identifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_register_identifier;
    return this;
}

Register_identifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Register_identifierContext.prototype.constructor = Register_identifierContext;

Register_identifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Register_identifierContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

Register_identifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterRegister_identifier(this);
	}
};

Register_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitRegister_identifier(this);
	}
};

Register_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitRegister_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Register_identifierContext = Register_identifierContext;

vlgParser.prototype.register_identifier = function() {

    var localctx = new Register_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, vlgParser.RULE_register_identifier);
    try {
        this.state = 304;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 301;
            this.match(vlgParser.IDENTIFIER);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 302;
            this.match(vlgParser.IDENTIFIER);
            this.state = 303;
            this.range();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Simple_identifier_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_simple_identifier_list;
    return this;
}

Simple_identifier_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_identifier_listContext.prototype.constructor = Simple_identifier_listContext;

Simple_identifier_listContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
    }
};


Simple_identifier_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterSimple_identifier_list(this);
	}
};

Simple_identifier_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitSimple_identifier_list(this);
	}
};

Simple_identifier_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitSimple_identifier_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Simple_identifier_listContext = Simple_identifier_listContext;

vlgParser.prototype.simple_identifier_list = function() {

    var localctx = new Simple_identifier_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, vlgParser.RULE_simple_identifier_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        this.match(vlgParser.IDENTIFIER);
        this.state = 311;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 307;
            this.match(vlgParser.T__7);
            this.state = 308;
            this.match(vlgParser.IDENTIFIER);
            this.state = 313;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Module_instantiationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_instantiation;
    this.moduleID = null; // Token
    this.instanceID = null; // Token
    this.params = null; // Parameter_value_assignmentContext
    return this;
}

Module_instantiationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_instantiationContext.prototype.constructor = Module_instantiationContext;

Module_instantiationContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
    }
};


Module_instantiationContext.prototype.named_module_connections_list = function() {
    return this.getTypedRuleContext(Named_module_connections_listContext,0);
};

Module_instantiationContext.prototype.ordered_module_connections_list = function() {
    return this.getTypedRuleContext(Ordered_module_connections_listContext,0);
};

Module_instantiationContext.prototype.parameter_value_assignment = function() {
    return this.getTypedRuleContext(Parameter_value_assignmentContext,0);
};

Module_instantiationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule_instantiation(this);
	}
};

Module_instantiationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule_instantiation(this);
	}
};

Module_instantiationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule_instantiation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Module_instantiationContext = Module_instantiationContext;

vlgParser.prototype.module_instantiation = function() {

    var localctx = new Module_instantiationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, vlgParser.RULE_module_instantiation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        localctx.moduleID = this.match(vlgParser.IDENTIFIER);
        this.state = 315;
        localctx.instanceID = this.match(vlgParser.IDENTIFIER);
        this.state = 317;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 316;
            localctx.params = this.parameter_value_assignment();
        }

        this.state = 321;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.state = 319;
            this.named_module_connections_list();
            break;

        case 2:
            this.state = 320;
            this.ordered_module_connections_list();
            break;

        }
        this.state = 323;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Parameter_value_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_parameter_value_assignment;
    this._expression = null; // ExpressionContext
    this.params = []; // of ExpressionContexts
    return this;
}

Parameter_value_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Parameter_value_assignmentContext.prototype.constructor = Parameter_value_assignmentContext;

Parameter_value_assignmentContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Parameter_value_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterParameter_value_assignment(this);
	}
};

Parameter_value_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitParameter_value_assignment(this);
	}
};

Parameter_value_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitParameter_value_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Parameter_value_assignmentContext = Parameter_value_assignmentContext;

vlgParser.prototype.parameter_value_assignment = function() {

    var localctx = new Parameter_value_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, vlgParser.RULE_parameter_value_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 325;
        this.match(vlgParser.T__3);
        this.state = 326;
        this.match(vlgParser.T__4);
        this.state = 327;
        localctx._expression = this.expression(0);
        localctx.params.push(localctx._expression);
        this.state = 332;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 328;
            this.match(vlgParser.T__7);
            this.state = 329;
            localctx._expression = this.expression(0);
            localctx.params.push(localctx._expression);
            this.state = 334;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 335;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Named_module_connections_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_named_module_connections_list;
    return this;
}

Named_module_connections_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_module_connections_listContext.prototype.constructor = Named_module_connections_listContext;

Named_module_connections_listContext.prototype.named_port_connection = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Named_port_connectionContext);
    } else {
        return this.getTypedRuleContext(Named_port_connectionContext,i);
    }
};

Named_module_connections_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNamed_module_connections_list(this);
	}
};

Named_module_connections_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNamed_module_connections_list(this);
	}
};

Named_module_connections_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNamed_module_connections_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Named_module_connections_listContext = Named_module_connections_listContext;

vlgParser.prototype.named_module_connections_list = function() {

    var localctx = new Named_module_connections_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, vlgParser.RULE_named_module_connections_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this.match(vlgParser.T__4);
        this.state = 338;
        this.named_port_connection();
        this.state = 343;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 339;
            this.match(vlgParser.T__7);
            this.state = 340;
            this.named_port_connection();
            this.state = 345;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 346;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Named_port_connectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_named_port_connection;
    this.portID = null; // Token
    this.value = null; // ExpressionContext
    return this;
}

Named_port_connectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_port_connectionContext.prototype.constructor = Named_port_connectionContext;

Named_port_connectionContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Named_port_connectionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Named_port_connectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNamed_port_connection(this);
	}
};

Named_port_connectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNamed_port_connection(this);
	}
};

Named_port_connectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNamed_port_connection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Named_port_connectionContext = Named_port_connectionContext;

vlgParser.prototype.named_port_connection = function() {

    var localctx = new Named_port_connectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, vlgParser.RULE_named_port_connection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.match(vlgParser.T__19);
        this.state = 349;
        localctx.portID = this.match(vlgParser.IDENTIFIER);
        this.state = 350;
        this.match(vlgParser.T__4);
        this.state = 351;
        localctx.value = this.expression(0);
        this.state = 352;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Ordered_module_connections_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_ordered_module_connections_list;
    this._expression = null; // ExpressionContext
    this.ids = []; // of ExpressionContexts
    return this;
}

Ordered_module_connections_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ordered_module_connections_listContext.prototype.constructor = Ordered_module_connections_listContext;

Ordered_module_connections_listContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Ordered_module_connections_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterOrdered_module_connections_list(this);
	}
};

Ordered_module_connections_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitOrdered_module_connections_list(this);
	}
};

Ordered_module_connections_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitOrdered_module_connections_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Ordered_module_connections_listContext = Ordered_module_connections_listContext;

vlgParser.prototype.ordered_module_connections_list = function() {

    var localctx = new Ordered_module_connections_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, vlgParser.RULE_ordered_module_connections_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        this.match(vlgParser.T__4);
        this.state = 355;
        localctx._expression = this.expression(0);
        localctx.ids.push(localctx._expression);
        this.state = 360;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 356;
            this.match(vlgParser.T__7);
            this.state = 357;
            localctx._expression = this.expression(0);
            localctx.ids.push(localctx._expression);
            this.state = 362;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 363;
        this.match(vlgParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Gate_instantiationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_gate_instantiation;
    this.gateID = null; // Token
    this.ids = null; // Identifier_listContext
    return this;
}

Gate_instantiationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Gate_instantiationContext.prototype.constructor = Gate_instantiationContext;

Gate_instantiationContext.prototype.gate_type = function() {
    return this.getTypedRuleContext(Gate_typeContext,0);
};

Gate_instantiationContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Gate_instantiationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
};

Gate_instantiationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterGate_instantiation(this);
	}
};

Gate_instantiationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitGate_instantiation(this);
	}
};

Gate_instantiationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitGate_instantiation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Gate_instantiationContext = Gate_instantiationContext;

vlgParser.prototype.gate_instantiation = function() {

    var localctx = new Gate_instantiationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, vlgParser.RULE_gate_instantiation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 365;
        this.gate_type();
        this.state = 366;
        this.match(vlgParser.T__4);
        this.state = 367;
        localctx.gateID = this.match(vlgParser.IDENTIFIER);
        this.state = 370;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__7) {
            this.state = 368;
            this.match(vlgParser.T__7);
            this.state = 369;
            localctx.ids = this.identifier_list();
        }

        this.state = 372;
        this.match(vlgParser.T__6);
        this.state = 373;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Gate_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_gate_type;
    return this;
}

Gate_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Gate_typeContext.prototype.constructor = Gate_typeContext;


Gate_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterGate_type(this);
	}
};

Gate_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitGate_type(this);
	}
};

Gate_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitGate_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Gate_typeContext = Gate_typeContext;

vlgParser.prototype.gate_type = function() {

    var localctx = new Gate_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, vlgParser.RULE_gate_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        _la = this._input.LA(1);
        if(!(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (vlgParser.T__20 - 21)) | (1 << (vlgParser.T__21 - 21)) | (1 << (vlgParser.T__22 - 21)) | (1 << (vlgParser.T__23 - 21)) | (1 << (vlgParser.T__24 - 21)) | (1 << (vlgParser.T__25 - 21)) | (1 << (vlgParser.T__26 - 21)) | (1 << (vlgParser.T__27 - 21)) | (1 << (vlgParser.T__28 - 21)) | (1 << (vlgParser.T__29 - 21)) | (1 << (vlgParser.T__30 - 21)) | (1 << (vlgParser.T__31 - 21)) | (1 << (vlgParser.T__32 - 21)) | (1 << (vlgParser.T__33 - 21)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Net_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_net_assignment;
    return this;
}

Net_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Net_assignmentContext.prototype.constructor = Net_assignmentContext;

Net_assignmentContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

Net_assignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Net_assignmentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Net_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNet_assignment(this);
	}
};

Net_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNet_assignment(this);
	}
};

Net_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNet_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Net_assignmentContext = Net_assignmentContext;

vlgParser.prototype.net_assignment = function() {

    var localctx = new Net_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, vlgParser.RULE_net_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        this.match(vlgParser.T__34);
        this.state = 378;
        this.lvalue();
        this.state = 379;
        this.match(vlgParser.ASSIGN);
        this.state = 380;
        this.expr(0);
        this.state = 381;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Initial_constructContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_initial_construct;
    return this;
}

Initial_constructContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Initial_constructContext.prototype.constructor = Initial_constructContext;

Initial_constructContext.prototype.statement_block = function() {
    return this.getTypedRuleContext(Statement_blockContext,0);
};

Initial_constructContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterInitial_construct(this);
	}
};

Initial_constructContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitInitial_construct(this);
	}
};

Initial_constructContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitInitial_construct(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Initial_constructContext = Initial_constructContext;

vlgParser.prototype.initial_construct = function() {

    var localctx = new Initial_constructContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, vlgParser.RULE_initial_construct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this.match(vlgParser.T__35);
        this.state = 384;
        this.statement_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Always_constructContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_always_construct;
    return this;
}

Always_constructContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Always_constructContext.prototype.constructor = Always_constructContext;

Always_constructContext.prototype.event_list = function() {
    return this.getTypedRuleContext(Event_listContext,0);
};

Always_constructContext.prototype.statement_block = function() {
    return this.getTypedRuleContext(Statement_blockContext,0);
};

Always_constructContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAlways_construct(this);
	}
};

Always_constructContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAlways_construct(this);
	}
};

Always_constructContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAlways_construct(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Always_constructContext = Always_constructContext;

vlgParser.prototype.always_construct = function() {

    var localctx = new Always_constructContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, vlgParser.RULE_always_construct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.match(vlgParser.T__36);
        this.state = 387;
        this.match(vlgParser.T__37);
        this.state = 388;
        this.match(vlgParser.T__4);
        this.state = 389;
        this.event_list();
        this.state = 390;
        this.match(vlgParser.T__6);
        this.state = 391;
        this.statement_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_event_list;
    return this;
}

Event_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_listContext.prototype.constructor = Event_listContext;

Event_listContext.prototype.event_every = function() {
    return this.getTypedRuleContext(Event_everyContext,0);
};

Event_listContext.prototype.event_primary = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Event_primaryContext);
    } else {
        return this.getTypedRuleContext(Event_primaryContext,i);
    }
};

Event_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterEvent_list(this);
	}
};

Event_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitEvent_list(this);
	}
};

Event_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitEvent_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Event_listContext = Event_listContext;

vlgParser.prototype.event_list = function() {

    var localctx = new Event_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, vlgParser.RULE_event_list);
    var _la = 0; // Token type
    try {
        this.state = 404;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.MUL:
            this.enterOuterAlt(localctx, 1);
            this.state = 393;
            this.event_every();
            break;
        case vlgParser.T__38:
        case vlgParser.T__39:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 394;
            this.event_primary();
            this.state = 401;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===vlgParser.T__7 || _la===vlgParser.T__21) {
                this.state = 399;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case vlgParser.T__21:
                    this.state = 395;
                    this.match(vlgParser.T__21);
                    this.state = 396;
                    this.event_primary();
                    break;
                case vlgParser.T__7:
                    this.state = 397;
                    this.match(vlgParser.T__7);
                    this.state = 398;
                    this.event_primary();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_everyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_event_every;
    return this;
}

Event_everyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_everyContext.prototype.constructor = Event_everyContext;

Event_everyContext.prototype.MUL = function() {
    return this.getToken(vlgParser.MUL, 0);
};

Event_everyContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterEvent_every(this);
	}
};

Event_everyContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitEvent_every(this);
	}
};

Event_everyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitEvent_every(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Event_everyContext = Event_everyContext;

vlgParser.prototype.event_every = function() {

    var localctx = new Event_everyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, vlgParser.RULE_event_every);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        this.match(vlgParser.MUL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_primaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_event_primary;
    return this;
}

Event_primaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_primaryContext.prototype.constructor = Event_primaryContext;

Event_primaryContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Event_primaryContext.prototype.event_type = function() {
    return this.getTypedRuleContext(Event_typeContext,0);
};

Event_primaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterEvent_primary(this);
	}
};

Event_primaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitEvent_primary(this);
	}
};

Event_primaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitEvent_primary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Event_primaryContext = Event_primaryContext;

vlgParser.prototype.event_primary = function() {

    var localctx = new Event_primaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, vlgParser.RULE_event_primary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__38 || _la===vlgParser.T__39) {
            this.state = 408;
            this.event_type();
        }

        this.state = 411;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_event_type;
    return this;
}

Event_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_typeContext.prototype.constructor = Event_typeContext;


Event_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterEvent_type(this);
	}
};

Event_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitEvent_type(this);
	}
};

Event_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitEvent_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Event_typeContext = Event_typeContext;

vlgParser.prototype.event_type = function() {

    var localctx = new Event_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, vlgParser.RULE_event_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.T__38 || _la===vlgParser.T__39)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Statement_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_statement_block;
    return this;
}

Statement_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_blockContext.prototype.constructor = Statement_blockContext;

Statement_blockContext.prototype.seq_block = function() {
    return this.getTypedRuleContext(Seq_blockContext,0);
};

Statement_blockContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

Statement_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterStatement_block(this);
	}
};

Statement_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitStatement_block(this);
	}
};

Statement_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitStatement_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Statement_blockContext = Statement_blockContext;

vlgParser.prototype.statement_block = function() {

    var localctx = new Statement_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, vlgParser.RULE_statement_block);
    try {
        this.state = 417;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__12:
            this.enterOuterAlt(localctx, 1);
            this.state = 415;
            this.seq_block();
            break;
        case vlgParser.T__14:
        case vlgParser.T__40:
        case vlgParser.T__42:
        case vlgParser.T__46:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 416;
            this.statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Seq_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_seq_block;
    return this;
}

Seq_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Seq_blockContext.prototype.constructor = Seq_blockContext;

Seq_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Seq_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterSeq_block(this);
	}
};

Seq_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitSeq_block(this);
	}
};

Seq_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitSeq_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Seq_blockContext = Seq_blockContext;

vlgParser.prototype.seq_block = function() {

    var localctx = new Seq_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, vlgParser.RULE_seq_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        this.match(vlgParser.T__12);
        this.state = 423;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__14 || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (vlgParser.T__40 - 41)) | (1 << (vlgParser.T__42 - 41)) | (1 << (vlgParser.T__46 - 41)))) !== 0) || _la===vlgParser.IDENTIFIER) {
            this.state = 420;
            this.statement();
            this.state = 425;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 426;
        this.match(vlgParser.T__13);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.blocking_assignment = function() {
    return this.getTypedRuleContext(Blocking_assignmentContext,0);
};

StatementContext.prototype.conditional_statement = function() {
    return this.getTypedRuleContext(Conditional_statementContext,0);
};

StatementContext.prototype.case_statement = function() {
    return this.getTypedRuleContext(Case_statementContext,0);
};

StatementContext.prototype.error_statement = function() {
    return this.getTypedRuleContext(Error_statementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.StatementContext = StatementContext;

vlgParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, vlgParser.RULE_statement);
    try {
        this.state = 434;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__14:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 428;
            this.blocking_assignment();
            this.state = 429;
            this.match(vlgParser.T__1);
            break;
        case vlgParser.T__40:
            this.enterOuterAlt(localctx, 2);
            this.state = 431;
            this.conditional_statement();
            break;
        case vlgParser.T__42:
            this.enterOuterAlt(localctx, 3);
            this.state = 432;
            this.case_statement();
            break;
        case vlgParser.T__46:
            this.enterOuterAlt(localctx, 4);
            this.state = 433;
            this.error_statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Blocking_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_blocking_assignment;
    this.lhs = null; // LvalueContext
    this.rhs = null; // ExpressionContext
    return this;
}

Blocking_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Blocking_assignmentContext.prototype.constructor = Blocking_assignmentContext;

Blocking_assignmentContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

Blocking_assignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Blocking_assignmentContext.prototype.LTE = function() {
    return this.getToken(vlgParser.LTE, 0);
};

Blocking_assignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Blocking_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterBlocking_assignment(this);
	}
};

Blocking_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitBlocking_assignment(this);
	}
};

Blocking_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitBlocking_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Blocking_assignmentContext = Blocking_assignmentContext;

vlgParser.prototype.blocking_assignment = function() {

    var localctx = new Blocking_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, vlgParser.RULE_blocking_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        localctx.lhs = this.lvalue();
        this.state = 437;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.ASSIGN || _la===vlgParser.LTE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 438;
        localctx.rhs = this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Conditional_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_conditional_statement;
    this.cond = null; // ExpressionContext
    this.thenblock = null; // Statement_blockContext
    this.elseblock = null; // Statement_blockContext
    return this;
}

Conditional_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Conditional_statementContext.prototype.constructor = Conditional_statementContext;

Conditional_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Conditional_statementContext.prototype.statement_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Statement_blockContext);
    } else {
        return this.getTypedRuleContext(Statement_blockContext,i);
    }
};

Conditional_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterConditional_statement(this);
	}
};

Conditional_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitConditional_statement(this);
	}
};

Conditional_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitConditional_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Conditional_statementContext = Conditional_statementContext;

vlgParser.prototype.conditional_statement = function() {

    var localctx = new Conditional_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, vlgParser.RULE_conditional_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 440;
        this.match(vlgParser.T__40);
        this.state = 441;
        this.match(vlgParser.T__4);
        this.state = 442;
        localctx.cond = this.expression(0);
        this.state = 443;
        this.match(vlgParser.T__6);
        this.state = 444;
        localctx.thenblock = this.statement_block();
        this.state = 447;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        if(la_===1) {
            this.state = 445;
            this.match(vlgParser.T__41);
            this.state = 446;
            localctx.elseblock = this.statement_block();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Case_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_case_statement;
    this.casevar = null; // IdentifierContext
    this._case_clause = null; // Case_clauseContext
    this.clauses = []; // of Case_clauseContexts
    this.defaultclause = null; // Case_defaultContext
    return this;
}

Case_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Case_statementContext.prototype.constructor = Case_statementContext;

Case_statementContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Case_statementContext.prototype.case_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Case_clauseContext);
    } else {
        return this.getTypedRuleContext(Case_clauseContext,i);
    }
};

Case_statementContext.prototype.case_default = function() {
    return this.getTypedRuleContext(Case_defaultContext,0);
};

Case_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterCase_statement(this);
	}
};

Case_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitCase_statement(this);
	}
};

Case_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitCase_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Case_statementContext = Case_statementContext;

vlgParser.prototype.case_statement = function() {

    var localctx = new Case_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, vlgParser.RULE_case_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        this.match(vlgParser.T__42);
        this.state = 450;
        this.match(vlgParser.T__4);
        this.state = 451;
        localctx.casevar = this.identifier();
        this.state = 452;
        this.match(vlgParser.T__6);
        this.state = 454; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 453;
            localctx._case_clause = this.case_clause();
            localctx.clauses.push(localctx._case_clause);
            this.state = 456; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===vlgParser.T__4 || _la===vlgParser.T__14 || ((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (vlgParser.Decimal_number - 53)) | (1 << (vlgParser.Binary_number - 53)) | (1 << (vlgParser.Octal_number - 53)) | (1 << (vlgParser.Hex_number - 53)) | (1 << (vlgParser.NEG - 53)) | (1 << (vlgParser.PLUS - 53)) | (1 << (vlgParser.MINUS - 53)) | (1 << (vlgParser.IDENTIFIER - 53)))) !== 0));
        this.state = 459;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__45) {
            this.state = 458;
            localctx.defaultclause = this.case_default();
        }

        this.state = 461;
        this.match(vlgParser.T__43);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Case_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_case_clause;
    return this;
}

Case_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Case_clauseContext.prototype.constructor = Case_clauseContext;

Case_clauseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Case_clauseContext.prototype.statement_block = function() {
    return this.getTypedRuleContext(Statement_blockContext,0);
};

Case_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterCase_clause(this);
	}
};

Case_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitCase_clause(this);
	}
};

Case_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitCase_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Case_clauseContext = Case_clauseContext;

vlgParser.prototype.case_clause = function() {

    var localctx = new Case_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, vlgParser.RULE_case_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this.expression(0);
        this.state = 464;
        this.match(vlgParser.T__44);
        this.state = 465;
        this.statement_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Case_defaultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_case_default;
    return this;
}

Case_defaultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Case_defaultContext.prototype.constructor = Case_defaultContext;

Case_defaultContext.prototype.statement_block = function() {
    return this.getTypedRuleContext(Statement_blockContext,0);
};

Case_defaultContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterCase_default(this);
	}
};

Case_defaultContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitCase_default(this);
	}
};

Case_defaultContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitCase_default(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Case_defaultContext = Case_defaultContext;

vlgParser.prototype.case_default = function() {

    var localctx = new Case_defaultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, vlgParser.RULE_case_default);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 467;
        this.match(vlgParser.T__45);
        this.state = 468;
        this.match(vlgParser.T__44);
        this.state = 469;
        this.statement_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Error_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_error_statement;
    return this;
}

Error_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Error_statementContext.prototype.constructor = Error_statementContext;

Error_statementContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

Error_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterError_statement(this);
	}
};

Error_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitError_statement(this);
	}
};

Error_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitError_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Error_statementContext = Error_statementContext;

vlgParser.prototype.error_statement = function() {

    var localctx = new Error_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, vlgParser.RULE_error_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 471;
        this.match(vlgParser.T__46);
        this.state = 472;
        this.match(vlgParser.T__4);
        this.state = 473;
        this.string();
        this.state = 474;
        this.match(vlgParser.T__6);
        this.state = 475;
        this.match(vlgParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConcatenationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_concatenation;
    return this;
}

ConcatenationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConcatenationContext.prototype.constructor = ConcatenationContext;

ConcatenationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ConcatenationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterConcatenation(this);
	}
};

ConcatenationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitConcatenation(this);
	}
};

ConcatenationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitConcatenation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.ConcatenationContext = ConcatenationContext;

vlgParser.prototype.concatenation = function() {

    var localctx = new ConcatenationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, vlgParser.RULE_concatenation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 477;
        this.match(vlgParser.T__14);
        this.state = 478;
        this.expression(0);
        this.state = 483;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 479;
            this.match(vlgParser.T__7);
            this.state = 480;
            this.expression(0);
            this.state = 485;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 486;
        this.match(vlgParser.T__15);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Multiple_concatenationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_multiple_concatenation;
    this._expression = null; // ExpressionContext
    this.comp = []; // of ExpressionContexts
    return this;
}

Multiple_concatenationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Multiple_concatenationContext.prototype.constructor = Multiple_concatenationContext;

Multiple_concatenationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Multiple_concatenationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterMultiple_concatenation(this);
	}
};

Multiple_concatenationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitMultiple_concatenation(this);
	}
};

Multiple_concatenationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitMultiple_concatenation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Multiple_concatenationContext = Multiple_concatenationContext;

vlgParser.prototype.multiple_concatenation = function() {

    var localctx = new Multiple_concatenationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, vlgParser.RULE_multiple_concatenation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 488;
        this.match(vlgParser.T__14);
        this.state = 489;
        this.expression(0);
        this.state = 490;
        this.match(vlgParser.T__14);
        this.state = 491;
        localctx._expression = this.expression(0);
        localctx.comp.push(localctx._expression);
        this.state = 496;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 492;
            this.match(vlgParser.T__7);
            this.state = 493;
            localctx._expression = this.expression(0);
            localctx.comp.push(localctx._expression);
            this.state = 498;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 499;
        this.match(vlgParser.T__15);
        this.state = 500;
        this.match(vlgParser.T__15);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function BinaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BinaryExpressionContext.prototype.constructor = BinaryExpressionContext;

vlgParser.BinaryExpressionContext = BinaryExpressionContext;

BinaryExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BinaryExpressionContext.prototype.MUL = function() {
    return this.getToken(vlgParser.MUL, 0);
};

BinaryExpressionContext.prototype.DIV = function() {
    return this.getToken(vlgParser.DIV, 0);
};

BinaryExpressionContext.prototype.PLUS = function() {
    return this.getToken(vlgParser.PLUS, 0);
};

BinaryExpressionContext.prototype.MINUS = function() {
    return this.getToken(vlgParser.MINUS, 0);
};

BinaryExpressionContext.prototype.AND = function() {
    return this.getToken(vlgParser.AND, 0);
};

BinaryExpressionContext.prototype.OR = function() {
    return this.getToken(vlgParser.OR, 0);
};

BinaryExpressionContext.prototype.LT = function() {
    return this.getToken(vlgParser.LT, 0);
};

BinaryExpressionContext.prototype.LTE = function() {
    return this.getToken(vlgParser.LTE, 0);
};

BinaryExpressionContext.prototype.GT = function() {
    return this.getToken(vlgParser.GT, 0);
};

BinaryExpressionContext.prototype.GTE = function() {
    return this.getToken(vlgParser.GTE, 0);
};

BinaryExpressionContext.prototype.EQUAL = function() {
    return this.getToken(vlgParser.EQUAL, 0);
};

BinaryExpressionContext.prototype.NOTEQUAL = function() {
    return this.getToken(vlgParser.NOTEQUAL, 0);
};

BinaryExpressionContext.prototype.SHL = function() {
    return this.getToken(vlgParser.SHL, 0);
};

BinaryExpressionContext.prototype.SHR = function() {
    return this.getToken(vlgParser.SHR, 0);
};
BinaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitBinaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AtomExpressionContext.prototype.constructor = AtomExpressionContext;

vlgParser.AtomExpressionContext = AtomExpressionContext;

AtomExpressionContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

AtomExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AtomExpressionContext.prototype.concatenation = function() {
    return this.getTypedRuleContext(ConcatenationContext,0);
};

AtomExpressionContext.prototype.multiple_concatenation = function() {
    return this.getTypedRuleContext(Multiple_concatenationContext,0);
};
AtomExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAtomExpression(this);
	}
};

AtomExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAtomExpression(this);
	}
};

AtomExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAtomExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParensExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ParensExpressionContext.prototype.constructor = ParensExpressionContext;

vlgParser.ParensExpressionContext = ParensExpressionContext;

ParensExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParensExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterParensExpression(this);
	}
};

ParensExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitParensExpression(this);
	}
};

ParensExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitParensExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryExpressionContext.prototype.constructor = UnaryExpressionContext;

vlgParser.UnaryExpressionContext = UnaryExpressionContext;

UnaryExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UnaryExpressionContext.prototype.PLUS = function() {
    return this.getToken(vlgParser.PLUS, 0);
};

UnaryExpressionContext.prototype.MINUS = function() {
    return this.getToken(vlgParser.MINUS, 0);
};

UnaryExpressionContext.prototype.NEG = function() {
    return this.getToken(vlgParser.NEG, 0);
};
UnaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitUnaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TernaryExpressionContext.prototype.constructor = TernaryExpressionContext;

vlgParser.TernaryExpressionContext = TernaryExpressionContext;

TernaryExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
TernaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTernaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



vlgParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 96;
    this.enterRecursionRule(localctx, 96, vlgParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 503;
            this.number();
            break;

        case 2:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 504;
            this.identifier();
            break;

        case 3:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 505;
            this.concatenation();
            break;

        case 4:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 506;
            this.multiple_concatenation();
            break;

        case 5:
            localctx = new ParensExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 507;
            this.match(vlgParser.T__4);
            this.state = 508;
            this.expression(0);
            this.state = 509;
            this.match(vlgParser.T__6);
            break;

        case 6:
            localctx = new UnaryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 511;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (vlgParser.NEG - 58)) | (1 << (vlgParser.PLUS - 58)) | (1 << (vlgParser.MINUS - 58)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 512;
            this.expression(6);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 535;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 533;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                    this.state = 515;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 516;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===vlgParser.MUL || _la===vlgParser.DIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 517;
                    this.expression(6);
                    break;

                case 2:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                    this.state = 518;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 519;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===vlgParser.PLUS || _la===vlgParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 520;
                    this.expression(5);
                    break;

                case 3:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                    this.state = 521;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 522;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===vlgParser.AND || _la===vlgParser.OR)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 523;
                    this.expression(4);
                    break;

                case 4:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                    this.state = 524;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 525;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (vlgParser.LT - 69)) | (1 << (vlgParser.LTE - 69)) | (1 << (vlgParser.GT - 69)) | (1 << (vlgParser.GTE - 69)) | (1 << (vlgParser.EQUAL - 69)) | (1 << (vlgParser.NOTEQUAL - 69)) | (1 << (vlgParser.SHL - 69)) | (1 << (vlgParser.SHR - 69)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 526;
                    this.expression(3);
                    break;

                case 5:
                    localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                    this.state = 527;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 528;
                    this.match(vlgParser.T__47);
                    this.state = 529;
                    this.expression(0);
                    this.state = 530;
                    this.match(vlgParser.T__44);
                    this.state = 531;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 537;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function UnaryExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Unary_gate_opContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryExprContext.prototype = Object.create(ExprContext.prototype);
UnaryExprContext.prototype.constructor = UnaryExprContext;

vlgParser.UnaryExprContext = UnaryExprContext;

UnaryExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

UnaryExprContext.prototype.unary_gate_op = function() {
    return this.getTypedRuleContext(Unary_gate_opContext,0);
};
UnaryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterUnaryExpr(this);
	}
};

UnaryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitUnaryExpr(this);
	}
};

UnaryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitUnaryExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExprContext.prototype = Object.create(ExprContext.prototype);
TernaryExprContext.prototype.constructor = TernaryExprContext;

vlgParser.TernaryExprContext = TernaryExprContext;

TernaryExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
TernaryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterTernaryExpr(this);
	}
};

TernaryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitTernaryExpr(this);
	}
};

TernaryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitTernaryExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExprContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

vlgParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

AtomExprContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AtomExprContext.prototype.concatenation = function() {
    return this.getTypedRuleContext(ConcatenationContext,0);
};

AtomExprContext.prototype.multiple_concatenation = function() {
    return this.getTypedRuleContext(Multiple_concatenationContext,0);
};
AtomExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAtomExpr(this);
	}
};

AtomExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAtomExpr(this);
	}
};

AtomExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAtomExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Binary_gate_opContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryExprContext.prototype = Object.create(ExprContext.prototype);
BinaryExprContext.prototype.constructor = BinaryExprContext;

vlgParser.BinaryExprContext = BinaryExprContext;

BinaryExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

BinaryExprContext.prototype.binary_gate_op = function() {
    return this.getTypedRuleContext(Binary_gate_opContext,0);
};
BinaryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterBinaryExpr(this);
	}
};

BinaryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitBinaryExpr(this);
	}
};

BinaryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitBinaryExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParensExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensExprContext.prototype = Object.create(ExprContext.prototype);
ParensExprContext.prototype.constructor = ParensExprContext;

vlgParser.ParensExprContext = ParensExprContext;

ParensExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParensExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterParensExpr(this);
	}
};

ParensExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitParensExpr(this);
	}
};

ParensExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitParensExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



vlgParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 98;
    this.enterRecursionRule(localctx, 98, vlgParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 550;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 539;
            this.number();
            break;

        case 2:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 540;
            this.identifier();
            break;

        case 3:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 541;
            this.concatenation();
            break;

        case 4:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 542;
            this.multiple_concatenation();
            break;

        case 5:
            localctx = new ParensExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 543;
            this.match(vlgParser.T__4);
            this.state = 544;
            this.expr(0);
            this.state = 545;
            this.match(vlgParser.T__6);
            break;

        case 6:
            localctx = new UnaryExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 547;
            localctx.op = this.unary_gate_op();
            this.state = 548;
            this.expr(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 564;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 562;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BinaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expr);
                    this.state = 552;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 553;
                    localctx.op = this.binary_gate_op();
                    this.state = 554;
                    this.expr(3);
                    break;

                case 2:
                    localctx = new TernaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expr);
                    this.state = 556;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 557;
                    this.match(vlgParser.T__47);
                    this.state = 558;
                    this.expr(0);
                    this.state = 559;
                    this.match(vlgParser.T__44);
                    this.state = 560;
                    this.expr(2);
                    break;

                } 
            }
            this.state = 566;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Binary_gate_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_binary_gate_op;
    return this;
}

Binary_gate_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_gate_opContext.prototype.constructor = Binary_gate_opContext;

Binary_gate_opContext.prototype.AND = function() {
    return this.getToken(vlgParser.AND, 0);
};

Binary_gate_opContext.prototype.NAND = function() {
    return this.getToken(vlgParser.NAND, 0);
};

Binary_gate_opContext.prototype.OR = function() {
    return this.getToken(vlgParser.OR, 0);
};

Binary_gate_opContext.prototype.NOR = function() {
    return this.getToken(vlgParser.NOR, 0);
};

Binary_gate_opContext.prototype.XOR = function() {
    return this.getToken(vlgParser.XOR, 0);
};

Binary_gate_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterBinary_gate_op(this);
	}
};

Binary_gate_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitBinary_gate_op(this);
	}
};

Binary_gate_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitBinary_gate_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Binary_gate_opContext = Binary_gate_opContext;

vlgParser.prototype.binary_gate_op = function() {

    var localctx = new Binary_gate_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, vlgParser.RULE_binary_gate_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 567;
        _la = this._input.LA(1);
        if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (vlgParser.NAND - 59)) | (1 << (vlgParser.NOR - 59)) | (1 << (vlgParser.XOR - 59)) | (1 << (vlgParser.AND - 59)) | (1 << (vlgParser.OR - 59)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_gate_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_unary_gate_op;
    return this;
}

Unary_gate_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_gate_opContext.prototype.constructor = Unary_gate_opContext;

Unary_gate_opContext.prototype.NOT = function() {
    return this.getToken(vlgParser.NOT, 0);
};

Unary_gate_opContext.prototype.NEG = function() {
    return this.getToken(vlgParser.NEG, 0);
};

Unary_gate_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterUnary_gate_op(this);
	}
};

Unary_gate_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitUnary_gate_op(this);
	}
};

Unary_gate_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitUnary_gate_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Unary_gate_opContext = Unary_gate_opContext;

vlgParser.prototype.unary_gate_op = function() {

    var localctx = new Unary_gate_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, vlgParser.RULE_unary_gate_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 569;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.NOT || _la===vlgParser.NEG)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_lvalue;
    return this;
}

LvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LvalueContext.prototype.constructor = LvalueContext;

LvalueContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

LvalueContext.prototype.concatenation = function() {
    return this.getTypedRuleContext(ConcatenationContext,0);
};

LvalueContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterLvalue(this);
	}
};

LvalueContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitLvalue(this);
	}
};

LvalueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitLvalue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.LvalueContext = LvalueContext;

vlgParser.prototype.lvalue = function() {

    var localctx = new LvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, vlgParser.RULE_lvalue);
    try {
        this.state = 573;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 571;
            this.identifier();
            break;
        case vlgParser.T__14:
            this.enterOuterAlt(localctx, 2);
            this.state = 572;
            this.concatenation();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_unary_operator;
    return this;
}

Unary_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_operatorContext.prototype.constructor = Unary_operatorContext;

Unary_operatorContext.prototype.PLUS = function() {
    return this.getToken(vlgParser.PLUS, 0);
};

Unary_operatorContext.prototype.MINUS = function() {
    return this.getToken(vlgParser.MINUS, 0);
};

Unary_operatorContext.prototype.NOT = function() {
    return this.getToken(vlgParser.NOT, 0);
};

Unary_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterUnary_operator(this);
	}
};

Unary_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitUnary_operator(this);
	}
};

Unary_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitUnary_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Unary_operatorContext = Unary_operatorContext;

vlgParser.prototype.unary_operator = function() {

    var localctx = new Unary_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, vlgParser.RULE_unary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 575;
        _la = this._input.LA(1);
        if(!(((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (vlgParser.NOT - 57)) | (1 << (vlgParser.PLUS - 57)) | (1 << (vlgParser.MINUS - 57)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Binary_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_binary_operator;
    return this;
}

Binary_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_operatorContext.prototype.constructor = Binary_operatorContext;

Binary_operatorContext.prototype.PLUS = function() {
    return this.getToken(vlgParser.PLUS, 0);
};

Binary_operatorContext.prototype.MINUS = function() {
    return this.getToken(vlgParser.MINUS, 0);
};

Binary_operatorContext.prototype.MUL = function() {
    return this.getToken(vlgParser.MUL, 0);
};

Binary_operatorContext.prototype.DIV = function() {
    return this.getToken(vlgParser.DIV, 0);
};

Binary_operatorContext.prototype.EQUAL = function() {
    return this.getToken(vlgParser.EQUAL, 0);
};

Binary_operatorContext.prototype.NOTEQUAL = function() {
    return this.getToken(vlgParser.NOTEQUAL, 0);
};

Binary_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterBinary_operator(this);
	}
};

Binary_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitBinary_operator(this);
	}
};

Binary_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitBinary_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Binary_operatorContext = Binary_operatorContext;

vlgParser.prototype.binary_operator = function() {

    var localctx = new Binary_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, vlgParser.RULE_binary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 577;
        _la = this._input.LA(1);
        if(!(((((_la - 63)) & ~0x1f) == 0 && ((1 << (_la - 63)) & ((1 << (vlgParser.PLUS - 63)) | (1 << (vlgParser.MINUS - 63)) | (1 << (vlgParser.MUL - 63)) | (1 << (vlgParser.DIV - 63)) | (1 << (vlgParser.EQUAL - 63)) | (1 << (vlgParser.NOTEQUAL - 63)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;


 
NumberContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function OctalContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OctalContext.prototype = Object.create(NumberContext.prototype);
OctalContext.prototype.constructor = OctalContext;

vlgParser.OctalContext = OctalContext;

OctalContext.prototype.Octal_number = function() {
    return this.getToken(vlgParser.Octal_number, 0);
};
OctalContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterOctal(this);
	}
};

OctalContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitOctal(this);
	}
};

OctalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitOctal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryContext.prototype = Object.create(NumberContext.prototype);
BinaryContext.prototype.constructor = BinaryContext;

vlgParser.BinaryContext = BinaryContext;

BinaryContext.prototype.Binary_number = function() {
    return this.getToken(vlgParser.Binary_number, 0);
};
BinaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterBinary(this);
	}
};

BinaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitBinary(this);
	}
};

BinaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitBinary(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function HexContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

HexContext.prototype = Object.create(NumberContext.prototype);
HexContext.prototype.constructor = HexContext;

vlgParser.HexContext = HexContext;

HexContext.prototype.Hex_number = function() {
    return this.getToken(vlgParser.Hex_number, 0);
};
HexContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterHex(this);
	}
};

HexContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitHex(this);
	}
};

HexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitHex(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DecimalContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecimalContext.prototype = Object.create(NumberContext.prototype);
DecimalContext.prototype.constructor = DecimalContext;

vlgParser.DecimalContext = DecimalContext;

DecimalContext.prototype.Decimal_number = function() {
    return this.getToken(vlgParser.Decimal_number, 0);
};
DecimalContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterDecimal(this);
	}
};

DecimalContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitDecimal(this);
	}
};

DecimalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitDecimal(this);
    } else {
        return visitor.visitChildren(this);
    }
};



vlgParser.NumberContext = NumberContext;

vlgParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, vlgParser.RULE_number);
    try {
        this.state = 583;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.Decimal_number:
            localctx = new DecimalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 579;
            this.match(vlgParser.Decimal_number);
            break;
        case vlgParser.Octal_number:
            localctx = new OctalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 580;
            this.match(vlgParser.Octal_number);
            break;
        case vlgParser.Binary_number:
            localctx = new BinaryContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 581;
            this.match(vlgParser.Binary_number);
            break;
        case vlgParser.Hex_number:
            localctx = new HexContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 582;
            this.match(vlgParser.Hex_number);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Defined_connection_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_defined_connection_id;
    return this;
}

Defined_connection_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Defined_connection_idContext.prototype.constructor = Defined_connection_idContext;

Defined_connection_idContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Defined_connection_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterDefined_connection_id(this);
	}
};

Defined_connection_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitDefined_connection_id(this);
	}
};

Defined_connection_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitDefined_connection_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Defined_connection_idContext = Defined_connection_idContext;

vlgParser.prototype.defined_connection_id = function() {

    var localctx = new Defined_connection_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, vlgParser.RULE_defined_connection_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 585;
        this.match(vlgParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Defined_connection_id_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_defined_connection_id_list;
    return this;
}

Defined_connection_id_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Defined_connection_id_listContext.prototype.constructor = Defined_connection_id_listContext;

Defined_connection_id_listContext.prototype.defined_connection_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Defined_connection_idContext);
    } else {
        return this.getTypedRuleContext(Defined_connection_idContext,i);
    }
};

Defined_connection_id_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterDefined_connection_id_list(this);
	}
};

Defined_connection_id_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitDefined_connection_id_list(this);
	}
};

Defined_connection_id_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitDefined_connection_id_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Defined_connection_id_listContext = Defined_connection_id_listContext;

vlgParser.prototype.defined_connection_id_list = function() {

    var localctx = new Defined_connection_id_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, vlgParser.RULE_defined_connection_id_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 587;
        this.defined_connection_id();
        this.state = 592;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 588;
            this.match(vlgParser.T__7);
            this.state = 589;
            this.defined_connection_id();
            this.state = 594;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Identifier_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_identifier_list;
    return this;
}

Identifier_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Identifier_listContext.prototype.constructor = Identifier_listContext;

Identifier_listContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

Identifier_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterIdentifier_list(this);
	}
};

Identifier_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitIdentifier_list(this);
	}
};

Identifier_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitIdentifier_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Identifier_listContext = Identifier_listContext;

vlgParser.prototype.identifier_list = function() {

    var localctx = new Identifier_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, vlgParser.RULE_identifier_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 595;
        this.identifier();
        this.state = 600;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 596;
            this.match(vlgParser.T__7);
            this.state = 597;
            this.identifier();
            this.state = 602;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_range;
    this.rangestart = null; // ExpressionContext
    this.rangeend = null; // ExpressionContext
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

RangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitRange(this);
	}
};

RangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.RangeContext = RangeContext;

vlgParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, vlgParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 603;
        this.match(vlgParser.T__48);
        this.state = 604;
        localctx.rangestart = this.expression(0);
        this.state = 605;
        this.match(vlgParser.T__44);
        this.state = 606;
        localctx.rangeend = this.expression(0);
        this.state = 607;
        this.match(vlgParser.T__49);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;


 
IdentifierContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IdPlainContext(parser, ctx) {
	IdentifierContext.call(this, parser);
    IdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdPlainContext.prototype = Object.create(IdentifierContext.prototype);
IdPlainContext.prototype.constructor = IdPlainContext;

vlgParser.IdPlainContext = IdPlainContext;

IdPlainContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};
IdPlainContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterIdPlain(this);
	}
};

IdPlainContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitIdPlain(this);
	}
};

IdPlainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitIdPlain(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdRangeContext(parser, ctx) {
	IdentifierContext.call(this, parser);
    IdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdRangeContext.prototype = Object.create(IdentifierContext.prototype);
IdRangeContext.prototype.constructor = IdRangeContext;

vlgParser.IdRangeContext = IdRangeContext;

IdRangeContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

IdRangeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
IdRangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterIdRange(this);
	}
};

IdRangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitIdRange(this);
	}
};

IdRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitIdRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdOffsetContext(parser, ctx) {
	IdentifierContext.call(this, parser);
    IdentifierContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdOffsetContext.prototype = Object.create(IdentifierContext.prototype);
IdOffsetContext.prototype.constructor = IdOffsetContext;

vlgParser.IdOffsetContext = IdOffsetContext;

IdOffsetContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

IdOffsetContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
IdOffsetContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterIdOffset(this);
	}
};

IdOffsetContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitIdOffset(this);
	}
};

IdOffsetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitIdOffset(this);
    } else {
        return visitor.visitChildren(this);
    }
};



vlgParser.IdentifierContext = IdentifierContext;

vlgParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, vlgParser.RULE_identifier);
    try {
        this.state = 622;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IdPlainContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 609;
            this.match(vlgParser.IDENTIFIER);
            break;

        case 2:
            localctx = new IdOffsetContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 610;
            this.match(vlgParser.IDENTIFIER);
            this.state = 611;
            this.match(vlgParser.T__48);
            this.state = 612;
            this.expression(0);
            this.state = 613;
            this.match(vlgParser.T__49);
            break;

        case 3:
            localctx = new IdRangeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 615;
            this.match(vlgParser.IDENTIFIER);
            this.state = 616;
            this.match(vlgParser.T__48);
            this.state = 617;
            this.expression(0);
            this.state = 618;
            this.match(vlgParser.T__44);
            this.state = 619;
            this.expression(0);
            this.state = 620;
            this.match(vlgParser.T__49);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;


StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.StringContext = StringContext;

vlgParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, vlgParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 624;
        this.match(vlgParser.T__50);
        this.state = 628;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 625;
                this.matchWildcard(); 
            }
            this.state = 630;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
        }

        this.state = 631;
        this.match(vlgParser.T__50);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


vlgParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 48:
			return this.expression_sempred(localctx, predIndex);
	case 49:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

vlgParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

vlgParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		case 6:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.vlgParser = vlgParser;
