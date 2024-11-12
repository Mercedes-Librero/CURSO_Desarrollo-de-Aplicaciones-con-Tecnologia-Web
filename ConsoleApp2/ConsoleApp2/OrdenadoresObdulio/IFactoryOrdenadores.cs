using ConsoleAppClases.OrdenadoresObdulio;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.OrdenadoresObdulio
{
    public interface IFactoryOrdenadores
    {
        IValidador Validador { get; set; }
        IVendible dameElementoOrd(EnumTiposOrd tipoOrd, double PrecioOrd = 0, double GarantiaOrd = 0);
    }
}
