using ConsoleAppClases.Garaje;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Figura
{
    public class Circulo : IMedible
    {
        public IVisionableF VisorF { get; set; }
        public string Identificador { get ; set ; }
        public int Lado { get ; set; }

        public int damePerimetro()
        {
            return (2 * Lado * 3);
        }

        public int dameSuperficie()
        {
            return (Lado * Lado * 3);
        }

        public override string? ToString()
        {
            return VisorF.DameCadenaF(this);
        }
    }
}
