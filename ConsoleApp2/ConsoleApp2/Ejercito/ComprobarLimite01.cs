using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Ejercito
{
    public class ComprobarLimite01 : IValidadorLimite01
    {
        public int Limite { get; set; } = 1000000;

        public bool LimiteSuperado(int Suma)
        {
            if (Limite != null)
            {
                return (Suma < Limite);
            }
            else
            {
                return false;
            }
        }
    }
}
