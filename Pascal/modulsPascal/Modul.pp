
Unit Modul;

Interface
Function SearchFibonacci(x:integer): longint;
Function SearcFactorial(y:integer): longint;

Implementation
Function SearchFibonacci(x:integer): longint;
Begin
  If x<=2 Then
    SearchFibonacci := 1
  Else
    SearchFibonacci := SearchFibonacci(x-1)+SearchFibonacci(x-2);
End;
Function SearcFactorial(y:integer): longint;
Begin
  If y=0 Then
    SearcFactorial := 1
  Else
    SearcFactorial := y*SearcFactorial(y-1);
End;
End.
