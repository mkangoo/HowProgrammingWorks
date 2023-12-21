
Program MathsPattern;
Function MatchIdx(var str,pat:string;idxs,idxp:integer): boolean;
Begin

End;
Function Match(str,pat:String): boolean;
Begin
  Maths := MatchIdx(str,pat,1,1);
End;
Begin
  If ParamCount < 2 Then
    Begin
      writeln(ErrOutput,'Error');
      halt(1);
    End;
  If Match(ParamStr(1),ParamStr(2)) Then
    writeln('Yes')
  Else
    writeln('No');
End.
