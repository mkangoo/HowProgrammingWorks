//Program for finding the discriminant

Program Dis;
{$CODEPAGE CP866}

Uses Crt;
Procedure PrintDis(D:real);
Begin
  writeln('Discriminant = ',D:0:1);
  writeln;
End;

Label m1,m2,m3,m4;

Var 
  a,b,c,transition: integer;
  D,x1,x2: real;
  f: text;
  n: string;
Begin
  m1: ClrScr;
  writeln('Enter the value of variable A:');
  read(a);
  writeln('Enter the value of variable B:');
  read(b);
  writeln('Enter the value of variable C:');
  read(c);
  D := (b*b)-(4*a*c);
  If D>0 Then //for D>0
    Begin
      ClrScr;
      PrintDis(D);
      // writeln('Discriminant = ',D:0:1);
      // writeln;
      writeln('There are two different roots:');
      x1 := (-b+sqrt(D) ) / (2*a);
      x2 := (-b-sqrt(D) ) / (2*a);
      writeln('X1 = ',x1:0:2);
      writeln('X2 = ',x2:0:2);
    End
  Else
    If D=0 Then //for D=0
      Begin
        ClrScr;
        PrintDis(D);
        // writeln('Discriminant = ',D:0:1);
        // writeln;
        writeln('There is one root');
        x1 := -(b/(2*a));
        writeln('X1 = ',x1:0:2);
      End
  Else
    If D<0 Then
      Begin
        ClrScr;
        PrintDis(D);
        // writeln('Discriminant = ',D:0:1);
        // writeln;
        writeln('No roots');
      End;
  m4:
      writeln;
  writeln('Want to continue?');
  writeln('---------------------');
  writeln('-Enter to confirm "1"');
  writeln('-Confirm exit "2"');
  writeln('-Open pocket guide "3"');
  writeln('---------------------');
  read(transition);
  Case transition Of 
    1: goto m1;
    2: goto m2;
    3: goto m3
  End;
  m3:
      assign(f,'./Manual.txt');
  reset(f);
  While (Not eof(f)) Do
    Begin
      readln(f,n);
      writeln(n);
    End;
  goto m4;
  m2:
End.
// goto m4;
