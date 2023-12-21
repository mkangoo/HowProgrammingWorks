
Program Hello;

Const 
  message = 'Hello,World!';
  filename = 'hello.txt';

Var 
  f: text;
Begin
{$I-}
  assign(f,filename);
  rewrite(f);
  If IOResult<> 0 Then
    Begin
      writeln('Couldn''t open fail',filename);
      halt(1);
    End;
  writeln(f,message);
  If IOResult<>0 Then
    Begin
      writeln('Couldn''t write to the file');
      halt(1);
    End;
  close(f);
End.
