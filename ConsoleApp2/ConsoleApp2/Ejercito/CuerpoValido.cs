using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Ejercito
{
    public class CuerpoValido : IValidadorCuerpo
    {
        public bool isValid(IMontable ElementoCuerpo)
        {
            if (ElementoCuerpo != null)
            {
                return (ElementoCuerpo.Precio > 0 && ElementoCuerpo.Descripcion != "");
            }
            else
            {
                return false;
            }
        }
    }
}
