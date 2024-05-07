public class formiga extends Animal{

    private int peso;

    public formiga(Boolean vivo, int massa, String cor, int x, int y, int peso) {
        super(vivo, massa, cor, x, y);
        this.peso = peso;
    }

    @Override
    public void andar() {
        System.out.println("Formiga está andando");
    }

    public static void main(String[] args) {
        formiga f1 = new formiga(true, 190, "vermelho", 50,20, 100);

        f1.andar();
        f1.comer(10);
        f1.dormir();
    }
}
