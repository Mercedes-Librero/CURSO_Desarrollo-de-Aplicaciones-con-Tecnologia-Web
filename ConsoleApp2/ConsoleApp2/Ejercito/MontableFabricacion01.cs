using ConsoleAppClases.Ejercito;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ConsoleAppClases.Ejercito
{
    public class MontableFabricacion01 : IFabricacionMontableStrategi
    {
        public IValidadorCuerpo ValidadorCuerpo { get ; set ; }

        public IMontable dameElementoMontar(EnumEjercito TipoElem, string Descripcion = "", int Velocidad = 0, int Potencia = 0, int Blindaje = 0, int Precio = 0)
        {
            IMontable Montable = null;

            switch (TipoElem)
            {
                case EnumEjercito.Artilleria:
                    Montable = new Artilleria() {
                        Descripcion = Descripcion,
                        Velocidad = Velocidad,
                        Potencia=Potencia,
                        Blindaje=Blindaje,
                        Precio=Precio
                    };
                    break;
                case EnumEjercito.Caballeria:
                    Montable = new Caballeria()
                    {
                        Descripcion = Descripcion,
                        Velocidad = Velocidad,
                        Potencia = Potencia,
                        Blindaje = Blindaje,
                        Precio = Precio
                    };
                    break;
                case EnumEjercito.Infanteria:
                    Montable = new Infanteria()
                    {
                        Descripcion = Descripcion,
                        Velocidad = Velocidad,
                        Potencia = Potencia,
                        Blindaje = Blindaje,
                        Precio = Precio
                    };
                    break;
            }
            if (Montable != null)
            {
                if (ValidadorCuerpo.isValid(Montable))
                {
                    return Montable;
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
