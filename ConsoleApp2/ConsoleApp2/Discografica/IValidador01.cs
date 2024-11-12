using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Discografica
{
    public interface IValidador01
    {
        bool isValid(IReproducible ElementoEscuchado);
    }
}
