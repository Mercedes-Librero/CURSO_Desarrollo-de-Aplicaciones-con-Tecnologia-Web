using ConsoleAppClases.OrdenadoresObdulio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.OrdenadoresObdulio
{
    public class VisionadorConsolaOrd_Borrar
    {
        public string DameOrdenador(IVendible elemento)
        {
            return "El ordenador " +
                elemento.GetType() + " tiene un precio de " + elemento.PrecioOrd +
                " y si garantia es de " + elemento.GarantiaOrd + ". Tiempo estimado de que se rompa " 
                + elemento.TiempoMedio();
        }
    }
}
