// Generated from c:\code\JS\logic2\src\grammar\vlg.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

 /* eslint-disable */ 


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002/\u0152\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003)\u0003)\u0003)\u0003)\u0007)\u0110\n)\f)\u000e)\u0113",
    "\u000b)\u0003)\u0005)\u0116\n)\u0003)\u0005)\u0119\n)\u0003)\u0003)",
    "\u0003*\u0003*\u0003*\u0003*\u0007*\u0121\n*\f*\u000e*\u0124\u000b*",
    "\u0003*\u0003*\u0003*\u0003*\u0003*\u0003+\u0006+\u012c\n+\r+\u000e",
    "+\u012d\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003-\u0003",
    "-\u0007-\u0139\n-\f-\u000e-\u013c\u000b-\u0003.\u0006.\u013f\n.\r.\u000e",
    ".\u0140\u0003/\u0003/\u0003/\u00030\u00030\u00030\u00031\u00061\u014a",
    "\n1\r1\u000e1\u014b\u00032\u00052\u014f\n2\u00033\u00033\u0004\u0111",
    "\u0122\u00024\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$",
    "G%I&K\'M(O)Q*S+U,W-Y.[/]\u0002_\u0002a\u0002c\u0002e\u0002\u0003\u0002",
    "\b\u0003\u0003\f\f\u0005\u0002\u000b\f\u000e\u000f\"\"\u0005\u0002C",
    "\\aac|\u0007\u0002&&2;C\\aac|\u0005\u000223zz||\u0003\u00022;\u0002",
    "\u0153\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002",
    "+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003",
    "\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002",
    "\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002",
    "\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002",
    "\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002",
    "A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003",
    "\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002",
    "\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002",
    "\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002",
    "\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002",
    "W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003",
    "\u0002\u0002\u0002\u0003g\u0003\u0002\u0002\u0002\u0005n\u0003\u0002",
    "\u0002\u0002\u0007p\u0003\u0002\u0002\u0002\tz\u0003\u0002\u0002\u0002",
    "\u000b|\u0003\u0002\u0002\u0002\r~\u0003\u0002\u0002\u0002\u000f\u0080",
    "\u0003\u0002\u0002\u0002\u0011\u0086\u0003\u0002\u0002\u0002\u0013\u008d",
    "\u0003\u0002\u0002\u0002\u0015\u0092\u0003\u0002\u0002\u0002\u0017\u0098",
    "\u0003\u0002\u0002\u0002\u0019\u009c\u0003\u0002\u0002\u0002\u001b\u009e",
    "\u0003\u0002\u0002\u0002\u001d\u00a0\u0003\u0002\u0002\u0002\u001f\u00a2",
    "\u0003\u0002\u0002\u0002!\u00a7\u0003\u0002\u0002\u0002#\u00ab\u0003",
    "\u0002\u0002\u0002%\u00ae\u0003\u0002\u0002\u0002\'\u00b2\u0003\u0002",
    "\u0002\u0002)\u00b7\u0003\u0002\u0002\u0002+\u00bb\u0003\u0002\u0002",
    "\u0002-\u00c0\u0003\u0002\u0002\u0002/\u00c4\u0003\u0002\u0002\u0002",
    "1\u00cc\u0003\u0002\u0002\u00023\u00d5\u0003\u0002\u0002\u00025\u00dc",
    "\u0003\u0002\u0002\u00027\u00e5\u0003\u0002\u0002\u00029\u00ec\u0003",
    "\u0002\u0002\u0002;\u00f3\u0003\u0002\u0002\u0002=\u00f5\u0003\u0002",
    "\u0002\u0002?\u00f7\u0003\u0002\u0002\u0002A\u00f9\u0003\u0002\u0002",
    "\u0002C\u00fc\u0003\u0002\u0002\u0002E\u00ff\u0003\u0002\u0002\u0002",
    "G\u0101\u0003\u0002\u0002\u0002I\u0103\u0003\u0002\u0002\u0002K\u0105",
    "\u0003\u0002\u0002\u0002M\u0107\u0003\u0002\u0002\u0002O\u0109\u0003",
    "\u0002\u0002\u0002Q\u010b\u0003\u0002\u0002\u0002S\u011c\u0003\u0002",
    "\u0002\u0002U\u012b\u0003\u0002\u0002\u0002W\u0131\u0003\u0002\u0002",
    "\u0002Y\u0136\u0003\u0002\u0002\u0002[\u013e\u0003\u0002\u0002\u0002",
    "]\u0142\u0003\u0002\u0002\u0002_\u0145\u0003\u0002\u0002\u0002a\u0149",
    "\u0003\u0002\u0002\u0002c\u014e\u0003\u0002\u0002\u0002e\u0150\u0003",
    "\u0002\u0002\u0002gh\u0007o\u0002\u0002hi\u0007q\u0002\u0002ij\u0007",
    "f\u0002\u0002jk\u0007w\u0002\u0002kl\u0007n\u0002\u0002lm\u0007g\u0002",
    "\u0002m\u0004\u0003\u0002\u0002\u0002no\u0007=\u0002\u0002o\u0006\u0003",
    "\u0002\u0002\u0002pq\u0007g\u0002\u0002qr\u0007p\u0002\u0002rs\u0007",
    "f\u0002\u0002st\u0007o\u0002\u0002tu\u0007q\u0002\u0002uv\u0007f\u0002",
    "\u0002vw\u0007w\u0002\u0002wx\u0007n\u0002\u0002xy\u0007g\u0002\u0002",
    "y\b\u0003\u0002\u0002\u0002z{\u0007*\u0002\u0002{\n\u0003\u0002\u0002",
    "\u0002|}\u0007.\u0002\u0002}\f\u0003\u0002\u0002\u0002~\u007f\u0007",
    "+\u0002\u0002\u007f\u000e\u0003\u0002\u0002\u0002\u0080\u0081\u0007",
    "k\u0002\u0002\u0081\u0082\u0007p\u0002\u0002\u0082\u0083\u0007r\u0002",
    "\u0002\u0083\u0084\u0007w\u0002\u0002\u0084\u0085\u0007v\u0002\u0002",
    "\u0085\u0010\u0003\u0002\u0002\u0002\u0086\u0087\u0007q\u0002\u0002",
    "\u0087\u0088\u0007w\u0002\u0002\u0088\u0089\u0007v\u0002\u0002\u0089",
    "\u008a\u0007r\u0002\u0002\u008a\u008b\u0007w\u0002\u0002\u008b\u008c",
    "\u0007v\u0002\u0002\u008c\u0012\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0007v\u0002\u0002\u008e\u008f\u0007g\u0002\u0002\u008f\u0090\u0007",
    "u\u0002\u0002\u0090\u0091\u0007v\u0002\u0002\u0091\u0014\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0007d\u0002\u0002\u0093\u0094\u0007g\u0002",
    "\u0002\u0094\u0095\u0007i\u0002\u0002\u0095\u0096\u0007k\u0002\u0002",
    "\u0096\u0097\u0007p\u0002\u0002\u0097\u0016\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0007g\u0002\u0002\u0099\u009a\u0007p\u0002\u0002\u009a",
    "\u009b\u0007f\u0002\u0002\u009b\u0018\u0003\u0002\u0002\u0002\u009c",
    "\u009d\u0007%\u0002\u0002\u009d\u001a\u0003\u0002\u0002\u0002\u009e",
    "\u009f\u0007}\u0002\u0002\u009f\u001c\u0003\u0002\u0002\u0002\u00a0",
    "\u00a1\u0007\u007f\u0002\u0002\u00a1\u001e\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0007y\u0002\u0002\u00a3\u00a4\u0007k\u0002\u0002\u00a4\u00a5",
    "\u0007t\u0002\u0002\u00a5\u00a6\u0007g\u0002\u0002\u00a6 \u0003\u0002",
    "\u0002\u0002\u00a7\u00a8\u0007c\u0002\u0002\u00a8\u00a9\u0007p\u0002",
    "\u0002\u00a9\u00aa\u0007f\u0002\u0002\u00aa\"\u0003\u0002\u0002\u0002",
    "\u00ab\u00ac\u0007q\u0002\u0002\u00ac\u00ad\u0007t\u0002\u0002\u00ad",
    "$\u0003\u0002\u0002\u0002\u00ae\u00af\u0007z\u0002\u0002\u00af\u00b0",
    "\u0007q\u0002\u0002\u00b0\u00b1\u0007t\u0002\u0002\u00b1&\u0003\u0002",
    "\u0002\u0002\u00b2\u00b3\u0007p\u0002\u0002\u00b3\u00b4\u0007c\u0002",
    "\u0002\u00b4\u00b5\u0007p\u0002\u0002\u00b5\u00b6\u0007f\u0002\u0002",
    "\u00b6(\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007p\u0002\u0002\u00b8",
    "\u00b9\u0007q\u0002\u0002\u00b9\u00ba\u0007t\u0002\u0002\u00ba*\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0007z\u0002\u0002\u00bc\u00bd\u0007",
    "p\u0002\u0002\u00bd\u00be\u0007q\u0002\u0002\u00be\u00bf\u0007t\u0002",
    "\u0002\u00bf,\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007p\u0002\u0002",
    "\u00c1\u00c2\u0007q\u0002\u0002\u00c2\u00c3\u0007v\u0002\u0002\u00c3",
    ".\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007e\u0002\u0002\u00c5\u00c6",
    "\u0007q\u0002\u0002\u00c6\u00c7\u0007p\u0002\u0002\u00c7\u00c8\u0007",
    "v\u0002\u0002\u00c8\u00c9\u0007t\u0002\u0002\u00c9\u00ca\u0007q\u0002",
    "\u0002\u00ca\u00cb\u0007n\u0002\u0002\u00cb0\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0007t\u0002\u0002\u00cd\u00ce\u0007g\u0002\u0002\u00ce",
    "\u00cf\u0007u\u0002\u0002\u00cf\u00d0\u0007r\u0002\u0002\u00d0\u00d1",
    "\u0007q\u0002\u0002\u00d1\u00d2\u0007p\u0002\u0002\u00d2\u00d3\u0007",
    "u\u0002\u0002\u00d3\u00d4\u0007g\u0002\u0002\u00d42\u0003\u0002\u0002",
    "\u0002\u00d5\u00d6\u0007d\u0002\u0002\u00d6\u00d7\u0007w\u0002\u0002",
    "\u00d7\u00d8\u0007h\u0002\u0002\u00d8\u00d9\u0007h\u0002\u0002\u00d9",
    "\u00da\u0007g\u0002\u0002\u00da\u00db\u0007t\u0002\u0002\u00db4\u0003",
    "\u0002\u0002\u0002\u00dc\u00dd\u0007u\u0002\u0002\u00dd\u00de\u0007",
    "g\u0002\u0002\u00de\u00df\u0007x\u0002\u0002\u00df\u00e0\u0007g\u0002",
    "\u0002\u00e0\u00e1\u0007p\u0002\u0002\u00e1\u00e2\u0007u\u0002\u0002",
    "\u00e2\u00e3\u0007g\u0002\u0002\u00e3\u00e4\u0007i\u0002\u0002\u00e4",
    "6\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007p\u0002\u0002\u00e6\u00e7",
    "\u0007w\u0002\u0002\u00e7\u00e8\u0007o\u0002\u0002\u00e8\u00e9\u0007",
    "d\u0002\u0002\u00e9\u00ea\u0007g\u0002\u0002\u00ea\u00eb\u0007t\u0002",
    "\u0002\u00eb8\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007c\u0002\u0002",
    "\u00ed\u00ee\u0007u\u0002\u0002\u00ee\u00ef\u0007u\u0002\u0002\u00ef",
    "\u00f0\u0007k\u0002\u0002\u00f0\u00f1\u0007i\u0002\u0002\u00f1\u00f2",
    "\u0007p\u0002\u0002\u00f2:\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007",
    "0\u0002\u0002\u00f4<\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007#\u0002",
    "\u0002\u00f6>\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007\u0080\u0002",
    "\u0002\u00f8@\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\u0080\u0002",
    "\u0002\u00fa\u00fb\u0007(\u0002\u0002\u00fbB\u0003\u0002\u0002\u0002",
    "\u00fc\u00fd\u0007\u0080\u0002\u0002\u00fd\u00fe\u0007~\u0002\u0002",
    "\u00feD\u0003\u0002\u0002\u0002\u00ff\u0100\u0007`\u0002\u0002\u0100",
    "F\u0003\u0002\u0002\u0002\u0101\u0102\u0007?\u0002\u0002\u0102H\u0003",
    "\u0002\u0002\u0002\u0103\u0104\u0007-\u0002\u0002\u0104J\u0003\u0002",
    "\u0002\u0002\u0105\u0106\u0007/\u0002\u0002\u0106L\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u0007(\u0002\u0002\u0108N\u0003\u0002\u0002\u0002",
    "\u0109\u010a\u0007~\u0002\u0002\u010aP\u0003\u0002\u0002\u0002\u010b",
    "\u010c\u00071\u0002\u0002\u010c\u010d\u00071\u0002\u0002\u010d\u0111",
    "\u0003\u0002\u0002\u0002\u010e\u0110\u000b\u0002\u0002\u0002\u010f\u010e",
    "\u0003\u0002\u0002\u0002\u0110\u0113\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0003\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0112\u0115",
    "\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0114\u0116",
    "\u0007\u000f\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u0003\u0002\u0002\u0002\u0116\u0118\u0003\u0002\u0002\u0002\u0117\u0119",
    "\t\u0002\u0002\u0002\u0118\u0117\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0003\u0002\u0002\u0002\u011a\u011b\b)\u0002\u0002\u011bR\u0003\u0002",
    "\u0002\u0002\u011c\u011d\u00071\u0002\u0002\u011d\u011e\u0007,\u0002",
    "\u0002\u011e\u0122\u0003\u0002\u0002\u0002\u011f\u0121\u000b\u0002\u0002",
    "\u0002\u0120\u011f\u0003\u0002\u0002\u0002\u0121\u0124\u0003\u0002\u0002",
    "\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0122\u0120\u0003\u0002\u0002",
    "\u0002\u0123\u0125\u0003\u0002\u0002\u0002\u0124\u0122\u0003\u0002\u0002",
    "\u0002\u0125\u0126\u0007,\u0002\u0002\u0126\u0127\u00071\u0002\u0002",
    "\u0127\u0128\u0003\u0002\u0002\u0002\u0128\u0129\b*\u0002\u0002\u0129",
    "T\u0003\u0002\u0002\u0002\u012a\u012c\t\u0003\u0002\u0002\u012b\u012a",
    "\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002\u0002\u0002\u012d\u012b",
    "\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u012f",
    "\u0003\u0002\u0002\u0002\u012f\u0130\b+\u0002\u0002\u0130V\u0003\u0002",
    "\u0002\u0002\u0131\u0132\u0007O\u0002\u0002\u0132\u0133\u0007c\u0002",
    "\u0002\u0133\u0134\u0007k\u0002\u0002\u0134\u0135\u0007p\u0002\u0002",
    "\u0135X\u0003\u0002\u0002\u0002\u0136\u013a\t\u0004\u0002\u0002\u0137",
    "\u0139\t\u0005\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0139",
    "\u013c\u0003\u0002\u0002\u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013a",
    "\u013b\u0003\u0002\u0002\u0002\u013bZ\u0003\u0002\u0002\u0002\u013c",
    "\u013a\u0003\u0002\u0002\u0002\u013d\u013f\u0005e3\u0002\u013e\u013d",
    "\u0003\u0002\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u013e",
    "\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u0141\\",
    "\u0003\u0002\u0002\u0002\u0142\u0143\u0005_0\u0002\u0143\u0144\u0005",
    "a1\u0002\u0144^\u0003\u0002\u0002\u0002\u0145\u0146\u0007b\u0002\u0002",
    "\u0146\u0147\u0007d\u0002\u0002\u0147`\u0003\u0002\u0002\u0002\u0148",
    "\u014a\u0005c2\u0002\u0149\u0148\u0003\u0002\u0002\u0002\u014a\u014b",
    "\u0003\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014b\u014c",
    "\u0003\u0002\u0002\u0002\u014cb\u0003\u0002\u0002\u0002\u014d\u014f",
    "\t\u0006\u0002\u0002\u014e\u014d\u0003\u0002\u0002\u0002\u014fd\u0003",
    "\u0002\u0002\u0002\u0150\u0151\t\u0007\u0002\u0002\u0151f\u0003\u0002",
    "\u0002\u0002\f\u0002\u0111\u0115\u0118\u0122\u012d\u013a\u0140\u014b",
    "\u014e\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function vlgLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

vlgLexer.prototype = Object.create(antlr4.Lexer.prototype);
vlgLexer.prototype.constructor = vlgLexer;

Object.defineProperty(vlgLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

vlgLexer.EOF = antlr4.Token.EOF;
vlgLexer.T__0 = 1;
vlgLexer.T__1 = 2;
vlgLexer.T__2 = 3;
vlgLexer.T__3 = 4;
vlgLexer.T__4 = 5;
vlgLexer.T__5 = 6;
vlgLexer.T__6 = 7;
vlgLexer.T__7 = 8;
vlgLexer.T__8 = 9;
vlgLexer.T__9 = 10;
vlgLexer.T__10 = 11;
vlgLexer.T__11 = 12;
vlgLexer.T__12 = 13;
vlgLexer.T__13 = 14;
vlgLexer.T__14 = 15;
vlgLexer.T__15 = 16;
vlgLexer.T__16 = 17;
vlgLexer.T__17 = 18;
vlgLexer.T__18 = 19;
vlgLexer.T__19 = 20;
vlgLexer.T__20 = 21;
vlgLexer.T__21 = 22;
vlgLexer.T__22 = 23;
vlgLexer.T__23 = 24;
vlgLexer.T__24 = 25;
vlgLexer.T__25 = 26;
vlgLexer.T__26 = 27;
vlgLexer.T__27 = 28;
vlgLexer.T__28 = 29;
vlgLexer.NOT = 30;
vlgLexer.NEG = 31;
vlgLexer.NAND = 32;
vlgLexer.NOR = 33;
vlgLexer.XOR = 34;
vlgLexer.ASSIGN = 35;
vlgLexer.PLUS = 36;
vlgLexer.MINUS = 37;
vlgLexer.AND = 38;
vlgLexer.OR = 39;
vlgLexer.ONE_LINE_COMMENT = 40;
vlgLexer.BLOCK_COMMENT = 41;
vlgLexer.WHITE_SPACE = 42;
vlgLexer.MAIN = 43;
vlgLexer.IDENTIFIER = 44;
vlgLexer.UNSIGNED_NUMBER = 45;

vlgLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

vlgLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

vlgLexer.prototype.literalNames = [ null, "'module'", "';'", "'endmodule'", 
                                    "'('", "','", "')'", "'input'", "'output'", 
                                    "'test'", "'begin'", "'end'", "'#'", 
                                    "'{'", "'}'", "'wire'", "'and'", "'or'", 
                                    "'xor'", "'nand'", "'nor'", "'xnor'", 
                                    "'not'", "'control'", "'response'", 
                                    "'buffer'", "'sevenseg'", "'number'", 
                                    "'assign'", "'.'", "'!'", "'~'", "'~&'", 
                                    "'~|'", "'^'", "'='", "'+'", "'-'", 
                                    "'&'", "'|'", null, null, null, "'Main'" ];

vlgLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     "NOT", "NEG", "NAND", "NOR", "XOR", 
                                     "ASSIGN", "PLUS", "MINUS", "AND", "OR", 
                                     "ONE_LINE_COMMENT", "BLOCK_COMMENT", 
                                     "WHITE_SPACE", "MAIN", "IDENTIFIER", 
                                     "UNSIGNED_NUMBER" ];

vlgLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                 "T__5", "T__6", "T__7", "T__8", "T__9", 
                                 "T__10", "T__11", "T__12", "T__13", "T__14", 
                                 "T__15", "T__16", "T__17", "T__18", "T__19", 
                                 "T__20", "T__21", "T__22", "T__23", "T__24", 
                                 "T__25", "T__26", "T__27", "T__28", "NOT", 
                                 "NEG", "NAND", "NOR", "XOR", "ASSIGN", 
                                 "PLUS", "MINUS", "AND", "OR", "ONE_LINE_COMMENT", 
                                 "BLOCK_COMMENT", "WHITE_SPACE", "MAIN", 
                                 "IDENTIFIER", "UNSIGNED_NUMBER", "BINARY_NUMBER", 
                                 "BINARY_BASE", "BINARY_VALUE", "BINARY_DIGIT", 
                                 "DECIMAL_DIGIT" ];

vlgLexer.prototype.grammarFileName = "vlg.g4";


exports.vlgLexer = vlgLexer;

