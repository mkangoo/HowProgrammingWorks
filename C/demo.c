#include <stdio.h>
#define IF if (
#define THEN ) {
#define ELSE } else {
#define FI ;}

int main() {
    int i = 0;
    IF i == 0 THEN
        printf("i is zero\n");
    ELSE
        printf("i is not zero\n");
    FI
    return 0;
}
