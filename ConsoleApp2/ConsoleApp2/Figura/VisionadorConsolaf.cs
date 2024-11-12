using ConsoleAppClases.Garaje;
using ConsoleAppClases.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Figura
{
    public class VisionadorConsolaf: IVisionableF
    {
            public string DameCadenaF(IMedible elemento)
            {
                return "Hola, soy un " +
                    elemento.GetType() + " y tengo un id de: " + elemento.Identificador ;
            }
    }
}
