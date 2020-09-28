#include<stdio.h>
long fact(int num);
int main(){
	int num;
	scanf("%d",&num);
	long int answer = fact(num);
	printf("%ld",answer);
}
long fact(int num){
 	long int factorial = 1 ;
    for(int i = 1 ; i<=num; i++){
    	factorial = factorial * i;
    }
    return factorial;
}