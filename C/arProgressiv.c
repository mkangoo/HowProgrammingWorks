#include <stdio.h>

int main() {
  int start, stop, step;
  printf("Generator of progression\n"
         "Enter:start,stop,step\n");
  scanf("%d%d%d", &start, &stop, &step);
  int x = start;
  int sign = (step > 0) ? +1 : -1;
  while (sign * x < sign * stop) {
    printf("x=%d\n", x);
    x += step;
  }
  printf("After:x=%d\n", x);
}