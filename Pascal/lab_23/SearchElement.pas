unit SearchElements;

interface
Type 
  LongItemPtr = ^LongItem;
  LongItem = Record
    number,key,data1,data2: longint;
    next: LongItemPtr;
  End;

Type 
  QueueOfLongint = Record
    first,last: LongItemPtr;
  End;
  var 
    SearchNum:longint;
Procedure SearchQueueElement(var queue:QueueOfLongint;SearchNum:longint)

implementation
Procedure SearchQueueElement(Var queue:QueueOfLongint;SearchNum:longint);

Var 
  number,key,data1,data2: longint;
  found: boolean;
Begin
  found := False;
  While Not QOLEmpty(queue) Do
    Begin
      QOLGet(queue,number,key,data1,data2);
      If number=SearchNum Then
        Begin
          writeln('Element found');
          writeln('Number: ', SearchNum);
          writeln('Key: ', key);
          writeln('Data1: ', data1);
          writeln('Data2: ', data2);
          found := True;
        End;
    End;
  If Not found Then
    writeln('Element with number ',SearchNum,' not found');
End;
end.