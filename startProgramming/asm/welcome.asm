%include "stud_io.inc"  ;macro directive
global _start             

section .text           ;segment code 
_start: mov     eax, 0  ;start of executable code
again:  PRINT   "Hello" ;Macro will print hello
        PUTCHAR 10      ;Print one character ' '
        inc     eax     ;Add Eax 1 to register
        cmp     eax,5   ;cmp-Compare with eax the number 5.;Write the result to the flags register
        jl      again   ;(jump if less) if the previous value gave the result “the first operand 
                        ;is less than the second,” then a transition occurs (control transfer) to 
                        ;the command marked again 
        FINISH          ;A macro that asks the operating system to terminate a program.

