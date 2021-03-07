# MIPS

## Structure

1. Computer
   1. Processor (Mips)
      1. Controller
         1. MainDecoder
         2. ALUDecoder
      2. Datapath
   2. Memory
      1. InstructionMemory
      2. DataMemory

## Registers

| Name    | Number | Use                      |
| ------- | ------ | ------------------------ |
| \$0     | 0      | Constant 0               |
| \$at    | 1      | assembler temporary      |
| \$v0-v1 | 2-3    | procedure return val     |
| \$a0-a3 | 4-7    | procedure arguments      |
| \$t0-t7 | 8-15   | temp vars                |
| \$s0-s7 | 16-23  | saved vars               |
| \$t8-t9 | 24-25  | temp vars                |
| \$gp    | 28     | global pointer           |
| \$sp    | 29     | stack pointer            |
| \$fp    | 30     | frame pointer            |
| \$ra    | 31     | procedure return address |

## RAM

MIPS RAM is byte addressable
32 bits = 4 \* 8 bit bytes so each 32 bit word starts at a multiple of 4

To convert a byte address to a word address divide by 4 (shift right 2)

## Instruction Types

### R Type

| op     | rs        | rt        | rd       | shamt     | funct  |
| ------ | --------- | --------- | -------- | --------- | ------ |
| 6 bits | 5 bits    | 5 bits    | 5 bits   | 5 bits    | 6 bits |
| 31:26  | 25:21     | 20:16     | 15:11    | 10:6      | 5:0    |
| 000000 | src reg 1 | src reg 2 | dest reg | shft amnt | funct  |

### I Type

| op      | rs      | rt              | imm                  |
| ------- | ------- | --------------- | -------------------- |
| 6 bits  | 5 bits  | 5 bits          | 16 bits              |
| 31:26   | 25:21   | 20:16           | 15:0                 |
| op code | src reg | dest or src reg | num (2s comp if neg) |

### J Type

| op     | addr    |
| ------ | ------- |
| 6 bits | 26 bits |
| 31:26  | 25:0    |

## Instruction Codes

### Op codes

### Funct codes

| Funct       | Name | Operation              |
| ----------- | ---- | ---------------------- |
| 000000 (0)  | sll  | [rd] = [rt] << shamt   |
| 000001 (1)  | srl  | [rd] = [rt] >> shamt   |
| 001000 (8)  | jr   | PC = [rs]              |
| 100000 (32) | add  | [rd] = [rs] + [rt]     |
| 100010 (34) | sub  | [rd] = [rs] - [rt]     |
| 100100 (36) | and  | [rd] = [rs] & [rt]     |
| 100101 (37) | or   | [rd] = [rs] or [rt]    |
| 100110 (38) | xor  | [rd] = [rs] ^ [rt]     |
| 100111 (39) | nor  | [rd] = ~([rs] or [rt]) |
| 101010 (42) | slt  | [rd] = [rs] < [rt]     |

## Datapath

| Data wire | Size | Description                                                                              |
| --------- | ---: | ---------------------------------------------------------------------------------------- |
| PC        |   32 | Program counter, the address (in bytes) of the current instruction in instruction memory |
| Instr     |   32 | The current instruction (R, J or I type) read from instruction memory at [PC]            |
| SrcA      |   32 | Input A of ALU = RegisterFile[A1=RI.rs] -> RD1                                           |
| SrcB      |   32 | ALUSrc ? SignImm : RegisterFile[A2=RI.rt] -> RD2                                         |
| SignImm   |   32 | 32 bit sign extended ITypeInstr.imm (16 bits)                                            |
| Zero      |    1 | ALUResult == 0                                                                           |
| ALUResult |   32 | Result of the ALU operation specified in ALUControl[2:0]                                 |
| WriteData |   32 | RegisterFile.RD2 = RegisterFile[A2=RI.rt] -> DataMemory.WD or SrcB                       |
| ReadData  |   32 | Output from DataMemory.RD                                                                |
| Result    |   32 | MemToReg ? ReadData : ALUResult                                                          |
| PCPlus4   |   32 | PC + 4 = next PC in bytes                                                                |
| PCBranch  |   32 | PCPlus4 + SignImm << 2 = advance PC by SignImm number of instructions                    |
| PCJump    |   32 | {PC[31:26], J.addr<<2} = set PC to word J.addr = byte J.addr<<2                          |
| PCSrc     |    1 | Branch & Zero = control line select between PCBranch and PCPlus4                         |
| PCNext    |   32 | Jump ? PCJump : PCBranch & PCSrc result                                                  |

## Control Unit

### Main Decoder

Decodes the opcode to set 1 bit control lines

| Control Line | Size | Description                                                                            |
| ------------ | ---: | -------------------------------------------------------------------------------------- |
| MemToReg     |    1 | Result = MemToReg ? ReadData : ALUResult                                               |
| MemWrite     |    1 | If MemWrite DataMemory[A] = DataMemory.WD                                              |
| Branch       |    1 | PCSrc = Branch & Zero                                                                  |
| ALUSrc       |    1 | SrcB = ALUSrc ? SignImm : RegFile.RD2                                                  |
| RegDst       |    1 | RegisterFile.A3 = RegDst ? RI.rd : RI.rt                                               |
| RegWrite     |    1 | Input to RegisterFile.WE3 - enables writing data in WD3 into register specified at WA3 |
| PCSrc        |    1 | Branch & Zero = control line select between PCBranch and PCPlus4                       |
| ALUOp        |    2 | 00 = Add, 01 = Sub, 10 = FUNCT, 11 = NA                                                |

#### Truth Table

| Instruction | Opcode | RegWrite | RegDst | ALUSrc | Branch | MemWrite | MemtoReg | ALUOp | Jump |
| ----------- | ------ | -------- | ------ | ------ | ------ | -------- | -------- | ----- | ---- |
| Rtype       | 000000 | 1        | 1      | 0      | 0      | 0        | 0        | 10    | 0    |
| lw          | 100011 | 1        | 0      | 1      | 0      | 0        | 1        | 00    | 0    |
| sw          | 101011 | 0        | X      | 1      | 0      | 1        | X        | 00    | 0    |
| beq         | 000100 | 0        | X      | 0      | 1      | 0        | X        | 01    | 0    |
| addi        | 001000 | 1        | 0      | 1      | 0      | 0        | 0        | 00    | 0    |
| j           | 000010 | 0        | X      | X      | X      | 0        | X        | XX    | 1    |

### ALU Decoder

Decodes R type Funct and ALUOp from MainDecoder to set the ALUControl bits

| ALUOp | Funct  | ALUControl | Description |
| ----- | ------ | ---------- | ----------- |
| 00    | X      | 010        | Add         |
| x1    | X      | 110        | Sub         |
| 1x    | 100000 | 010        | Add         |
| 1x    | 100010 | 110        | Sub         |
| 1x    | 100100 | 000        | And         |
| 1x    | 100101 | 001        | Or          |
| 1x    | 101010 | 111        | SLT         |

## LW

| Code                                                                         | Notes                                          |
| ---------------------------------------------------------------------------- | ---------------------------------------------- |
| pc, im, control, rf, se, alu                                                 | Modules                                        |
| wire PC, Instr, .SrcA, .SrcB, ALUControl, ALUResult, ReadData                | Wires                                          |
| ProgramCounter pc(.clk(clk), .next(PCNext), .PC(PC))                         | Load current program counter address into PC   |
| InstructionMemory im(.A(pcAddress), .RD(Instr))                              | Instr = memory[PC]                             |
| Control control(.instr(Instr), .ALUControl(ALUControl), .RegWrite(RegWrite)) | Set control wires for Instr                    |
| RegisterFile rf(.A1(Instr[25:21]), .RD1(SrcA))                               | SrcA (base) = contents of register Instr.rs    |
| SignExtend se(.x(Instr[15:0]), .Y(SrcB))                                     | SrcB (offset) = sign extend Instr.imm = offset |
| ALU alu(.a(SrcA), .b(SrcB), .f(ALUControl), .Y(ALUResult))                   | ALUResult = base address + offset              |
| DataMemory dm(.A(ALUResult), .RD(ReadData))                                  | ReadData = memory[ALUResult]                   |
| rf(.A3(Instr[20:16]), .WD3(ReadData), .WE3(RegWrite))                        | Register[Instr.rt] = ReadData                  |
| Adder pcAdder(.a(PC), .b(4), .Y(PCNext)))                                    | PCNext = PC + 4                                |
