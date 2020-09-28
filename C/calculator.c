#include<stdio.h>
int main(){
	float number;
	printf("number:");
	scanf("%f",&number);
	float answer;
	answer=number;
	while(1){
		char operation;
	    float num;
		printf("Operation:");
		scanf(" %c", &operation);
        printf("Enter number:");
	    scanf("%f",&num);
		switch(operation){
			case '+':	answer += num;break;
			case '-':	answer -= num;break;
			case '*':	answer *= num;break;
			case '/':	answer /= num;break;
	    }

		char result;
		printf("print result or continue- Y or N:");
		scanf(" %c", &result);
		if((result=='y')||(result=='Y')){
			continue;
		}
		else{
		   break;
		}

	}
	printf("Final answer:%.2f",answer);
	return 0;
}