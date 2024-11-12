using ConsoleAppClases.OrdenadoresObdulio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.OrdenadoresObdulio
{
    public class Lentorro : IVendible
    {
        public IVisionableOrd VisorOrd { get; set; }
        public double PrecioOrd { get; set; }
        public double GarantiaOrd { get; set; }

        public double TiempoMedio()
        {
            return PrecioOrd / GarantiaOrd;
        }

        public override string? ToString()
        {

            return VisorOrd.DameOrdenador(this);
        }
    }
}
