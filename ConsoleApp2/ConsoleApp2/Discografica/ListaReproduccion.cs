using ConsoleAppClases.Discografica;
using ConsoleAppClases.OrdenadoresObdulio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Discografica
{
    public class ListaReproduccion : IColeccionReproducible
    {

        int totalCanciones = 0;
        int totalTiempo = 0;

        List<IReproducible> reproducibles = new List<IReproducible>();
        public void Add(IReproducible elemento)
        {
            reproducibles.Add(elemento);
         
            totalCanciones++;
            totalTiempo += elemento.Tiempo;

        }

        public int Reproducir()
        {
            foreach (var item in reproducibles)
            {
                Console.WriteLine("        " + item.Nombre + "  " + item.Tiempo);
            }
            return (totalTiempo);
        }


    }
}
