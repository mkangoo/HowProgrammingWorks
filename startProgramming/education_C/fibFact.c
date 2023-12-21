#include <stdio.h>
#include <stdlib.h>

int search_to_factorial(int x) {
  if (x == 0) {
    return 1;
  }
  return x * search_to_factorial(x - 1);
}

int search_to_fibonacci(int x) {
  if (x == 1 || x == 2) {
    return 1;
  }
  return search_to_fibonacci(x - 1) + search_to_fibonacci(x - 2);
}

int main(int argc, char **argv) {
  FILE *f;
  if (argc < 3) {
    fprintf(stderr, "Error:Arguments\n");
    return 1;
  }
  int arg1 = atoi(argv[1]);
  int arg2 = atoi(argv[2]);
  f = fopen("maths.txt", "w");
  if (!f) {
    perror("maths.txt");
    return 1;
  }
  fprintf(f, "Factorial of %d: %d\n", arg1, search_to_factorial(arg1));
  fprintf(f, "Fibonacci sequence up to %d terms:\n", arg2);
  for (int i = 1; i <= arg2; i++) {
    fprintf(f, "%d ", search_to_fibonacci(i));
  }

  fclose(f);
  return 0;
}