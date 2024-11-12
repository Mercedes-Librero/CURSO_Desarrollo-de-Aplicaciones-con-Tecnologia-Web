using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Ejercito
{
    public interface IValidadorCuerpo
    {
        bool isValid(IMontable ElementoCuerpo);
    }
}
