# MIPS

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

## Instruction Types

inherit from numeric
provide getters rs, rt, etc
provide toString override

### R Type

| op     | rs        | rt        | rd       | shamt     | funct  |
| ------ | --------- | --------- | -------- | --------- | ------ |
| 6 bits | 5 bits    | 5 bits    | 5 bits   | 5 bits    | 6 bits |
| 000000 | src reg 1 | src reg 2 | dest reg | shft amnt | funct  |

### I Type

| op      | rs      | rt              | imm                  |
| ------- | ------- | --------------- | -------------------- |
| 6 bits  | 5 bits  | 5 bits          | 16 bits              |
| op code | src reg | dest or src reg | num (2s comp if neg) |

### J Type

| op     | addr    |
| ------ | ------- |
| 6 bits | 26 bits |

## Op codes

## Funct codes

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

## Datapath for lw

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
