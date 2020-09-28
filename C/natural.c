#include<stdio.h>
int main(){
	int number,sum=0;
	scanf("%d",&number);
	for(int i = 1 ; i <= number ; i++){
		sum = sum + i ;
	}
	printf("%d",sum);
}