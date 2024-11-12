using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Ejercito
{
    public class Caballeria : IMontable
    {
        public string Descripcion { get; set; } = "";
        public int Velocidad { get; set; } = 0;
        public int Potencia { get; set; } = 0;
        public int Blindaje { get; set; } = 0;
        public int Precio { get; set; } = 0;
    }
}
