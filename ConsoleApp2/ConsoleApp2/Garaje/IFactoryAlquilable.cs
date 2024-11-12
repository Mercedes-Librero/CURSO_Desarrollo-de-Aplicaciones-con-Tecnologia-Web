using ConsoleAppClases.Garaje;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Garaje
{
    public interface IFactoryAlquilable
    {
        IAlquilable dameElemento(EnumTipos tipo, string id, double Tiempo);
    }
}