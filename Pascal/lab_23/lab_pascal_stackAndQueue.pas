
Program labwork;

Uses 
SysUtils,Crt;

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
Procedure QOLInit(Var queue:QueueOfLongint);
Begin
  queue.first := Nil;
  queue.last := Nil;
End;
Function QOLPut(Var queue:QueueOfLongint;
                number,key,data1,data2:longint): Boolean;
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
  queue.last^.number := number;
  queue.last^.key := key;
  queue.last^.data1 := data1;
  queue.last^.data2 := data2;
  queue.last^.next := Nil;
End;
Procedure QOLGet(Var queue:QueueOfLongint;
                 Var number,key,data1,data2:longint);

Begin
  number := queue.first^.number;
  key := queue.first^.key;
  data1 := queue.first^.data1;
  data2 := queue.first^.data2;
  queue.first := queue.first^.next;
End;
Function QOLEmpty(Var queue:QueueOfLongint): boolean;
Begin
  QOLEmpty := queue.first=Nil;
End;
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
// Procedure MeasureExecutionTime;

// Var 
//   StartTime,EndTime: Cardinal;
// Begin
//   Writeln('Программа выполнялась в течение ',
//           EndTime - StartTime, ' миллисекунд.');
// End;
Procedure DeleteQueueElement(Var queue:QueueOfLongint;SearchNum:longint);

Var 
  pp: ^LongItemPtr;
  tmp: LongItemPtr;
  found: boolean;
Begin
  found := false;
  pp := @queue.first;
  While pp^<>Nil Do
    Begin
      If pp^^.number=SearchNum Then
        Begin
          tmp := pp^;
          pp^ := pp^^.next;
          dispose(tmp);
          writeln('Element Dispose');
          exit;
        End
      Else
        pp^ := @(pp^^.next);
    End;
  If Not found Then
    Begin
      writeln('Element not found');
      exit;
    End;
End;
// Procedure BubbleSort(Var queue:QueueOfLongint);

// Var 
//   swapped: boolean;
//   current,nextItem,tmp: LongItemPtr;
// Begin
//   If (queue.first=Nil) Or (queue.first^.next=Nil) Then
//     Begin
//       writeln('Error.Not sorted');
//       exit;
//     End;
//   Repeat
//     swapped := false;
//     current := queue.first;
//     nextItem := current^.next;
//     While nextItem<> Nil Do
//       Begin
//         If (current^.number)>(nextItem^.number) Then
//           Begin
//             tmp := current;
//             current := nextItem;
//             nextItem := tmp;
//             tmp := nextItem^.next;
//             nextItem^.next := current^.next;
//             current^.next := tmp;
//             If current = queue.first Then
//               queue.first := nextItem
//             Else
//               Begin
//                 tmp := queue.first;
//                 While tmp^.next <> current Do
//                   tmp := tmp^.next;
//                 tmp^.next := nextItem;
//               End;

//             swapped := True;
//           End;

//         current := current^.next;
//         nextItem := nextItem^.next;
//       End;
//   Until Not swapped;
// End;




Var 
  queue: QueueOfLongint;
  number,key,data1,data2,SearchNum: longint;
  options: byte;
  success: Boolean;
  // StartTime,EndTime:Cardinal;
Begin
{$I-}
  // StartTime := GetTickCount;
  QOLInit(queue);
  Repeat
    writeln('---QUEUE---');
    writeln('1-Add element');
    writeln('2-Delete element');
    writeln('3-Sort');
    writeln('4-Element search');
    writeln('5-Output on display');
    writeln('0-Exit');
    read(options);
    If IOResult <>0 Then
      Begin
        writeln('Input Error');
        halt(1);
      End;
    Case options Of 
      1:
         Begin
           writeln('Введите номер');
           read(number);
           writeln('Введите ключ');
           read(key);
           writeln('Введите data1');
           read(data1);
           writeln('Введите data2');
           read(data2);
           success := QOLPut(queue,number,key,data1,data2);
           If success Then
           read(filename);
             writeln('Item added successfully');

         End;

      2:
         Begin
           writeln('Enter the item number to delete:');
           read(SearchNum);
           DeleteQueueElement(queue,SearchNum)
         End;
      3:
         Begin
           //  BubbleSort(queue);
           //  writeln('Queue Sorted');
         End;
      4:
         Begin
           writeln('Enter the item number to search:');
           read(SearchNum);
           SearchQueueElement(queue,SearchNum);
         End;
      5:
         Begin
           writeln('Number   Key   data1   data2');
           While Not QOLEmpty(queue) Do
             Begin
               QOLGet(queue,number,key,data1,data2);
               write(number:5,' ','|':2);
               write(key:4,' ','|':2);
               write(data1:5,' ','|':2);
               write(data2:5,' ':2);
               writeln;
             End;
         End;
    End;
  Until options=0;
  //       EndTime:=GetTickCount;
  // MeasureExecutionTime;
End.
