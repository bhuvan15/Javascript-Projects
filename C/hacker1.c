#include<math.h>
#include<stdlib.h>
#include<stdio.h>
int main(){
    int i,j,k;
    scanf("%d%d%d",&i,&j,&k);
    int rev,num,rem,count=0,a;
    for(a = i ; a <= j ; a++){
        num = a;
        rev = 0;
        while(num!=0){
             rem = num%10;
             rev = rev*10 + rem;
             num/=10;
        }
        if(abs(a-rev)%k == 0){
            count++;
        }
  }
  printf("%d",count);

}
