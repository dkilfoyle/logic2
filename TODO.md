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
6. If/else eg register with enable and reset lines - Example 4.20
7. Case statement - example 4.25 7-seg decoder
8. Concatenation and parameter - example 5.1 full addder
9. Comparator - example 5.3
10. Tests! - some
11. Unfortunately should switch from Listener to Visitor so don't need to pass values by stacks
