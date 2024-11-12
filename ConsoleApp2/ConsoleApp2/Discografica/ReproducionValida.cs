using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Discografica
{
    public class ReproducionValida : IValidador01
    {
        public bool isValid(IReproducible ElementoEscuchado)
        {
            if (ElementoEscuchado != null)
            {
                return ((ElementoEscuchado.Tiempo > 0 && ElementoEscuchado.Tiempo <  3600) && ElementoEscuchado.Nombre != "");
            }
            else
            {
                return false; 
            }
        }
    }
}
