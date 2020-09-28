public class setandget {
    private int roll;
    private String string_name;
    public int getRoll(){
        return roll;
    }
    public void setRoll(int roll){
        this.roll = roll;
    }
    public String getString_name(){
        return string_name;
    }
    public void setString_name(String string_name){
        this.string_name = string_name;
    }
    public static void main(String[] args) {
        System.out.println("roll no -" +roll);
        System.out.println("Name -" +string_name);
    }

}