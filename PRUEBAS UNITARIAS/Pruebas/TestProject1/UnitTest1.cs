using PruebasInicial.Services;

namespace TestProject1
{
    [TestClass]
    public class CalculadoraClasicaTest
    {
        CalculadoraClasica miCalculadora = new CalculadoraClasica();
        [TestMethod]
        public void Suma()
        {
            var resultado = miCalculadora.Suma(4, 4);
            Assert.AreEqual(8, resultado);
        }

        [TestMethod]
        public void Resta()
        {
            var resultado = miCalculadora.Resta(6, 4);
            Assert.IsTrue(resultado == 2);
        }

        [TestMethod]
        public void Multiplica()
        {
            var resultado = miCalculadora.Multiplica(7, 8);
            Assert.IsNotNull(resultado);
            Assert.IsTrue(resultado > 10);
            Assert.AreEqual(56, resultado);
        }

        [TestMethod]
        public void Divide()
        {
            var resultado = miCalculadora.Divide(7, 6);
            Assert.AreEqual(1.16, resultado, 0.01);
        }
    }
}
    