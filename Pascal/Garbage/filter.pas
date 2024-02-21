{Вывод строк,начинающихся не с пробельных символов}

Program Filter;

Var 
  c: char;
  know,print: boolean;
Begin
  know := false;
  print := false;
  While Not eof Do
    Begin
      Read(c);
      If c = #10 Then
        Begin
          If know And print Then
            writeln;
          know := false
        End
      Else
        Begin
          If Not know Then
            Begin
              print := (c<>' ') And (c<>#9);
              know := True;
            End;
          If print Then
            write(c);
        End
    End
End.

