
Program MovingHello;

Uses crt;

Const 
  Message = 'Hello,World!';
Procedure GetKey(Var code:integer);

Var 
  c: char;
Begin
  c := ReadKey;
  If c=#0 Then
    Begin
      c := ReadKey;
      code := -ord(c);
    End
  Else
    Begin
      code := ord(c);
    End;
End;
Procedure ShowMessage(x,y:integer;msg:String);
Begin
  GotoXY(x,y);
  write(msg);
  GotoXY(1,1);
End;
Procedure HideMessage(x,y:integer;msg:String);

Var 
  len,i: integer;
Begin
  len := length(msg);
  GotoXY(x,y);
  For i:=1 To len Do
    write(' ');
  GotoXY(1,1);
End;
Procedure MoveMessage(Var x,y:integer;msg:String;dx,dy:integer);
Begin
  HideMessage(x,y,msg);
  If (x > 0) And (x <= ScreenWidth - Length(msg)) And
     (y > 0) And (y <= ScreenHeight) Then
    Begin
      x := x+dx;
      y := y+dy;
    End
  Else
    Begin
      x := x;
      y := y;
      exit;
    End;
  ShowMessage(x,y,msg);
End;

Var 
  CurX,CurY: integer;
  c: integer;
Begin
  clrscr;
  CurX := (ScreenWidth-length(Message))Div 2;
  CurY := ScreenHeight Div 2;
  ShowMessage(CurX,CurY,Message);
  While true Do
    Begin
      GetKey(c);
      If c>0 Then
        break;
      Case c Of 
        -75:
             MoveMessage(CurX,CurY,Message,-1,0);
        -77:
             MoveMessage(CurX,CurY,Message,1,0);
        -72:
             MoveMessage(CurX,CurY,Message,0,-1);
        -80:
             MoveMessage(CurX,CurY,Message,0,1);
      End
    End;
  clrscr;
End.
