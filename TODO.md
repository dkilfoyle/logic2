1. Fix seven seg display - done
2. Implement a component class - done
   1. Component {state:Numeric, inputs:[], update(), setValue(), getValue()}
      1. Gate extends Component {logicFn: and, or etc, function in update}
      2. SevenSeg
      3. Number
      4. MaskableComponent { inputMasks: [] = which bits the input contributes to, setValue(x, mask), update calls setValue for each input }
         1. Register
         2. Wire
3. Replace Buefy with Tailwind - maybe stick with buefy
4. Custom instance breadcrumb component - done
5. Implement continuous assignment operator precedence - see Table 4.1 of Digital Design and Computer Architecture: ~, \*/, +-, <<>>, &~&, ^~^, |~|, ?: Use Full adder to test
6. If/else eg register with enable and reset lines - Example 4.20 - done
7. Case statement - example 4.25 7-seg decoder - done
8. Concatenation and parameter - example 5.1 full addder - done
9. Comparator - example 5.3
10. Tests! - some
11. Unfortunately should switch from Listener to Visitor so don't need to pass values by stacks - argh, too late
12. Monaco language definition - WIP
13. Register file
    1. Arrays of numeric - done
    2. ternary operator - done
14. MIPS single cycle processor - WIP
15. MIPS single cycle processor
16. MIPS multi cycle processor
17. allow behavioural assign ie assign y = a + b instead of using always block
18. Wires and Outputs not declared as gates should be silently declared as a WireGate with same id - done
19. Error markers in miniview - done
20. Separate MemoryGate into RegGate and ArrayGate
21. Renderers for concatenation (a WireGate with multiple inputs) and slice (a WireGate that is connected to multiple gates with different offsets)
22. ANTLR based formatter - use listener to repopulate text - will only work if valid input
23. Tooltip for nodes - show type, input values, output vale and glow the connections
