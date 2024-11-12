using ConsoleAppClases.Garaje;
using ConsoleAppClases.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Garaje
{
    public class AlquilableFactoryV01 : IFactoryAlquilable
    {
        public IAlquilable dameElemento(EnumTipos tipo, string id, double Tiempo)
        {
            switch (tipo)
            {
                case EnumTipos.Coche: return new Coche() { Identificador = id, PrecioHora = 4, Tiempo = Tiempo, Visor = new VisionadorConsola() };
                case EnumTipos.Furgoneta: return new Furgoneta() { Identificador = id, PrecioHora = 5, Tiempo = Tiempo, Visor = new VisionadorConsola() };
                case EnumTipos.Patinete: return new Patinete() { Identificador = id, PrecioHora = 0.1, Tiempo = Tiempo, Visor = new VisionadorConsola() };
                default: return null;
            }
        }
    }
}