#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv) {
  int arr[10];
  int size_arr = sizeof(arr) / sizeof(arr[0]);
  if (argc != size_arr + 1) {
    printf("Error:Arguments\n");
    return 1;
  }
  for (int i = 0; i <= size_arr - 1; i++) {
    arr[i] = atoi(argv[i + 1]);
  }
  for (int i = size_arr - 1; i >= 0; i--) {
    printf("%d\n", arr[i]);
  }
  return 0;
}