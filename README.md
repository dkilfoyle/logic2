# Logic Simulator 2

A work-in-progress/experimental IDE for experimentation with Francis Stokes ([Low Level Javascript](https://www.youtube.com/c/LowLevelJavaScript/featured)) [Digital Circuit Simulator](https://github.com/LowLevelJavaScript/Digital-Logic-Simulator)

[Live Web Version](https://dkilfoyle.github.io/logic2/)

![Screenshot](https://raw.githubusercontent.com/dkilfoyle/logic2/master/ScreenShot.png)

## Installation

```bash
npm install
npm run serve
```

## Features

1. Micro-subset verilog-like DSL for coding the array of logic gates (parsed using Antlr)
2. Monaco-based code editor with automatic linting/error reporting, smart indentation, code folding, hints
3. IDE docking ui courtesy of JupyterLab's Lumino widgets
4. Schematic visualisation courtesy of d3-hwschematic
5. Testbench simulation with graphical trace output and schematic animation
6. Circuit description as gates, boolean logic or verilog behavioural model
7. Generate arbitrary outputs from truth table and Sum of Products or Karnaugh Map

## DSL

1. Modules define a group of gates (eg a logic chip) and the inputs and outputs (eg the pins) between modules

   ```verilog
     module MyModule(input A,
                     input B,
                     output Q)
       // gate, wire and instance statements here
     endmodule
   ```

2. Gates define a basic logic function, a unique identifier for this gate, and the inputs to the gate

   ```verilog
     wire myAndGate;
     and(myAndGate, A, B); // equivalent to myAndGate = A & B
   ```

3. Instances of gates define a namespaced copy of a module and the connections between the parent module and the instance module

   ```verilog
     MyModule m1(.A(parentVar1), .B(parentVar2), .Q(parentVar3))
   ```

4. All programs must have a "main" module which is automatically instanced and serves as the entry point.

    a) The main module automatically includes a "clock" input.
    b) The inputs to the main module will be external "control" gates eg buttons/sensors

5. The main module should include a testbench section to define the value of the control gates at different time points

   ```verilog
    test begin
        #00 {a=0, b=0};
        #05 {a=0, b=1};
        #10 {a=1, b=0};
        #15 {a=1, b=1};
    end
   ```

6. Limited support for verilog behavioural modelling - initial and always blocks, if/case statements

## TODO

1. Ben Eater 8 bit CPU simulation - done
    1. Add $compile to generate Ben Eater machine code
    2. Convert bus to module with custom $display port positions
    3. Move tristate buffer into individual registers
2. Speed up simulation and compilation
    1. Gates should be lookup, not array.find/filter
    2. WebWorker? - failed - can't pass class objects
    3. Simulation progress monitor
3. More advanced CPU designs - currently simulation too slow, makes this infeasible

## Acknowledgements

1. [LowLevelJavascript Digital Circuit Simulator](https://www.youtube.com/c/LowLevelJavaScript)
2. [Antlr](https://www.antlr.org/)
3. [Monaco Editor](https://microsoft.github.io/monaco-editor/)
4. [d3-hwschematic](https://github.com/Nic30/d3-hwschematic)
5. [Lumino Widgets](https://github.com/jupyterlab/lumino)
6. [Vue](https://vuejs.org) 
7. [Buefy](https://buefy.org/)
