// Generated from c:\code\JS\logic2\src\grammar\vlg.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var vlgListener = require('./vlgListener').vlgListener;
var vlgVisitor = require('./vlgVisitor').vlgVisitor;

 /* eslint-disable */ 
var grammarFileName = "vlg.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003J\u020e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0007\u0003s\n\u0003\f\u0003\u000e\u0003v\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004~\n\u0004\u0003\u0004\u0005\u0004\u0081\n\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004\u0085\n\u0004\f\u0004\u000e\u0004\u0088",
    "\u000b\u0004\u0003\u0004\u0005\u0004\u008b\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u0092\n\u0005",
    "\u0003\u0005\u0005\u0005\u0095\n\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005\u0099\n\u0005\f\u0005\u000e\u0005\u009c\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u00ac\n\u0007\f\u0007\u000e\u0007\u00af\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\b\u00b5\n\b\u0003",
    "\b\u0005\b\u00b8\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t",
    "\u00bf\n\t\f\t\u000e\t\u00c2\u000b\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u00cd\n\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00d2\n\f\f\f\u000e",
    "\f\u00d5\u000b\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r\u00db\n\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u00e6\n\u000f\f\u000f\u000e\u000f",
    "\u00e9\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u00f3\n\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00fa\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0007\u0013\u0102\n\u0013\f\u0013\u000e\u0013\u0105",
    "\u000b\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u010a\n",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u010e\n\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0007\u0015\u0117\n\u0015\f\u0015\u000e\u0015\u011a\u000b\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007",
    "\u0016\u0122\n\u0016\f\u0016\u000e\u0016\u0125\u000b\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018",
    "\u0133\n\u0018\f\u0018\u000e\u0018\u0136\u000b\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u013f\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e",
    "\u015c\n\u001e\f\u001e\u000e\u001e\u015f\u000b\u001e\u0005\u001e\u0161",
    "\n\u001e\u0003\u001f\u0003\u001f\u0003 \u0005 \u0166\n \u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0005\"\u016e\n\"\u0003#\u0003#\u0007",
    "#\u0172\n#\f#\u000e#\u0175\u000b#\u0003#\u0003#\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0005$\u017e\n$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0005&\u018b\n&\u0003\'\u0003\'",
    "\u0003\'\u0003\'\u0003\'\u0006\'\u0192\n\'\r\'\u000e\'\u0193\u0003\'",
    "\u0005\'\u0197\n\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003",
    ")\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u01b1\n+\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0007+\u01bc",
    "\n+\f+\u000e+\u01bf\u000b+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0005,\u01ca\n,\u0003,\u0003,\u0003,\u0003,\u0007",
    ",\u01d0\n,\f,\u000e,\u01d3\u000b,\u0003-\u0003-\u0003.\u0003.\u0003",
    "/\u0003/\u0005/\u01db\n/\u00030\u00030\u00031\u00031\u00032\u00032\u0003",
    "2\u00032\u00052\u01e5\n2\u00033\u00033\u00034\u00034\u00034\u00074\u01ec",
    "\n4\f4\u000e4\u01ef\u000b4\u00035\u00035\u00035\u00075\u01f4\n5\f5\u000e",
    "5\u01f7\u000b5\u00036\u00036\u00036\u00036\u00036\u00036\u00037\u0003",
    "7\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u0003",
    "7\u00037\u00057\u020c\n7\u00037\u0002\u0004TV8\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02",
    "468:<>@BDFHJLNPRTVXZ\\^`bdfhjl\u0002\f\u0003\u0002\f\r\u0003\u0002\u0015",
    "!\u0003\u0002&\'\u0003\u0002;<\u0003\u0002?@\u0003\u0002AF\u0004\u0002",
    "79=>\u0003\u000256\u0004\u000255;<\u0005\u0002;<?@EF\u0002\u0212\u0002",
    "n\u0003\u0002\u0002\u0002\u0004t\u0003\u0002\u0002\u0002\u0006z\u0003",
    "\u0002\u0002\u0002\b\u008e\u0003\u0002\u0002\u0002\n\u009f\u0003\u0002",
    "\u0002\u0002\f\u00a7\u0003\u0002\u0002\u0002\u000e\u00b2\u0003\u0002",
    "\u0002\u0002\u0010\u00bb\u0003\u0002\u0002\u0002\u0012\u00c3\u0003\u0002",
    "\u0002\u0002\u0014\u00cc\u0003\u0002\u0002\u0002\u0016\u00ce\u0003\u0002",
    "\u0002\u0002\u0018\u00d8\u0003\u0002\u0002\u0002\u001a\u00de\u0003\u0002",
    "\u0002\u0002\u001c\u00e1\u0003\u0002\u0002\u0002\u001e\u00ec\u0003\u0002",
    "\u0002\u0002 \u00f0\u0003\u0002\u0002\u0002\"\u00f7\u0003\u0002\u0002",
    "\u0002$\u00fe\u0003\u0002\u0002\u0002&\u0106\u0003\u0002\u0002\u0002",
    "(\u0111\u0003\u0002\u0002\u0002*\u011d\u0003\u0002\u0002\u0002,\u0128",
    "\u0003\u0002\u0002\u0002.\u012e\u0003\u0002\u0002\u00020\u0139\u0003",
    "\u0002\u0002\u00022\u0143\u0003\u0002\u0002\u00024\u0145\u0003\u0002",
    "\u0002\u00026\u014b\u0003\u0002\u0002\u00028\u014e\u0003\u0002\u0002",
    "\u0002:\u0160\u0003\u0002\u0002\u0002<\u0162\u0003\u0002\u0002\u0002",
    ">\u0165\u0003\u0002\u0002\u0002@\u0169\u0003\u0002\u0002\u0002B\u016d",
    "\u0003\u0002\u0002\u0002D\u016f\u0003\u0002\u0002\u0002F\u017d\u0003",
    "\u0002\u0002\u0002H\u017f\u0003\u0002\u0002\u0002J\u0183\u0003\u0002",
    "\u0002\u0002L\u018c\u0003\u0002\u0002\u0002N\u019a\u0003\u0002\u0002",
    "\u0002P\u019e\u0003\u0002\u0002\u0002R\u01a2\u0003\u0002\u0002\u0002",
    "T\u01b0\u0003\u0002\u0002\u0002V\u01c9\u0003\u0002\u0002\u0002X\u01d4",
    "\u0003\u0002\u0002\u0002Z\u01d6\u0003\u0002\u0002\u0002\\\u01da\u0003",
    "\u0002\u0002\u0002^\u01dc\u0003\u0002\u0002\u0002`\u01de\u0003\u0002",
    "\u0002\u0002b\u01e4\u0003\u0002\u0002\u0002d\u01e6\u0003\u0002\u0002",
    "\u0002f\u01e8\u0003\u0002\u0002\u0002h\u01f0\u0003\u0002\u0002\u0002",
    "j\u01f8\u0003\u0002\u0002\u0002l\u020b\u0003\u0002\u0002\u0002no\u0005",
    "\u0004\u0003\u0002op\u0007\u0002\u0002\u0003p\u0003\u0003\u0002\u0002",
    "\u0002qs\u0005\b\u0005\u0002rq\u0003\u0002\u0002\u0002sv\u0003\u0002",
    "\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uw\u0003",
    "\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u0005\u0006\u0004\u0002",
    "xy\u0007\u0002\u0002\u0003y\u0005\u0003\u0002\u0002\u0002z{\u0007\u0003",
    "\u0002\u0002{}\u00070\u0002\u0002|~\u0005\n\u0006\u0002}|\u0003\u0002",
    "\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0080\u0003\u0002\u0002\u0002",
    "\u007f\u0081\u0005\f\u0007\u0002\u0080\u007f\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002",
    "\u0082\u0086\u0007\u0004\u0002\u0002\u0083\u0085\u0005\u0014\u000b\u0002",
    "\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002",
    "\u0089\u008b\u0005\u0016\f\u0002\u008a\u0089\u0003\u0002\u0002\u0002",
    "\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0007\u0005\u0002\u0002\u008d\u0007\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0007\u0003\u0002\u0002\u008f\u0091\u0007I\u0002\u0002",
    "\u0090\u0092\u0005\n\u0006\u0002\u0091\u0090\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0094\u0003\u0002\u0002\u0002",
    "\u0093\u0095\u0005\f\u0007\u0002\u0094\u0093\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002",
    "\u0096\u009a\u0007\u0004\u0002\u0002\u0097\u0099\u0005\u0014\u000b\u0002",
    "\u0098\u0097\u0003\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002",
    "\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002",
    "\u009b\u009d\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009d\u009e\u0007\u0005\u0002\u0002\u009e\t\u0003\u0002\u0002\u0002",
    "\u009f\u00a0\u0007\u0006\u0002\u0002\u00a0\u00a1\u0007\u0007\u0002\u0002",
    "\u00a1\u00a2\u0007\b\u0002\u0002\u00a2\u00a3\u0007I\u0002\u0002\u00a3",
    "\u00a4\u0007:\u0002\u0002\u00a4\u00a5\u0005b2\u0002\u00a5\u00a6\u0007",
    "\t\u0002\u0002\u00a6\u000b\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007",
    "\u0007\u0002\u0002\u00a8\u00ad\u0005\u000e\b\u0002\u00a9\u00aa\u0007",
    "\n\u0002\u0002\u00aa\u00ac\u0005\u000e\b\u0002\u00ab\u00a9\u0003\u0002",
    "\u0002\u0002\u00ac\u00af\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003\u0002",
    "\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007\t",
    "\u0002\u0002\u00b1\r\u0003\u0002\u0002\u0002\u00b2\u00b4\u0005\u0012",
    "\n\u0002\u00b3\u00b5\u0007\u000b\u0002\u0002\u00b4\u00b3\u0003\u0002",
    "\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002",
    "\u0002\u0002\u00b6\u00b8\u0005j6\u0002\u00b7\u00b6\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0005\u0010\t\u0002\u00ba\u000f\u0003\u0002\u0002",
    "\u0002\u00bb\u00c0\u0007I\u0002\u0002\u00bc\u00bd\u0007\n\u0002\u0002",
    "\u00bd\u00bf\u0007I\u0002\u0002\u00be\u00bc\u0003\u0002\u0002\u0002",
    "\u00bf\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u0011\u0003\u0002\u0002\u0002",
    "\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c4\t\u0002\u0002\u0002",
    "\u00c4\u0013\u0003\u0002\u0002\u0002\u00c5\u00cd\u0005 \u0011\u0002",
    "\u00c6\u00cd\u0005\"\u0012\u0002\u00c7\u00cd\u00054\u001b\u0002\u00c8",
    "\u00cd\u00050\u0019\u0002\u00c9\u00cd\u0005&\u0014\u0002\u00ca\u00cd",
    "\u00056\u001c\u0002\u00cb\u00cd\u00058\u001d\u0002\u00cc\u00c5\u0003",
    "\u0002\u0002\u0002\u00cc\u00c6\u0003\u0002\u0002\u0002\u00cc\u00c7\u0003",
    "\u0002\u0002\u0002\u00cc\u00c8\u0003\u0002\u0002\u0002\u00cc\u00c9\u0003",
    "\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cb\u0003",
    "\u0002\u0002\u0002\u00cd\u0015\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007",
    "\u000e\u0002\u0002\u00cf\u00d3\u0007\u000f\u0002\u0002\u00d0\u00d2\u0005",
    "\u0018\r\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d5\u0003",
    "\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003",
    "\u0002\u0002\u0002\u00d4\u00d6\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003",
    "\u0002\u0002\u0002\u00d6\u00d7\u0007\u0010\u0002\u0002\u00d7\u0017\u0003",
    "\u0002\u0002\u0002\u00d8\u00da\u0005\u001a\u000e\u0002\u00d9\u00db\u0005",
    "\u001c\u000f\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00da\u00db\u0003",
    "\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007",
    "\u0004\u0002\u0002\u00dd\u0019\u0003\u0002\u0002\u0002\u00de\u00df\u0007",
    "\u0006\u0002\u0002\u00df\u00e0\u00071\u0002\u0002\u00e0\u001b\u0003",
    "\u0002\u0002\u0002\u00e1\u00e2\u0007\u0011\u0002\u0002\u00e2\u00e7\u0005",
    "\u001e\u0010\u0002\u00e3\u00e4\u0007\n\u0002\u0002\u00e4\u00e6\u0005",
    "\u001e\u0010\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e9\u0003",
    "\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003",
    "\u0002\u0002\u0002\u00e8\u00ea\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u0007\u0012\u0002\u0002\u00eb\u001d\u0003",
    "\u0002\u0002\u0002\u00ec\u00ed\u0007I\u0002\u0002\u00ed\u00ee\u0007",
    ":\u0002\u0002\u00ee\u00ef\u00071\u0002\u0002\u00ef\u001f\u0003\u0002",
    "\u0002\u0002\u00f0\u00f2\u0007\u0013\u0002\u0002\u00f1\u00f3\u0005j",
    "6\u0002\u00f2\u00f1\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002",
    "\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f5\u0005$",
    "\u0013\u0002\u00f5\u00f6\u0007\u0004\u0002\u0002\u00f6!\u0003\u0002",
    "\u0002\u0002\u00f7\u00f9\u0007\u000b\u0002\u0002\u00f8\u00fa\u0005j",
    "6\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002",
    "\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fc\u0005$",
    "\u0013\u0002\u00fc\u00fd\u0007\u0004\u0002\u0002\u00fd#\u0003\u0002",
    "\u0002\u0002\u00fe\u0103\u0007I\u0002\u0002\u00ff\u0100\u0007\n\u0002",
    "\u0002\u0100\u0102\u0007I\u0002\u0002\u0101\u00ff\u0003\u0002\u0002",
    "\u0002\u0102\u0105\u0003\u0002\u0002\u0002\u0103\u0101\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104%\u0003\u0002\u0002",
    "\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0106\u0107\u0007I\u0002",
    "\u0002\u0107\u0109\u0007I\u0002\u0002\u0108\u010a\u0005(\u0015\u0002",
    "\u0109\u0108\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002",
    "\u010a\u010d\u0003\u0002\u0002\u0002\u010b\u010e\u0005*\u0016\u0002",
    "\u010c\u010e\u0005.\u0018\u0002\u010d\u010b\u0003\u0002\u0002\u0002",
    "\u010d\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002",
    "\u010f\u0110\u0007\u0004\u0002\u0002\u0110\'\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0007\u0006\u0002\u0002\u0112\u0113\u0007\u0007\u0002\u0002",
    "\u0113\u0118\u0005T+\u0002\u0114\u0115\u0007\n\u0002\u0002\u0115\u0117",
    "\u0005T+\u0002\u0116\u0114\u0003\u0002\u0002\u0002\u0117\u011a\u0003",
    "\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002\u0118\u0119\u0003",
    "\u0002\u0002\u0002\u0119\u011b\u0003\u0002\u0002\u0002\u011a\u0118\u0003",
    "\u0002\u0002\u0002\u011b\u011c\u0007\t\u0002\u0002\u011c)\u0003\u0002",
    "\u0002\u0002\u011d\u011e\u0007\u0007\u0002\u0002\u011e\u0123\u0005,",
    "\u0017\u0002\u011f\u0120\u0007\n\u0002\u0002\u0120\u0122\u0005,\u0017",
    "\u0002\u0121\u011f\u0003\u0002\u0002\u0002\u0122\u0125\u0003\u0002\u0002",
    "\u0002\u0123\u0121\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002",
    "\u0002\u0124\u0126\u0003\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002",
    "\u0002\u0126\u0127\u0007\t\u0002\u0002\u0127+\u0003\u0002\u0002\u0002",
    "\u0128\u0129\u0007\u0014\u0002\u0002\u0129\u012a\u0007I\u0002\u0002",
    "\u012a\u012b\u0007\u0007\u0002\u0002\u012b\u012c\u0005l7\u0002\u012c",
    "\u012d\u0007\t\u0002\u0002\u012d-\u0003\u0002\u0002\u0002\u012e\u012f",
    "\u0007\u0007\u0002\u0002\u012f\u0134\u0005l7\u0002\u0130\u0131\u0007",
    "\n\u0002\u0002\u0131\u0133\u0005l7\u0002\u0132\u0130\u0003\u0002\u0002",
    "\u0002\u0133\u0136\u0003\u0002\u0002\u0002\u0134\u0132\u0003\u0002\u0002",
    "\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135\u0137\u0003\u0002\u0002",
    "\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0137\u0138\u0007\t\u0002",
    "\u0002\u0138/\u0003\u0002\u0002\u0002\u0139\u013a\u00052\u001a\u0002",
    "\u013a\u013b\u0007\u0007\u0002\u0002\u013b\u013e\u0007I\u0002\u0002",
    "\u013c\u013d\u0007\n\u0002\u0002\u013d\u013f\u0005h5\u0002\u013e\u013c",
    "\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u0140",
    "\u0003\u0002\u0002\u0002\u0140\u0141\u0007\t\u0002\u0002\u0141\u0142",
    "\u0007\u0004\u0002\u0002\u01421\u0003\u0002\u0002\u0002\u0143\u0144",
    "\t\u0003\u0002\u0002\u01443\u0003\u0002\u0002\u0002\u0145\u0146\u0007",
    "\"\u0002\u0002\u0146\u0147\u0005\\/\u0002\u0147\u0148\u0007:\u0002\u0002",
    "\u0148\u0149\u0005V,\u0002\u0149\u014a\u0007\u0004\u0002\u0002\u014a",
    "5\u0003\u0002\u0002\u0002\u014b\u014c\u0007#\u0002\u0002\u014c\u014d",
    "\u0005B\"\u0002\u014d7\u0003\u0002\u0002\u0002\u014e\u014f\u0007$\u0002",
    "\u0002\u014f\u0150\u0007%\u0002\u0002\u0150\u0151\u0007\u0007\u0002",
    "\u0002\u0151\u0152\u0005:\u001e\u0002\u0152\u0153\u0007\t\u0002\u0002",
    "\u0153\u0154\u0005B\"\u0002\u01549\u0003\u0002\u0002\u0002\u0155\u0161",
    "\u0005<\u001f\u0002\u0156\u015d\u0005> \u0002\u0157\u0158\u0007\u0016",
    "\u0002\u0002\u0158\u015c\u0005> \u0002\u0159\u015a\u0007\n\u0002\u0002",
    "\u015a\u015c\u0005> \u0002\u015b\u0157\u0003\u0002\u0002\u0002\u015b",
    "\u0159\u0003\u0002\u0002\u0002\u015c\u015f\u0003\u0002\u0002\u0002\u015d",
    "\u015b\u0003\u0002\u0002\u0002\u015d\u015e\u0003\u0002\u0002\u0002\u015e",
    "\u0161\u0003\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u0160",
    "\u0155\u0003\u0002\u0002\u0002\u0160\u0156\u0003\u0002\u0002\u0002\u0161",
    ";\u0003\u0002\u0002\u0002\u0162\u0163\u0007?\u0002\u0002\u0163=\u0003",
    "\u0002\u0002\u0002\u0164\u0166\u0005@!\u0002\u0165\u0164\u0003\u0002",
    "\u0002\u0002\u0165\u0166\u0003\u0002\u0002\u0002\u0166\u0167\u0003\u0002",
    "\u0002\u0002\u0167\u0168\u0005l7\u0002\u0168?\u0003\u0002\u0002\u0002",
    "\u0169\u016a\t\u0004\u0002\u0002\u016aA\u0003\u0002\u0002\u0002\u016b",
    "\u016e\u0005D#\u0002\u016c\u016e\u0005F$\u0002\u016d\u016b\u0003\u0002",
    "\u0002\u0002\u016d\u016c\u0003\u0002\u0002\u0002\u016eC\u0003\u0002",
    "\u0002\u0002\u016f\u0173\u0007\u000f\u0002\u0002\u0170\u0172\u0005F",
    "$\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0172\u0175\u0003\u0002",
    "\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002",
    "\u0002\u0002\u0174\u0176\u0003\u0002\u0002\u0002\u0175\u0173\u0003\u0002",
    "\u0002\u0002\u0176\u0177\u0007\u0010\u0002\u0002\u0177E\u0003\u0002",
    "\u0002\u0002\u0178\u0179\u0005H%\u0002\u0179\u017a\u0007\u0004\u0002",
    "\u0002\u017a\u017e\u0003\u0002\u0002\u0002\u017b\u017e\u0005J&\u0002",
    "\u017c\u017e\u0005L\'\u0002\u017d\u0178\u0003\u0002\u0002\u0002\u017d",
    "\u017b\u0003\u0002\u0002\u0002\u017d\u017c\u0003\u0002\u0002\u0002\u017e",
    "G\u0003\u0002\u0002\u0002\u017f\u0180\u0005\\/\u0002\u0180\u0181\u0007",
    ":\u0002\u0002\u0181\u0182\u0005T+\u0002\u0182I\u0003\u0002\u0002\u0002",
    "\u0183\u0184\u0007(\u0002\u0002\u0184\u0185\u0007\u0007\u0002\u0002",
    "\u0185\u0186\u0005T+\u0002\u0186\u0187\u0007\t\u0002\u0002\u0187\u018a",
    "\u0005B\"\u0002\u0188\u0189\u0007)\u0002\u0002\u0189\u018b\u0005B\"",
    "\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002",
    "\u0002\u018bK\u0003\u0002\u0002\u0002\u018c\u018d\u0007*\u0002\u0002",
    "\u018d\u018e\u0007\u0007\u0002\u0002\u018e\u018f\u0005l7\u0002\u018f",
    "\u0191\u0007\t\u0002\u0002\u0190\u0192\u0005N(\u0002\u0191\u0190\u0003",
    "\u0002\u0002\u0002\u0192\u0193\u0003\u0002\u0002\u0002\u0193\u0191\u0003",
    "\u0002\u0002\u0002\u0193\u0194\u0003\u0002\u0002\u0002\u0194\u0196\u0003",
    "\u0002\u0002\u0002\u0195\u0197\u0005P)\u0002\u0196\u0195\u0003\u0002",
    "\u0002\u0002\u0196\u0197\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002",
    "\u0002\u0002\u0198\u0199\u0007+\u0002\u0002\u0199M\u0003\u0002\u0002",
    "\u0002\u019a\u019b\u0005b2\u0002\u019b\u019c\u0007,\u0002\u0002\u019c",
    "\u019d\u0005B\"\u0002\u019dO\u0003\u0002\u0002\u0002\u019e\u019f\u0007",
    "-\u0002\u0002\u019f\u01a0\u0007,\u0002\u0002\u01a0\u01a1\u0005B\"\u0002",
    "\u01a1Q\u0003\u0002\u0002\u0002\u01a2\u01a3\u0007\u0011\u0002\u0002",
    "\u01a3\u01a4\u0005h5\u0002\u01a4\u01a5\u0007\u0012\u0002\u0002\u01a5",
    "S\u0003\u0002\u0002\u0002\u01a6\u01a7\b+\u0001\u0002\u01a7\u01b1\u0005",
    "b2\u0002\u01a8\u01b1\u0005l7\u0002\u01a9\u01b1\u0005R*\u0002\u01aa\u01ab",
    "\u0007\u0007\u0002\u0002\u01ab\u01ac\u0005T+\u0002\u01ac\u01ad\u0007",
    "\t\u0002\u0002\u01ad\u01b1\u0003\u0002\u0002\u0002\u01ae\u01af\t\u0005",
    "\u0002\u0002\u01af\u01b1\u0005T+\u0006\u01b0\u01a6\u0003\u0002\u0002",
    "\u0002\u01b0\u01a8\u0003\u0002\u0002\u0002\u01b0\u01a9\u0003\u0002\u0002",
    "\u0002\u01b0\u01aa\u0003\u0002\u0002\u0002\u01b0\u01ae\u0003\u0002\u0002",
    "\u0002\u01b1\u01bd\u0003\u0002\u0002\u0002\u01b2\u01b3\f\u0005\u0002",
    "\u0002\u01b3\u01b4\t\u0006\u0002\u0002\u01b4\u01bc\u0005T+\u0006\u01b5",
    "\u01b6\f\u0004\u0002\u0002\u01b6\u01b7\t\u0005\u0002\u0002\u01b7\u01bc",
    "\u0005T+\u0005\u01b8\u01b9\f\u0003\u0002\u0002\u01b9\u01ba\t\u0007\u0002",
    "\u0002\u01ba\u01bc\u0005T+\u0004\u01bb\u01b2\u0003\u0002\u0002\u0002",
    "\u01bb\u01b5\u0003\u0002\u0002\u0002\u01bb\u01b8\u0003\u0002\u0002\u0002",
    "\u01bc\u01bf\u0003\u0002\u0002\u0002\u01bd\u01bb\u0003\u0002\u0002\u0002",
    "\u01bd\u01be\u0003\u0002\u0002\u0002\u01beU\u0003\u0002\u0002\u0002",
    "\u01bf\u01bd\u0003\u0002\u0002\u0002\u01c0\u01c1\b,\u0001\u0002\u01c1",
    "\u01ca\u0005l7\u0002\u01c2\u01c3\u0007\u0007\u0002\u0002\u01c3\u01c4",
    "\u0005V,\u0002\u01c4\u01c5\u0007\t\u0002\u0002\u01c5\u01ca\u0003\u0002",
    "\u0002\u0002\u01c6\u01c7\u0005Z.\u0002\u01c7\u01c8\u0005V,\u0004\u01c8",
    "\u01ca\u0003\u0002\u0002\u0002\u01c9\u01c0\u0003\u0002\u0002\u0002\u01c9",
    "\u01c2\u0003\u0002\u0002\u0002\u01c9\u01c6\u0003\u0002\u0002\u0002\u01ca",
    "\u01d1\u0003\u0002\u0002\u0002\u01cb\u01cc\f\u0003\u0002\u0002\u01cc",
    "\u01cd\u0005X-\u0002\u01cd\u01ce\u0005V,\u0004\u01ce\u01d0\u0003\u0002",
    "\u0002\u0002\u01cf\u01cb\u0003\u0002\u0002\u0002\u01d0\u01d3\u0003\u0002",
    "\u0002\u0002\u01d1\u01cf\u0003\u0002\u0002\u0002\u01d1\u01d2\u0003\u0002",
    "\u0002\u0002\u01d2W\u0003\u0002\u0002\u0002\u01d3\u01d1\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\t\b\u0002\u0002\u01d5Y\u0003\u0002\u0002\u0002",
    "\u01d6\u01d7\t\t\u0002\u0002\u01d7[\u0003\u0002\u0002\u0002\u01d8\u01db",
    "\u0005l7\u0002\u01d9\u01db\u0005R*\u0002\u01da\u01d8\u0003\u0002\u0002",
    "\u0002\u01da\u01d9\u0003\u0002\u0002\u0002\u01db]\u0003\u0002\u0002",
    "\u0002\u01dc\u01dd\t\n\u0002\u0002\u01dd_\u0003\u0002\u0002\u0002\u01de",
    "\u01df\t\u000b\u0002\u0002\u01dfa\u0003\u0002\u0002\u0002\u01e0\u01e5",
    "\u00071\u0002\u0002\u01e1\u01e5\u00073\u0002\u0002\u01e2\u01e5\u0007",
    "2\u0002\u0002\u01e3\u01e5\u00074\u0002\u0002\u01e4\u01e0\u0003\u0002",
    "\u0002\u0002\u01e4\u01e1\u0003\u0002\u0002\u0002\u01e4\u01e2\u0003\u0002",
    "\u0002\u0002\u01e4\u01e3\u0003\u0002\u0002\u0002\u01e5c\u0003\u0002",
    "\u0002\u0002\u01e6\u01e7\u0007I\u0002\u0002\u01e7e\u0003\u0002\u0002",
    "\u0002\u01e8\u01ed\u0005d3\u0002\u01e9\u01ea\u0007\n\u0002\u0002\u01ea",
    "\u01ec\u0005d3\u0002\u01eb\u01e9\u0003\u0002\u0002\u0002\u01ec\u01ef",
    "\u0003\u0002\u0002\u0002\u01ed\u01eb\u0003\u0002\u0002\u0002\u01ed\u01ee",
    "\u0003\u0002\u0002\u0002\u01eeg\u0003\u0002\u0002\u0002\u01ef\u01ed",
    "\u0003\u0002\u0002\u0002\u01f0\u01f5\u0005l7\u0002\u01f1\u01f2\u0007",
    "\n\u0002\u0002\u01f2\u01f4\u0005l7\u0002\u01f3\u01f1\u0003\u0002\u0002",
    "\u0002\u01f4\u01f7\u0003\u0002\u0002\u0002\u01f5\u01f3\u0003\u0002\u0002",
    "\u0002\u01f5\u01f6\u0003\u0002\u0002\u0002\u01f6i\u0003\u0002\u0002",
    "\u0002\u01f7\u01f5\u0003\u0002\u0002\u0002\u01f8\u01f9\u0007.\u0002",
    "\u0002\u01f9\u01fa\u0005T+\u0002\u01fa\u01fb\u0007,\u0002\u0002\u01fb",
    "\u01fc\u0005T+\u0002\u01fc\u01fd\u0007/\u0002\u0002\u01fdk\u0003\u0002",
    "\u0002\u0002\u01fe\u020c\u0007I\u0002\u0002\u01ff\u0200\u0007I\u0002",
    "\u0002\u0200\u0201\u0007.\u0002\u0002\u0201\u0202\u0005T+\u0002\u0202",
    "\u0203\u0007/\u0002\u0002\u0203\u020c\u0003\u0002\u0002\u0002\u0204",
    "\u0205\u0007I\u0002\u0002\u0205\u0206\u0007.\u0002\u0002\u0206\u0207",
    "\u0005T+\u0002\u0207\u0208\u0007,\u0002\u0002\u0208\u0209\u0005T+\u0002",
    "\u0209\u020a\u0007/\u0002\u0002\u020a\u020c\u0003\u0002\u0002\u0002",
    "\u020b\u01fe\u0003\u0002\u0002\u0002\u020b\u01ff\u0003\u0002\u0002\u0002",
    "\u020b\u0204\u0003\u0002\u0002\u0002\u020cm\u0003\u0002\u0002\u0002",
    "/t}\u0080\u0086\u008a\u0091\u0094\u009a\u00ad\u00b4\u00b7\u00c0\u00cc",
    "\u00d3\u00da\u00e7\u00f2\u00f9\u0103\u0109\u010d\u0118\u0123\u0134\u013e",
    "\u015b\u015d\u0160\u0165\u016d\u0173\u017d\u018a\u0193\u0196\u01b0\u01bb",
    "\u01bd\u01c9\u01d1\u01da\u01e4\u01ed\u01f5\u020b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'module'", "';'", "'endmodule'", "'#'", "'('", 
                     "'parameter'", "')'", "','", "'reg'", "'input'", "'output'", 
                     "'test'", "'begin'", "'end'", "'{'", "'}'", "'wire'", 
                     "'.'", "'and'", "'or'", "'xor'", "'nand'", "'nor'", 
                     "'xnor'", "'not'", "'control'", "'response'", "'buffer'", 
                     "'sevenseg'", "'number'", "'ledbar'", "'assign'", "'initial'", 
                     "'always'", "'@'", "'posedge'", "'negedge'", "'if'", 
                     "'else'", "'case'", "'endcase'", "':'", "'default'", 
                     "'['", "']'", "'Main'", null, null, null, null, "'!'", 
                     "'~'", "'~&'", "'~|'", "'^'", "'='", "'+'", "'-'", 
                     "'&'", "'|'", "'*'", "'/'", "'<'", "'<='", "'>'", "'>='", 
                     "'=='", "'!='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "MAIN", "Decimal_number", "Binary_number", "Octal_number", 
                      "Hex_number", "NOT", "NEG", "NAND", "NOR", "XOR", 
                      "ASSIGN", "PLUS", "MINUS", "AND", "OR", "MUL", "DIV", 
                      "LT", "LTE", "GT", "GTE", "EQUAL", "NOTEQUAL", "One_line_comment", 
                      "Block_comment", "IDENTIFIER", "White_space" ];

var ruleNames =  [ "source_text", "modules", "module_main", "module", "module_parameter", 
                   "module_ports", "port_declaration", "port_identifier_list", 
                   "port_direction", "module_item", "test_bench", "test_time", 
                   "time_stamp", "time_assignment_list", "time_assignment", 
                   "net_declaration", "reg_declaration", "simple_identifier_list", 
                   "module_instantiation", "parameter_value_assignment", 
                   "named_module_connections_list", "named_port_connection", 
                   "ordered_module_connections_list", "gate_instantiation", 
                   "gate_type", "net_assignment", "initial_construct", "always_construct", 
                   "event_list", "event_every", "event_primary", "event_type", 
                   "statement_block", "seq_block", "statement", "blocking_assignment", 
                   "conditional_statement", "case_statement", "case_clause", 
                   "case_default", "concatenation", "expression", "expr", 
                   "binary_gate_op", "unary_gate_op", "lvalue", "unary_operator", 
                   "binary_operator", "number", "defined_connection_id", 
                   "defined_connection_id_list", "identifier_list", "range", 
                   "identifier" ];

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
vlgParser.MAIN = 46;
vlgParser.Decimal_number = 47;
vlgParser.Binary_number = 48;
vlgParser.Octal_number = 49;
vlgParser.Hex_number = 50;
vlgParser.NOT = 51;
vlgParser.NEG = 52;
vlgParser.NAND = 53;
vlgParser.NOR = 54;
vlgParser.XOR = 55;
vlgParser.ASSIGN = 56;
vlgParser.PLUS = 57;
vlgParser.MINUS = 58;
vlgParser.AND = 59;
vlgParser.OR = 60;
vlgParser.MUL = 61;
vlgParser.DIV = 62;
vlgParser.LT = 63;
vlgParser.LTE = 64;
vlgParser.GT = 65;
vlgParser.GTE = 66;
vlgParser.EQUAL = 67;
vlgParser.NOTEQUAL = 68;
vlgParser.One_line_comment = 69;
vlgParser.Block_comment = 70;
vlgParser.IDENTIFIER = 71;
vlgParser.White_space = 72;

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
vlgParser.RULE_net_declaration = 15;
vlgParser.RULE_reg_declaration = 16;
vlgParser.RULE_simple_identifier_list = 17;
vlgParser.RULE_module_instantiation = 18;
vlgParser.RULE_parameter_value_assignment = 19;
vlgParser.RULE_named_module_connections_list = 20;
vlgParser.RULE_named_port_connection = 21;
vlgParser.RULE_ordered_module_connections_list = 22;
vlgParser.RULE_gate_instantiation = 23;
vlgParser.RULE_gate_type = 24;
vlgParser.RULE_net_assignment = 25;
vlgParser.RULE_initial_construct = 26;
vlgParser.RULE_always_construct = 27;
vlgParser.RULE_event_list = 28;
vlgParser.RULE_event_every = 29;
vlgParser.RULE_event_primary = 30;
vlgParser.RULE_event_type = 31;
vlgParser.RULE_statement_block = 32;
vlgParser.RULE_seq_block = 33;
vlgParser.RULE_statement = 34;
vlgParser.RULE_blocking_assignment = 35;
vlgParser.RULE_conditional_statement = 36;
vlgParser.RULE_case_statement = 37;
vlgParser.RULE_case_clause = 38;
vlgParser.RULE_case_default = 39;
vlgParser.RULE_concatenation = 40;
vlgParser.RULE_expression = 41;
vlgParser.RULE_expr = 42;
vlgParser.RULE_binary_gate_op = 43;
vlgParser.RULE_unary_gate_op = 44;
vlgParser.RULE_lvalue = 45;
vlgParser.RULE_unary_operator = 46;
vlgParser.RULE_binary_operator = 47;
vlgParser.RULE_number = 48;
vlgParser.RULE_defined_connection_id = 49;
vlgParser.RULE_defined_connection_id_list = 50;
vlgParser.RULE_identifier_list = 51;
vlgParser.RULE_range = 52;
vlgParser.RULE_identifier = 53;


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
        this.state = 108;
        this.modules();
        this.state = 109;
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
        this.state = 114;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 111;
                this.module(); 
            }
            this.state = 116;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 117;
        this.module_main();
        this.state = 118;
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
        this.state = 120;
        this.match(vlgParser.T__0);
        this.state = 121;
        this.match(vlgParser.MAIN);
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 122;
            this.module_parameter();
        }

        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__4) {
            this.state = 125;
            this.module_ports();
        }

        this.state = 128;
        this.match(vlgParser.T__1);
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (vlgParser.T__8 - 9)) | (1 << (vlgParser.T__16 - 9)) | (1 << (vlgParser.T__18 - 9)) | (1 << (vlgParser.T__19 - 9)) | (1 << (vlgParser.T__20 - 9)) | (1 << (vlgParser.T__21 - 9)) | (1 << (vlgParser.T__22 - 9)) | (1 << (vlgParser.T__23 - 9)) | (1 << (vlgParser.T__24 - 9)) | (1 << (vlgParser.T__25 - 9)) | (1 << (vlgParser.T__26 - 9)) | (1 << (vlgParser.T__27 - 9)) | (1 << (vlgParser.T__28 - 9)) | (1 << (vlgParser.T__29 - 9)) | (1 << (vlgParser.T__30 - 9)) | (1 << (vlgParser.T__31 - 9)) | (1 << (vlgParser.T__32 - 9)) | (1 << (vlgParser.T__33 - 9)))) !== 0) || _la===vlgParser.IDENTIFIER) {
            this.state = 129;
            this.module_item();
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__11) {
            this.state = 135;
            this.test_bench();
        }

        this.state = 138;
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
        this.state = 140;
        this.match(vlgParser.T__0);
        this.state = 141;
        this.match(vlgParser.IDENTIFIER);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 142;
            this.module_parameter();
        }

        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__4) {
            this.state = 145;
            this.module_ports();
        }

        this.state = 148;
        this.match(vlgParser.T__1);
        this.state = 152;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 9)) & ~0x1f) == 0 && ((1 << (_la - 9)) & ((1 << (vlgParser.T__8 - 9)) | (1 << (vlgParser.T__16 - 9)) | (1 << (vlgParser.T__18 - 9)) | (1 << (vlgParser.T__19 - 9)) | (1 << (vlgParser.T__20 - 9)) | (1 << (vlgParser.T__21 - 9)) | (1 << (vlgParser.T__22 - 9)) | (1 << (vlgParser.T__23 - 9)) | (1 << (vlgParser.T__24 - 9)) | (1 << (vlgParser.T__25 - 9)) | (1 << (vlgParser.T__26 - 9)) | (1 << (vlgParser.T__27 - 9)) | (1 << (vlgParser.T__28 - 9)) | (1 << (vlgParser.T__29 - 9)) | (1 << (vlgParser.T__30 - 9)) | (1 << (vlgParser.T__31 - 9)) | (1 << (vlgParser.T__32 - 9)) | (1 << (vlgParser.T__33 - 9)))) !== 0) || _la===vlgParser.IDENTIFIER) {
            this.state = 149;
            this.module_item();
            this.state = 154;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 155;
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
        this.state = 157;
        this.match(vlgParser.T__3);
        this.state = 158;
        this.match(vlgParser.T__4);
        this.state = 159;
        this.match(vlgParser.T__5);
        this.state = 160;
        this.match(vlgParser.IDENTIFIER);
        this.state = 161;
        this.match(vlgParser.ASSIGN);
        this.state = 162;
        this.number();
        this.state = 163;
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
        this.state = 165;
        this.match(vlgParser.T__4);
        this.state = 166;
        this.port_declaration();
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 167;
            this.match(vlgParser.T__7);
            this.state = 168;
            this.port_declaration();
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 174;
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
    this.portdim = null; // RangeContext
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
        this.state = 176;
        this.port_direction();
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__8) {
            this.state = 177;
            localctx.reg = this.match(vlgParser.T__8);
        }

        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__43) {
            this.state = 180;
            localctx.portdim = this.range();
        }

        this.state = 183;
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
        this.state = 185;
        this.match(vlgParser.IDENTIFIER);
        this.state = 190;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 186;
                this.match(vlgParser.T__7);
                this.state = 187;
                this.match(vlgParser.IDENTIFIER); 
            }
            this.state = 192;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
        this.state = 193;
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
        this.state = 202;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__16:
            localctx = new NetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 195;
            this.net_declaration();
            break;
        case vlgParser.T__8:
            localctx = new RegContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 196;
            this.reg_declaration();
            break;
        case vlgParser.T__31:
            localctx = new AssignContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 197;
            this.net_assignment();
            break;
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
        case vlgParser.T__30:
            localctx = new GateContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 198;
            this.gate_instantiation();
            break;
        case vlgParser.IDENTIFIER:
            localctx = new InstanceContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 199;
            this.module_instantiation();
            break;
        case vlgParser.T__32:
            localctx = new InitialContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 200;
            this.initial_construct();
            break;
        case vlgParser.T__33:
            localctx = new AlwaysContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 201;
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
        this.state = 204;
        this.match(vlgParser.T__11);
        this.state = 205;
        this.match(vlgParser.T__12);
        this.state = 209;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__3) {
            this.state = 206;
            this.test_time();
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 212;
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
        this.state = 214;
        this.time_stamp();
        this.state = 216;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__14) {
            this.state = 215;
            this.time_assignment_list();
        }

        this.state = 218;
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
        this.state = 220;
        this.match(vlgParser.T__3);
        this.state = 221;
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
        this.state = 223;
        this.match(vlgParser.T__14);
        this.state = 224;
        this.time_assignment();
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 225;
            this.match(vlgParser.T__7);
            this.state = 226;
            this.time_assignment();
            this.state = 231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 232;
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
    this.enterRule(localctx, 28, vlgParser.RULE_time_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        localctx.id = this.match(vlgParser.IDENTIFIER);
        this.state = 235;
        this.match(vlgParser.ASSIGN);
        this.state = 236;
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
    this.netdim = null; // RangeContext
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
    this.enterRule(localctx, 30, vlgParser.RULE_net_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(vlgParser.T__16);
        this.state = 240;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__43) {
            this.state = 239;
            localctx.netdim = this.range();
        }

        this.state = 242;
        localctx.ids = this.simple_identifier_list();
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
    this.regdim = null; // RangeContext
    this.ids = null; // Simple_identifier_listContext
    return this;
}

Reg_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Reg_declarationContext.prototype.constructor = Reg_declarationContext;

Reg_declarationContext.prototype.simple_identifier_list = function() {
    return this.getTypedRuleContext(Simple_identifier_listContext,0);
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
    this.enterRule(localctx, 32, vlgParser.RULE_reg_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(vlgParser.T__8);
        this.state = 247;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__43) {
            this.state = 246;
            localctx.regdim = this.range();
        }

        this.state = 249;
        localctx.ids = this.simple_identifier_list();
        this.state = 250;
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
    this.enterRule(localctx, 34, vlgParser.RULE_simple_identifier_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.match(vlgParser.IDENTIFIER);
        this.state = 257;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 253;
            this.match(vlgParser.T__7);
            this.state = 254;
            this.match(vlgParser.IDENTIFIER);
            this.state = 259;
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
    this.enterRule(localctx, 36, vlgParser.RULE_module_instantiation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        localctx.moduleID = this.match(vlgParser.IDENTIFIER);
        this.state = 261;
        localctx.instanceID = this.match(vlgParser.IDENTIFIER);
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 262;
            localctx.params = this.parameter_value_assignment();
        }

        this.state = 267;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.state = 265;
            this.named_module_connections_list();
            break;

        case 2:
            this.state = 266;
            this.ordered_module_connections_list();
            break;

        }
        this.state = 269;
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
    this.enterRule(localctx, 38, vlgParser.RULE_parameter_value_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(vlgParser.T__3);
        this.state = 272;
        this.match(vlgParser.T__4);
        this.state = 273;
        localctx._expression = this.expression(0);
        localctx.params.push(localctx._expression);
        this.state = 278;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 274;
            this.match(vlgParser.T__7);
            this.state = 275;
            localctx._expression = this.expression(0);
            localctx.params.push(localctx._expression);
            this.state = 280;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 281;
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
    this.enterRule(localctx, 40, vlgParser.RULE_named_module_connections_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(vlgParser.T__4);
        this.state = 284;
        this.named_port_connection();
        this.state = 289;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 285;
            this.match(vlgParser.T__7);
            this.state = 286;
            this.named_port_connection();
            this.state = 291;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 292;
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
    this.value = null; // IdentifierContext
    return this;
}

Named_port_connectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_port_connectionContext.prototype.constructor = Named_port_connectionContext;

Named_port_connectionContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Named_port_connectionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
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
    this.enterRule(localctx, 42, vlgParser.RULE_named_port_connection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        this.match(vlgParser.T__17);
        this.state = 295;
        localctx.portID = this.match(vlgParser.IDENTIFIER);
        this.state = 296;
        this.match(vlgParser.T__4);
        this.state = 297;
        localctx.value = this.identifier();
        this.state = 298;
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
    this._identifier = null; // IdentifierContext
    this.ids = []; // of IdentifierContexts
    return this;
}

Ordered_module_connections_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ordered_module_connections_listContext.prototype.constructor = Ordered_module_connections_listContext;

Ordered_module_connections_listContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
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
    this.enterRule(localctx, 44, vlgParser.RULE_ordered_module_connections_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this.match(vlgParser.T__4);
        this.state = 301;
        localctx._identifier = this.identifier();
        localctx.ids.push(localctx._identifier);
        this.state = 306;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 302;
            this.match(vlgParser.T__7);
            this.state = 303;
            localctx._identifier = this.identifier();
            localctx.ids.push(localctx._identifier);
            this.state = 308;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 309;
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
    this.enterRule(localctx, 46, vlgParser.RULE_gate_instantiation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.gate_type();
        this.state = 312;
        this.match(vlgParser.T__4);
        this.state = 313;
        localctx.gateID = this.match(vlgParser.IDENTIFIER);
        this.state = 316;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__7) {
            this.state = 314;
            this.match(vlgParser.T__7);
            this.state = 315;
            localctx.ids = this.identifier_list();
        }

        this.state = 318;
        this.match(vlgParser.T__6);
        this.state = 319;
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
    this.enterRule(localctx, 48, vlgParser.RULE_gate_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << vlgParser.T__18) | (1 << vlgParser.T__19) | (1 << vlgParser.T__20) | (1 << vlgParser.T__21) | (1 << vlgParser.T__22) | (1 << vlgParser.T__23) | (1 << vlgParser.T__24) | (1 << vlgParser.T__25) | (1 << vlgParser.T__26) | (1 << vlgParser.T__27) | (1 << vlgParser.T__28) | (1 << vlgParser.T__29) | (1 << vlgParser.T__30))) !== 0))) {
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
    this.enterRule(localctx, 50, vlgParser.RULE_net_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this.match(vlgParser.T__31);
        this.state = 324;
        this.lvalue();
        this.state = 325;
        this.match(vlgParser.ASSIGN);
        this.state = 326;
        this.expr(0);
        this.state = 327;
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
    this.enterRule(localctx, 52, vlgParser.RULE_initial_construct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        this.match(vlgParser.T__32);
        this.state = 330;
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
    this.enterRule(localctx, 54, vlgParser.RULE_always_construct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(vlgParser.T__33);
        this.state = 333;
        this.match(vlgParser.T__34);
        this.state = 334;
        this.match(vlgParser.T__4);
        this.state = 335;
        this.event_list();
        this.state = 336;
        this.match(vlgParser.T__6);
        this.state = 337;
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
    this.enterRule(localctx, 56, vlgParser.RULE_event_list);
    var _la = 0; // Token type
    try {
        this.state = 350;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.MUL:
            this.enterOuterAlt(localctx, 1);
            this.state = 339;
            this.event_every();
            break;
        case vlgParser.T__35:
        case vlgParser.T__36:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 340;
            this.event_primary();
            this.state = 347;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===vlgParser.T__7 || _la===vlgParser.T__19) {
                this.state = 345;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case vlgParser.T__19:
                    this.state = 341;
                    this.match(vlgParser.T__19);
                    this.state = 342;
                    this.event_primary();
                    break;
                case vlgParser.T__7:
                    this.state = 343;
                    this.match(vlgParser.T__7);
                    this.state = 344;
                    this.event_primary();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 349;
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
    this.enterRule(localctx, 58, vlgParser.RULE_event_every);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
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
    this.enterRule(localctx, 60, vlgParser.RULE_event_primary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__35 || _la===vlgParser.T__36) {
            this.state = 354;
            this.event_type();
        }

        this.state = 357;
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
    this.enterRule(localctx, 62, vlgParser.RULE_event_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.T__35 || _la===vlgParser.T__36)) {
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
    this.enterRule(localctx, 64, vlgParser.RULE_statement_block);
    try {
        this.state = 363;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__12:
            this.enterOuterAlt(localctx, 1);
            this.state = 361;
            this.seq_block();
            break;
        case vlgParser.T__14:
        case vlgParser.T__37:
        case vlgParser.T__39:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 362;
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
    this.enterRule(localctx, 66, vlgParser.RULE_seq_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 365;
        this.match(vlgParser.T__12);
        this.state = 369;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (vlgParser.T__14 - 15)) | (1 << (vlgParser.T__37 - 15)) | (1 << (vlgParser.T__39 - 15)))) !== 0) || _la===vlgParser.IDENTIFIER) {
            this.state = 366;
            this.statement();
            this.state = 371;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 372;
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
    this.enterRule(localctx, 68, vlgParser.RULE_statement);
    try {
        this.state = 379;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__14:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 374;
            this.blocking_assignment();
            this.state = 375;
            this.match(vlgParser.T__1);
            break;
        case vlgParser.T__37:
            this.enterOuterAlt(localctx, 2);
            this.state = 377;
            this.conditional_statement();
            break;
        case vlgParser.T__39:
            this.enterOuterAlt(localctx, 3);
            this.state = 378;
            this.case_statement();
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
    this.enterRule(localctx, 70, vlgParser.RULE_blocking_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        localctx.lhs = this.lvalue();
        this.state = 382;
        this.match(vlgParser.ASSIGN);
        this.state = 383;
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
    this.ifstate = null; // Statement_blockContext
    this.elsestate = null; // Statement_blockContext
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
    this.enterRule(localctx, 72, vlgParser.RULE_conditional_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.match(vlgParser.T__37);
        this.state = 386;
        this.match(vlgParser.T__4);
        this.state = 387;
        localctx.cond = this.expression(0);
        this.state = 388;
        this.match(vlgParser.T__6);
        this.state = 389;
        localctx.ifstate = this.statement_block();
        this.state = 392;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        if(la_===1) {
            this.state = 390;
            this.match(vlgParser.T__38);
            this.state = 391;
            localctx.elsestate = this.statement_block();

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
    this.enterRule(localctx, 74, vlgParser.RULE_case_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(vlgParser.T__39);
        this.state = 395;
        this.match(vlgParser.T__4);
        this.state = 396;
        localctx.casevar = this.identifier();
        this.state = 397;
        this.match(vlgParser.T__6);
        this.state = 399; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 398;
            localctx._case_clause = this.case_clause();
            localctx.clauses.push(localctx._case_clause);
            this.state = 401; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (vlgParser.Decimal_number - 47)) | (1 << (vlgParser.Binary_number - 47)) | (1 << (vlgParser.Octal_number - 47)) | (1 << (vlgParser.Hex_number - 47)))) !== 0));
        this.state = 404;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__42) {
            this.state = 403;
            localctx.defaultclause = this.case_default();
        }

        this.state = 406;
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

Case_clauseContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
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
    this.enterRule(localctx, 76, vlgParser.RULE_case_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        this.number();
        this.state = 409;
        this.match(vlgParser.T__41);
        this.state = 410;
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
    this.enterRule(localctx, 78, vlgParser.RULE_case_default);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.match(vlgParser.T__42);
        this.state = 413;
        this.match(vlgParser.T__41);
        this.state = 414;
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

ConcatenationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
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
    this.enterRule(localctx, 80, vlgParser.RULE_concatenation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        this.match(vlgParser.T__14);
        this.state = 417;
        this.identifier_list();
        this.state = 418;
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



vlgParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 82;
    this.enterRecursionRule(localctx, 82, vlgParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.Decimal_number:
        case vlgParser.Binary_number:
        case vlgParser.Octal_number:
        case vlgParser.Hex_number:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 421;
            this.number();
            break;
        case vlgParser.IDENTIFIER:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 422;
            this.identifier();
            break;
        case vlgParser.T__14:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 423;
            this.concatenation();
            break;
        case vlgParser.T__4:
            localctx = new ParensExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 424;
            this.match(vlgParser.T__4);
            this.state = 425;
            this.expression(0);
            this.state = 426;
            this.match(vlgParser.T__6);
            break;
        case vlgParser.PLUS:
        case vlgParser.MINUS:
            localctx = new UnaryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 428;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===vlgParser.PLUS || _la===vlgParser.MINUS)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 429;
            this.expression(4);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 443;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 441;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                    this.state = 432;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 433;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===vlgParser.MUL || _la===vlgParser.DIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 434;
                    this.expression(4);
                    break;

                case 2:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                    this.state = 435;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 436;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===vlgParser.PLUS || _la===vlgParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 437;
                    this.expression(3);
                    break;

                case 3:
                    localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                    this.state = 438;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 439;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 63)) & ~0x1f) == 0 && ((1 << (_la - 63)) & ((1 << (vlgParser.LT - 63)) | (1 << (vlgParser.LTE - 63)) | (1 << (vlgParser.GT - 63)) | (1 << (vlgParser.GTE - 63)) | (1 << (vlgParser.EQUAL - 63)) | (1 << (vlgParser.NOTEQUAL - 63)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 440;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 445;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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


function AtomExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExprContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

vlgParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
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
    var _startState = 84;
    this.enterRecursionRule(localctx, 84, vlgParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 455;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.IDENTIFIER:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 447;
            this.identifier();
            break;
        case vlgParser.T__4:
            localctx = new ParensExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 448;
            this.match(vlgParser.T__4);
            this.state = 449;
            this.expr(0);
            this.state = 450;
            this.match(vlgParser.T__6);
            break;
        case vlgParser.NOT:
        case vlgParser.NEG:
            localctx = new UnaryExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 452;
            localctx.op = this.unary_gate_op();
            this.state = 453;
            this.expr(2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 463;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new BinaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expr);
                this.state = 457;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 458;
                localctx.op = this.binary_gate_op();
                this.state = 459;
                this.expr(2); 
            }
            this.state = 465;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
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
    this.enterRule(localctx, 86, vlgParser.RULE_binary_gate_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 466;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (vlgParser.NAND - 53)) | (1 << (vlgParser.NOR - 53)) | (1 << (vlgParser.XOR - 53)) | (1 << (vlgParser.AND - 53)) | (1 << (vlgParser.OR - 53)))) !== 0))) {
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
    this.enterRule(localctx, 88, vlgParser.RULE_unary_gate_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 468;
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
    this.enterRule(localctx, 90, vlgParser.RULE_lvalue);
    try {
        this.state = 472;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 470;
            this.identifier();
            break;
        case vlgParser.T__14:
            this.enterOuterAlt(localctx, 2);
            this.state = 471;
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
    this.enterRule(localctx, 92, vlgParser.RULE_unary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 474;
        _la = this._input.LA(1);
        if(!(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (vlgParser.NOT - 51)) | (1 << (vlgParser.PLUS - 51)) | (1 << (vlgParser.MINUS - 51)))) !== 0))) {
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
    this.enterRule(localctx, 94, vlgParser.RULE_binary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 476;
        _la = this._input.LA(1);
        if(!(((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (vlgParser.PLUS - 57)) | (1 << (vlgParser.MINUS - 57)) | (1 << (vlgParser.MUL - 57)) | (1 << (vlgParser.DIV - 57)) | (1 << (vlgParser.EQUAL - 57)) | (1 << (vlgParser.NOTEQUAL - 57)))) !== 0))) {
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
    this.enterRule(localctx, 96, vlgParser.RULE_number);
    try {
        this.state = 482;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.Decimal_number:
            localctx = new DecimalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 478;
            this.match(vlgParser.Decimal_number);
            break;
        case vlgParser.Octal_number:
            localctx = new OctalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 479;
            this.match(vlgParser.Octal_number);
            break;
        case vlgParser.Binary_number:
            localctx = new BinaryContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 480;
            this.match(vlgParser.Binary_number);
            break;
        case vlgParser.Hex_number:
            localctx = new HexContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 481;
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
    this.enterRule(localctx, 98, vlgParser.RULE_defined_connection_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
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
    this.enterRule(localctx, 100, vlgParser.RULE_defined_connection_id_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 486;
        this.defined_connection_id();
        this.state = 491;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 487;
            this.match(vlgParser.T__7);
            this.state = 488;
            this.defined_connection_id();
            this.state = 493;
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
    this.enterRule(localctx, 102, vlgParser.RULE_identifier_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this.identifier();
        this.state = 499;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__7) {
            this.state = 495;
            this.match(vlgParser.T__7);
            this.state = 496;
            this.identifier();
            this.state = 501;
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
    this.enterRule(localctx, 104, vlgParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 502;
        this.match(vlgParser.T__43);
        this.state = 503;
        localctx.rangestart = this.expression(0);
        this.state = 504;
        this.match(vlgParser.T__41);
        this.state = 505;
        localctx.rangeend = this.expression(0);
        this.state = 506;
        this.match(vlgParser.T__44);
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
    this.enterRule(localctx, 106, vlgParser.RULE_identifier);
    try {
        this.state = 521;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IdPlainContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 508;
            this.match(vlgParser.IDENTIFIER);
            break;

        case 2:
            localctx = new IdOffsetContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 509;
            this.match(vlgParser.IDENTIFIER);
            this.state = 510;
            this.match(vlgParser.T__43);
            this.state = 511;
            this.expression(0);
            this.state = 512;
            this.match(vlgParser.T__44);
            break;

        case 3:
            localctx = new IdRangeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 514;
            this.match(vlgParser.IDENTIFIER);
            this.state = 515;
            this.match(vlgParser.T__43);
            this.state = 516;
            this.expression(0);
            this.state = 517;
            this.match(vlgParser.T__41);
            this.state = 518;
            this.expression(0);
            this.state = 519;
            this.match(vlgParser.T__44);
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
	case 41:
			return this.expression_sempred(localctx, predIndex);
	case 42:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

vlgParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

vlgParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.vlgParser = vlgParser;
