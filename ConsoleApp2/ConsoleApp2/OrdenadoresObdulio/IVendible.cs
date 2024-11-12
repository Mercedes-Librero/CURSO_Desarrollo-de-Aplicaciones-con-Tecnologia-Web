using ConsoleAppClases.OrdenadoresObdulio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.OrdenadoresObdulio
{
    public interface IVendible
    {
        double PrecioOrd { get; set; }
        double GarantiaOrd { get; set; }
        double TiempoMedio();

    }
}

