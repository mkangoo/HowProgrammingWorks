
Program ColorDemo;

Uses crt;

Const 
  ColorCount = 16;
  BGColorCount = 8;

Var 
  AllColors: array [1..ColorCount] Of word = 
(
Black,Blue,Green,Cyan,
Red,Magenta,Brown,LightCyan,
DarkGray,LightBlue,LightGreen,LightCyan,
LightRed,LightMagenta,Yellow,White
);
Procedure MakeLine(line:integer;fgcolor:word);

Var 
  i,w,cw: integer;
Begin
  w := ScreenWidth;
  cw := w div BGColorCount;
  If cw = 0 Then
    cw:= 1;
  If line= ScreenHeight Then
    w := w-1;
  For i:=1 To w Do
    Begin
      GotoXY(i,line);
      TextBackground(AllColors[(i-1)div cw+1]);
      If i Mod 2=0 Then
        TextColor(fgcolor+blink)
      Else
        TextColor (fgcolor);
        write('*')
    End;
End;

Procedure MakeScreen;

Var 
  i: integer;
Begin
  clrscr;
  For i:=1 To ScreenHeight Do
    MakeLine(i,AllColors[i Mod ColorCount+1]);
End;
{Основная программа}
Begin
  MakeScreen;
  readln;
  write(#27'[Om');
  clrscr;
End.

