using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ConsoleAppClases.OrdenadoresObdulio;

namespace OrdenadoresObdulio
{
    public class MovimientosDiarios : IColeccionVendibles
    {
        List<IVendible> vendibles = new List<IVendible>();
        int numOrdenadores = 0;
        int numOrdenadoresMas125 = 0;
        double ordenadorMasBarato = Int32.MaxValue;
        double ordenadorMasCaro = 0;
        double totalPrecio = 0;
        public void Add(IVendible elemento)
        {
            vendibles.Add(elemento);
            numOrdenadores++;
            totalPrecio += elemento.PrecioOrd;
            if (elemento.PrecioOrd > 125)
            {
                numOrdenadoresMas125++;
            }
            if (elemento.PrecioOrd < ordenadorMasBarato)
            {
                ordenadorMasBarato = elemento.PrecioOrd;
            }
            if (elemento.PrecioOrd > ordenadorMasCaro)
            {
                ordenadorMasCaro = elemento.PrecioOrd;
            }
        }
        public void Listar()
        {
            foreach (var item in vendibles)
            {
                Console.WriteLine(item);
            }
        }

        public int NumeroOrdenadoresVendidos()
        {
            return numOrdenadores;
        }

        public int OrdenadoresDeMasde125()
        {
            return numOrdenadoresMas125;
        }

        public double OrdenadorMasBarato()
        {
            return ordenadorMasBarato;
        }

        public double OrdenadorMasCaro()
        {
            return ordenadorMasCaro;
        }

        public double PrecioMedioOrdenador()
        {
            return totalPrecio / numOrdenadores;
        }

        public double TotalImporteFacturado()
        {
            return totalPrecio;
        }
    }
}
