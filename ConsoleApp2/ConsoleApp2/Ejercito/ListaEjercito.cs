using ConsoleAppClases.Discografica;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ConsoleAppClases.Ejercito
{
    public class ListaEjercito : IColeccionMontable, IMontable
    {
        //public IValidadorLimite01 ValLimite01 = new ComprobarLimite01();

   
        public IValidadorLimite01 ValLimite01 { get; set; }

        public string Descripcion {
            get { return ""; }
            set { Descripcion = ""; }
        }
        public int Velocidad
        {
            get { return TCapacidad; }
            set { TCapacidad = value; }
        }
        public int Potencia {
            get { return TPotencias; }
            set { TPotencias = value; }

        }
        public int Blindaje {
            get { return TBlindaje; }
            set { TBlindaje = value; }
        }
        public int Precio {
            get { return TPrecio; }
            set { TPrecio = value; }
        }

        List<IMontable> montados = new List<IMontable>();

        int TElementos = 0;
        int TPotencias = 0;
        int TBlindaje = 0;
        int TCapacidad = 0;
        int TPrecio = 0;

        public bool Add(IMontable elementoEjercito)
        {
            TPrecio += elementoEjercito.Precio;

            if (ValLimite01.LimiteSuperado(TPrecio))
            {
                montados.Add(elementoEjercito);

                TElementos++;
                TPotencias += elementoEjercito.Potencia;
                TBlindaje += elementoEjercito.Blindaje;
                TPrecio += elementoEjercito.Precio;
                TCapacidad += elementoEjercito.Velocidad;
                return true;
            }
            else
            {
                TPrecio -= elementoEjercito.Precio;
                return false;
            }
        }


        public int ListarEjercito()
        {
            foreach (var item in montados)
            {
                Console.WriteLine("        " + item.Descripcion + "  " + item.Velocidad + "  " + item.Blindaje + 
                                    "  " + item.Potencia + "  " + item.Precio);
            }

            return (TElementos);
        }

       public int totalBlindaje()
        {
            return TBlindaje;
        }

        public int totalCapacidad()
        {
            return TCapacidad;
        }

        public int totalElementos()
        {
            return TElementos;
        }

        public int totalPotencias()
        {
            return TPotencias;
        }

        public int totalPrecio()
        {
            return TPrecio;
        }

        public double totalCapacidadMilitar()
        {
            return ((TPotencias*TCapacidad)/2)/(100-TBlindaje);
        }

    }
}
