using Cadenas.Services;

var builder = WebApplication.CreateBuilder(args);

// ******************************************************************************************
// Crear web api que reciba dos cadenas
// Tiene que concatenar las dos cadesnas con varios metodos:
// concatena (Concatena dos cadenas por ejemplo: patata y brava )
// Cuenta (recibe dos cadenas y devuelve la longitud de la primera-longitud de la segunda)
// *****************************************************************************************


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICadenas, CadenasPrimeras>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
