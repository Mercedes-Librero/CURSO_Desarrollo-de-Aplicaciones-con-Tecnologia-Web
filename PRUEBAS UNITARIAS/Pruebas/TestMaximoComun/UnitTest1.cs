using MaximoComun.Services;

namespace TestMaximoComun
{
    [TestClass]
    public class CalculoTest
    {

        CalcularDivisorMultiplo miCalculo = new CalcularDivisorMultiplo();

        [TestMethod]
        public void MCD()
        {
            var resultado = miCalculo.MaximoDivisor(9, 18);
            Assert.AreEqual(1, resultado);
        }

        [TestMethod]
        public void MCM()
        {
            var resultado = miCalculo.MinimoMultiplo(4, 4);
            Assert.AreEqual(4, resultado);
        }
    }
}