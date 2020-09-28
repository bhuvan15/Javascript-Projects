import java.util.Scanner;
public class accpractice {
    public static void main(String argd[]) {
       Account a1 = new Account(),a2 = new Account();
       Scanner input = new Scanner(System.in);
       String name = input.nextLine();
       int index = input.nextInt();
       float money = input.nextFloat();

       a1.assign(name,index,money);
       a2.assign(name,index,money);
       a1.deposit(100);
       a2.deposit(200);
       a1.withdraw(500);
       a2.withdraw(2000);
       a1.display();
       a2.display();
    }
}
class Account{
    String name;
    int id;
    float amount;
    void assign(String n,int i,float a)
    {
         name = n ;
         id = i ; 
         amount = a;
    }
    void deposit(float a){
        amount = amount + a;
    }
    void withdraw(float a){
        if(a > amount){
            System.out.println("Insufficient balance");
        }
        else{
            amount = amount - a;
        }
    }
    void display(){
        System.out.println(id + " " + name + " " + amount);
    }
}