using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.OrdenadoresObdulio
{
    public interface IVendibleDecorador
    {
        int PrecioDeco { get; set; }

        int RAM { get; set; }

        int Almacenamiento { get; set; }

    }
}
