namespace MaximoComun.Services
{
    public class CalcularDivisorMultiplo : IDivisorMultiplo
    {
        public int MaximoDivisor(int numeroMax1, int numeroMax2)
        {
            while (numeroMax2 != 0)
            {
                int temp = numeroMax2;
                numeroMax2 = numeroMax1 % numeroMax2;
                numeroMax1 = temp;
            }
            return numeroMax1;
        }

        public int MinimoMultiplo(int numeroMax1, int numeroMax2)
        {
            return Math.Abs(numeroMax1 * numeroMax2) / MaximoDivisor(numeroMax1,numeroMax2);
        }
    }
}
