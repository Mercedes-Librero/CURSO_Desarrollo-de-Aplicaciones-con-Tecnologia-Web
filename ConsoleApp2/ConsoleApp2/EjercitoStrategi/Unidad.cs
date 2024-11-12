using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClases.EjercitoStrategi
{
    public class Unidad
    {
        //public string Descripcion { get; set; } = "";

        public IMovimiento Movimiento;
        public IBlindado Blindado;
        public IPotencia Potencia;


        protected Unidad (IMovimiento movimiento, IBlindado blindado, IPotencia potencia )
        {
            Movimiento = movimiento;
            Blindado = blindado;
            Potencia = potencia;
        }
        public void SeMueve() { Movimiento.SeMueve(); }

        public void NoSeMueve() { Movimiento.NoSeMueve(); }

        public void Dispara() { Potencia.Dispara(); }

        public void NoDispara() { Potencia.NoDispara(); }

        public void EstaBlindado() {Blindado.EstaBlindado(); }

        public void NoEstaBlindado() { Blindado.NoEstaBlindado(); }


    }
}
