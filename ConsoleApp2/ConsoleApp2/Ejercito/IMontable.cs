using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Ejercito
{
    public interface IMontable
    {
        string Descripcion { get; set; }    
        int Velocidad { get; set; }
        int Potencia { get; set; }
        int Blindaje { get; set; }
        int Precio { get; set; }
    }
}
