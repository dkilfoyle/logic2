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

## TODO

1. More sample code circuits
    1. 4 bit ripple adder (done)
    2. 4 to 1 multiplexer with bit vector select line
    3. Ripple counter (done)
    4. Shift register (done)
    5. FSMs (done)
2. More custom nodes eg bits to number (done), led bar (done)
3. Reuse intermediary gates
4. Support bit vector type
5. More linting (WIP)
6. Custom schematic node renderer eg seven segment (done)
7. d3-hwschematic - how can import without webworker problem
8. d3-hwschematic - remove need for custom line exports.GenericNodeRenderer = GenericNodeRenderer;
9. Future?
    1. Truth tables and Karnaugh maps to generate optimised logic gates (done)
    2. Custom d3-based traces view instead of dygraphs (done)
    3. bit vector eg 4 bit ripple adder with vector input/output
    4. behavioural logic eg d flip flop (initial support done)

## Acknowledgements

1. [LowLevelJavascript Digital Circuit Simulator](https://www.youtube.com/c/LowLevelJavaScript)
2. [Antlr](https://www.antlr.org/)
3. [Monaco Editor](https://microsoft.github.io/monaco-editor/)
4. [d3-hwschematic](https://github.com/Nic30/d3-hwschematic)
5. [Lumino Widgets](https://github.com/jupyterlab/lumino)
6. [Vue](https://vuejs.org) 
7. [Buefy](https://buefy.org/)
