#include<stdio.h>
#include<math.h>
int count(int num);
int armstrong(int num,int digits);
int main(){
	int num;
	scanf("%d",&num);
	int digits = count(num);
	int answer = armstrong(num,digits);
	answer==1?printf("armstrong"):printf("not armstrong");
	return 0;
}
int count(int num){
	int counter = 0;
	while(num!=0){
		num/=10;
		counter++;
	}
	return counter;
}
int armstrong(int num,int digits){
  int input = num;
  int sum=0;
  while(num!=0){
     int rem;
     rem = num%10;
     sum = sum + pow(rem,digits);
     num/=10; 
  }
  if(sum==input){
  	return 1;
  }
  else
  	return 0;
}
