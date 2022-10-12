using Reto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace Reto.Controllers
{
    public class HomeController : Controller
    {
        List<TareaDt> lisTarea =  new List<TareaDt>();

        public ActionResult Tarea()
        {
            ViewBag.Message = "Listado de Tareas";
            return View();
        }
        [HttpPost]
        public JsonResult Consultar()
        {
            lisTarea.Add(new TareaDt { 
                Id = 1,
           Nombre = "Tarea Uno",
           FechaI = new DateTime(2022, 10, 10, 15, 25, 50), //crear fecha
           FechaF = DateTime.Now, //fecha del momento en que se corre
            Estado = true
            });

            lisTarea.Add(new TareaDt
            {
                Id = 2,
                Nombre = "Tarea Dos",
                FechaI = new DateTime(2022, 10, 10, 15, 25, 50), //crear fecha
                FechaF = DateTime.Now, //fecha del momento en que se corre
                Estado = true
            });

            return Json(lisTarea);
        }


        [HttpPost]
        public JsonResult Editar(int idTask)
        {
            TareaDt tareaDt = new TareaDt();
            try
            {
                lisTarea.Add(new TareaDt
                {
                    Id = 1,
                    Nombre = "Tarea Uno",
                    FechaI = new DateTime(2022, 10, 10, 15, 25, 50), //crear fecha
                    FechaF = DateTime.Now, //fecha del momento en que se corre
                    Estado = true
                });

                lisTarea.Add(new TareaDt
                {
                    Id = 2,
                    Nombre = "Tarea Dos",
                    FechaI = new DateTime(2022, 10, 10, 15, 25, 50), //crear fecha
                    FechaF = DateTime.Now, //fecha del momento en que se corre
                    Estado = true
                });

                foreach (var item in lisTarea)
                {
                    if (item.Id == idTask)
                    {
                        tareaDt.Id = item.Id;
                        tareaDt.Nombre = item.Nombre;
                        tareaDt.FechaI = item.FechaI;
                        tareaDt.FechaF = item.FechaF;
                        tareaDt.Estado = false;
                    }
                }
            }
            catch (Exception e)
            {

                throw;
            }
            
            
            return Json(tareaDt);
        }

        [HttpPost]
        public JsonResult Agregar(TareaDt objTarea)
        {
            int contador= lisTarea.Count;

            lisTarea.Add(new TareaDt
            {
                Id = contador +1,
                Nombre = objTarea.Nombre,
                FechaI = DateTime.Now,
                //FechaF = DateTime.Now, 
                Estado = true
            });
            return  Json(lisTarea);
        }

        [HttpDelete]
        public JsonResult Eliminar(int idTask)
        {
            foreach (var item in lisTarea)
            {
                if (item.Id == idTask)
                {
                    lisTarea.Remove(item);
                }
            }
            return Json(lisTarea);
        }

    }
}