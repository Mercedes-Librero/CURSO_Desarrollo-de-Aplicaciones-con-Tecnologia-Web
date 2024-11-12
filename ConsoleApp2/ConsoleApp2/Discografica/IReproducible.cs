using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Discografica
{
    public interface IReproducible
    {
         public int Tiempo { get; set; }

         public string Nombre {  get; set; }

         public bool reproducir();
    }
}
