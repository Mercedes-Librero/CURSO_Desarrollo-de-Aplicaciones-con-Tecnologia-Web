using ConsoleAppClases.Modelo;
using ConsoleAppClases.Garaje;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Garaje
{
    public class GestionColecion
    {
        private List <IAlquilable> alquileres = new ();

        void Add(IAlquilable elemento)
        {
            this.alquileres.Add (elemento);
        }

        double DameTotal()
        {
            return this.alquileres.Sum(x => x.dameCoste());

        }
    }
}
