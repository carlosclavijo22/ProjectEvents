using EventsProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Contracts;

namespace EventsProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventoController : ControllerBase
    {
        private readonly EVENTS_STORE_DBContext _dbcontext;

        public EventoController(EVENTS_STORE_DBContext context)
        {
            _dbcontext = context;

        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Evento> lista = await _dbcontext.Eventos.OrderByDescending(c => c.IdEvento).Where(i => i.Estado != "inactivo").
                ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);

        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Evento request)
        {
            await _dbcontext.Eventos.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Evento request)
        {
            _dbcontext.Eventos.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Evento evento = _dbcontext.Eventos.Find(id);

            evento.Estado = "inactivo";

            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

    }
}
