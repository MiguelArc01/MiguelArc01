abstract class Animal implements Servivo{
    private Boolean vivo;
    private int massa;
    private String cor;
    private int x;
    private int y;
    public Animal(Boolean vivo, int massa, String cor, int x, int y){
        this.vivo = true;
        this.massa = massa;
        this.cor = cor;
        this.x = x;
        this.y = y;
    }

    public Boolean getVivo() {
        return vivo;
    }

    public void setVivo(Boolean vivo) {
        this.vivo = vivo;
    }

    public int getMassa() {
        return massa;
    }

    public void setMassa(int massa) {
        this.massa = massa;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public void andar(){
        System.out.println("O Animal está andando");
    };
    public void comer(int s){
        System.out.println("Formiga está andando");
    };
    public void dormir(){};
}