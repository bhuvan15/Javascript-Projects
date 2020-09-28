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
		scanf("%c",&operation);
     //    printf("Enter number:");
	    // scanf("%f",&num);
		switch(operation){
			case '+':	answer += num;break;
			case '-':	answer -= num;break;
			case '*':	answer *= num;break;
			case '/':	answer /= num;break;
	    }

		int result;
		printf("print result or continue- 1 or 0:");
		scanf("%d",&result);
		if((result==1)||(result==1)){
			continue;
		}
		else{
		   break;
		}

	}
	printf("Final answer:%.2f",answer);
	return 0;
}