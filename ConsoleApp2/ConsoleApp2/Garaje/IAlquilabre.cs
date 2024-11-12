using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Garaje
{
    public interface IAlquilable
    {
        string Identificador { get; set; }
        double PrecioHora { get; set; }
        double Tiempo { get; set; }
        double dameCoste();

    }
}
