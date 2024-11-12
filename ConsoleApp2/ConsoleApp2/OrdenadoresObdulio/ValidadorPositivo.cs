using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ConsoleAppClases.OrdenadoresObdulio;

namespace OrdenadoresObdulio
{
    public class ValidadorPositivo : IValidador
    {


        public bool isValid(IVendible ElementoVenta)
        {
            if (ElementoVenta != null)
            {
                return (ElementoVenta.PrecioOrd > 0 && ElementoVenta.GarantiaOrd > 0);
            }
            else
            {
                // Manejar el caso en que ElementoVenta es null
                return false; // O cualquier otro valor predeterminado que tenga sentido en tu contexto
            }
        }
    }
}
