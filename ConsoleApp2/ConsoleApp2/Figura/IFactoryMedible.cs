using ConsoleAppClases.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Figura
{
    public interface IFactoryMedible
    {
        IMedible dameElemento(EnumTiposF tipo, string id, int Lado);
    }
}