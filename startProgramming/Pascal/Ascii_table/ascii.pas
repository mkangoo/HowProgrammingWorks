
Program Ascii;

Var 
  i,j: integer;
  c: char;
Begin
  write('  |');  {Первая строка заголовка}
  For c:='0' To '9' Do
    write(' .',c);
  For c:='A' To 'F' Do
    write(' .',c);
  writeln;
  write('  |');  {Вторая строка загаловка}
  For i:=1 To 16 Do
    write('---');
  writeln;
  For i:=2 To 7 Do  {Сама таблица строка за строкой}
    Begin
      write(i,'.|');
      For j:=0 To 15 Do  {Печать отдельно взятого символа}
        write('  ',chr(i*16+j));
      writeln;
    End;
End.

