using ConsoleAppClases.Modelo;
using ConsoleAppClases.Garaje;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Garaje
{
    public class Patinete : IAlquilable

                
    {

        public IVisionable Visor { get; set; }
        public string Identificador { get; set; }
        public double PrecioHora { get; set; }
        public double Tiempo { get; set; }

        public double dameCoste()
        {
            return PrecioHora * Tiempo;
        }
    }
}
