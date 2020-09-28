#include<stdio.h>
void pyramid(int num);
int main(){
	int num;
	scanf("%d",&num);
    pyramid(num);
}
void pyramid(int num){
	for(int i = 1 ; i <= num ; i++){
		for(int j = 1 ; j <= i ; j++){
			printf("*");
		}
		printf("\n");
	}
}