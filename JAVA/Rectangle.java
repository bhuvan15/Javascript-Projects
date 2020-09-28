import java.util.Scanner;
public class Rectangle {
    public static void main(String[] args){
      Irectangle area = new Irectangle();
      area.rect(30,50);
      area.display();
    }
}
class Irectangle{
 int breadth;
 int length;
 void rect(int l,int b){
     length = l;
     breadth = b;
 }
 void display(){
     System.out.println(length*breadth);
 }
}