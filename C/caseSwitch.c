#include <stdio.h>

// Перечислимый тип для представления месяцев
enum Month {
  JANUARY = 1,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
};

int main() {
  int monthNumber;

  // Запрос у пользователя ввода номера месяца
  printf("Enter the number of the month (1-12): ");
  scanf("%d", &monthNumber);

  // Проверка введенного номера месяца и вывод соответствующего названия
  switch (monthNumber) {
  case JANUARY:
    printf("January\n");
    break;
  case FEBRUARY:
    printf("February\n");
    break;
  case MARCH:
    printf("March\n");
    break;
  case APRIL:
    printf("April\n");
    break;
  case MAY:
    printf("May\n");
    break;
  case JUNE:
    printf("June\n");
    break;
  case JULY:
    printf("July\n");
    break;
  case AUGUST:
    printf("August\n");
    break;
  case SEPTEMBER:
    printf("September\n");
    break;
  case OCTOBER:
    printf("October\n");
    break;
  case NOVEMBER:
    printf("November\n");
    break;
  case DECEMBER:
    printf("December\n");
    break;
  default:
    printf("Invalid month number. Please enter a number between 1 and 12.\n");
    break;
  }

  return 0;
}
