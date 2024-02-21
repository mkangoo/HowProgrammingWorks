
Program ko;

Type 
  LongItemPtr = ^LongItem;
  LongItem = Record
    data: longint;
    next: LongItemPtr;
  End;

Type 
  StackOfLongints = LongItemPtr;

Procedure SOLInit(Var stack:StackOfLongints);
Begin
  stack := Nil;
End;
Procedure SOLPush(Var stack:StackOfLongints;n:longint);

Var 
  tmp: LongItemPtr;
Begin
  new(tmp);
  tmp^.data := n;
  tmp^.next := stack;
  stack := tmp;
End;
Procedure SOLPop(Var stack:StackOfLongints;Var n:longint);

Var 
  tmp: LongItemPtr;
Begin
  n := stack^.data;
  tmp := stack;
  stack := stack^.next;
  dispose(tmp);
End;
Function SOLIsEmpty(Var stack:StackOfLongints): boolean;
Begin
  SOLIsEmpty := stack=Nil;
End;
Function SOSum(Var stack:StackOfLongints): longint;
Begin
  If stack = Nil Then
    SOSum := 0
  Else
    Begin
      SOSum := stack^.data+SOSum(stack^.next);
    End;
End;
Procedure SOIsDeleteElement(Var stack:StackOfLongints);
Begin
  If stack = Nil Then
    exit
  Else
    Begin
      SOIsDeleteElement(stack^.next);
      dispose(stack);
    End;
End;

Var 
  s: StackOfLongints;
  n: longint;
Begin
  SOLInit(s);
  While Not SeekEof Do
    Begin
      read(n);
      SOLPush(s,n)
    End;
  writeln('Summa = ',SOSum(s));
  While Not SOLIsEmpty(s) Do
    Begin
      SOLPop(s,n);
      write(n,' ');
    End;
End.
