// Generated from c:\c\logic2\src\grammar\vlg.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var vlgListener = require('./vlgListener').vlgListener;
var vlgVisitor = require('./vlgVisitor').vlgVisitor;

 /* eslint-disable */ 
var grammarFileName = "vlg.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003B\u0169\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003Y\n\u0003\f\u0003\u000e",
    "\u0003\\\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004d\n\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004h\n\u0004\f\u0004\u000e\u0004k\u000b\u0004\u0003\u0004\u0005",
    "\u0004n\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005u\n\u0005\u0003\u0005\u0003\u0005\u0007\u0005y\n\u0005",
    "\f\u0005\u000e\u0005|\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u0084\n\u0006\f\u0006",
    "\u000e\u0006\u0087\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u0097\n\t\u0003\n\u0003\n\u0003\n\u0007\n",
    "\u009c\n\n\f\n\u000e\n\u009f\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u00a5\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00b0\n\r\f\r\u000e",
    "\r\u00b3\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00c4\n",
    "\u0010\f\u0010\u000e\u0010\u00c7\u000b\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u00d7\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0005\u0014\u00de\n\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0007\u0017\u00ee\n\u0017\f\u0017\u000e\u0017\u00f1\u000b\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u00ff\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0007\u0019\u0105\n\u0019\f\u0019\u000e\u0019\u0108\u000b\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u0110\n\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b",
    "\u0115\n\u001b\f\u001b\u000e\u001b\u0118\u000b\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u012c",
    "\n\u001f\f\u001f\u000e\u001f\u012f\u000b\u001f\u0005\u001f\u0131\n\u001f",
    "\u0003 \u0003 \u0003!\u0005!\u0136\n!\u0003!\u0003!\u0003\"\u0003\"",
    "\u0003#\u0003#\u0003#\u0003#\u0005#\u0140\n#\u0003$\u0003$\u0003$\u0003",
    "$\u0003%\u0003%\u0007%\u0148\n%\f%\u000e%\u014b\u000b%\u0003%\u0003",
    "%\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0007\'\u0154\n\'\f\'\u000e",
    "\'\u0157\u000b\'\u0003(\u0003(\u0003(\u0007(\u015c\n(\f(\u000e(\u015f",
    "\u000b(\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0002\u000404+\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR\u0002\b\u0003\u0002",
    "\t\n\u0003\u0002\u0014 \u0004\u0002.045\u0003\u0002@A\u0003\u0002%&",
    "\u0003\u0002AB\u0002\u0160\u0002T\u0003\u0002\u0002\u0002\u0004Z\u0003",
    "\u0002\u0002\u0002\u0006`\u0003\u0002\u0002\u0002\bq\u0003\u0002\u0002",
    "\u0002\n\u007f\u0003\u0002\u0002\u0002\f\u008a\u0003\u0002\u0002\u0002",
    "\u000e\u008d\u0003\u0002\u0002\u0002\u0010\u0096\u0003\u0002\u0002\u0002",
    "\u0012\u0098\u0003\u0002\u0002\u0002\u0014\u00a2\u0003\u0002\u0002\u0002",
    "\u0016\u00a8\u0003\u0002\u0002\u0002\u0018\u00ab\u0003\u0002\u0002\u0002",
    "\u001a\u00b6\u0003\u0002\u0002\u0002\u001c\u00ba\u0003\u0002\u0002\u0002",
    "\u001e\u00bf\u0003\u0002\u0002\u0002 \u00ca\u0003\u0002\u0002\u0002",
    "\"\u00d0\u0003\u0002\u0002\u0002$\u00d4\u0003\u0002\u0002\u0002&\u00db",
    "\u0003\u0002\u0002\u0002(\u00e4\u0003\u0002\u0002\u0002*\u00e6\u0003",
    "\u0002\u0002\u0002,\u00ea\u0003\u0002\u0002\u0002.\u00f2\u0003\u0002",
    "\u0002\u00020\u00fe\u0003\u0002\u0002\u00022\u0109\u0003\u0002\u0002",
    "\u00024\u010f\u0003\u0002\u0002\u00026\u0119\u0003\u0002\u0002\u0002",
    "8\u011b\u0003\u0002\u0002\u0002:\u011e\u0003\u0002\u0002\u0002<\u0130",
    "\u0003\u0002\u0002\u0002>\u0132\u0003\u0002\u0002\u0002@\u0135\u0003",
    "\u0002\u0002\u0002B\u0139\u0003\u0002\u0002\u0002D\u013f\u0003\u0002",
    "\u0002\u0002F\u0141\u0003\u0002\u0002\u0002H\u0145\u0003\u0002\u0002",
    "\u0002J\u014e\u0003\u0002\u0002\u0002L\u0150\u0003\u0002\u0002\u0002",
    "N\u0158\u0003\u0002\u0002\u0002P\u0160\u0003\u0002\u0002\u0002R\u0162",
    "\u0003\u0002\u0002\u0002TU\u0005\u0004\u0003\u0002UV\u0007\u0002\u0002",
    "\u0003V\u0003\u0003\u0002\u0002\u0002WY\u0005\b\u0005\u0002XW\u0003",
    "\u0002\u0002\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002",
    "Z[\u0003\u0002\u0002\u0002[]\u0003\u0002\u0002\u0002\\Z\u0003\u0002",
    "\u0002\u0002]^\u0005\u0006\u0004\u0002^_\u0007\u0002\u0002\u0003_\u0005",
    "\u0003\u0002\u0002\u0002`a\u0007\u0003\u0002\u0002ac\u0007?\u0002\u0002",
    "bd\u0005\n\u0006\u0002cb\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002",
    "\u0002de\u0003\u0002\u0002\u0002ei\u0007\u0004\u0002\u0002fh\u0005\u0010",
    "\t\u0002gf\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002\u0002ig\u0003",
    "\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jm\u0003\u0002\u0002\u0002",
    "ki\u0003\u0002\u0002\u0002ln\u0005\u0012\n\u0002ml\u0003\u0002\u0002",
    "\u0002mn\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0007\u0005",
    "\u0002\u0002p\u0007\u0003\u0002\u0002\u0002qr\u0007\u0003\u0002\u0002",
    "rt\u0007@\u0002\u0002su\u0005\n\u0006\u0002ts\u0003\u0002\u0002\u0002",
    "tu\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002vz\u0007\u0004\u0002",
    "\u0002wy\u0005\u0010\t\u0002xw\u0003\u0002\u0002\u0002y|\u0003\u0002",
    "\u0002\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{}\u0003",
    "\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002}~\u0007\u0005\u0002\u0002",
    "~\t\u0003\u0002\u0002\u0002\u007f\u0080\u0007\u0006\u0002\u0002\u0080",
    "\u0085\u0005\f\u0007\u0002\u0081\u0082\u0007\u0007\u0002\u0002\u0082",
    "\u0084\u0005\f\u0007\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0084",
    "\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0003\u0002\u0002\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087",
    "\u0085\u0003\u0002\u0002\u0002\u0088\u0089\u0007\b\u0002\u0002\u0089",
    "\u000b\u0003\u0002\u0002\u0002\u008a\u008b\u0005\u000e\b\u0002\u008b",
    "\u008c\u0005N(\u0002\u008c\r\u0003\u0002\u0002\u0002\u008d\u008e\t\u0002",
    "\u0002\u0002\u008e\u000f\u0003\u0002\u0002\u0002\u008f\u0097\u0005\"",
    "\u0012\u0002\u0090\u0097\u0005&\u0014\u0002\u0091\u0097\u0005$\u0013",
    "\u0002\u0092\u0097\u0005*\u0016\u0002\u0093\u0097\u0005\u001c\u000f",
    "\u0002\u0094\u0097\u00058\u001d\u0002\u0095\u0097\u0005:\u001e\u0002",
    "\u0096\u008f\u0003\u0002\u0002\u0002\u0096\u0090\u0003\u0002\u0002\u0002",
    "\u0096\u0091\u0003\u0002\u0002\u0002\u0096\u0092\u0003\u0002\u0002\u0002",
    "\u0096\u0093\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002",
    "\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u0011\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0007\u000b\u0002\u0002\u0099\u009d\u0007\f\u0002\u0002",
    "\u009a\u009c\u0005\u0014\u000b\u0002\u009b\u009a\u0003\u0002\u0002\u0002",
    "\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002",
    "\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0003\u0002\u0002\u0002",
    "\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007\r\u0002\u0002",
    "\u00a1\u0013\u0003\u0002\u0002\u0002\u00a2\u00a4\u0005\u0016\f\u0002",
    "\u00a3\u00a5\u0005\u0018\r\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002",
    "\u00a6\u00a7\u0007\u0004\u0002\u0002\u00a7\u0015\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0007\u000e\u0002\u0002\u00a9\u00aa\u0007A\u0002\u0002",
    "\u00aa\u0017\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007\u000f\u0002\u0002",
    "\u00ac\u00b1\u0005\u001a\u000e\u0002\u00ad\u00ae\u0007\u0007\u0002\u0002",
    "\u00ae\u00b0\u0005\u001a\u000e\u0002\u00af\u00ad\u0003\u0002\u0002\u0002",
    "\u00b0\u00b3\u0003\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b4\u0003\u0002\u0002\u0002",
    "\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\u0010\u0002\u0002",
    "\u00b5\u0019\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007@\u0002\u0002",
    "\u00b7\u00b8\u00071\u0002\u0002\u00b8\u00b9\u0007A\u0002\u0002\u00b9",
    "\u001b\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007@\u0002\u0002\u00bb",
    "\u00bc\u0007@\u0002\u0002\u00bc\u00bd\u0005\u001e\u0010\u0002\u00bd",
    "\u00be\u0007\u0004\u0002\u0002\u00be\u001d\u0003\u0002\u0002\u0002\u00bf",
    "\u00c0\u0007\u0006\u0002\u0002\u00c0\u00c5\u0005 \u0011\u0002\u00c1",
    "\u00c2\u0007\u0007\u0002\u0002\u00c2\u00c4\u0005 \u0011\u0002\u00c3",
    "\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c7\u0003\u0002\u0002\u0002\u00c5",
    "\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6",
    "\u00c8\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8",
    "\u00c9\u0007\b\u0002\u0002\u00c9\u001f\u0003\u0002\u0002\u0002\u00ca",
    "\u00cb\u0007\u0011\u0002\u0002\u00cb\u00cc\u0007@\u0002\u0002\u00cc",
    "\u00cd\u0007\u0006\u0002\u0002\u00cd\u00ce\u0007@\u0002\u0002\u00ce",
    "\u00cf\u0007\b\u0002\u0002\u00cf!\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0007\u0012\u0002\u0002\u00d1\u00d2\u0005N(\u0002\u00d2\u00d3\u0007",
    "\u0004\u0002\u0002\u00d3#\u0003\u0002\u0002\u0002\u00d4\u00d6\u0007",
    "\u0013\u0002\u0002\u00d5\u00d7\u0005R*\u0002\u00d6\u00d5\u0003\u0002",
    "\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\u0005N(\u0002\u00d9\u00da\u0007\u0004\u0002",
    "\u0002\u00da%\u0003\u0002\u0002\u0002\u00db\u00dd\u0005(\u0015\u0002",
    "\u00dc\u00de\u0007@\u0002\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002",
    "\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0007\u0006\u0002\u0002\u00e0\u00e1\u0005N(\u0002\u00e1",
    "\u00e2\u0007\b\u0002\u0002\u00e2\u00e3\u0007\u0004\u0002\u0002\u00e3",
    "\'\u0003\u0002\u0002\u0002\u00e4\u00e5\t\u0003\u0002\u0002\u00e5)\u0003",
    "\u0002\u0002\u0002\u00e6\u00e7\u0007!\u0002\u0002\u00e7\u00e8\u0005",
    ",\u0017\u0002\u00e8\u00e9\u0007\u0004\u0002\u0002\u00e9+\u0003\u0002",
    "\u0002\u0002\u00ea\u00ef\u0005.\u0018\u0002\u00eb\u00ec\u0007\u0007",
    "\u0002\u0002\u00ec\u00ee\u0005.\u0018\u0002\u00ed\u00eb\u0003\u0002",
    "\u0002\u0002\u00ee\u00f1\u0003\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002",
    "\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0-\u0003\u0002",
    "\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007@",
    "\u0002\u0002\u00f3\u00f4\u00071\u0002\u0002\u00f4\u00f5\u00050\u0019",
    "\u0002\u00f5/\u0003\u0002\u0002\u0002\u00f6\u00f7\b\u0019\u0001\u0002",
    "\u00f7\u00f8\u0007-\u0002\u0002\u00f8\u00ff\u00050\u0019\u0006\u00f9",
    "\u00fa\u0007\u0006\u0002\u0002\u00fa\u00fb\u00050\u0019\u0002\u00fb",
    "\u00fc\u0007\b\u0002\u0002\u00fc\u00ff\u0003\u0002\u0002\u0002\u00fd",
    "\u00ff\u0007@\u0002\u0002\u00fe\u00f6\u0003\u0002\u0002\u0002\u00fe",
    "\u00f9\u0003\u0002\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff",
    "\u0106\u0003\u0002\u0002\u0002\u0100\u0101\f\u0005\u0002\u0002\u0101",
    "\u0102\u00052\u001a\u0002\u0102\u0103\u00050\u0019\u0006\u0103\u0105",
    "\u0003\u0002\u0002\u0002\u0104\u0100\u0003\u0002\u0002\u0002\u0105\u0108",
    "\u0003\u0002\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0003\u0002\u0002\u0002\u01071\u0003\u0002\u0002\u0002\u0108\u0106",
    "\u0003\u0002\u0002\u0002\u0109\u010a\t\u0004\u0002\u0002\u010a3\u0003",
    "\u0002\u0002\u0002\u010b\u010c\b\u001b\u0001\u0002\u010c\u0110\u0005",
    "6\u001c\u0002\u010d\u010e\u0007*\u0002\u0002\u010e\u0110\u00056\u001c",
    "\u0002\u010f\u010b\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002",
    "\u0002\u0110\u0116\u0003\u0002\u0002\u0002\u0111\u0112\f\u0003\u0002",
    "\u0002\u0112\u0113\u0007+\u0002\u0002\u0113\u0115\u00054\u001b\u0004",
    "\u0114\u0111\u0003\u0002\u0002\u0002\u0115\u0118\u0003\u0002\u0002\u0002",
    "\u0116\u0114\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002",
    "\u01175\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002",
    "\u0119\u011a\t\u0005\u0002\u0002\u011a7\u0003\u0002\u0002\u0002\u011b",
    "\u011c\u0007\"\u0002\u0002\u011c\u011d\u0005D#\u0002\u011d9\u0003\u0002",
    "\u0002\u0002\u011e\u011f\u0007#\u0002\u0002\u011f\u0120\u0007$\u0002",
    "\u0002\u0120\u0121\u0007\u0006\u0002\u0002\u0121\u0122\u0005<\u001f",
    "\u0002\u0122\u0123\u0007\b\u0002\u0002\u0123\u0124\u0005D#\u0002\u0124",
    ";\u0003\u0002\u0002\u0002\u0125\u0131\u0005> \u0002\u0126\u012d\u0005",
    "@!\u0002\u0127\u0128\u0007\u0015\u0002\u0002\u0128\u012c\u0005@!\u0002",
    "\u0129\u012a\u0007\u0007\u0002\u0002\u012a\u012c\u0005@!\u0002\u012b",
    "\u0127\u0003\u0002\u0002\u0002\u012b\u0129\u0003\u0002\u0002\u0002\u012c",
    "\u012f\u0003\u0002\u0002\u0002\u012d\u012b\u0003\u0002\u0002\u0002\u012d",
    "\u012e\u0003\u0002\u0002\u0002\u012e\u0131\u0003\u0002\u0002\u0002\u012f",
    "\u012d\u0003\u0002\u0002\u0002\u0130\u0125\u0003\u0002\u0002\u0002\u0130",
    "\u0126\u0003\u0002\u0002\u0002\u0131=\u0003\u0002\u0002\u0002\u0132",
    "\u0133\u00076\u0002\u0002\u0133?\u0003\u0002\u0002\u0002\u0134\u0136",
    "\u0005B\"\u0002\u0135\u0134\u0003\u0002\u0002\u0002\u0135\u0136\u0003",
    "\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0138\u0007",
    "@\u0002\u0002\u0138A\u0003\u0002\u0002\u0002\u0139\u013a\t\u0006\u0002",
    "\u0002\u013aC\u0003\u0002\u0002\u0002\u013b\u013c\u0005F$\u0002\u013c",
    "\u013d\u0007\u0004\u0002\u0002\u013d\u0140\u0003\u0002\u0002\u0002\u013e",
    "\u0140\u0005H%\u0002\u013f\u013b\u0003\u0002\u0002\u0002\u013f\u013e",
    "\u0003\u0002\u0002\u0002\u0140E\u0003\u0002\u0002\u0002\u0141\u0142",
    "\u0007@\u0002\u0002\u0142\u0143\u00071\u0002\u0002\u0143\u0144\u0005",
    "4\u001b\u0002\u0144G\u0003\u0002\u0002\u0002\u0145\u0149\u0007\f\u0002",
    "\u0002\u0146\u0148\u0005D#\u0002\u0147\u0146\u0003\u0002\u0002\u0002",
    "\u0148\u014b\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002",
    "\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u014c\u0003\u0002\u0002\u0002",
    "\u014b\u0149\u0003\u0002\u0002\u0002\u014c\u014d\u0007\r\u0002\u0002",
    "\u014dI\u0003\u0002\u0002\u0002\u014e\u014f\u0007@\u0002\u0002\u014f",
    "K\u0003\u0002\u0002\u0002\u0150\u0155\u0005J&\u0002\u0151\u0152\u0007",
    "\u0007\u0002\u0002\u0152\u0154\u0005J&\u0002\u0153\u0151\u0003\u0002",
    "\u0002\u0002\u0154\u0157\u0003\u0002\u0002\u0002\u0155\u0153\u0003\u0002",
    "\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156M\u0003\u0002",
    "\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0158\u015d\u0007@",
    "\u0002\u0002\u0159\u015a\u0007\u0007\u0002\u0002\u015a\u015c\u0007@",
    "\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015c\u015f\u0003\u0002",
    "\u0002\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015d\u015e\u0003\u0002",
    "\u0002\u0002\u015eO\u0003\u0002\u0002\u0002\u015f\u015d\u0003\u0002",
    "\u0002\u0002\u0160\u0161\t\u0007\u0002\u0002\u0161Q\u0003\u0002\u0002",
    "\u0002\u0162\u0163\u0007\'\u0002\u0002\u0163\u0164\u0007A\u0002\u0002",
    "\u0164\u0165\u0007(\u0002\u0002\u0165\u0166\u0007A\u0002\u0002\u0166",
    "\u0167\u0007)\u0002\u0002\u0167S\u0003\u0002\u0002\u0002\u001dZcimt",
    "z\u0085\u0096\u009d\u00a4\u00b1\u00c5\u00d6\u00dd\u00ef\u00fe\u0106",
    "\u010f\u0116\u012b\u012d\u0130\u0135\u013f\u0149\u0155\u015d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'module'", "';'", "'endmodule'", "'('", "','", 
                     "')'", "'input'", "'output'", "'test'", "'begin'", 
                     "'end'", "'#'", "'{'", "'}'", "'.'", "'wire'", "'reg'", 
                     "'and'", "'or'", "'xor'", "'nand'", "'nor'", "'xnor'", 
                     "'not'", "'control'", "'response'", "'buffer'", "'sevenseg'", 
                     "'number'", "'ledbar'", "'assign'", "'initial'", "'always'", 
                     "'@'", "'posedge'", "'negedge'", "'['", "':'", "']'", 
                     null, null, "'!'", "'~'", "'~&'", "'~|'", "'^'", "'='", 
                     "'+'", "'-'", "'&'", "'|'", "'*'", "'/'", "'<'", "'>'", 
                     "'=='", "'!='", null, null, null, "'Main'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "UNARY_OPERATOR", "BINARY_OPERATOR", 
                      "NOT", "NEG", "NAND", "NOR", "XOR", "ASSIGN", "PLUS", 
                      "MINUS", "AND", "OR", "MUL", "DIV", "LT", "GT", "EQUAL", 
                      "NOTEQUAL", "ONE_LINE_COMMENT", "BLOCK_COMMENT", "WHITE_SPACE", 
                      "MAIN", "IDENTIFIER", "UNSIGNED_NUMBER", "BINARY_NUMBER" ];

var ruleNames =  [ "source_text", "modules", "module_main", "module", "module_ports", 
                   "ansi_port_declaration", "port_direction", "module_item", 
                   "test_bench", "test_time", "time_stamp", "time_assignment_list", 
                   "time_assignment", "module_instantiation", "module_connections_list", 
                   "named_port_connection", "net_declaration", "reg_declaration", 
                   "gate_declaration", "gate_type", "continuous_assign", 
                   "list_of_assignments", "assignment", "expr", "binary_operator", 
                   "expression", "primary", "initial_statement", "always_statement", 
                   "event_list", "event_every", "event_primary", "event_type", 
                   "statement", "blocking_assignment", "seq_block", "defined_connection_id", 
                   "defined_connection_id_list", "identifier_list", "number", 
                   "range" ];

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
vlgParser.UNARY_OPERATOR = 40;
vlgParser.BINARY_OPERATOR = 41;
vlgParser.NOT = 42;
vlgParser.NEG = 43;
vlgParser.NAND = 44;
vlgParser.NOR = 45;
vlgParser.XOR = 46;
vlgParser.ASSIGN = 47;
vlgParser.PLUS = 48;
vlgParser.MINUS = 49;
vlgParser.AND = 50;
vlgParser.OR = 51;
vlgParser.MUL = 52;
vlgParser.DIV = 53;
vlgParser.LT = 54;
vlgParser.GT = 55;
vlgParser.EQUAL = 56;
vlgParser.NOTEQUAL = 57;
vlgParser.ONE_LINE_COMMENT = 58;
vlgParser.BLOCK_COMMENT = 59;
vlgParser.WHITE_SPACE = 60;
vlgParser.MAIN = 61;
vlgParser.IDENTIFIER = 62;
vlgParser.UNSIGNED_NUMBER = 63;
vlgParser.BINARY_NUMBER = 64;

vlgParser.RULE_source_text = 0;
vlgParser.RULE_modules = 1;
vlgParser.RULE_module_main = 2;
vlgParser.RULE_module = 3;
vlgParser.RULE_module_ports = 4;
vlgParser.RULE_ansi_port_declaration = 5;
vlgParser.RULE_port_direction = 6;
vlgParser.RULE_module_item = 7;
vlgParser.RULE_test_bench = 8;
vlgParser.RULE_test_time = 9;
vlgParser.RULE_time_stamp = 10;
vlgParser.RULE_time_assignment_list = 11;
vlgParser.RULE_time_assignment = 12;
vlgParser.RULE_module_instantiation = 13;
vlgParser.RULE_module_connections_list = 14;
vlgParser.RULE_named_port_connection = 15;
vlgParser.RULE_net_declaration = 16;
vlgParser.RULE_reg_declaration = 17;
vlgParser.RULE_gate_declaration = 18;
vlgParser.RULE_gate_type = 19;
vlgParser.RULE_continuous_assign = 20;
vlgParser.RULE_list_of_assignments = 21;
vlgParser.RULE_assignment = 22;
vlgParser.RULE_expr = 23;
vlgParser.RULE_binary_operator = 24;
vlgParser.RULE_expression = 25;
vlgParser.RULE_primary = 26;
vlgParser.RULE_initial_statement = 27;
vlgParser.RULE_always_statement = 28;
vlgParser.RULE_event_list = 29;
vlgParser.RULE_event_every = 30;
vlgParser.RULE_event_primary = 31;
vlgParser.RULE_event_type = 32;
vlgParser.RULE_statement = 33;
vlgParser.RULE_blocking_assignment = 34;
vlgParser.RULE_seq_block = 35;
vlgParser.RULE_defined_connection_id = 36;
vlgParser.RULE_defined_connection_id_list = 37;
vlgParser.RULE_identifier_list = 38;
vlgParser.RULE_number = 39;
vlgParser.RULE_range = 40;


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
        this.state = 82;
        this.modules();
        this.state = 83;
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
        this.state = 88;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 85;
                this.module(); 
            }
            this.state = 90;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 91;
        this.module_main();
        this.state = 92;
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
        this.state = 94;
        this.match(vlgParser.T__0);
        this.state = 95;
        this.match(vlgParser.MAIN);
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 96;
            this.module_ports();
        }

        this.state = 99;
        this.match(vlgParser.T__1);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << vlgParser.T__15) | (1 << vlgParser.T__16) | (1 << vlgParser.T__17) | (1 << vlgParser.T__18) | (1 << vlgParser.T__19) | (1 << vlgParser.T__20) | (1 << vlgParser.T__21) | (1 << vlgParser.T__22) | (1 << vlgParser.T__23) | (1 << vlgParser.T__24) | (1 << vlgParser.T__25) | (1 << vlgParser.T__26) | (1 << vlgParser.T__27) | (1 << vlgParser.T__28) | (1 << vlgParser.T__29) | (1 << vlgParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (vlgParser.T__31 - 32)) | (1 << (vlgParser.T__32 - 32)) | (1 << (vlgParser.IDENTIFIER - 32)))) !== 0)) {
            this.state = 100;
            this.module_item();
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__8) {
            this.state = 106;
            this.test_bench();
        }

        this.state = 109;
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
        this.state = 111;
        this.match(vlgParser.T__0);
        this.state = 112;
        this.match(vlgParser.IDENTIFIER);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__3) {
            this.state = 113;
            this.module_ports();
        }

        this.state = 116;
        this.match(vlgParser.T__1);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << vlgParser.T__15) | (1 << vlgParser.T__16) | (1 << vlgParser.T__17) | (1 << vlgParser.T__18) | (1 << vlgParser.T__19) | (1 << vlgParser.T__20) | (1 << vlgParser.T__21) | (1 << vlgParser.T__22) | (1 << vlgParser.T__23) | (1 << vlgParser.T__24) | (1 << vlgParser.T__25) | (1 << vlgParser.T__26) | (1 << vlgParser.T__27) | (1 << vlgParser.T__28) | (1 << vlgParser.T__29) | (1 << vlgParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (vlgParser.T__31 - 32)) | (1 << (vlgParser.T__32 - 32)) | (1 << (vlgParser.IDENTIFIER - 32)))) !== 0)) {
            this.state = 117;
            this.module_item();
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 123;
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

Module_portsContext.prototype.ansi_port_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ansi_port_declarationContext);
    } else {
        return this.getTypedRuleContext(Ansi_port_declarationContext,i);
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
        this.state = 125;
        this.match(vlgParser.T__3);
        this.state = 126;
        this.ansi_port_declaration();
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 127;
            this.match(vlgParser.T__4);
            this.state = 128;
            this.ansi_port_declaration();
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 134;
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


function Ansi_port_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_ansi_port_declaration;
    return this;
}

Ansi_port_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ansi_port_declarationContext.prototype.constructor = Ansi_port_declarationContext;

Ansi_port_declarationContext.prototype.port_direction = function() {
    return this.getTypedRuleContext(Port_directionContext,0);
};

Ansi_port_declarationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
};

Ansi_port_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAnsi_port_declaration(this);
	}
};

Ansi_port_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAnsi_port_declaration(this);
	}
};

Ansi_port_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAnsi_port_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Ansi_port_declarationContext = Ansi_port_declarationContext;

vlgParser.prototype.ansi_port_declaration = function() {

    var localctx = new Ansi_port_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, vlgParser.RULE_ansi_port_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.port_direction();
        this.state = 137;
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
        this.state = 139;
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

AlwaysContext.prototype.always_statement = function() {
    return this.getTypedRuleContext(Always_statementContext,0);
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

InitialContext.prototype.initial_statement = function() {
    return this.getTypedRuleContext(Initial_statementContext,0);
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

GateContext.prototype.gate_declaration = function() {
    return this.getTypedRuleContext(Gate_declarationContext,0);
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
        this.state = 148;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.T__15:
            localctx = new NetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.net_declaration();
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
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.gate_declaration();
            break;
        case vlgParser.T__16:
            localctx = new RegContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 143;
            this.reg_declaration();
            break;
        case vlgParser.T__30:
            localctx = new AssignContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 144;
            this.continuous_assign();
            break;
        case vlgParser.IDENTIFIER:
            localctx = new InstanceContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 145;
            this.module_instantiation();
            break;
        case vlgParser.T__31:
            localctx = new InitialContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 146;
            this.initial_statement();
            break;
        case vlgParser.T__32:
            localctx = new AlwaysContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 147;
            this.always_statement();
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
        this.state = 150;
        this.match(vlgParser.T__8);
        this.state = 151;
        this.match(vlgParser.T__9);
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__11) {
            this.state = 152;
            this.test_time();
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 158;
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
        this.state = 160;
        this.time_stamp();
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__12) {
            this.state = 161;
            this.time_assignment_list();
        }

        this.state = 164;
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

Time_stampContext.prototype.UNSIGNED_NUMBER = function() {
    return this.getToken(vlgParser.UNSIGNED_NUMBER, 0);
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
        this.state = 166;
        this.match(vlgParser.T__11);
        this.state = 167;
        localctx.num = this.match(vlgParser.UNSIGNED_NUMBER);
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
        this.state = 169;
        this.match(vlgParser.T__12);
        this.state = 170;
        this.time_assignment();
        this.state = 175;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 171;
            this.match(vlgParser.T__4);
            this.state = 172;
            this.time_assignment();
            this.state = 177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 178;
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

Time_assignmentContext.prototype.UNSIGNED_NUMBER = function() {
    return this.getToken(vlgParser.UNSIGNED_NUMBER, 0);
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
        this.state = 180;
        localctx.id = this.match(vlgParser.IDENTIFIER);
        this.state = 181;
        this.match(vlgParser.ASSIGN);
        this.state = 182;
        localctx.val = this.match(vlgParser.UNSIGNED_NUMBER);
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
    this.enterRule(localctx, 26, vlgParser.RULE_module_instantiation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        localctx.moduleid = this.match(vlgParser.IDENTIFIER);
        this.state = 185;
        localctx.instanceid = this.match(vlgParser.IDENTIFIER);
        this.state = 186;
        this.module_connections_list();
        this.state = 187;
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
    this.enterRule(localctx, 28, vlgParser.RULE_module_connections_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(vlgParser.T__3);
        this.state = 190;
        this.named_port_connection();
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 191;
            this.match(vlgParser.T__4);
            this.state = 192;
            this.named_port_connection();
            this.state = 197;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 198;
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
    this.port = null; // Token
    this.value = null; // Token
    return this;
}

Named_port_connectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_port_connectionContext.prototype.constructor = Named_port_connectionContext;

Named_port_connectionContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
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
    this.enterRule(localctx, 30, vlgParser.RULE_named_port_connection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(vlgParser.T__14);
        this.state = 201;
        localctx.port = this.match(vlgParser.IDENTIFIER);
        this.state = 202;
        this.match(vlgParser.T__3);
        this.state = 203;
        localctx.value = this.match(vlgParser.IDENTIFIER);
        this.state = 204;
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
    this.enterRule(localctx, 32, vlgParser.RULE_net_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(vlgParser.T__15);
        this.state = 207;
        this.identifier_list();
        this.state = 208;
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
    this.enterRule(localctx, 34, vlgParser.RULE_reg_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(vlgParser.T__16);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__36) {
            this.state = 211;
            this.range();
        }

        this.state = 214;
        this.identifier_list();
        this.state = 215;
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


function Gate_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_gate_declaration;
    this.instanceid = null; // Token
    this.ids = null; // Identifier_listContext
    return this;
}

Gate_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Gate_declarationContext.prototype.constructor = Gate_declarationContext;

Gate_declarationContext.prototype.gate_type = function() {
    return this.getTypedRuleContext(Gate_typeContext,0);
};

Gate_declarationContext.prototype.identifier_list = function() {
    return this.getTypedRuleContext(Identifier_listContext,0);
};

Gate_declarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

Gate_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterGate_declaration(this);
	}
};

Gate_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitGate_declaration(this);
	}
};

Gate_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitGate_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Gate_declarationContext = Gate_declarationContext;

vlgParser.prototype.gate_declaration = function() {

    var localctx = new Gate_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, vlgParser.RULE_gate_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.gate_type();
        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.IDENTIFIER) {
            this.state = 218;
            localctx.instanceid = this.match(vlgParser.IDENTIFIER);
        }

        this.state = 221;
        this.match(vlgParser.T__3);
        this.state = 222;
        localctx.ids = this.identifier_list();
        this.state = 223;
        this.match(vlgParser.T__5);
        this.state = 224;
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
        this.state = 226;
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

Continuous_assignContext.prototype.list_of_assignments = function() {
    return this.getTypedRuleContext(List_of_assignmentsContext,0);
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
        this.state = 228;
        this.match(vlgParser.T__30);
        this.state = 229;
        this.list_of_assignments();
        this.state = 230;
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


function List_of_assignmentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_list_of_assignments;
    return this;
}

List_of_assignmentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
List_of_assignmentsContext.prototype.constructor = List_of_assignmentsContext;

List_of_assignmentsContext.prototype.assignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentContext);
    } else {
        return this.getTypedRuleContext(AssignmentContext,i);
    }
};

List_of_assignmentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterList_of_assignments(this);
	}
};

List_of_assignmentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitList_of_assignments(this);
	}
};

List_of_assignmentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitList_of_assignments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.List_of_assignmentsContext = List_of_assignmentsContext;

vlgParser.prototype.list_of_assignments = function() {

    var localctx = new List_of_assignmentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, vlgParser.RULE_list_of_assignments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.assignment();
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 233;
            this.match(vlgParser.T__4);
            this.state = 234;
            this.assignment();
            this.state = 239;
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


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
};

AssignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

AssignmentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.AssignmentContext = AssignmentContext;

vlgParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, vlgParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(vlgParser.IDENTIFIER);
        this.state = 241;
        this.match(vlgParser.ASSIGN);
        this.state = 242;
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

BinaryExprContext.prototype.binary_operator = function() {
    return this.getTypedRuleContext(Binary_operatorContext,0);
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
        this.state = 252;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.NEG:
            localctx = new NegateExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 245;
            this.match(vlgParser.NEG);
            this.state = 246;
            this.expr(4);
            break;
        case vlgParser.T__3:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 247;
            this.match(vlgParser.T__3);
            this.state = 248;
            this.expr(0);
            this.state = 249;
            this.match(vlgParser.T__5);
            break;
        case vlgParser.IDENTIFIER:
            localctx = new IdExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 251;
            this.match(vlgParser.IDENTIFIER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 260;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new BinaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expr);
                this.state = 254;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 255;
                this.binary_operator();
                this.state = 256;
                this.expr(4); 
            }
            this.state = 262;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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

Binary_operatorContext.prototype.AND = function() {
    return this.getToken(vlgParser.AND, 0);
};

Binary_operatorContext.prototype.NAND = function() {
    return this.getToken(vlgParser.NAND, 0);
};

Binary_operatorContext.prototype.OR = function() {
    return this.getToken(vlgParser.OR, 0);
};

Binary_operatorContext.prototype.NOR = function() {
    return this.getToken(vlgParser.NOR, 0);
};

Binary_operatorContext.prototype.XOR = function() {
    return this.getToken(vlgParser.XOR, 0);
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
    this.enterRule(localctx, 48, vlgParser.RULE_binary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        _la = this._input.LA(1);
        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (vlgParser.NAND - 44)) | (1 << (vlgParser.NOR - 44)) | (1 << (vlgParser.XOR - 44)) | (1 << (vlgParser.AND - 44)) | (1 << (vlgParser.OR - 44)))) !== 0))) {
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

function PrimaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrimaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
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


function BinaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
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

BinaryExpressionContext.prototype.BINARY_OPERATOR = function() {
    return this.getToken(vlgParser.BINARY_OPERATOR, 0);
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


function UnaryPrimaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPrimaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryPrimaryExpressionContext.prototype.constructor = UnaryPrimaryExpressionContext;

vlgParser.UnaryPrimaryExpressionContext = UnaryPrimaryExpressionContext;

UnaryPrimaryExpressionContext.prototype.UNARY_OPERATOR = function() {
    return this.getToken(vlgParser.UNARY_OPERATOR, 0);
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



vlgParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 50;
    this.enterRecursionRule(localctx, 50, vlgParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.IDENTIFIER:
        case vlgParser.UNSIGNED_NUMBER:
            localctx = new PrimaryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 266;
            this.primary();
            break;
        case vlgParser.UNARY_OPERATOR:
            localctx = new UnaryPrimaryExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 267;
            this.match(vlgParser.UNARY_OPERATOR);
            this.state = 268;
            this.primary();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 276;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new BinaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, vlgParser.RULE_expression);
                this.state = 271;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 272;
                this.match(vlgParser.BINARY_OPERATOR);
                this.state = 273;
                this.expression(2); 
            }
            this.state = 278;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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

PrimaryContext.prototype.UNSIGNED_NUMBER = function() {
    return this.getToken(vlgParser.UNSIGNED_NUMBER, 0);
};

PrimaryContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
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
    this.enterRule(localctx, 52, vlgParser.RULE_primary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.IDENTIFIER || _la===vlgParser.UNSIGNED_NUMBER)) {
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


function Initial_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_initial_statement;
    return this;
}

Initial_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Initial_statementContext.prototype.constructor = Initial_statementContext;

Initial_statementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

Initial_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterInitial_statement(this);
	}
};

Initial_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitInitial_statement(this);
	}
};

Initial_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitInitial_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Initial_statementContext = Initial_statementContext;

vlgParser.prototype.initial_statement = function() {

    var localctx = new Initial_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, vlgParser.RULE_initial_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.match(vlgParser.T__31);
        this.state = 282;
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


function Always_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = vlgParser.RULE_always_statement;
    return this;
}

Always_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Always_statementContext.prototype.constructor = Always_statementContext;

Always_statementContext.prototype.event_list = function() {
    return this.getTypedRuleContext(Event_listContext,0);
};

Always_statementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

Always_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.enterAlways_statement(this);
	}
};

Always_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof vlgListener ) {
        listener.exitAlways_statement(this);
	}
};

Always_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof vlgVisitor ) {
        return visitor.visitAlways_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




vlgParser.Always_statementContext = Always_statementContext;

vlgParser.prototype.always_statement = function() {

    var localctx = new Always_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, vlgParser.RULE_always_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(vlgParser.T__32);
        this.state = 285;
        this.match(vlgParser.T__33);
        this.state = 286;
        this.match(vlgParser.T__3);
        this.state = 287;
        this.event_list();
        this.state = 288;
        this.match(vlgParser.T__5);
        this.state = 289;
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
    this.enterRule(localctx, 58, vlgParser.RULE_event_list);
    var _la = 0; // Token type
    try {
        this.state = 302;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.MUL:
            this.enterOuterAlt(localctx, 1);
            this.state = 291;
            this.event_every();
            break;
        case vlgParser.T__34:
        case vlgParser.T__35:
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 292;
            this.event_primary();
            this.state = 299;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===vlgParser.T__4 || _la===vlgParser.T__18) {
                this.state = 297;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case vlgParser.T__18:
                    this.state = 293;
                    this.match(vlgParser.T__18);
                    this.state = 294;
                    this.event_primary();
                    break;
                case vlgParser.T__4:
                    this.state = 295;
                    this.match(vlgParser.T__4);
                    this.state = 296;
                    this.event_primary();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 301;
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
    this.enterRule(localctx, 60, vlgParser.RULE_event_every);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
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

Event_primaryContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
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
    this.enterRule(localctx, 62, vlgParser.RULE_event_primary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===vlgParser.T__34 || _la===vlgParser.T__35) {
            this.state = 306;
            this.event_type();
        }

        this.state = 309;
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
    this.enterRule(localctx, 64, vlgParser.RULE_event_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
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
    this.enterRule(localctx, 66, vlgParser.RULE_statement);
    try {
        this.state = 317;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case vlgParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 313;
            this.blocking_assignment();
            this.state = 314;
            this.match(vlgParser.T__1);
            break;
        case vlgParser.T__9:
            this.enterOuterAlt(localctx, 2);
            this.state = 316;
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
    this.lhs = null; // Token
    this.rhs = null; // ExpressionContext
    return this;
}

Blocking_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Blocking_assignmentContext.prototype.constructor = Blocking_assignmentContext;

Blocking_assignmentContext.prototype.ASSIGN = function() {
    return this.getToken(vlgParser.ASSIGN, 0);
};

Blocking_assignmentContext.prototype.IDENTIFIER = function() {
    return this.getToken(vlgParser.IDENTIFIER, 0);
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
    this.enterRule(localctx, 68, vlgParser.RULE_blocking_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        localctx.lhs = this.match(vlgParser.IDENTIFIER);
        this.state = 320;
        this.match(vlgParser.ASSIGN);
        this.state = 321;
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
    this.enterRule(localctx, 70, vlgParser.RULE_seq_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this.match(vlgParser.T__9);
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__9 || _la===vlgParser.IDENTIFIER) {
            this.state = 324;
            this.statement();
            this.state = 329;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 330;
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
    this.enterRule(localctx, 72, vlgParser.RULE_defined_connection_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
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
    this.enterRule(localctx, 74, vlgParser.RULE_defined_connection_id_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.defined_connection_id();
        this.state = 339;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===vlgParser.T__4) {
            this.state = 335;
            this.match(vlgParser.T__4);
            this.state = 336;
            this.defined_connection_id();
            this.state = 341;
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

Identifier_listContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.IDENTIFIER);
    } else {
        return this.getToken(vlgParser.IDENTIFIER, i);
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
    this.enterRule(localctx, 76, vlgParser.RULE_identifier_list);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
        this.match(vlgParser.IDENTIFIER);
        this.state = 347;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 343;
                this.match(vlgParser.T__4);
                this.state = 344;
                this.match(vlgParser.IDENTIFIER); 
            }
            this.state = 349;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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

NumberContext.prototype.UNSIGNED_NUMBER = function() {
    return this.getToken(vlgParser.UNSIGNED_NUMBER, 0);
};

NumberContext.prototype.BINARY_NUMBER = function() {
    return this.getToken(vlgParser.BINARY_NUMBER, 0);
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
    this.enterRule(localctx, 78, vlgParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        _la = this._input.LA(1);
        if(!(_la===vlgParser.UNSIGNED_NUMBER || _la===vlgParser.BINARY_NUMBER)) {
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

RangeContext.prototype.UNSIGNED_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(vlgParser.UNSIGNED_NUMBER);
    } else {
        return this.getToken(vlgParser.UNSIGNED_NUMBER, i);
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
    this.enterRule(localctx, 80, vlgParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(vlgParser.T__36);
        this.state = 353;
        localctx.start = this.match(vlgParser.UNSIGNED_NUMBER);
        this.state = 354;
        this.match(vlgParser.T__37);
        this.state = 355;
        localctx.end = this.match(vlgParser.UNSIGNED_NUMBER);
        this.state = 356;
        this.match(vlgParser.T__38);
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
	case 25:
			return this.expression_sempred(localctx, predIndex);
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

vlgParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.vlgParser = vlgParser;
