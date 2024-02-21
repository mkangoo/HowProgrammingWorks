
Program nums;

Type 
  itemptr = ^item;
  item = Record
    data: integer;
    next: itemptr;
  End;

Var 
  first,tmp: itemptr;
  n: integer;
Begin
  first := Nil;{Делаем список корректно пустым}
  While Not SeekEof Do{Цикл чтения чисел}
    Begin
      read(n);
      new(tmp);{Создали}
      tmp^.data := n;{Заполняем}
      tmp^.next := first;
      first := tmp;{Включаем в список}
    End;
  tmp := first;{Проходим по списку с начала}
  While tmp <> Nil Do{До конца}
    Begin
      writeln(tmp^.data);
      tmp := tmp^.next;{Переход к следующему элементу}
    End;
End.
