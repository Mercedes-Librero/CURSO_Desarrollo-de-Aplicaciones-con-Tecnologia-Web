// See https://aka.ms/new-console-template for more information

using ConsoleAppClases.Garaje;
using ConsoleAppClases.Figura;
using ConsoleAppClases.Modelo;
using ConsoleAppClases.OrdenadoresObdulio;
using System.Reflection.Emit;
using System.Runtime.InteropServices;
using OrdenadoresObdulio;
using ConsoleAppClases.Discografica;
using System.ComponentModel;
using ConsoleAppClases.Ejercito;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Collections.Generic;

// ************************************* CLASE COCHE *********************************************
// FORMAS DE CREAR EL OBJETO
ConsoleAppClases.Modelo.Coche MiCitroen = new ConsoleAppClases.Modelo.Coche();
MiCitroen.Matricula = "3424 fgh";
MiCitroen.Cabe = true;

ConsoleAppClases.Modelo.Coche MiSeat = new ();
MiSeat.Matricula = "3424 tgh";
MiSeat.Cabe = false;

var MiFiat = new ConsoleAppClases.Modelo.Coche();
MiFiat.Matricula = "3424 tgh";
MiFiat.Cabe = false;

// la que recomienda C#
var MiMercedes = new ConsoleAppClases.Modelo.Coche()
{
    Matricula = "2323 dfd",
    Cabe = true
};

Console.WriteLine(MiMercedes);

// ************************************* CLASE VEHICULO *********************************************

var MiMoto = new Vehiculo()
{
    Potencia = 10,
    Velocidad = 10,
    NumRuedas = 2
};

var MiCoche = new Vehiculo()
{
    Potencia = 1536.44,
    Velocidad = 180,
    NumRuedas = 4
};


Console.WriteLine(MiMoto.MediaEstandar(MiMoto.Velocidad, MiMoto.NumRuedas, MiMoto.Potencia));


// ************************************* GARAJE *********************************************


IFactoryAlquilable Factoria = new AlquilableFactoryV01();

IAlquilable alquilable1 = Factoria.dameElemento(EnumTipos.Coche, "uyatsuyastauyst", 8);
IAlquilable alquilable2 = Factoria.dameElemento(EnumTipos.Furgoneta, "sasasasas", 9);
IAlquilable alquilable3 = Factoria.dameElemento(EnumTipos.Patinete, "sasasasas", 9);

Console.WriteLine(alquilable1);
Console.WriteLine(alquilable2);

// ************************************ FIGURA  ***********************************************

IFactoryMedible FactoriaFigura = new MedibleFactoryV01();

IMedible Medible1 = FactoriaFigura.dameElemento(EnumTiposF.Cuadrado, "4", 7);
IMedible Medible2 = FactoriaFigura.dameElemento(EnumTiposF.Circulo, "7", 8);

Console.WriteLine(Medible1);
Console.WriteLine(Medible2);

// *********************************************************************************************************
// ************************************ ORDENADORES OBDULIO  ***********************************************
// *********************************************************************************************************

IValidador MiValidadorPositivo = new ValidadorPositivo();
IFactoryOrdenadores MiFabrica = new VendibleFactoryOrdV01();
MiFabrica.Validador = MiValidadorPositivo;

IColeccionVendibles MovDiario = new MovimientosDiarios();
Console.WriteLine("Que Desea Hacer: X para salir");
var entrada = Console.ReadLine();
while (entrada.ToUpper() != "X")
{
    if (entrada == "1")
    {
        IVendible MiOrdenador = MiFabrica.dameElementoOrd(EnumTiposOrd.Lentorro);
        if (MiValidadorPositivo.isValid(MiOrdenador))
            MovDiario.Add(MiOrdenador);
        Console.WriteLine("Creado Lentorro...");
    }
    if (entrada == "2")
    {
        IVendible MiOrdenador = MiFabrica.dameElementoOrd(EnumTiposOrd.Normal);
        if (MiValidadorPositivo.isValid(MiOrdenador))
            MovDiario.Add(MiOrdenador);
        Console.WriteLine("Creado Normal...");
    }
    if (entrada == "3")
    {
        IVendible MiOrdenador = MiFabrica.dameElementoOrd(EnumTiposOrd.Gamer);
        if (MiValidadorPositivo.isValid(MiOrdenador))
            MovDiario.Add(MiOrdenador);
        Console.WriteLine("Creado Gamer...");
    }
    Console.WriteLine("Que Desea Hacer: X para salir");
    entrada = Console.ReadLine();
}

Console.WriteLine($"El total ingresado es {MovDiario.TotalImporteFacturado()}");

// *************************************************************************************************
// ************************************ DISCOGRAFICA ***********************************************
// *************************************************************************************************

IValidador01 MiValidadorMusica = new ReproducionValida();
IFabricacionReproducible MiFabricaMusica = new ReproducibleFabricacion01();

MiFabricaMusica.ValidadorRep01 = MiValidadorMusica;

IColeccionReproducible ListaRep = new ListaReproduccion();

Console.WriteLine("Crea tu lista-> 1 Cancion, 2 Podcast: X para salir");
var Tipo = Console.ReadLine();

while (Tipo.ToUpper() != "X")
{
    if (Tipo == "1")
    {
        Console.WriteLine("Titulo de cancion");
        var NombreCons = Console.ReadLine();
        Console.WriteLine("Duracion ");

        int TiempoCons;

        bool success = int.TryParse(Console.ReadLine(), out TiempoCons);

        if (!success){
            TiempoCons = 0;
        }

        //var TiempoCons = int.Parse(Console.ReadLine());

        IReproducible MiReproduccion = MiFabricaMusica.dameElementoRep(EnumTiposRep.Cancion, TiempoCons, NombreCons);
        if (MiValidadorMusica.isValid(MiReproduccion)) {
            ListaRep.Add(MiReproduccion);
            Console.WriteLine("Sumada cancion...");
        }

    }
    if (Tipo == "2")
    {
        Console.WriteLine("Titulo de Podcast");
        var NombreCons = Console.ReadLine();
        Console.WriteLine("Duracion ");
        var TiempoCons = int.Parse(Console.ReadLine());
        IReproducible MiReproduccion = MiFabricaMusica.dameElementoRep(EnumTiposRep.Podcast, TiempoCons, NombreCons);
        if (MiValidadorMusica.isValid(MiReproduccion)) 
        {
            ListaRep.Add(MiReproduccion);
            Console.WriteLine("Sumado Podcast...");
        }
    }
    Console.WriteLine("Crea tu lista-> 1 Cancion, 2 Podcast: X para salir");
    Tipo = Console.ReadLine();
}

Console.WriteLine($"Lista reproduccion {ListaRep.Reproducir()}");

// *************************************************************************************************
// **************************************** EJERCITO ***********************************************
// *************************************************************************************************

IValidadorCuerpo ValidadorCuepo = new CuerpoValido();
IFabricacionMontableStrategi MiFabricaEjercito = new MontableFabricacion01();

MiFabricaEjercito.ValidadorCuerpo = ValidadorCuepo;

IValidadorLimite01 ValLimite01 = new ComprobarLimite01();
IColeccionMontable ListaEjercito = new ListaEjercito();

IColeccionMontable ListaEjercito2 = new ListaEjercito(); // creamos otra lista en la que meteremos LISTAS

ListaEjercito.ValLimite01 = ValLimite01;

ListaEjercito2.ValLimite01 = ValLimite01;


Console.WriteLine("Crea tu EJERCITO-> 1 Artilleria, 2 Caballeria, 3 Infanteria: X para salir");
var TipoEjercito = Console.ReadLine();

while (TipoEjercito.ToUpper() != "X")
{
    if (TipoEjercito == "1")
    {
        Console.WriteLine("Descripction elemento Artilleria");
        var Descripcion = Console.ReadLine();
        Console.WriteLine("Velocidad ");
        var Velocidad = int.Parse(Console.ReadLine());
        Console.WriteLine("Blindaje ");
        var Blindaje = int.Parse(Console.ReadLine());
        Console.WriteLine("Potencia ");
        var Potencia = int.Parse(Console.ReadLine());
        Console.WriteLine("Precio ");
        var Precio = int.Parse(Console.ReadLine());

        IMontable MiMontaje = MiFabricaEjercito.dameElementoMontar(EnumEjercito.Artilleria, Descripcion,Velocidad,Potencia,Blindaje,Precio);
        if (ValidadorCuepo.isValid(MiMontaje))
        {            
            if (ListaEjercito.Add(MiMontaje))
            {
                Console.WriteLine("Añadido");
            }
            else
            {
                Console.WriteLine("No se puede añadir, superado ");
            }
        }
    }
    if (TipoEjercito == "2")
    {
        Console.WriteLine("Descripction elemento Caballeria");
        var Descripcion = Console.ReadLine();
        Console.WriteLine("Velocidad ");
        var Velocidad = int.Parse(Console.ReadLine());
        Console.WriteLine("Blindaje ");
        var Blindaje = int.Parse(Console.ReadLine());
        Console.WriteLine("Blindaje ");
        var Potencia = int.Parse(Console.ReadLine());
        Console.WriteLine("Blindaje ");
        var Precio = int.Parse(Console.ReadLine());

        IMontable MiMontaje = MiFabricaEjercito.dameElementoMontar(EnumEjercito.Caballeria, Descripcion, Velocidad, Potencia, Blindaje, Precio);
        if (ValidadorCuepo.isValid(MiMontaje))
        {
            if (ListaEjercito.Add(MiMontaje))
            {
                Console.WriteLine("Añadido");
            }
            else
            {
                Console.WriteLine("No se puede añadir, superado ");
            }
        }
    }
    if (TipoEjercito == "3")
    {
        Console.WriteLine("Descripction elemento Infanteria");
        var Descripcion = Console.ReadLine();
        Console.WriteLine("Velocidad ");
        var Velocidad = int.Parse(Console.ReadLine());
        Console.WriteLine("Blindaje ");
        var Blindaje = int.Parse(Console.ReadLine());
        Console.WriteLine("Blindaje ");
        var Potencia = int.Parse(Console.ReadLine());
        Console.WriteLine("Blindaje ");
        var Precio = int.Parse(Console.ReadLine());

        IMontable MiMontaje = MiFabricaEjercito.dameElementoMontar(EnumEjercito.Infanteria, Descripcion, Velocidad, Potencia, Blindaje, Precio);
        if (ValidadorCuepo.isValid(MiMontaje))
        {
            if (ListaEjercito.Add(MiMontaje))
            {
                Console.WriteLine("Añadido");
            }
            else
            {
                Console.WriteLine("No se puede añadir, superado ");
            }
        }
    }

    Console.WriteLine("Crea tu EJERCITO-> 1 Artilleria, 2 Caballeria, 3 Infanteria: X para salir");
    TipoEjercito = Console.ReadLine();
}


//ListaEjercito.Add(ListaEjercito);

////Console.WriteLine($"Tu ejercito es:  {ListaEjercito.ListarEjercito()}");

//ListaEjercito2.Add(ListaEjercito);
//Console.WriteLine($"Tu ejercito2 es:  {ListaEjercito2.ListarEjercito()}");

//Console.WriteLine(" ");
//Console.WriteLine("*****************************************************************************************************************");
//Console.WriteLine(" ");

//Console.WriteLine($"Tiene un total de:  {ListaEjercito2.totalCapacidad()}");
//Console.WriteLine($"Su POTENCIA es de:  {ListaEjercito2.totalPotencias()}");
//Console.WriteLine($"Su BLINDAJE es de:  {ListaEjercito2.totalBlindaje()}");
//Console.WriteLine($"Su CAPACIDAD es de:  {ListaEjercito2.totalCapacidad()}");
//Console.WriteLine($"Su PRECIO es de:  {ListaEjercito2.totalPrecio()}");
//Console.WriteLine(" ");
//Console.WriteLine($"Su CAPACIDAD MILITAR es de:  {ListaEjercito2.totalCapacidadMilitar()}");

//Console.WriteLine(" ");
//Console.WriteLine("*****************************************************************************************************************");
//Console.WriteLine(" ");

ListaEjercito.Add(ListaEjercito);

Console.WriteLine($"Tu ejercito es:  {ListaEjercito.ListarEjercito()}");

Console.WriteLine(" ");
Console.WriteLine("*****************************************************************************************************************");
Console.WriteLine(" ");

Console.WriteLine($"Tiene un total de:  {ListaEjercito.totalCapacidad()}");
Console.WriteLine($"Su POTENCIA es de:  {ListaEjercito.totalPotencias()}");
Console.WriteLine($"Su BLINDAJE es de:  {ListaEjercito.totalBlindaje()}");
Console.WriteLine($"Su CAPACIDAD es de:  {ListaEjercito.totalCapacidad()}");
Console.WriteLine($"Su PRECIO es de:  {ListaEjercito.totalPrecio()}");
Console.WriteLine(" ");
Console.WriteLine($"Su CAPACIDAD MILITAR es de:  {ListaEjercito.totalCapacidadMilitar()}");

Console.WriteLine(" ");
Console.WriteLine("*****************************************************************************************************************");
Console.WriteLine(" ");


// ******************************************************************************************************************
// **************************************** ORDENADOR CON DECORACION  ***********************************************
// ******************************************************************************************************************

//CLIENTES:
//*Manolo->basico
//* Ana->basico + RAMMaxima
//* Luisa->basico + RAMMaxima + DISCOSolido
//* Geronimo->basico + DISCOSolido + AVerSiCuela


IVendibleDecorador VendibleSinDecorador = new Base();

Console.WriteLine($" Precio Ordenador BASE:  { VendibleSinDecorador.PrecioDeco}");
Console.WriteLine($" RAM Ordenador BASE:  {VendibleSinDecorador.RAM}");
Console.WriteLine($" Almacenamiento Ordenador BASE:  {VendibleSinDecorador.Almacenamiento}");

Console.WriteLine(" ");
Console.WriteLine("____________________________________________________________________________________________");
Console.WriteLine(" ");

IVendibleDecorador VendibleConDecoradorRAM = new DecoradorRAMMaxima(VendibleSinDecorador);

Console.WriteLine($" ORDENADOR BASE + DECORACIONRAM:");
Console.WriteLine($" Precio:  {VendibleConDecoradorRAM.PrecioDeco}");
Console.WriteLine($" RAM:  {VendibleConDecoradorRAM.RAM}");
Console.WriteLine($" Almacenamiento:  {VendibleConDecoradorRAM.Almacenamiento}");



Console.WriteLine(" ");
Console.WriteLine("____________________________________________________________________________________________");
Console.WriteLine(" ");

IVendibleDecorador VendibleConDecoradorDisco = new DecoradorDiscoSolido(VendibleConDecoradorRAM);

Console.WriteLine($" ORDENADOR BASE + DECORACIONRAM + DISCOSOLIDO :");
Console.WriteLine($" Precio Ordenador BASE + DecoracionRAM:  {VendibleConDecoradorDisco.PrecioDeco}");
Console.WriteLine($" RAM Ordenador BASE:  {VendibleConDecoradorDisco.RAM}");
Console.WriteLine($" Almacenamiento Ordenador BASE:  {VendibleConDecoradorDisco.Almacenamiento}");

Console.WriteLine(" ");
Console.WriteLine("____________________________________________________________________________________________");
Console.WriteLine(" ");

IVendibleDecorador VendibleconDecoradorAVerSiCuela = new DecoradorAVerSiCuela(VendibleConDecoradorDisco);

