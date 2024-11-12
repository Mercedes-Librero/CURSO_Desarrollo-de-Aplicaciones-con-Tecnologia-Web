using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Figura
{
    public class Cuadrado : IMedible
    {
        public IVisionableF VisorF { get; set; }
        public string Identificador { get ; set ; }
        public int Lado { get ; set ; }

        public int damePerimetro()
        {
            return Lado * 4;
        }

        public int dameSuperficie()
        {
            return Lado * Lado;
        }
    }
}
