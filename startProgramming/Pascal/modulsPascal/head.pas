
Program HomeWork;

Uses Crt;

Const 
  DelayDuraction = 3000;
Function SearchFibonacci(x:integer): longint;
Begin
  If x <=2 Then
    SearchFibonacci := 1
  Else
    SearchFibonacci := SearchFibonacci(x - 1) + SearchFibonacci(x - 2);
End;
Function SearchFactorial(y:integer): longint;
Begin
  If y = 0 Then
    SearchFactorial := 1
  Else
    SearchFactorial := y * SearchFactorial(y-1);
End;

Var 
  x,y: integer;
Begin
{$I-}
  Repeat
    writeln('Enter the numbers:');
    read(x);
    read(y);
    If IOResult <> 0 Then
      Begin
        writeln('Error,Please Input');
        halt(1);
      End;
    TextColor(1);
    writeln('Number ',x,' = ',SearchFibonacci(x));
    writeln('Number ',y,' = ',SearchFactorial(y));
    delay(DelayDuraction);
  Until Eof;
End.
