public class object {
    public static void main(String[] args){
    new object1().fact(5);    
    }
}
class object1{
   void fact(int n){
       int f = 1;
       for(int i = 1; i < n;i++){
           f = f * i;
       }
       System.out.println(f);

   }
}