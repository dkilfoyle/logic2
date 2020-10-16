# Sum of products

## Minterms

Min term is a product term that produces a 1 for one and only one input code. Each minterm must contain every literal.

A B | minterm
0 0 | ~A & ~B
0 1 | ~A & B
1 0 | A & ~B
1 1 | A & B

For an arbitrary truth table, a minterm can be used for each row corresponding to a true output. If
each of these minterms’ outputs are fed into a single OR gate, then a sum of products logic circuit is
formed that will produce the logic listed in the truth table.

A B | F | minterm
0 0 | 0 | -
0 1 | 1 | ~A & B
1 0 | 1 | A & ~B
1 1 | 0 | -

`F = (~A & B) | (A & ~B)`

### Alegraic Minimisation

The minterm list produces unminimized logic. Minimized logic can be produced from the minterm list by using algebraic logic theorms:

1. Distributive property

   `A & B | A & C = A & (B | C)`

2. Complement property

   `A & ~A = 1`

3. Identity property

   `A & 1 = A`

### Karnaugh Map Minimisation

A B | F |
0 0 | 0 |
0 1 | 1 |
1 0 | 0 |
1 1 | 1 |

A 0 1
B ------
0| 0 0 | ~B
1| 1 1 | B
~A A

1. Find the largest group of neighbouring 1s that is a power of 2 (2,4,8...)
2. If the group covers a region where A is both 0 and 1 then A is excluded from the product
3. If the group covers a region where B is 1 B is included uncomplemented
4. If the group covers a region where B is 0 B is included complemented
