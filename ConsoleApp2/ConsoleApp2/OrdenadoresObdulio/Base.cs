using ConsoleAppClases.OrdenadoresObdulio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// +.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.
// P A T R O N  D E C O R A C I O N
// +.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.


namespace ConsoleAppClases.OrdenadoresObdulio
{
    //* decorador RAMMaxima->RAM 100 Y PRECIO 200
    public class DecoradorRAMMaxima : IVendibleDecorador
    {
        IVendibleDecorador ObjetoADecorar;

        public DecoradorRAMMaxima (IVendibleDecorador ordenador)
        {
            this.ObjetoADecorar = ordenador;
        }
        public int PrecioDeco 
        { 
            get { return this.ObjetoADecorar.PrecioDeco + 200;  } 
            set{ this.ObjetoADecorar.PrecioDeco = value; } 
        }
        public int RAM { get; set; } = 100;
        public int Almacenamiento 
        { 
            get { return this.ObjetoADecorar.Almacenamiento; } 
            set { this.ObjetoADecorar.Almacenamiento = value; } 
        }

        }

    

    //* decorador DISCOSolido -> almacenamiento al doble y AUMENTA EL PRECIO EN 100
    public class DecoradorDiscoSolido : IVendibleDecorador    
{
        IVendibleDecorador ObjetoADecorar;

        public int PrecioDeco
        {
            get { return this.ObjetoADecorar.PrecioDeco + 100; }
            set { this.ObjetoADecorar.PrecioDeco = value; }
        }
        public int RAM
        {
            get { return this.ObjetoADecorar.RAM; }
            set { this.ObjetoADecorar.RAM = value; }
        }
        public int Almacenamiento
        {
            get { return this.ObjetoADecorar.Almacenamiento * 2; }
            set { this.ObjetoADecorar.Almacenamiento = value; }
        }

        public DecoradorDiscoSolido(IVendibleDecorador ordenador)
        {
            this.ObjetoADecorar = ordenador;
        }
}

    //* decorador AvVerSiCuela -> precio al doble
    public class DecoradorAVerSiCuela : IVendibleDecorador
    { 

        IVendibleDecorador ObjetoADecorar;
        public int PrecioDeco
        {
            get { return this.ObjetoADecorar.PrecioDeco * 2; }
            set { this.ObjetoADecorar.PrecioDeco = value; }
        }

        public int RAM
        {
            get { return this.ObjetoADecorar.RAM; }
            set { this.ObjetoADecorar.RAM = value; }
        }
        public int Almacenamiento
        {
            get { return this.ObjetoADecorar.Almacenamiento; }
            set { this.ObjetoADecorar.Almacenamiento = value; }
        }

        public DecoradorAVerSiCuela(IVendibleDecorador ordenador)
        {
            this.ObjetoADecorar = ordenador;
        }
    }

    public class Base : IVendibleDecorador
    {
        public int PrecioDeco { get; set; } = 100;
        public int RAM { get; set; } = 10;
        public int Almacenamiento { get; set; } = 100;
    }
}

