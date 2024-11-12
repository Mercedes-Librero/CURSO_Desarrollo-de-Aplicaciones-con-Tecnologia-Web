namespace Cadenas.Services
{
    public class CadenasPrimeras : ICadenas
    {
        public int RestaCadena(string cadena1, string cadena2)
        {
            return (cadena1.Length - cadena2.Length);
        }

        public string SumaCadena(string cadena1, string cadena2)
        {
            return (cadena1 + cadena2);
        }
    }
}
