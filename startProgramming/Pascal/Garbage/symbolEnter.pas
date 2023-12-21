
Program RL;
Procedure ReadLongint(Var success:boolean;Var result:longint);

Var 
  c: char;
  res: longint;
  pos: integer;
Begin
  res := 0;
  pos := 0;
  Repeat
    read(c);
    pos := pos+1;
  Until (c<>' ') And (c<>#10);
  While (c<>' ') And (c<>#10) Do
    Begin
      If (c<'0') Or (c>'9') Then
        Begin
          writeln('Unexpected ''',c,''' in pos:',pos);
          readln;
          success := false;
          exit
        End;
      res := res*10+ord(c)-ord('0');
      read(c);
      pos := pos+1;
    End;
  result := res;
  success := true;
End;

Var 
  x,y: longint;
  ok: boolean ;
Begin
  Repeat
    writeln('Please type the first number:');   {Ввод первой переменной}
    ReadLongint(ok,x);
  Until ok;
  Repeat
    writeln('Please type the second number:');   {Ввод второй переменной}
    ReadLongint(ok,y);
  Until ok;
  writeln(x,' and ',y,' = ',x*y);
End.

