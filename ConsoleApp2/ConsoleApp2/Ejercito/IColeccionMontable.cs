using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.Ejercito
{
    public interface IColeccionMontable: IMontable     {

        public IValidadorLimite01 ValLimite01 { get; set; }    

        public bool Add(IMontable elementoEjercito);

        int ListarEjercito();

        // Saber cuantos elementos tiene cada ejercito
        int totalElementos();

        // Potencia Total ejercito
        int totalPotencias();

        // Blindaje total ejercito
        int totalBlindaje();

        // Capacidad movimiento ejercito
        int totalCapacidad();

        // Cuanto dinero se lleva gastado
        int totalPrecio();


        // conocer CM del ejercito
        double totalCapacidadMilitar();



    }
}
