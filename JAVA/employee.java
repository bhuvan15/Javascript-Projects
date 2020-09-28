class Employee{
	int id;
	String name;
	float salary;
	void function(int i, String n, float s){
        id=i;
        name=n;
        salary=s;
	}
	void display(){
		System.out.println(id + " " + name + " " + salary);
	}

}
public class TestEmployee{
	public static void main(String[] args){
	Employee e1 = new Employee(); 
	Employee e2 = new Employee();
	Employee e3 = new Employee();
	e1.function(1,"Bhuvan",1000);
	e2.function(2,"Chintu",1000);
	e3.function(3,"Capri",1000);
	e1.display();
	e2.display();
	e3.display();
}
}