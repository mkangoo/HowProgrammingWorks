
Program tyl;

Type 
  LongItemPtr = ^LongItem;
  LongItem = Record
    data: longint;
    next: LongItemPtr;
  End;

Type 
  QueueOfLongint = Record
    first,last: LongItemPtr;
  End;
Procedure QOLInit(Var queue:QueueOfLongint);
Begin
  queue.first := Nil;
  queue.last := Nil;
End;
Procedure QOLPut(Var queue:QueueOfLongint;n:longint);
Begin
  If queue.first=Nil Then
    Begin
      new(queue.first);
      queue.last := queue.first;
    End
  Else
    Begin
      new(queue.last^.next);
      queue.last := queue.last^.next;
    End;
  queue.last^.data := n;
  queue.last^.next := Nil;
End;
Procedure QOLGet(Var queue:QueueOfLongint;Var n:longint);

Var 
  tmp: LongItemPtr;
Begin
  n := queue.first^.data;
  tmp := queue.first;
  queue.first := queue.first^.next;
  If queue.first=Nil Then
    queue.last := Nil;
  dispose(tmp);
End;
Function QOLEmpty(Var queue:QueueOfLongint): boolean;
Begin
  QOLEmpty := queue.first = Nil;
End;
// Function QOLSum(Var queue:LongItemPtr): longint;

// Var 
//   tmp: LongItemPtr;
//   sum: longint;
// Begin
//   tmp := queue;
//   sum := 0;
//   While tmp <> Nil Do
//     Begin
//       sum := sum+tmp^.data;
//       tmp := tmp^.next;
//     End;
//   QOLSum := sum;
// End;

Var 
  queue: QueueOfLongint;
  n: longint;
Begin
  QOLInit(queue);
  While Not SeekEof Do
    Begin
      read(n);
      QOLPut(queue,n);
    End;
  While Not QOLEmpty(queue) Do
    Begin
      write(queue.first^.data,' ');
      queue.first := queue.first^.next;
    End;
End.
