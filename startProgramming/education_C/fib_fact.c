#include <stdio.h>

enum { Fibonacci = 1, Factorial };

int search_fib(int x) {
  if (x == 1 || x == 2) {
    return 1;
  }
  if (x < 0) {
    return -1;
  } else {
    return search_fib(x - 1) + search_fib(x - 2);
  }
}

int search_fact(int x) {
  if (x == 0) {
    return 1;
  }
  if (x < 0) {
    return -1;
  } else {
    return x * search_fact(x - 1);
  }
}

int main() {
  int function, x;
  int result;
  printf("Hello,User\n"
         "My functions:\n"
         "1.Searct to Fibonacci \n"
         "2.Search to Factorial\n");
  scanf("%d", &function);
  printf("Enter the number:\n");
  scanf("%d", &x);
  switch (function) {
  case Fibonacci:
    result = search_fib(x);
    if (result != -1) {
      printf("Fibonacci %d = %d", x, result);
      break;
    } else {
      printf("Error:Fibonacci is not defined for negative numbers\n");
      break;
    }
  case Factorial:
    result = search_fact(x);
    if (result != -1) {
      printf("Factorial %d = %d", x, result);
      break;
    } else {
      printf("Error:Factorial is not defined gor negative numbers\n");
      break;
    }
  default:
    printf("No parametrs");
    return 1;
    break;
  }
}
