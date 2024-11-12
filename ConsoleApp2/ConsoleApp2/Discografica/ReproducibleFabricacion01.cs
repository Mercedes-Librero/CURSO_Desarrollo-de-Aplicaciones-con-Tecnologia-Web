using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Discografica
{
    public class ReproducibleFabricacion01 : IFabricacionReproducible
    {
        public IValidador01 ValidadorRep01 { get ; set ; }

        public IReproducible dameElementoRep(EnumTiposRep tipoRep, int Tiempo, string Nombre)
        {
            IReproducible reproducible = null;

            switch (tipoRep)
            {
                case EnumTiposRep.Cancion:
                    reproducible = new Cancion() { Tiempo = Tiempo, Nombre = Nombre };
                    break;
                case EnumTiposRep.Podcast:
                    reproducible = new Podcast() { Tiempo = Tiempo, Nombre = Nombre };
                    break;
            }

            if (reproducible != null)
            {
                if (ValidadorRep01.isValid(reproducible))
                {
                    return reproducible;
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }
        }
    }
}
