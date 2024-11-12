using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Crear dos vehiculos y calcular la velocidad media de cada vehiculo ( potencia*velocidad/numRuedas)

namespace ConsoleAppClases.Modelo
{
    public class Vehiculo {
        public Vehiculo(double potencia, int numRuedas, double velocidad)
        {
            Potencia = potencia;
            NumRuedas = numRuedas;
            Velocidad = velocidad;
        }

        public Vehiculo() { }

        public double Potencia { get; set; }

        public int NumRuedas { get; set; }

        public double Velocidad { get; set; }

        public double MediaEstandar(double potencia, int numRuedas, double velocidad)
        {
            return ((potencia*velocidad)/ numRuedas);
        }

    }

   
}
