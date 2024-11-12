using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Ejercito
{
    public interface IValidadorLimite01
    {
        public int Limite {  get; set; }

        public bool LimiteSuperado(int Suma);

    }
}
