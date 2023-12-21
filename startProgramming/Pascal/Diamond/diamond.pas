
Program diamond;

Uses crt;

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
        {Печать правой стороны Diamond if stroka>1}
    Begin
      PrintSpace(2*stroka-3);
      write('*');
    End;
  writeln
End;

Const 
  message = 'Error';
  delayDuraction = 5000;

Type 
  coordinate = byte;

Var 
  n,stroka,height: integer;
  x,y: coordinate;
Begin
{$I-}
  Repeat
    write('Введите высоту ромба:');
    readln(height);
    If IOResult<>0 Then
      Begin
        clrscr;
        x := (ScreenWidth-length(message))Div 2;
        y := ScreenHeight Div 2;
        GotoXY(x,y);
        write(message);
        GotoXY(1,1);
        delay(delayDuraction);
        clrscr;
        halt(1);
      End;
  Until (height > 0) And (height Mod 2 = 1);
  n := height Div 2;
  For stroka:=1 To n+1 Do
    PrintLineOfDiamond(stroka,n);
    {Печать нижней части}
  For stroka:=n Downto 1 Do
    PrintLineOfDiamond(stroka,n);
End.

