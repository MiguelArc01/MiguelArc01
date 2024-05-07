public class Teste {

    public static class Pessoa{

        Pessoa(){
            System.out.println("CP ");
        }
        static {
            System.out.println("SP ");
        }
    }

    public static class Empregado extends Pessoa{

        Empregado(){
            System.out.println("CT ");
        }

        {
            System.out.println("IT ");
        }

    }

    public static void main(String[] args){
        Pessoa p = new Empregado();
    }


}
