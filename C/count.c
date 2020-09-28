#include<stdio.h>
int main(){
	int number;
	scanf("%d",&number);
	int counter=0;
	while(number!=0){
		number/=10;
		counter++;
	}
	printf("%d",counter);
}