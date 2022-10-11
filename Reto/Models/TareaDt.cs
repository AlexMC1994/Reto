using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Reto.Models
{
    public class TareaDt
    {
        public int Id { get; set; }
   
        public string Nombre { get; set; }

        public DateTime FechaI { get; set; }

        public DateTime FechaF { get; set; }

        public bool Estado { get; set; }
    }
}