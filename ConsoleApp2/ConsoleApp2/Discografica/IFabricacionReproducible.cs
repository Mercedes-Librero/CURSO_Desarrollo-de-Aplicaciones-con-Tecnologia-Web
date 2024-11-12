using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Discografica
{
    public interface IFabricacionReproducible
    {
        IValidador01 ValidadorRep01 { get; set; }

        IReproducible dameElementoRep(EnumTiposRep tipoRep, int Tiempo = 0, string Nombre = "" );
    }
}
