using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Ejercito
{
    public interface IFabricacionMontableStrategi
    {
        IValidadorCuerpo ValidadorCuerpo { get; set; }

        IMontable dameElementoMontar(EnumEjercito TipoElem,
                                    string Descripcion = "",
                                    int Velocidad = 0,
                                    int Potencia = 0,
                                    int Blindaje = 0,
                                    int Precio = 0);
    }
}
