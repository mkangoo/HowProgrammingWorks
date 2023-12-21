#include <math.h>
#include <stdio.h>

double discriminant(double a, double b, double c) {
  return (b * b) - (4 * a * c);
}
int main() {
  double p, q, r, d;
  int n;
  n = scanf("%lf %lf %lf", &p, &q, &r);
  if (n != 3) {
    printf("Error:wrong input\n");
    return 1;
  }
  if (p == 0) {
    printf("Error:Not a quadratic equation");
    return 2;
  }
  d = discriminant(p, q, r);
  if (d < 0) {
    printf("Not roots");
    return 0;
  }
  d = sqrt(d);
  printf("%.5f %.5f", (-q - d) / (2 * p), (-q + d) / (2 * p));
  return 0;
}