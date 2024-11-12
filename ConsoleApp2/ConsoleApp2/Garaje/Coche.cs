using ConsoleAppClases.Modelo;
using ConsoleAppClases.Garaje;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Garaje
{
    public class Coche : IAlquilable
    {
        public IVisionable Visor { get; set; }
        public string Identificador { get; set; }
        public double PrecioHora { get; set; } = 4;
        public double Tiempo { get; set; }

        public double dameCoste()
        {
            return PrecioHora * Tiempo;
        }

        public override string? ToString()
        {

            return Visor.DameCadena(this);
        }
    }

}