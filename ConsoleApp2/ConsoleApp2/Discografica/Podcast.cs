using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Discografica
{
    public class Podcast : IReproducible
    {
        public int Tiempo { get; set; } = 0;
        public string Nombre { get; set; } = string.Empty;

        public bool reproducir()
        {
            return true;
        }
    }
}
