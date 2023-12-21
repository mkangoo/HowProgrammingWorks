
Program FilterSpace;

Var 
  c: char;
  print,know: boolean;
Begin
  print := false;
  know := false;
  While Not eof Do
    Begin
      read(c);
      If c=#10 Then
        Begin
          If print And know Then
            writeln;
          know := false;
        End
      Else
        Begin
          If Not know Then
            Begin
              print := (c<>' ') And (c<>#9);
              know := true;
            End;
          If print Then
            write(c);
        End
    End
End.
