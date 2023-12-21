{search by number}

Program book;
Function Fibonacci(n:integer): longint;
Var 
  i: integer;
  p,q,r: longint;
Begin
  If n<=0 Then
    Fibonacci := 0
  Else
    Begin
      q := 0;
      r := 1;
      For i:=2 To n Do
        Begin
          p := q;
          q := r;
          r := p+q
        End;
      Fibonacci := r;
      writeln(r);
    End
End;

Var 
  n: integer;
Begin
  writeln('Enter number:');
  read(n);
  Fibonacci(n);
End.
