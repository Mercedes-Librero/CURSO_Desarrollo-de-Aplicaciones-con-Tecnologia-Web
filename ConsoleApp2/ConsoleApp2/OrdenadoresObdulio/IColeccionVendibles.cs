using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.OrdenadoresObdulio
{
    public interface IColeccionVendibles
    {
        double TotalImporteFacturado();
        int NumeroOrdenadoresVendidos();
        double OrdenadorMasBarato();

        double OrdenadorMasCaro();

        double PrecioMedioOrdenador();

        int OrdenadoresDeMasde125();

        void Listar();
        public void Add(IVendible elemento);
    }
}
