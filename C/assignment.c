#include<stdio.h>
int dairy(int *a);
int main(){
	int a;
	printf("Please add money to your account:\n");
	int *n,b;
	//n is the money added
	scanf("%d",&b);
	printf("Money will be reduced from your cart when you add any itwm to your cart:");
	n=&b;
	printf("Select your food section please:\n");
	printf("1. Dairy\n2. Groceries\n3. Meat\n4. Packed goods \n5. Others\n");
	printf("Your Choice:");
	scanf("%d",&a);
	if(a==1){
		dairy(n);
	}
	
}
int daity(int *a){
	printf("Welcome to our dairy section");

}