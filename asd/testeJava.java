public class testeJava {

    public interface Calculable {
        double calcularArea();
    }

    public class Quadrado implements Calculable {
        private double lado;

        public Quadrado(double lado) {
            this.lado = lado;
        }

        @Override
        public double calcularArea() {
            return lado * lado;
        }
    }

    public class Retangulo implements Calculable {
        private double base;
        private double altura;

        public Retangulo(double base, double altura) {
            this.base = base;
            this.altura = altura;
        }

        @Override
        public double calcularArea() {
            return base * altura;
        }
    }

    public abstract class FiguraFactory {
        public abstract Calculable criarFigura(double... parametros);

    }

    public class FiguraFactoryConcreta extends FiguraFactory {
        @Override
        public Calculable criarFigura(double... parametros) {
            if (parametros.length == 1) {
                return new Quadrado(parametros[0]);
            } else if (parametros.length == 2) {
                return new Retangulo(parametros[0], parametros[1]);
            }
            // Adicione os casos para as outras figuras geométricas aqui
            return null;
        }
    }



}
