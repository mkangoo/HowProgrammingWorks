
Program DequeOfLongint;

Type 
  Longitem2ptr = ^Longitem2;
  Longitem2 = Record
    data: longint;
    next,prev: Longitem2ptr;

    LongDeque = Record
      first,last: Longitem2ptr
    End;
    Procedure LongDequeInit(Var deque:LongDeque);
    Begin
      deque.first := Nil;
      deque.last := Nil;
    End;
    Procedure LongDequePushFront(Var deque:LongDeque;n:longint;);
    Begin

    End;
    Procedure LongDequePushBack(Var deque:LongDeque;n:longint);
    Begin

    End;
    Procedure LongDequePopFront(Var deque:LongDeque;n:longint);
    Begin

    End;
    Procedure LongDequePopBack(Var deque:LongDeque;n:longint);
    Begin

    End;
    Function LongDequeIsEmpty(Var deque:LongDeque): Boolean;
    Begin
      LongDequeIsEmpty := deque=Nil;
    End;

    Var 
      deque: LongDeque;
      n: longint;
    Begin
      LongDequeInit(deque);
      While Not SeekEof Do
        Begin
          read(n);

        End;
    End.
