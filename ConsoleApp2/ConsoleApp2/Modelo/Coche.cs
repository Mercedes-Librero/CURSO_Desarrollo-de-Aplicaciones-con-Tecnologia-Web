using ConsoleAppClases.Garaje;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// {get;set;} // lectura y escritura 
// { set; }   // escritura 
// { get; }   // lectura  

// ---------------------------  METODOS DE LA CLASE OBJETO  --------------------------------------------------------
//Equals(object obj): Determina si el objeto actual es igual a otro objeto.
//GetHashCode(): Devuelve el código hash del objeto actual.
//GetType(): Devuelve el tipo del objeto actual como un objeto Type.
//ToString(): Devuelve una cadena que representa el objeto actual.
//ReferenceEquals(object obj1, object obj2): Determina si dos referencias de objeto especificadas son iguales.
//MemberwiseClone(): Crea una copia superficial del objeto actual.

// -----------------------------------   METODOS   ----------------------------------------------------------------


//  [modificador de acceso] < tipo de retorno> <nombre>([parámetros])  
//  {
//      [implementación]
//  }

// ********* [modificador de acceso]
//public. Todos tienen acceso.
//protected. Solo las clases derivadas tienen acceso.
//internal. Solo clases contenidas en el mismo ensamblado tienen acceso.
//private. Solo la clase que lo define tiene acceso él.

// ********* < tipo de retorno>
// string, int ...
// void. Sin retorno
// override Sobrescribir metodos de la clase objeto para que funcione en la clase nueva

// --------------------------------------   LIST   ----------------------------------------------------------------
// es como un tablero al que añadir objetos EJEMPLO ARCHIVO GESTIONCOLECION.CS y GESTIONCOLECIONFIGURAS.CS


namespace ConsoleAppClases.Modelo
{
    public class Coche
    {
        public Coche(string matricula, bool cabe = false)
        {
            Matricula = matricula;
            Cabe = cabe;
        }

        public Coche() { } // segundo constructor

        public string Matricula { get; set; }
        public bool Cabe { get; set; } = false;

        // ++ Sobrescribir metodos (ToString y Equials) de la clase objeto 
        // Adapta el método `ToString` para que devuelva una descripción personalizada del coche,
        // en lugar de devolver solo el nombre de la clase
        public override string ToString()
            {
                return "Matricula: " + this.Matricula + ", " + this.Cabe;
            }

            public override bool Equals(object? obj)
            {
                // Verifica si el objeto pasado como argumento es un objeto Coche y si la matrícula coincide
                return obj is Coche coche && Matricula == coche.Matricula;
            }
        // ++ FIN Sobrescribir 

        // Método para comparar este objeto Coche con otro objeto Coche según sus matrículas
                public int CompareTo(Coche other)
                {  // Compara las matrículas de este coche con el otro coche pasado como argumento
                    return this.Matricula.CompareTo(other.Matricula);
                }
    }
}
