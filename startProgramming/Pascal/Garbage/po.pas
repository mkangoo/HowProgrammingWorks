
Program lo;
// uses crt;
Const 
  x = 20;
  // procedure ParmsSensors(params);
  // var 
  //   x,y:;
  // begin
  //   GotoXY;

  end;
Procedure BubbleSort(Var mas:Array Of integer);

Var 
  i,k,temp: integer;
Begin
  For i:=0 To x-1 Do
    For k:=0 To x-i-2 Do
      If mas[k]>mas[k+1] Then
        Begin
          temp := mas[k];
          mas[k] := mas[k+1];
          mas[k+1] := temp;
        End
End;

Var 
  mas: array [0..x-1] Of integer;
  i: integer;
Begin
{$I-}
  If IOResult <> 0 Then
    Begin
      writeln('Error!');
      halt(1);
    End;
  randomize;
  For i:=0 To x-1 Do
    mas[i] := random(100);
  For i:=0 To x-1 Do
    write(mas[i],' ');
  writeln;
  BubbleSort(mas);
  For i:=0 To x-1 Do
    Write(mas[i],' ');
End.
