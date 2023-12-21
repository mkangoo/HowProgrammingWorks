
Program lo;
Function SearcFibonacci(x:integer): longint;
Begin
  If x<=2 Then
    SearcFibonacci := 1
  Else
    SearcFibonacci := SearcFibonacci(x-1)+SearcFibonacci(x-2);
End;
Function SearchFactorial(y:integer): longint;
Begin
  If y = 0 Then
    SearchFactorial := 1
  Else
    Begin
      SearchFactorial := y*SearchFactorial(y-1);
    End;
End;

Var 
  x,y: longint;
Begin
  writeln('Enter the num:');
  read(x);
  read(y);
  writeln('Fibonacci  ',x,' = ',SearcFibonacci(x));
  writeln('Factorial  ',y,' = ',SearchFactorial(y));
End.
