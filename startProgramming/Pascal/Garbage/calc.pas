
Program maths;
{$CODEPAGE CP866}

Uses Crt;
{Калькулятор}
Procedure Calc(Var res:real;Var bol:boolean;operation:char;i,g:real);
Begin
  bol := True;
  Case operation Of 
    '+': res := i + g;
    '-': res := i - g;
    '*': res := i * g;
    '/': res := i / g;
    Else
      bol := False;
  End;
End;
{Корни Дискриминанта}
Procedure Roots_of_the_Discriminant(D:real;disa,disB,disC:integer);

Var 
  x1,x2: real;
Begin
  If D<0 Then
    Begin
      writeln('No roots');
    End
  Else
    If D>0 Then
      Begin
        writeln('There are two different roots:');
        x1 := (-disB+sqrt(D) ) / (2*disA);
        x2 := (-disB-sqrt(D) ) / (2*disA);
        writeln('X1 = ',x1:0:1);
        writeln('X2 = ',x2:0:1);
      End
  Else
    If D=0 Then
      Begin
        writeln('There is one root');
        x1 := -(disB/(2*disA));
        writeln('X1 = ',x1:0:1);
      End
End;
{Ряд Фибоначчи}
Function Fibonacci(x: integer): integer;
Begin
  If x <= 2 Then
    Fibonacci := 1
  Else
    Fibonacci := Fibonacci(x-1)+Fibonacci(x-2);
End;
{Процент от числа}
Procedure Percentage_of_the_number(Var res:real;i,g:real);
Begin
  res := g*i/100;
End;
{Факториал}
Function Factorial(x: integer): integer;
Begin
  If x = 0 Then
    Factorial := 1
  Else
    Factorial := x*Factorial(x-1);
End;
// Procedure Checking_Variables(Var bol,bol1:integer;Var pos:boolean);
// Begin
//   If (bol>#48) And (bol<#58) Then
//     Begin
//       If (bol1>#48) And (bol1<#58) Then
//         pos = True;
//     End
//     else
//       pos=False;

// End;

Var 
  box,result,a,b,c,x: integer;
  D,S,i,g,res: real;
  operation: char;
  bol,bol1,pos: boolean;

Const 
  Pi = 3.1415;

Begin
  //Блок возможностей программы
  ClrScr;
  writeln('Привет,user!');
  writeln('Мои возможности:');
  writeln('1.Калькулятор');
  //calc
  writeln('2.Возвести в квадрат/куб');
  writeln('3.Вычислить Дискриминант');
  //dis
  writeln('4.Вычислить ряд Фибоначчи');
  //fib
  writeln('5.Факториал числа');
  //factor
  writeln('6.Площадь круга');
  //s
  writeln('7.Вычисление гипотенузы по катетам');
  writeln('8.Процент от числа');
  //%
  writeln('9.');
  writeln('10.');
  writeln;
  write('Для ввода используйте цифру:');
  read(box);
  Case box Of 
    //Калькулятор
    1:
       Begin
         ClrScr;
         writeln('Введите первое число:');
         read(i);
         writeln('Введите второе число:');
         read(g);
         writeln('Введите операцию (+,-,*,/):');
         Repeat
           read(operation);
           Calc(res,bol,operation,i,g);
         Until bol;
         writeln(i:0:1, ' ', operation, ' ', g:0:1, ' = ', res:0:1);
       End;
    //Квадрат/куб числа
    2:
       Begin
         ClrScr;
         writeln('Введите число:');
         read(x);
         ClrScr;
         result := x*x;
         writeln('Квадрат числа ',x,' = ',result);
         result := x*x*x;
         writeln('Куб числа ',x,' = ',result);
       End;
    //Дискриминант
    3:
       Begin
         ClrScr;
         writeln('Enter the value of variable A:');
         read(a);
         writeln('Enter the value of variable B:');
         read(b);
         writeln('Enter the value of variable C:');
         read(c);
         D := (b*b)-(4*a*c);
         ClrScr;
         writeln('Discriminant = ',D:0:1);
         Roots_of_the_Discriminant(D,a,b,c);
       End;
    //Ряд Фибоначчи
    4:
       Begin
         ClrScr;
         write('Enter the number:');
         read(x);
         writeln('Number ',x,' = ',Fibonacci(x));
       End;
    //Факториал
    5:
       Begin
         ClrScr;
         writeln('Enter the number:');
         read(x);
         writeln('Factorial ',x,' = ',Factorial(x));
       End;
    //Площадь круга
    6:
       Begin
         ClrScr;
         writeln('Введите радиус круга:');
         read(x);
         S := Pi*x*x;
         ClrScr;
         writeln('Площадь круга =',S:0:2);
       End;
    //Вычисление гипотенузы
    7:
       Begin
         ClrScr;
         writeln('Введите катеты треугольника:');
         readln(i,g);
         res := sqrt(i*i+g*g);
         ClrScr;
         writeln('Гипотенуза = ',res:0:2);
       End;
    //Процент от числа
    8:
       Begin
         //    ClrScr;
         //    Repeat
         //      writeln('Введите число:');
         //      read(bol);
         //      writeln('Введите процент от числа:');
         //      read(bol1);
         //      Checking_Variables(bol,bol1,pos);
         //    Until pos;
         //    Percentage_of_the_number(res,i,g);
         //    ClrScr;
         //    writeln(g:0:1,'% от числа ',i:0:1,' = ',res:0:1,'%');
       End;
    9:
       Begin

       End;
    //
    10:
        Begin

        End;
  End;
End.
