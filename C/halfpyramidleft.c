#include<stdio.h>
int main(){
	int num;
	scanf("%d",&num);
	for(int i = 1; i <= num; i++){
		for(int j = num ; j > 0 ; j--){
			if(i>=j){
				printf("*");
			}
			else{
				printf(" ");
			}
		}
		printf("\n");
	}
}