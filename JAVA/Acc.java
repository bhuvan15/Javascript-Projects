public class Acc {
    public static void main(String[] args){
        Account a1 = new Account();//initialising reference variable
        a1.insert(1,"Bhuvan",1000);
        a1.display();
        a1.deposit(100);
        a1.display();
        a1.withdraw(1200);
        a1.withdraw(500);
        a1.display();
    }
}
class Account{
    int id;
    String name;
    float balance;
    void insert(int i,String n,float b){
        id = i;
        name = n;
        balance = b;
    }
    void deposit(float amt){
        balance = balance + amt;
    }
    void withdraw(float amt){
        if(amt > balance){
            System.out.println("Insufficient balance");
        }
        else{
            balance = balance - amt;
        }
    }
    void display(){
        System.out.println(id +" "+ name + " " + balance );
    }
}