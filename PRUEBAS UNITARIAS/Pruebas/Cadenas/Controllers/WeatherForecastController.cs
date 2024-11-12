using Microsoft.AspNetCore.Mvc;
using Cadenas.Services;
using System.Text.Encodings.Web;

namespace Cadenas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ICadenas MiCadena;

        public WeatherForecastController(ICadenas cadenas)
        {
            this.MiCadena = cadenas;
        }

        [HttpGet]
        [Route("GetSumaCadena/{cadena1}/{cadena2}")]
        public string GetSumaCadena(string cadena1, string cadena2)
        {
            return HtmlEncoder.Default.Encode(MiCadena.SumaCadena(cadena1, cadena2));
        }

        [HttpGet]
        [Route("GetRestaCadena/{cadena1}/{cadena2}")]
        public int GetRestaCadena(string cadena1,string cadena2)
        {
            return this.MiCadena.RestaCadena(cadena1,cadena2);
        }

    }
}
