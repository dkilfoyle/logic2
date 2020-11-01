# Logic Simulator 2

An IDE for experimentation with Francis Stokes ([Low Level Javascript](https://www.youtube.com/c/LowLevelJavaScript/featured)) [Digital Circuit Simulator](https://github.com/LowLevelJavaScript/Digital-Logic-Simulator)

![Screenshot](https://raw.githubusercontent.com/dkilfoyle/logic2/master/ScreenShot.png)

## Installation

```bash
npm install
npm serve
```

## Features

1. Micro-subset verilog-like DSL for coding the array of logic gates (parsed using Antlr)
2. Monaco-based code editor with automatic linting/error reporting, smart indentation, code folding, hints
3. Schematic visualisation courtesy of d3-hwschematic
4. Testbench simulation with graphical trace output
5. Coming soon: simulation timeline animation
6. IDE ui courtesy of JupyterLab's Lumino widgets

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

1. Github pages hosted web app
1. More sample code circuits
   1. ~~One hot encoder~~
   1. ~~2 to 1 multiplexer2_1~~
   1. ~~7 segment encoder~~
   1. ~~1 bit adder~~
   1. ~~D flip-flop~~
   1. 4 bit ripple adder
   1. 4 to 1 multiplexer with bit vector select line
   1. Ripple counter
   1. Shift register
   1. FSMs
1. ~~Support bitwise statements to generate the logic gates~~ eg Q = (A & B) | ~C
1. Reuse intermediary gates
1. Support bit vector type
1. Improve traces with time slider to animate state
1. Improve schematic with time slider to animate state
1. More linting
1. ~~Code hints (Ctrl-Space)~~, ~~snippets (Ctrl-Shift-Space)~~, ~~comment hotkey~~,
1. Future?
   a) Truth tables to generate optimised logic gates

## Acknowledgements

1. [LowLevelJavascript Digital Circuit Simulator](https://www.youtube.com/c/LowLevelJavaScript)
2. [Antlr](https://www.antlr.org/)
3. [Monaco Editor](https://microsoft.github.io/monaco-editor/)
4. [Dygraphs](https://www.dygraphs.com/)
5. [d3-hwschematic](https://github.com/Nic30/d3-hwschematic)
6. [Lumino Widgets](https://github.com/jupyterlab/lumino)
