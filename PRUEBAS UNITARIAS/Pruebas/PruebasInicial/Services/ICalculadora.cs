namespace PruebasInicial.Services
{
    public interface ICalculadora
    {
        double Suma(int numero1, int numero2);
        double Resta(int numero1, int numero2);
        double Divide(int numero1, int numero2);
        double Multiplica(int numero1, int numero2);
    }
}