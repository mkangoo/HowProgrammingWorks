Program diamond;

Procedure PrintSpace(count:integer);

Var 
  i: integer;
Begin
  For i:=1 To count Do
    write(' ');
End;
Procedure PrintLineOfDiamond(stroka,n:integer);
Begin
  PrintSpace(n+1-stroka);
  write('*');
  If stroka>1 Then
    Begin
        {Печать правой стороны Diamond if stroka>1}
      PrintSpace(2*stroka-3);
      write('*');
    End;
  writeln
End;

Var 
  n,stroka,height: integer;
Begin

{Ввод числа,пока пользователь не введет его как надо}
  Repeat
    write('Введите высоту ромба:');
    readln(height);
  Until (height > 0) And (height Mod 2 = 1);
  n := height Div 2;
  For stroka:=1 To n+1 Do
    PrintLineOfDiamond(stroka,n);
    {Печать нижней части}
  For stroka:=n Downto 1 Do
    PrintLineOfDiamond(stroka,n);
End.

