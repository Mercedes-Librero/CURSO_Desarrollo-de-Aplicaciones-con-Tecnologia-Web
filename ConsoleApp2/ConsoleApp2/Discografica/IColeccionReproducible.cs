using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Discografica
{
    public interface IColeccionReproducible
    {
        int Reproducir();

        public void Add(IReproducible elemento);


    }
}
