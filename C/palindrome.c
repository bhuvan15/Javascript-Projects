#include<stdio.h>
int main(){
	int number;
	scanf("%d",&number);
	int num = number;
	int rev=0;
	int rem;
	while(number!=0){
		rem = number%10;
		rev = rev*10 + rem;
		number/=10;
	}
	if(num == rev){
		printf("Palindrome");
	}
	else{
		printf("Not palindrome");
		
	}
}