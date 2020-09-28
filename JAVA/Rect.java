public class Rect {
  public static void main(String[] args) {
        Rect2 r1 = new Rect2(),r2 = new Rect2();
        r1.insert(5,5);
        r2.insert(10,10);
        r1.calculateArea();
        r2.calculateArea();
    }
    
}
class Rect2{
    int length;
    int breadth;
    void insert(int l,int b){
        length = l;
        breadth = b;
   }
   void calculateArea(){
       System.out.println(length * breadth);
   }
}