using ConsoleAppClases.OrdenadoresObdulio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.OrdenadoresObdulio
{
    public class VendibleFactoryOrdV01 : IFactoryOrdenadores
    {
        public IValidador Validador { get; set; }

        public IVendible dameElementoOrd(EnumTiposOrd tipoOrd, double PrecioOrd = 0, double GarantiaOrd = 0)
        {
            IVendible vendible = null;
            switch (tipoOrd)
            {
                case EnumTiposOrd.Lentorro: vendible = new Lentorro(); break;
                case EnumTiposOrd.Normal: vendible = new Normal(); break;
                case EnumTiposOrd.Gamer: vendible = new Gamer(); break;
            }
            if (PrecioOrd != 0 && vendible != null)
                vendible.PrecioOrd = PrecioOrd;
            if (GarantiaOrd != 0 && vendible != null)
                vendible.GarantiaOrd = GarantiaOrd;

            if (vendible != null)
            {
                if (Validador.isValid(vendible))
                {
                    return vendible;
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
