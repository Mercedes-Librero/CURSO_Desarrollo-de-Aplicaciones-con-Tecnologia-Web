namespace PruebasInicial.Services
{
    public class CalculadoraClasica : ICalculadora
    {
        public double Divide(int numero1, int numero2)
        {
            return numero1 / (double)numero2;
        }

        public double Multiplica(int numero1, int numero2)
        {
            return numero1 * numero2;
        }

        public double Resta(int numero1, int numero2)
        {
            return numero1 - numero2;
        }

        public double Suma(int numero1, int numero2)
        {
            return numero1 + numero2;
        }
    }
}