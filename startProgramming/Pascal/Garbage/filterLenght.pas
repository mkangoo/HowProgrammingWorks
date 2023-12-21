
Program FilterLenght;

Var 
  ch: char;
  n: integer;
Begin
  While Not eof Do
    Begin
      read(ch);
      If ch=#10 Then
        Begin
          writeln(n);
          n := 0
        End
      Else
        n := n+1;
    End;
End.
