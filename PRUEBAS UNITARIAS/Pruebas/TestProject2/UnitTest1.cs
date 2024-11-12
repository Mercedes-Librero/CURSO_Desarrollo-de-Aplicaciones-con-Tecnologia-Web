using Cadenas.Services;

namespace TestProject2
{
    [TestClass]
    public class CadenasTest { 

        CadenasPrimeras miCadena = new CadenasPrimeras();
    
        [TestMethod]
        public void SumaCadena()
        {
            var resultado = miCadena.SumaCadena("Mercedes ", "Librero");
            Assert.AreEqual("Mercedes Librero", resultado);
        }

        [TestMethod]
        public void RestaCadena()
        {
            var resultado = miCadena.RestaCadena("Mercedes", "Librero");
            Assert.AreEqual(1, resultado);
        }
    }
}