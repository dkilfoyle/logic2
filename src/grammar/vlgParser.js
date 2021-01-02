// Generated from c:\c\logic2\src\grammar\vlg.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var vlgListener = require('./vlgListener').vlgListener;
var vlgVisitor = require('./vlgVisitor').vlgVisitor;

 /* eslint-disable */ 
var grammarFileName = "vlg.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003E\u01ab\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003i\n\u0003\f\u0003",
    "\u000e\u0003l\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004t\n\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004x\n\u0004\f\u0004\u000e\u0004{\u000b\u0004\u0003\u0004",
    "\u0005\u0004~\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005\u0085\n\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005\u0089\n\u0005\f\u0005\u000e\u0005\u008c\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "\u0094\n\u0006\f\u0006\u000e\u0006\u0097\u000b\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00a7\n\t\u0003\n",
    "\u0003\n\u0003\n\u0007\n\u00ac\n\n\f\n\u000e\n\u00af\u000b\n\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b\u00b5\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0007\r\u00c0\n\r\f\r\u000e\r\u00c3\u000b\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u00dc\n\u0012\f\u0012\u000e\u0012",
    "\u00df\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u00eb\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u00fb\n",
    "\u0017\f\u0017\u000e\u0017\u00fe\u000b\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u010c\n",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u0112",
    "\n\u0019\f\u0019\u000e\u0019\u0115\u000b\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u0129\n",
    "\u001d\f\u001d\u000e\u001d\u012c\u000b\u001d\u0005\u001d\u012e\n\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0005\u001f\u0133\n\u001f\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0007!\u013b\n!\f!\u000e",
    "!\u013e\u000b!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"",
    "\u0005\"\u0147\n\"\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$",
    "\u0003$\u0003$\u0003$\u0003$\u0005$\u0154\n$\u0003%\u0003%\u0003%\u0003",
    "%\u0007%\u015a\n%\f%\u000e%\u015d\u000b%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0003&\u0007&\u0165\n&\f&\u000e&\u0168\u000b&\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0005\'\u016e\n\'\u0003(\u0003(\u0003(\u0003(\u0005",
    "(\u0174\n(\u0003)\u0003)\u0003)\u0003)\u0003*\u0003*\u0005*\u017c\n",
    "*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003",
    "/\u0003/\u0007/\u0189\n/\f/\u000e/\u018c\u000b/\u00030\u00030\u0003",
    "0\u00070\u0191\n0\f0\u000e0\u0194\u000b0\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u0003",
    "2\u00032\u00032\u00032\u00032\u00032\u00052\u01a9\n2\u00032\u0002\u0003",
    "03\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`b\u0002\t\u0003\u0002",
    "\t\n\u0003\u0002\u0014 \u0004\u0002359:\u0003\u0002%&\u0004\u000211",
    "78\u0005\u000278;<?@\u0003\u0002-0\u0002\u01a2\u0002d\u0003\u0002\u0002",
    "\u0002\u0004j\u0003\u0002\u0002\u0002\u0006p\u0003\u0002\u0002\u0002",
    "\b\u0081\u0003\u0002\u0002\u0002\n\u008f\u0003\u0002\u0002\u0002\f\u009a",
    "\u0003\u0002\u0002\u0002\u000e\u009d\u0003\u0002\u0002\u0002\u0010\u00a6",
    "\u0003\u0002\u0002\u0002\u0012\u00a8\u0003\u0002\u0002\u0002\u0014\u00b2",
    "\u0003\u0002\u0002\u0002\u0016\u00b8\u0003\u0002\u0002\u0002\u0018\u00bb",
    "\u0003\u0002\u0002\u0002\u001a\u00c6\u0003\u0002\u0002\u0002\u001c\u00ca",
    "\u0003\u0002\u0002\u0002\u001e\u00ce\u0003\u0002\u0002\u0002 \u00d2",
    "\u0003\u0002\u0002\u0002\"\u00d7\u0003\u0002\u0002\u0002$\u00e2\u0003",
    "\u0002\u0002\u0002&\u00e8\u0003\u0002\u0002\u0002(\u00f1\u0003\u0002",
    "\u0002\u0002*\u00f3\u0003\u0002\u0002\u0002,\u00f7\u0003\u0002\u0002",
    "\u0002.\u00ff\u0003\u0002\u0002\u00020\u010b\u0003\u0002\u0002\u0002",
    "2\u0116\u0003\u0002\u0002\u00024\u0118\u0003\u0002\u0002\u00026\u011b",
    "\u0003\u0002\u0002\u00028\u012d\u0003\u0002\u0002\u0002:\u012f\u0003",
    "\u0002\u0002\u0002<\u0132\u0003\u0002\u0002\u0002>\u0136\u0003\u0002",
    "\u0002\u0002@\u0138\u0003\u0002\u0002\u0002B\u0146\u0003\u0002\u0002",
    "\u0002D\u0148\u0003\u0002\u0002\u0002F\u014c\u0003\u0002\u0002\u0002",
    "H\u0155\u0003\u0002\u0002\u0002J\u0160\u0003\u0002\u0002\u0002L\u016d",
    "\u0003\u0002\u0002\u0002N\u0173\u0003\u0002\u0002\u0002P\u0175\u0003",
    "\u0002\u0002\u0002R\u017b\u0003\u0002\u0002\u0002T\u017d\u0003\u0002",
    "\u0002\u0002V\u017f\u0003\u0002\u0002\u0002X\u0181\u0003\u0002\u0002",
    "\u0002Z\u0183\u0003\u0002\u0002\u0002\\\u0185\u0003\u0002\u0002\u0002",
    "^\u018d\u0003\u0002\u0002\u0002`\u0195\u0003\u0002\u0002\u0002b\u01a8",
    "\u0003\u0002\u0002\u0002de\u0005\u0004\u0003\u0002ef\u0007\u0002\u0002",
    "\u0003f\u0003\u0003\u0002\u0002\u0002gi\u0005\b\u0005\u0002hg\u0003",
    "\u0002\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002",
    "jk\u0003\u0002\u0002\u0002km\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002",
    "\u0002mn\u0005\u0006\u0004\u0002no\u0007\u0002\u0002\u0003o\u0005\u0003",
    "\u0002\u0002\u0002pq\u0007\u0003\u0002\u0002qs\u0007,\u0002\u0002rt",
    "\u0005\n\u0006\u0002sr\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002",
    "tu\u0003\u0002\u0002\u0002uy\u0007\u0004\u0002\u0002vx\u0005\u0010\t",
    "\u0002wv\u0003\u0002\u0002\u0002x{\u0003\u0002\u0002\u0002yw\u0003\u0002",
    "\u0002\u0002yz\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002|~\u0005\u0012\n\u0002}|\u0003\u0002\u0002\u0002}",
    "~\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0007\u0005\u0002\u0002\u0080\u0007\u0003\u0002\u0002\u0002\u0081\u0082",
    "\u0007\u0003\u0002\u0002\u0082\u0084\u0007C\u0002\u0002\u0083\u0085",
    "\u0005\n\u0006\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0084\u0085",
    "\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u008a",
    "\u0007\u0004\u0002\u0002\u0087\u0089\u0005\u0010\t\u0002\u0088\u0087",
    "\u0003\u0002\u0002\u0002\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u0088",
    "\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008d",
    "\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0007\u0005\u0002\u0002\u008e\t\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0007\u0006\u0002\u0002\u0090\u0095\u0005\f\u0007\u0002\u0091\u0092",
    "\u0007\u0007\u0002\u0002\u0092\u0094\u0005\f\u0007\u0002\u0093\u0091",
    "\u0003\u0002\u0002\u0002\u0094\u0097\u0003\u0002\u0002\u0002\u0095\u0093",
    "\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0098",
    "\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u0099",
    "\u0007\b\u0002\u0002\u0099\u000b\u0003\u0002\u0002\u0002\u009a\u009b",
    "\u0005\u000e\b\u0002\u009b\u009c\u0005^0\u0002\u009c\r\u0003\u0002\u0002",
    "\u0002\u009d\u009e\t\u0002\u0002\u0002\u009e\u000f\u0003\u0002\u0002",
    "\u0002\u009f\u00a7\u0005\u001c\u000f\u0002\u00a0\u00a7\u0005\u001e\u0010",
    "\u0002\u00a1\u00a7\u0005*\u0016\u0002\u00a2\u00a7\u0005&\u0014\u0002",
    "\u00a3\u00a7\u0005 \u0011\u0002\u00a4\u00a7\u00054\u001b\u0002\u00a5",
    "\u00a7\u00056\u001c\u0002\u00a6\u009f\u0003\u0002\u0002\u0002\u00a6",
    "\u00a0\u0003\u0002\u0002\u0002\u00a6\u00a1\u0003\u0002\u0002\u0002\u00a6",
    "\u00a2\u0003\u0002\u0002\u0002\u00a6\u00a3\u0003\u0002\u0002\u0002\u00a6",
    "\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a7",
    "\u0011\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\u000b\u0002\u0002\u00a9",
    "\u00ad\u0007\f\u0002\u0002\u00aa\u00ac\u0005\u0014\u000b\u0002\u00ab",
    "\u00aa\u0003\u0002\u0002\u0002\u00ac\u00af\u0003\u0002\u0002\u0002\u00ad",
    "\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae",
    "\u00b0\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0",
    "\u00b1\u0007\r\u0002\u0002\u00b1\u0013\u0003\u0002\u0002\u0002\u00b2",
    "\u00b4\u0005\u0016\f\u0002\u00b3\u00b5\u0005\u0018\r\u0002\u00b4\u00b3",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007\u0004\u0002\u0002\u00b7\u0015",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u000e\u0002\u0002\u00b9\u00ba",
    "\u0007-\u0002\u0002\u00ba\u0017\u0003\u0002\u0002\u0002\u00bb\u00bc",
    "\u0007\u000f\u0002\u0002\u00bc\u00c1\u0005\u001a\u000e\u0002\u00bd\u00be",
    "\u0007\u0007\u0002\u0002\u00be\u00c0\u0005\u001a\u000e\u0002\u00bf\u00bd",
    "\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf",
    "\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4",
    "\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5",
    "\u0007\u0010\u0002\u0002\u00c5\u0019\u0003\u0002\u0002\u0002\u00c6\u00c7",
    "\u0007C\u0002\u0002\u00c7\u00c8\u00076\u0002\u0002\u00c8\u00c9\u0007",
    "-\u0002\u0002\u00c9\u001b\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007",
    "\u0011\u0002\u0002\u00cb\u00cc\u0005^0\u0002\u00cc\u00cd\u0007\u0004",
    "\u0002\u0002\u00cd\u001d\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007\u0012",
    "\u0002\u0002\u00cf\u00d0\u0005^0\u0002\u00d0\u00d1\u0007\u0004\u0002",
    "\u0002\u00d1\u001f\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007C\u0002",
    "\u0002\u00d3\u00d4\u0007C\u0002\u0002\u00d4\u00d5\u0005\"\u0012\u0002",
    "\u00d5\u00d6\u0007\u0004\u0002\u0002\u00d6!\u0003\u0002\u0002\u0002",
    "\u00d7\u00d8\u0007\u0006\u0002\u0002\u00d8\u00dd\u0005$\u0013\u0002",
    "\u00d9\u00da\u0007\u0007\u0002\u0002\u00da\u00dc\u0005$\u0013\u0002",
    "\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00df\u0003\u0002\u0002\u0002",
    "\u00dd\u00db\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002",
    "\u00de\u00e0\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002",
    "\u00e0\u00e1\u0007\b\u0002\u0002\u00e1#\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0007\u0013\u0002\u0002\u00e3\u00e4\u0005b2\u0002\u00e4\u00e5",
    "\u0007\u0006\u0002\u0002\u00e5\u00e6\u0005b2\u0002\u00e6\u00e7\u0007",
    "\b\u0002\u0002\u00e7%\u0003\u0002\u0002\u0002\u00e8\u00ea\u0005(\u0015",
    "\u0002\u00e9\u00eb\u0007C\u0002\u0002\u00ea\u00e9\u0003\u0002\u0002",
    "\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002",
    "\u0002\u00ec\u00ed\u0007\u0006\u0002\u0002\u00ed\u00ee\u0005^0\u0002",
    "\u00ee\u00ef\u0007\b\u0002\u0002\u00ef\u00f0\u0007\u0004\u0002\u0002",
    "\u00f0\'\u0003\u0002\u0002\u0002\u00f1\u00f2\t\u0003\u0002\u0002\u00f2",
    ")\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007!\u0002\u0002\u00f4\u00f5",
    "\u0005,\u0017\u0002\u00f5\u00f6\u0007\u0004\u0002\u0002\u00f6+\u0003",
    "\u0002\u0002\u0002\u00f7\u00fc\u0005.\u0018\u0002\u00f8\u00f9\u0007",
    "\u0007\u0002\u0002\u00f9\u00fb\u0005.\u0018\u0002\u00fa\u00f8\u0003",
    "\u0002\u0002\u0002\u00fb\u00fe\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003",
    "\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd-\u0003",
    "\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00ff\u0100\u0005",
    "R*\u0002\u0100\u0101\u00076\u0002\u0002\u0101\u0102\u00050\u0019\u0002",
    "\u0102/\u0003\u0002\u0002\u0002\u0103\u0104\b\u0019\u0001\u0002\u0104",
    "\u0105\u00072\u0002\u0002\u0105\u010c\u00050\u0019\u0006\u0106\u0107",
    "\u0007\u0006\u0002\u0002\u0107\u0108\u00050\u0019\u0002\u0108\u0109",
    "\u0007\b\u0002\u0002\u0109\u010c\u0003\u0002\u0002\u0002\u010a\u010c",
    "\u0007C\u0002\u0002\u010b\u0103\u0003\u0002\u0002\u0002\u010b\u0106",
    "\u0003\u0002\u0002\u0002\u010b\u010a\u0003\u0002\u0002\u0002\u010c\u0113",
    "\u0003\u0002\u0002\u0002\u010d\u010e\f\u0005\u0002\u0002\u010e\u010f",
    "\u00052\u001a\u0002\u010f\u0110\u00050\u0019\u0006\u0110\u0112\u0003",
    "\u0002\u0002\u0002\u0111\u010d\u0003\u0002\u0002\u0002\u0112\u0115\u0003",
    "\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0113\u0114\u0003",
    "\u0002\u0002\u0002\u01141\u0003\u0002\u0002\u0002\u0115\u0113\u0003",
    "\u0002\u0002\u0002\u0116\u0117\t\u0004\u0002\u0002\u01173\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0007\"\u0002\u0002\u0119\u011a\u0005B\"\u0002",
    "\u011a5\u0003\u0002\u0002\u0002\u011b\u011c\u0007#\u0002\u0002\u011c",
    "\u011d\u0007$\u0002\u0002\u011d\u011e\u0007\u0006\u0002\u0002\u011e",
    "\u011f\u00058\u001d\u0002\u011f\u0120\u0007\b\u0002\u0002\u0120\u0121",
    "\u0005B\"\u0002\u01217\u0003\u0002\u0002\u0002\u0122\u012e\u0005:\u001e",
    "\u0002\u0123\u012a\u0005<\u001f\u0002\u0124\u0125\u0007\u0015\u0002",
    "\u0002\u0125\u0129\u0005<\u001f\u0002\u0126\u0127\u0007\u0007\u0002",
    "\u0002\u0127\u0129\u0005<\u001f\u0002\u0128\u0124\u0003\u0002\u0002",
    "\u0002\u0128\u0126\u0003\u0002\u0002\u0002\u0129\u012c\u0003\u0002\u0002",
    "\u0002\u012a\u0128\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002",
    "\u0002\u012b\u012e\u0003\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002",
    "\u0002\u012d\u0122\u0003\u0002\u0002\u0002\u012d\u0123\u0003\u0002\u0002",
    "\u0002\u012e9\u0003\u0002\u0002\u0002\u012f\u0130\u0007;\u0002\u0002",
    "\u0130;\u0003\u0002\u0002\u0002\u0131\u0133\u0005> \u0002\u0132\u0131",
    "\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0134",
    "\u0003\u0002\u0002\u0002\u0134\u0135\u0005b2\u0002\u0135=\u0003\u0002",
    "\u0002\u0002\u0136\u0137\t\u0005\u0002\u0002\u0137?\u0003\u0002\u0002",
    "\u0002\u0138\u013c\u0007\f\u0002\u0002\u0139\u013b\u0005B\"\u0002\u013a",
    "\u0139\u0003\u0002\u0002\u0002\u013b\u013e\u0003\u0002\u0002\u0002\u013c",
    "\u013a\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d",
    "\u013f\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013f",
    "\u0140\u0007\r\u0002\u0002\u0140A\u0003\u0002\u0002\u0002\u0141\u0142",
    "\u0005D#\u0002\u0142\u0143\u0007\u0004\u0002\u0002\u0143\u0147\u0003",
    "\u0002\u0002\u0002\u0144\u0147\u0005F$\u0002\u0145\u0147\u0005@!\u0002",
    "\u0146\u0141\u0003\u0002\u0002\u0002\u0146\u0144\u0003\u0002\u0002\u0002",
    "\u0146\u0145\u0003\u0002\u0002\u0002\u0147C\u0003\u0002\u0002\u0002",
    "\u0148\u0149\u0005R*\u0002\u0149\u014a\u00076\u0002\u0002\u014a\u014b",
    "\u0005J&\u0002\u014bE\u0003\u0002\u0002\u0002\u014c\u014d\u0007\'\u0002",
    "\u0002\u014d\u014e\u0007\u0006\u0002\u0002\u014e\u014f\u0005J&\u0002",
    "\u014f\u0150\u0007\b\u0002\u0002\u0150\u0153\u0005B\"\u0002\u0151\u0152",
    "\u0007(\u0002\u0002\u0152\u0154\u0005B\"\u0002\u0153\u0151\u0003\u0002",
    "\u0002\u0002\u0153\u0154\u0003\u0002\u0002\u0002\u0154G\u0003\u0002",
    "\u0002\u0002\u0155\u0156\u0007\u000f\u0002\u0002\u0156\u015b\u0005J",
    "&\u0002\u0157\u0158\u0007\u0007\u0002\u0002\u0158\u015a\u0005J&\u0002",
    "\u0159\u0157\u0003\u0002\u0002\u0002\u015a\u015d\u0003\u0002\u0002\u0002",
    "\u015b\u0159\u0003\u0002\u0002\u0002\u015b\u015c\u0003\u0002\u0002\u0002",
    "\u015c\u015e\u0003\u0002\u0002\u0002\u015d\u015b\u0003\u0002\u0002\u0002",
    "\u015e\u015f\u0007\u0010\u0002\u0002\u015fI\u0003\u0002\u0002\u0002",
    "\u0160\u0166\u0005L\'\u0002\u0161\u0162\u0005V,\u0002\u0162\u0163\u0005",
    "L\'\u0002\u0163\u0165\u0003\u0002\u0002\u0002\u0164\u0161\u0003\u0002",
    "\u0002\u0002\u0165\u0168\u0003\u0002\u0002\u0002\u0166\u0164\u0003\u0002",
    "\u0002\u0002\u0166\u0167\u0003\u0002\u0002\u0002\u0167K\u0003\u0002",
    "\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002\u0169\u016a\u0005T",
    "+\u0002\u016a\u016b\u0005N(\u0002\u016b\u016e\u0003\u0002\u0002\u0002",
    "\u016c\u016e\u0005N(\u0002\u016d\u0169\u0003\u0002\u0002\u0002\u016d",
    "\u016c\u0003\u0002\u0002\u0002\u016eM\u0003\u0002\u0002\u0002\u016f",
    "\u0174\u0005X-\u0002\u0170\u0174\u0005b2\u0002\u0171\u0174\u0005H%\u0002",
    "\u0172\u0174\u0005P)\u0002\u0173\u016f\u0003\u0002\u0002\u0002\u0173",
    "\u0170\u0003\u0002\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173",
    "\u0172\u0003\u0002\u0002\u0002\u0174O\u0003\u0002\u0002\u0002\u0175",
    "\u0176\u0007\u0006\u0002\u0002\u0176\u0177\u0005J&\u0002\u0177\u0178",
    "\u0007\b\u0002\u0002\u0178Q\u0003\u0002\u0002\u0002\u0179\u017c\u0005",
    "b2\u0002\u017a\u017c\u0005H%\u0002\u017b\u0179\u0003\u0002\u0002\u0002",
    "\u017b\u017a\u0003\u0002\u0002\u0002\u017cS\u0003\u0002\u0002\u0002",
    "\u017d\u017e\t\u0006\u0002\u0002\u017eU\u0003\u0002\u0002\u0002\u017f",
    "\u0180\t\u0007\u0002\u0002\u0180W\u0003\u0002\u0002\u0002\u0181\u0182",
    "\t\b\u0002\u0002\u0182Y\u0003\u0002\u0002\u0002\u0183\u0184\u0007C\u0002",
    "\u0002\u0184[\u0003\u0002\u0002\u0002\u0185\u018a\u0005Z.\u0002\u0186",
    "\u0187\u0007\u0007\u0002\u0002\u0187\u0189\u0005Z.\u0002\u0188\u0186",
    "\u0003\u0002\u0002\u0002\u0189\u018c\u0003\u0002\u0002\u0002\u018a\u0188",
    "\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018b]",
    "\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018d\u0192",
    "\u0005b2\u0002\u018e\u018f\u0007\u0007\u0002\u0002\u018f\u0191\u0005",
    "b2\u0002\u0190\u018e\u0003\u0002\u0002\u0002\u0191\u0194\u0003\u0002",
    "\u0002\u0002\u0192\u0190\u0003\u0002\u0002\u0002\u0192\u0193\u0003\u0002",
    "\u0002\u0002\u0193_\u0003\u0002\u0002\u0002\u0194\u0192\u0003\u0002",
    "\u0002\u0002\u0195\u0196\u0007)\u0002\u0002\u0196\u0197\u0007E\u0002",
    "\u0002\u0197\u0198\u0007*\u0002\u0002\u0198\u0199\u0007E\u0002\u0002",
    "\u0199\u019a\u0007+\u0002\u0002\u019aa\u0003\u0002\u0002\u0002\u019b",
    "\u01a9\u0007C\u0002\u0002\u019c\u019d\u0007C\u0002\u0002\u019d\u019e",
    "\u0007)\u0002\u0002\u019e\u019f\u0005J&\u0002\u019f\u01a0\u0007+\u0002",
    "\u0002\u01a0\u01a9\u0003\u0002\u0002\u0002\u01a1\u01a2\u0007C\u0002",
    "\u0002\u01a2\u01a3\u0007)\u0002\u0002\u01a3\u01a4\u0005J&\u0002\u01a4",
    "\u01a5\u0007*\u0002\u0002\u01a5\u01a6\u0005J&\u0002\u01a6\u01a7\u0007",
    "+\u0002\u0002\u01a7\u01a9\u0003\u0002\u0002\u0002\u01a8\u019b\u0003",
    "\u0002\u0002\u0002\u01a8\u019c\u0003\u0002\u0002\u0002\u01a8\u01a1\u0003",
    "\u0002\u0002\u0002\u01a9c\u0003\u0002\u0002\u0002!jsy}\u0084\u008a\u0095",
    "\u00a6\u00ad\u00b4\u00c1\u00dd\u00ea\u00fc\u010b\u0113\u0128\u012a\u012d",
    "\u0132\u013c\u0146\u0153\u015b\u0166\u016d\u0173\u017b\u018a\u0192\u01a8"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'module'", "';'", "'endmodule'", "'('", "','", 
                     "')'", "'input'", "'output'", "'test'", "'begin'", 
                     "'end'", "'#'", "'{'", "'}'", "'wire'", "'reg'", "'.'", 
                     "'and'", "'or'", "'xor'", "'nand'", "'nor'", "'xnor'", 
                     "'not'", "'control'", "'response'", "'buffer'", "'sevenseg'", 
                     "'number'", "'ledbar'", "'assign'", "'initial'", "'always'", 
                     "'@'", "'posedge'", "'negedge'", "'if'", "'else'", 
                     "'['", "':'", "']'", "'Main'", null, null, null, null, 
                     "'!'", "'~'", "'~&'", "'~|'", "'^'", "'='", "'+'", 
                     "'-'", "'&'", "'|'", "'*'", "'/'", "'<'", "'>'", "'=='", 
                     "'!='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "MAIN", "Decimal_number", 
                      "Binary_number", "Octal_number", "Hex_number", "NOT", 
                      "NEG", "NAND", "NOR", "XOR", "ASSIGN", "PLUS", "MINUS", 
                      "AND", "OR", "MUL", "DIV", "LT", "GT", "EQUAL", "NOTEQUAL", 
                      "One_line_comment", "Block_comment", "IDENTIFIER", 
                      "White_space", "Unsigned_number" ];

var ruleNames =  [ "source_text", "modules", "module_main", "module", "module_ports", 
                   "port_declaration", "port_direction", "module_item", 
                   "test_bench", "test_time", "time_stamp", "time_assignment_list", 
                   "time_assignment", "net_declaration", "reg_declaration", 
                   "module_instantiation", "module_connections_list", "named_port_connection", 
                   "gate_instantiation", "gate_type", "continuous_assign", 
                   "list_of_net_assignments", "net_assignment", "expr", 
                   "binary_gate_op", "initial_construct", "always_construct", 
                   "event_list", "event_every", "event_primary", "event_type", 
                   "seq_block", "statement", "blocking_assignment", "conditional_statement", 
                   "concatenation", "expression", "term", "primary", "parens_expression", 
                   "lvalue", "unary_operator", "binary_operator", "number", 
                   "defined_connection_id", "defined_connection_id_list", 
                   "identifier_list", "range", "identifier" ];

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
vlgParser.MAIN = 42;
vlgParser.Decimal_number = 43;
vlgParser.Binary_number = 44;
vlgParser.Octal_number = 45;
vlgParser.Hex_number = 46;
vlgParser.NOT = 47;
vlgParser.NEG = 48;
vlgParser.NAND = 49;
vlgParser.NOR = 50;
vlgParser.XOR = 51;
vlgParser.ASSIGN = 52;
vlgParser.PLUS = 53;
vlgParser.MINUS = 54;
vlgParser.AND = 55;
vlgParser.OR = 56;
vlgParser.MUL = 57;
vlgParser.DIV = 58;
vlgParser.LT = 59;
vlgParser.GT = 60;
vlgParser.EQUAL = 61;
vlgParser.NOTEQUAL = 62;
vlgParser.One_line_comment = 63;
vlgParser.Block_comment = 64;
vlgParser.IDENTIFIER = 65;
vlgParser.White_space = 66;
vlgParser.Unsigned_number = 67;

vlgParser.RULE_source_text = 0;
vlgParser.RULE_modules = 1;
vlgParser.RULE_module_main = 2;
vlgParser.RULE_module = 3;
vlgParser.RULE_module_ports = 4;
vlgParser.RULE_port_declaration = 5;
vlgParser.RULE_port_direction = 6;
vlgParser.RULE_module_item = 7;
vlgParser.RULE_test_bench = 8;
vlgParser.RULE_test_time = 9;
vlgParser.RULE_time_stamp = 10;
vlgParser.RULE_time_assignment_list = 11;
vlgParser.RULE_time_assignment = 12;
vlgParser.RULE_net_declaration = 13;
vlgParser.RULE_reg_declaration = 14;
vlgParser.RULE_module_instantiation = 15;
vlgParser.RULE_module_connections_list = 16;
vlgParser.RULE_named_port_connection = 17;
vlgParser.RULE_gate_instantiation = 18;
vlgParser.RULE_gate_type = 19;
vlgParser.RULE_continuous_assign = 20;
vlgParser.RULE_list_of_net_assignments = 21;
vlgParser.RULE_net_assignment = 22;
vlgParser.RULE_expr = 23;
vlgParser.RULE_binary_gate_op = 24;
vlgParser.RULE_initial_construct = 25;
vlgParser.RULE_always_construct = 26;
vlgParser.RULE_event_list = 27;
vlgParser.RULE_event_every = 28;
vlgParser.RULE_event_primary = 29;
vlgParser.RULE_event_type = 30;
vlgParser.RULE_seq_block = 31;
vlgParser.RULE_statement = 32;
vlgParser.RULE_blocking_assignment = 33;
vlgParser.RULE_conditional_statement = 34;
vlgParser.RULE_concatenation = 35;
vlgParser.RULE_expression = 36;
vlgParser.RULE_term = 37;
vlgParser.RULE_primary = 38;
vlgParser.RULE_parens_expression = 39;
vlgParser.RULE_lvalue = 40;
vlgParser.RULE_unary_operator = 41;
vlgParser.RULE_binary_operator = 42;
vlgParser.RULE_number = 43;
vlgParser.RULE_defined_connection_id = 44;
vlgParser.RULE_defined_connection_id_list = 45;
vlgParser.RULE_identifier_list = 46;
vlgParser.RULE_range = 47;
vlgParser.RULE_identifier = 48;


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
        this.state = 98;
        this.modules();
        this.state = 99;
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
        this.state = 104;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 101;
                this.module(); 
            }
            this.state = 106;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 107;
        this.module_main();
        this.state = 108;
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
        this.state = 110;
        this.match(vlgParser.T__0);
        this.state = 111;
        this.match(vlgParser.MAIN);
        this.state = 113;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 112;
            this.module_ports();
        }

        this.state = 115;
        this.match(vlgParser.T__1);
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (vlgParser.T__14 - 15)) | (1 << (vlgParser.T__15 - 15)) | (1 << (vlgParser.T__17 - 15)) | (1 << (vlgParser.T__18 - 15)) | (1 << (vlgParser.T__19 - 15)) | (1 << (vlgParser.T__20 - 15)) | (1 << (vlgParser.T__21 - 15)) | (1 << (vlgParser.T__22 - 15)) | (1 << (vlgParser.T__23 - 15)) | (1 << (vlgParser.T__24 - 15)) | (1 << (vlgParser.T__25 - 15)) | (1 << (vlgParser.T__26 - 15)) | (1 << (vlgParser.T__27 - 15)) | (1 << (vlgParser.T__28 - 15)) | (1 << (vlgParser.T__29 - 15)) | (1 << (vlgParser.T__30 - 15)) | (1 << (vlgParser.T__31 - 15)) | (1 << (vlgParser.T__32 - 15)))) !== 0) || _la===vlgParser.IDENTIFIER) {
            this.state = 116;
            this.module_item();
            this.state = 121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__8) {
            this.state = 122;
            this.test_bench();
        }

        this.state = 125;
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
        this.state = 127;
        this.match(vlgParser.T__0);
        this.state = 128;
        this.match(vlgParser.IDENTIFIER);
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 129;
            this.module_ports();
        }

        this.state = 132;
        this.match(vlgParser.T__1);
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (vlgParser.T__14 - 15)) | (1 << (vlgParser.T__15 - 15)) | (1 << (vlgParser.T__17 - 15)) | (1 << (vlgParser.T__18 - 15)) | (1 << (vlgParser.T__19 - 15)) | (1 << (vlgParser.T__20 - 15)) | (1 << (vlgParser.T__21 - 15)) | (1 << (vlgParser.T__22 - 15)) | (1 << (vlgParser.T__23 - 15)) | (1 << (vlgParser.T__24 - 15)) | (1 << (vlgParser.T__25 - 15)) | (1 << (vlgParser.T__26 - 15)) | (1 << (vlgParser.T__27 - 15)) | (1 << (vlgParser.T__28 - 15)) | (1 << (vlgParser.T__29 - 15)) | (1 << (vlgParser.T__30 - 15)) | (1 << (vlgParser.T__31 - 15)) | (1 << (vlgParser.T__32 - 15)))) !== 0) || _la===vlgParser.IDENTIFIER) {
            this.state = 133;
            this.module_item();
            this.state = 138;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 139;
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
    this.enterRule(localctx, 8, vlgParser.RULE_module_ports);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(vlgParser.T__3);
        this.state = 142;
        this.port_declaration();
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 143;
            this.match(vlgParser.T__4);
            this.state = 144;
            this.port_declaration();
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 150;
        this.match(vlgParser.T__5);
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
    return this;
}

Port_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Port_declarationContext.prototype.constructor = Port_declarationContext;

Port_declarationContext.prototype.port_direction = function() {
    return this.getTypedRuleContext(Port_directionContext,0);
};

Port_declarationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
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
    this.enterRule(localctx, 10, vlgParser.RULE_port_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.port_direction();
        this.state = 153;
        this.identifier_list();
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
    this.enterRule(localctx, 12, vlgParser.RULE_port_direction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.T__6 || _la===vlgParser.T__7)) {
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


function AssignContext(parser, ctx) {
	Module_itemContext.call(this, parser);
    Module_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignContext.prototype = Object.create(Module_itemContext.prototype);
AssignContext.prototype.constructor = AssignContext;

vlgParser.AssignContext = AssignContext;

AssignContext.prototype.continuous_assign = function() {
    return this.getTypedRuleContext(Continuous_assignContext,0);
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
    this.enterRule(localctx, 14, vlgParser.RULE_module_item);
    try {
        this.state = 164;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__14:
            localctx = new NetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.net_declaration();
            break;
        case vlgParser.T__15:
            localctx = new RegContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 158;
            this.reg_declaration();
            break;
        case vlgParser.T__30:
            localctx = new AssignContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 159;
            this.continuous_assign();
            break;
        case vlgParser.T__17:
        case vlgParser.T__18:
        case vlgParser.T__19:
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
            localctx = new GateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 160;
            this.gate_instantiation();
            break;
        case vlgParser.IDENTIFIER:
            localctx = new InstanceContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 161;
            this.module_instantiation();
            break;
        case vlgParser.T__31:
            localctx = new InitialContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 162;
            this.initial_construct();
            break;
        case vlgParser.T__32:
            localctx = new AlwaysContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 163;
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
    this.enterRule(localctx, 16, vlgParser.RULE_test_bench);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(vlgParser.T__8);
        this.state = 167;
        this.match(vlgParser.T__9);
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__11) {
            this.state = 168;
            this.test_time();
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 174;
        this.match(vlgParser.T__10);
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
    this.enterRule(localctx, 18, vlgParser.RULE_test_time);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.time_stamp();
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__12) {
            this.state = 177;
            this.time_assignment_list();
        }

        this.state = 180;
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
    this.enterRule(localctx, 20, vlgParser.RULE_time_stamp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(vlgParser.T__11);
        this.state = 183;
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
    this.enterRule(localctx, 22, vlgParser.RULE_time_assignment_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(vlgParser.T__12);
        this.state = 186;
        this.time_assignment();
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 187;
            this.match(vlgParser.T__4);
            this.state = 188;
            this.time_assignment();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194;
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
    this.id = null; // Token
    this.val = null; // Token
    return this;
}

Time_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_assignmentContext.prototype.constructor = Time_assignmentContext;

Time_assignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Time_assignmentContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Time_assignmentContext.prototype.Decimal_number = function() {
    return this.getToken(vlgParser.Decimal_number, 0);
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
    this.enterRule(localctx, 24, vlgParser.RULE_time_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        localctx.id = this.match(vlgParser.IDENTIFIER);
        this.state = 197;
        this.match(vlgParser.ASSIGN);
        this.state = 198;
        localctx.val = this.match(vlgParser.Decimal_number);
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
    return this;
}

Net_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Net_declarationContext.prototype.constructor = Net_declarationContext;

Net_declarationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
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
    this.enterRule(localctx, 26, vlgParser.RULE_net_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(vlgParser.T__14);
        this.state = 201;
        this.identifier_list();
        this.state = 202;
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
    return this;
}

Reg_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Reg_declarationContext.prototype.constructor = Reg_declarationContext;

Reg_declarationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
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
    this.enterRule(localctx, 28, vlgParser.RULE_reg_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(vlgParser.T__15);
        this.state = 205;
        this.identifier_list();
        this.state = 206;
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
    this.moduleid = null; // Token
    this.instanceid = null; // Token
    return this;
}

Module_instantiationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_instantiationContext.prototype.constructor = Module_instantiationContext;

Module_instantiationContext.prototype.module_connections_list = function() {
    return this.getTypedRuleContext(Module_connections_listContext,0);
};

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
    this.enterRule(localctx, 30, vlgParser.RULE_module_instantiation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        localctx.moduleid = this.match(vlgParser.IDENTIFIER);
        this.state = 209;
        localctx.instanceid = this.match(vlgParser.IDENTIFIER);
        this.state = 210;
        this.module_connections_list();
        this.state = 211;
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


function Module_connections_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_module_connections_list;
    return this;
}

Module_connections_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Module_connections_listContext.prototype.constructor = Module_connections_listContext;

Module_connections_listContext.prototype.named_port_connection = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Named_port_connectionContext);
    } else {
        return this.getTypedRuleContext(Named_port_connectionContext,i);
    }
};

Module_connections_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterModule_connections_list(this);
	}
};

Module_connections_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitModule_connections_list(this);
	}
};

Module_connections_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitModule_connections_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Module_connections_listContext = Module_connections_listContext;

vlgParser.prototype.module_connections_list = function() {

    var localctx = new Module_connections_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, vlgParser.RULE_module_connections_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(vlgParser.T__3);
        this.state = 214;
        this.named_port_connection();
        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 215;
            this.match(vlgParser.T__4);
            this.state = 216;
            this.named_port_connection();
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 222;
        this.match(vlgParser.T__5);
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
    this.port = null; // IdentifierContext
    this.value = null; // IdentifierContext
    return this;
}

Named_port_connectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_port_connectionContext.prototype.constructor = Named_port_connectionContext;

Named_port_connectionContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
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
    this.enterRule(localctx, 34, vlgParser.RULE_named_port_connection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(vlgParser.T__16);
        this.state = 225;
        localctx.port = this.identifier();
        this.state = 226;
        this.match(vlgParser.T__3);
        this.state = 227;
        localctx.value = this.identifier();
        this.state = 228;
        this.match(vlgParser.T__5);
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
    this.instanceid = null; // Token
    this.ids = null; // Identifier_listContext
    return this;
}

Gate_instantiationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Gate_instantiationContext.prototype.constructor = Gate_instantiationContext;

Gate_instantiationContext.prototype.gate_type = function() {
    return this.getTypedRuleContext(Gate_typeContext,0);
};

Gate_instantiationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
};

Gate_instantiationContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
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
    this.enterRule(localctx, 36, vlgParser.RULE_gate_instantiation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.gate_type();
        this.state = 232;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.IDENTIFIER) {
            this.state = 231;
            localctx.instanceid = this.match(vlgParser.IDENTIFIER);
        }

        this.state = 234;
        this.match(vlgParser.T__3);
        this.state = 235;
        localctx.ids = this.identifier_list();
        this.state = 236;
        this.match(vlgParser.T__5);
        this.state = 237;
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
    this.enterRule(localctx, 38, vlgParser.RULE_gate_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << vlgParser.T__17) | (1 << vlgParser.T__18) | (1 << vlgParser.T__19) | (1 << vlgParser.T__20) | (1 << vlgParser.T__21) | (1 << vlgParser.T__22) | (1 << vlgParser.T__23) | (1 << vlgParser.T__24) | (1 << vlgParser.T__25) | (1 << vlgParser.T__26) | (1 << vlgParser.T__27) | (1 << vlgParser.T__28) | (1 << vlgParser.T__29))) !== 0))) {
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


function Continuous_assignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_continuous_assign;
    return this;
}

Continuous_assignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Continuous_assignContext.prototype.constructor = Continuous_assignContext;

Continuous_assignContext.prototype.list_of_net_assignments = function() {
    return this.getTypedRuleContext(List_of_net_assignmentsContext,0);
};

Continuous_assignContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterContinuous_assign(this);
	}
};

Continuous_assignContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitContinuous_assign(this);
	}
};

Continuous_assignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitContinuous_assign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Continuous_assignContext = Continuous_assignContext;

vlgParser.prototype.continuous_assign = function() {

    var localctx = new Continuous_assignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, vlgParser.RULE_continuous_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(vlgParser.T__30);
        this.state = 242;
        this.list_of_net_assignments();
        this.state = 243;
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


function List_of_net_assignmentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_list_of_net_assignments;
    return this;
}

List_of_net_assignmentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
List_of_net_assignmentsContext.prototype.constructor = List_of_net_assignmentsContext;

List_of_net_assignmentsContext.prototype.net_assignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Net_assignmentContext);
    } else {
        return this.getTypedRuleContext(Net_assignmentContext,i);
    }
};

List_of_net_assignmentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterList_of_net_assignments(this);
	}
};

List_of_net_assignmentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitList_of_net_assignments(this);
	}
};

List_of_net_assignmentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitList_of_net_assignments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.List_of_net_assignmentsContext = List_of_net_assignmentsContext;

vlgParser.prototype.list_of_net_assignments = function() {

    var localctx = new List_of_net_assignmentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, vlgParser.RULE_list_of_net_assignments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.net_assignment();
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 246;
            this.match(vlgParser.T__4);
            this.state = 247;
            this.net_assignment();
            this.state = 252;
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
    this.enterRule(localctx, 44, vlgParser.RULE_net_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.lvalue();
        this.state = 254;
        this.match(vlgParser.ASSIGN);
        this.state = 255;
        this.expr(0);
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

function NegateExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateExprContext.prototype = Object.create(ExprContext.prototype);
NegateExprContext.prototype.constructor = NegateExprContext;

vlgParser.NegateExprContext = NegateExprContext;

NegateExprContext.prototype.NEG = function() {
    return this.getToken(vlgParser.NEG, 0);
};

NegateExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NegateExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNegateExpr(this);
	}
};

NegateExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNegateExpr(this);
	}
};

NegateExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNegateExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryExprContext(parser, ctx) {
	ExprContext.call(this, parser);
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


function ParenExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(ExprContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

vlgParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterParenExpr(this);
	}
};

ParenExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitParenExpr(this);
	}
};

ParenExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitParenExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdExprContext.prototype = Object.create(ExprContext.prototype);
IdExprContext.prototype.constructor = IdExprContext;

vlgParser.IdExprContext = IdExprContext;

IdExprContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};
IdExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterIdExpr(this);
	}
};

IdExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitIdExpr(this);
	}
};

IdExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitIdExpr(this);
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
    var _startState = 46;
    this.enterRecursionRule(localctx, 46, vlgParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.NEG:
            localctx = new NegateExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 258;
            this.match(vlgParser.NEG);
            this.state = 259;
            this.expr(4);
            break;
        case vlgParser.T__3:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 260;
            this.match(vlgParser.T__3);
            this.state = 261;
            this.expr(0);
            this.state = 262;
            this.match(vlgParser.T__5);
            break;
        case vlgParser.IDENTIFIER:
            localctx = new IdExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 264;
            this.match(vlgParser.IDENTIFIER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 273;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new BinaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expr);
                this.state = 267;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 268;
                this.binary_gate_op();
                this.state = 269;
                this.expr(4); 
            }
            this.state = 275;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
    this.enterRule(localctx, 48, vlgParser.RULE_binary_gate_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        _la = this._input.LA(1);
        if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (vlgParser.NAND - 49)) | (1 << (vlgParser.NOR - 49)) | (1 << (vlgParser.XOR - 49)) | (1 << (vlgParser.AND - 49)) | (1 << (vlgParser.OR - 49)))) !== 0))) {
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

Initial_constructContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
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
    this.enterRule(localctx, 50, vlgParser.RULE_initial_construct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.match(vlgParser.T__31);
        this.state = 279;
        this.statement();
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

Always_constructContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
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
    this.enterRule(localctx, 52, vlgParser.RULE_always_construct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(vlgParser.T__32);
        this.state = 282;
        this.match(vlgParser.T__33);
        this.state = 283;
        this.match(vlgParser.T__3);
        this.state = 284;
        this.event_list();
        this.state = 285;
        this.match(vlgParser.T__5);
        this.state = 286;
        this.statement();
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
    this.enterRule(localctx, 54, vlgParser.RULE_event_list);
    var _la = 0; // Token type
    try {
        this.state = 299;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.MUL:
            this.enterOuterAlt(localctx, 1);
            this.state = 288;
            this.event_every();
            break;
        case vlgParser.T__34:
        case vlgParser.T__35:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 289;
            this.event_primary();
            this.state = 296;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===vlgParser.T__4 || _la===vlgParser.T__18) {
                this.state = 294;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case vlgParser.T__18:
                    this.state = 290;
                    this.match(vlgParser.T__18);
                    this.state = 291;
                    this.event_primary();
                    break;
                case vlgParser.T__4:
                    this.state = 292;
                    this.match(vlgParser.T__4);
                    this.state = 293;
                    this.event_primary();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 298;
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
    this.enterRule(localctx, 56, vlgParser.RULE_event_every);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
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
    this.enterRule(localctx, 58, vlgParser.RULE_event_primary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__34 || _la===vlgParser.T__35) {
            this.state = 303;
            this.event_type();
        }

        this.state = 306;
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
    this.enterRule(localctx, 60, vlgParser.RULE_event_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.T__34 || _la===vlgParser.T__35)) {
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
    this.enterRule(localctx, 62, vlgParser.RULE_seq_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.match(vlgParser.T__9);
        this.state = 314;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__9 || _la===vlgParser.T__12 || _la===vlgParser.T__36 || _la===vlgParser.IDENTIFIER) {
            this.state = 311;
            this.statement();
            this.state = 316;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 317;
        this.match(vlgParser.T__10);
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

StatementContext.prototype.seq_block = function() {
    return this.getTypedRuleContext(Seq_blockContext,0);
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
    this.enterRule(localctx, 64, vlgParser.RULE_statement);
    try {
        this.state = 324;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__12:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 319;
            this.blocking_assignment();
            this.state = 320;
            this.match(vlgParser.T__1);
            break;
        case vlgParser.T__36:
            this.enterOuterAlt(localctx, 2);
            this.state = 322;
            this.conditional_statement();
            break;
        case vlgParser.T__9:
            this.enterOuterAlt(localctx, 3);
            this.state = 323;
            this.seq_block();
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

Blocking_assignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Blocking_assignmentContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
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
    this.enterRule(localctx, 66, vlgParser.RULE_blocking_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
        localctx.lhs = this.lvalue();
        this.state = 327;
        this.match(vlgParser.ASSIGN);
        this.state = 328;
        localctx.rhs = this.expression();
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
    return this;
}

Conditional_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Conditional_statementContext.prototype.constructor = Conditional_statementContext;

Conditional_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Conditional_statementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
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
    this.enterRule(localctx, 68, vlgParser.RULE_conditional_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(vlgParser.T__36);
        this.state = 331;
        this.match(vlgParser.T__3);
        this.state = 332;
        this.expression();
        this.state = 333;
        this.match(vlgParser.T__5);
        this.state = 334;
        this.statement();
        this.state = 337;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 335;
            this.match(vlgParser.T__37);
            this.state = 336;
            this.statement();

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
    this.enterRule(localctx, 70, vlgParser.RULE_concatenation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this.match(vlgParser.T__12);
        this.state = 340;
        this.expression();
        this.state = 345;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 341;
            this.match(vlgParser.T__4);
            this.state = 342;
            this.expression();
            this.state = 347;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 348;
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

ExpressionContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExpressionContext.prototype.binary_operator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Binary_operatorContext);
    } else {
        return this.getTypedRuleContext(Binary_operatorContext,i);
    }
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.ExpressionContext = ExpressionContext;

vlgParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, vlgParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.term();
        this.state = 356;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (vlgParser.PLUS - 53)) | (1 << (vlgParser.MINUS - 53)) | (1 << (vlgParser.MUL - 53)) | (1 << (vlgParser.DIV - 53)) | (1 << (vlgParser.EQUAL - 53)) | (1 << (vlgParser.NOTEQUAL - 53)))) !== 0)) {
            this.state = 351;
            this.binary_operator();
            this.state = 352;
            this.term();
            this.state = 358;
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


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;


 
TermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PrimaryExpressionContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryExpressionContext.prototype = Object.create(TermContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;

vlgParser.PrimaryExpressionContext = PrimaryExpressionContext;

PrimaryExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};
PrimaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitPrimaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryPrimaryExpressionContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPrimaryExpressionContext.prototype = Object.create(TermContext.prototype);
UnaryPrimaryExpressionContext.prototype.constructor = UnaryPrimaryExpressionContext;

vlgParser.UnaryPrimaryExpressionContext = UnaryPrimaryExpressionContext;

UnaryPrimaryExpressionContext.prototype.unary_operator = function() {
    return this.getTypedRuleContext(Unary_operatorContext,0);
};

UnaryPrimaryExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};
UnaryPrimaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterUnaryPrimaryExpression(this);
	}
};

UnaryPrimaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitUnaryPrimaryExpression(this);
	}
};

UnaryPrimaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitUnaryPrimaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



vlgParser.TermContext = TermContext;

vlgParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, vlgParser.RULE_term);
    try {
        this.state = 363;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.NOT:
        case vlgParser.PLUS:
        case vlgParser.MINUS:
            localctx = new UnaryPrimaryExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 359;
            this.unary_operator();
            this.state = 360;
            this.primary();
            break;
        case vlgParser.T__3:
        case vlgParser.T__12:
        case vlgParser.Decimal_number:
        case vlgParser.Binary_number:
        case vlgParser.Octal_number:
        case vlgParser.Hex_number:
        case vlgParser.IDENTIFIER:
            localctx = new PrimaryExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 362;
            this.primary();
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


function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

PrimaryContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

PrimaryContext.prototype.concatenation = function() {
    return this.getTypedRuleContext(ConcatenationContext,0);
};

PrimaryContext.prototype.parens_expression = function() {
    return this.getTypedRuleContext(Parens_expressionContext,0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitPrimary(this);
	}
};

PrimaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitPrimary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.PrimaryContext = PrimaryContext;

vlgParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, vlgParser.RULE_primary);
    try {
        this.state = 369;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.Decimal_number:
        case vlgParser.Binary_number:
        case vlgParser.Octal_number:
        case vlgParser.Hex_number:
            this.enterOuterAlt(localctx, 1);
            this.state = 365;
            this.number();
            break;
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 366;
            this.identifier();
            break;
        case vlgParser.T__12:
            this.enterOuterAlt(localctx, 3);
            this.state = 367;
            this.concatenation();
            break;
        case vlgParser.T__3:
            this.enterOuterAlt(localctx, 4);
            this.state = 368;
            this.parens_expression();
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


function Parens_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_parens_expression;
    return this;
}

Parens_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Parens_expressionContext.prototype.constructor = Parens_expressionContext;

Parens_expressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Parens_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterParens_expression(this);
	}
};

Parens_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitParens_expression(this);
	}
};

Parens_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitParens_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Parens_expressionContext = Parens_expressionContext;

vlgParser.prototype.parens_expression = function() {

    var localctx = new Parens_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, vlgParser.RULE_parens_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.match(vlgParser.T__3);
        this.state = 372;
        this.expression();
        this.state = 373;
        this.match(vlgParser.T__5);
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
    this.enterRule(localctx, 80, vlgParser.RULE_lvalue);
    try {
        this.state = 377;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 375;
            this.identifier();
            break;
        case vlgParser.T__12:
            this.enterOuterAlt(localctx, 2);
            this.state = 376;
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
    this.enterRule(localctx, 82, vlgParser.RULE_unary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        _la = this._input.LA(1);
        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (vlgParser.NOT - 47)) | (1 << (vlgParser.PLUS - 47)) | (1 << (vlgParser.MINUS - 47)))) !== 0))) {
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
    this.enterRule(localctx, 84, vlgParser.RULE_binary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (vlgParser.PLUS - 53)) | (1 << (vlgParser.MINUS - 53)) | (1 << (vlgParser.MUL - 53)) | (1 << (vlgParser.DIV - 53)) | (1 << (vlgParser.EQUAL - 53)) | (1 << (vlgParser.NOTEQUAL - 53)))) !== 0))) {
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

NumberContext.prototype.Decimal_number = function() {
    return this.getToken(vlgParser.Decimal_number, 0);
};

NumberContext.prototype.Octal_number = function() {
    return this.getToken(vlgParser.Octal_number, 0);
};

NumberContext.prototype.Binary_number = function() {
    return this.getToken(vlgParser.Binary_number, 0);
};

NumberContext.prototype.Hex_number = function() {
    return this.getToken(vlgParser.Hex_number, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.NumberContext = NumberContext;

vlgParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, vlgParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        _la = this._input.LA(1);
        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (vlgParser.Decimal_number - 43)) | (1 << (vlgParser.Binary_number - 43)) | (1 << (vlgParser.Octal_number - 43)) | (1 << (vlgParser.Hex_number - 43)))) !== 0))) {
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
    this.enterRule(localctx, 88, vlgParser.RULE_defined_connection_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
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
    this.enterRule(localctx, 90, vlgParser.RULE_defined_connection_id_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 387;
        this.defined_connection_id();
        this.state = 392;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 388;
            this.match(vlgParser.T__4);
            this.state = 389;
            this.defined_connection_id();
            this.state = 394;
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
    this.enterRule(localctx, 92, vlgParser.RULE_identifier_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395;
        this.identifier();
        this.state = 400;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 396;
                this.match(vlgParser.T__4);
                this.state = 397;
                this.identifier(); 
            }
            this.state = 402;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
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
    this.start = null; // Token
    this.end = null; // Token
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.Unsigned_number = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.Unsigned_number);
    } else {
        return this.getToken(vlgParser.Unsigned_number, i);
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
    this.enterRule(localctx, 94, vlgParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
        this.match(vlgParser.T__38);
        this.state = 404;
        localctx.start = this.match(vlgParser.Unsigned_number);
        this.state = 405;
        this.match(vlgParser.T__39);
        this.state = 406;
        localctx.end = this.match(vlgParser.Unsigned_number);
        this.state = 407;
        this.match(vlgParser.T__40);
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
    this.enterRule(localctx, 96, vlgParser.RULE_identifier);
    try {
        this.state = 422;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IdPlainContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 409;
            this.match(vlgParser.IDENTIFIER);
            break;

        case 2:
            localctx = new IdOffsetContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 410;
            this.match(vlgParser.IDENTIFIER);
            this.state = 411;
            this.match(vlgParser.T__38);
            this.state = 412;
            this.expression();
            this.state = 413;
            this.match(vlgParser.T__40);
            break;

        case 3:
            localctx = new IdRangeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 415;
            this.match(vlgParser.IDENTIFIER);
            this.state = 416;
            this.match(vlgParser.T__38);
            this.state = 417;
            this.expression();
            this.state = 418;
            this.match(vlgParser.T__39);
            this.state = 419;
            this.expression();
            this.state = 420;
            this.match(vlgParser.T__40);
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


vlgParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 23:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

vlgParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.vlgParser = vlgParser;
