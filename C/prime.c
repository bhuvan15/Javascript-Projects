#include<stdio.h>
int prime(int number);
int main(){
 int number;
 scanf("%d",&number);
 int answer=prime(number);
 answer==0?printf("Not Prime"):printf("Prime");
}
int prime(int number){
   int count=0; 
   for(int i = 1; i<= number ;  i++){
      if(number%i==0){
      	count++;
      }
   }
   if(count==2){
   	return 1;
   }
   else{
   	return 0;
   }
}