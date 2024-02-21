class Node:
    def __init__(self, data=None):
        self.data = data
        self.next_node = None


class LinkedList:
    def __init__(self):
        self.head = None

    def add_element_at_beginning(self, data):
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node

    def add_element_at_end(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current_node = self.head
            while current_node.next_node:
                current_node = current_node.next_node
            current_node.next_node = new_node

    def remove_from_beginning(self):
        if not self.head:
            print("Список пуст. Удаление невозможно.")
            return

        self.head = self.head.next_node

    def remove_from_end(self):
        if not self.head:
            print("Список пуст. Удаление невозможно.")
            return

        if not self.head.next_node:
            self.head = None
            return

        current_node = self.head
        while current_node.next_node.next_node:
            current_node = current_node.next_node
        current_node.next_node = None

    def find_element(self, value):
        current_node = self.head
        while current_node:
            if current_node.data == value:
                return True
            current_node = current_node.next_node
        return False

    def calculate_expression(self):
        if not self.head:
            print("Список пуст. Введите элементы последовательности.")
            return 0

        current_node = self.head
        values = []
        while current_node:
            values.append(current_node.data)
            current_node = current_node.next_node

        result = sum(values[i] * values[-(i + 1)]
                     for i in range(len(values) // 2))
        return result

    def display(self):
        current_node = self.head
        while current_node:
            print(current_node.data, end=" -> ")
            current_node = current_node.next_node
        print("None")


def add_elements_at_beginning(linked_list):
    n = int(input("Сколько элементов вы хотите добавить? "))
    if n <= 0:
        print("Неверное количество элементов. Возвращение в главное меню.")
        return
    for _ in range(n):
        value = float(input("Введите значение элемента: "))
        linked_list.add_element_at_beginning(value)
    print(f"{n} элементов добавлено в начало списка.")


def add_elements_at_end(linked_list):
    n = int(input("Сколько элементов вы хотите добавить? "))
    if n <= 0:
        print("Неверное количество элементов. Возвращение в главное меню.")
        return
    for _ in range(n):
        value = float(input("Введите значение элемента: "))
        linked_list.add_element_at_end(value)
    print(f"{n} элементов добавлено в конец списка.")


def remove_beginning(linked_list):
    linked_list.remove_from_beginning()
    print("Удален элемент с начала списка.")


def remove_end(linked_list):
    linked_list.remove_from_end()
    print("Удален элемент с конца списка.")


def display_list(linked_list):
    print("Содержимое списка:")
    linked_list.display()


def find_element(linked_list):
    search_value = float(input("Введите значение для поиска: "))
    if linked_list.find_element(search_value):
        print(f"Элемент {search_value} найден в списке.")
    else:
        print(f"Элемент {search_value} не найден в списке.")


def calculate_and_display(linked_list):
    result = linked_list.calculate_expression()
    print(f"Значение выражения: {result}")


def main():
    linked_list = LinkedList()

    actions = {
        '1': add_elements_at_beginning,
        '2': add_elements_at_end,
        '3': remove_beginning,
        '4': remove_end,
        '5': display_list,
        '6': find_element,
        '7': calculate_and_display,
        '8': exit_program
    }

    while True:
        print("\nВыберите действие:")
        print("1. Добавить элемент(ы) в начало")
        print("2. Добавить элемент(ы) в конец")
        print("3. Удалить элемент с начала")
        print("4. Удалить элемент с конца")
        print("5. Просмотреть список")
        print("6. Найти элемент по значению")
        print("7. Вычислить значение выражения")
        print("8. Выйти")

        choice = input("Ваш выбор: ")

        action = actions.get(choice)
        if action:
            action(linked_list)
        else:
            print("Некорректный ввод. Пожалуйста, выберите существующую опцию.")


def exit_program(linked_list):
    print("Выход из программы.")
    exit()


if __name__ == "__main__":
    main()
