using System;
using System.Collections.Generic;

namespace EventsProject.Models
{
    public partial class Evento
    {
        public int IdEvento { get; set; }
        public DateTime? Fecha { get; set; }
        public string? Lugar { get; set; }
        public string? Descripcion { get; set; }
        public decimal? Precio { get; set; }
        public string? Estado { get; set; }
    }
}
