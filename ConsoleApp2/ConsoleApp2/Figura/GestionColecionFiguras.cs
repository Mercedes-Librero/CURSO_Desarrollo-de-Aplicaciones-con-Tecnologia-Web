using ConsoleAppClases.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


// Un tablero de figuras para saber, cuantas figuras hay, cual es la superficie total, cual es el perimetro,
// cual es la figura mas pequeña, cual es la mas grande, cual es la media de superficie y de perimetro.
namespace ConsoleAppClases.Figura
{
    public class GestionColecionFiguras
    {
        private List<IMedible> medidas = new();

        void Add(IMedible elemento)
        {
            this.medidas.Add(elemento);
        }

        double DameTotal()
        {
            return this.medidas.Count;

        }

        double DameSuperficieTotal()
        {
            double total = 0;

            foreach (IMedible figura in medidas)
            {
                total += figura.dameSuperficie();
            }

            return total;
        }

        double DamePerimetroTotal()
        {
            double total = 0;

            foreach (IMedible figura in medidas)
            {
                total += figura.damePerimetro();
            }

            return total;
        }

        double DamePeque()
        {
            IMedible figuraMasPequena = null;
            double areaMasPequena = double.MaxValue;
            foreach (IMedible figura in medidas)
            {
                double areaActual = figura.dameSuperficie();
                if (areaActual < areaMasPequena)
                {
                    areaMasPequena = areaActual;
                    figuraMasPequena = figura;
                }
            }
            return areaMasPequena;
        }

double DamePerimetroMedia()
        {
            double media =  DamePerimetroTotal()/DameTotal();   
            return media;
        }
        double DameSuperficieMedia()
        {
            double media = DameSuperficieTotal() / DameTotal();
            return media;
        }

    }
}
