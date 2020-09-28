#include<stdio.h>
int strong(int num);
int main(){
  int num;
  scanf("%d",&num);
  int answer = strong(num);
  answer==1?printf("strong"):printf("Not strong");

}
int strong(int num){
	int number = num;
	int fact=1;
	int sum=0;
	int rem;
	while(num!=0){
		fact=1;
       rem = num%10;
       for(int i=1;i<=rem;i++){
       	fact = fact*i;
       }
       // printf("%d\n",fact);
       sum = sum + fact;
       num/=10;
	}
	if(sum==number)
		return 1;
	else
		return 0;
}