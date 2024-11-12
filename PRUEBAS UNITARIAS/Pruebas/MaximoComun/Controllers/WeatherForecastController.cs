using Microsoft.AspNetCore.Mvc;
using MaximoComun.Services;

namespace MaximoComun.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly IDivisorMultiplo MiCalculo;

        public WeatherForecastController(IDivisorMultiplo calculo)
        {
            this.MiCalculo = calculo;
        }

        [HttpGet]
        [Route("GetMCD/{numero1:int}/{numero2:int}")]
        public double GetMCD(int numero1, int numero2)
        {
            return MiCalculo.MaximoDivisor(numero1, numero2);
        }


        [HttpGet]
        [Route("GetMCM/{numero1:int}/{numero2:int}")]
        public double GetMCM(int numero1, int numero2)
        {
            return MiCalculo.MinimoMultiplo(numero1, numero2);
        }
    }
}
