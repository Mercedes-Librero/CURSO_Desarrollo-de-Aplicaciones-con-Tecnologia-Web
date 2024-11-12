using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Figura
{
    public interface IMedible
    {
        string Identificador { get; set; }
        int Lado { get; set; }


        int dameSuperficie();
        int damePerimetro();

    }
}
