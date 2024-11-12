using ConsoleAppClases.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Garaje
{
    public class VisionadorHTML : IVisionable
    {
        public string DameCadena(IAlquilable elemento)
        {
            return "<b> Hola, soy un </b> " +
                elemento.GetType() + " y tengo un id de: " + elemento.Identificador +
                "mi Precio hora es: " + elemento.PrecioHora + ", he estado: " +
                elemento.Tiempo + " y he generado " + elemento.dameCoste();
        }
    }
}