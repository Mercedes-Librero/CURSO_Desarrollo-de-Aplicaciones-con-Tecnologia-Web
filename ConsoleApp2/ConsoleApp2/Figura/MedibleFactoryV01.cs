using ConsoleAppClases.Figura;
using ConsoleAppClases.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Figura
{
    public class MedibleFactoryV01: IFactoryMedible
    {
        public IMedible dameElemento(EnumTiposF tipo, string id, int Lado)
        {
            switch (tipo)
            {
                case EnumTiposF.Cuadrado: return new Cuadrado() { Identificador = id, Lado = Lado, VisorF = new VisionadorConsolaf() };
                case EnumTiposF.Circulo: return new Circulo() { Identificador = id, Lado = Lado, VisorF = new VisionadorConsolaf() };
                default: return null;
            }
        }
    }
}
