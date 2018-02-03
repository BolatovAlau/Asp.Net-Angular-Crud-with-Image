using System;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class HomeController : Controller
    {
        // GET: Worker
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllWorkers()
        {
            using (WorkerDBContext contextObj = new WorkerDBContext())
            {
                var workerList = contextObj.worker.ToList();

                return Json(workerList, JsonRequestBehavior.AllowGet);
            }
        }
        //GET: Worker by Id
        public JsonResult GetWorkerById(int id)
        {
            using (WorkerDBContext contextObj = new WorkerDBContext())
            {
                var workerId = id;
                var getWorkerById = contextObj.worker.Find(workerId);
                return Json(getWorkerById, JsonRequestBehavior.AllowGet);
            }
        }
        //Update Worker
        public string UpdateWorker(Worker worker)
        {
            if (worker != null && Validator.ValidateWorker(worker))
            {
                using (WorkerDBContext contextObj = new WorkerDBContext())
                {
                    int workerId = Convert.ToInt32(worker.Id);
                    Worker _worker = contextObj.worker.Where(b => b.Id == workerId).FirstOrDefault();

                    if (!string.IsNullOrEmpty(_worker.Photo) && _worker.Photo != worker.Photo)
                    {
                        DeletePhotoByWorkerId(_worker.Id);
                    }

                    _worker.Name = worker.Name;
                    _worker.Surname = worker.Surname;
                    _worker.MiddleName = worker.MiddleName;
                    _worker.Sex = worker.Sex;
                    _worker.Photo = worker.Photo;
                    _worker.Position = worker.Position;
                    _worker.Subdivision = worker.Subdivision;
                    _worker.CreateDep = worker.CreateDep;
                    _worker.CloseDep = worker.CloseDep;
                    _worker.OkDep = worker.OkDep;
                    _worker.OkOpenDep = worker.OkOpenDep;

                    contextObj.SaveChanges();
                    return "Worker record updated successfully";
                }
            }
            else
            {
                return "Invalid worker record";
            }
        }
        // Add worker
        public string AddWorker(Worker worker)
        {
            if (worker != null)
            {
                using (WorkerDBContext contextObj = new WorkerDBContext())
                {
                    contextObj.worker.Add(worker);
                    contextObj.SaveChanges();
                    return "Worker record added successfully";
                }
            }
            else
            {
                return "Invalid worker record";
            }
        }

        public string DeleteWorker(string workerId)
        {
            if (!String.IsNullOrEmpty(workerId))
            {
                try
                {
                    int _workerId = Int32.Parse(workerId);
                    using (WorkerDBContext contextObj = new WorkerDBContext())
                    {
                        var _worker = contextObj.worker.Find(_workerId);

                        if (_worker.Photo != null)
                        {
                            string path = Path.Combine(Server.MapPath("~/Images"), _worker.Photo);

                            if (System.IO.File.Exists(path))
                                System.IO.File.Delete(path);
                        }

                        contextObj.worker.Remove(_worker);
                        contextObj.SaveChanges();
                        return "Selected worker record deleted sucessfully";
                    }
                }
                catch (Exception)
                {
                    return "Worker details not found";
                }
            }
            return "Invalid operation";
        }

        [HttpPost]
        public string FileUpload(HttpPostedFileBase file)
        {
            if (file != null)
            {
                var fileName = file.FileName;
                string pic = Guid.NewGuid() + fileName.Substring(fileName.LastIndexOf('.'));
                string path = Path.Combine(Server.MapPath("~/Images"), pic);
                // file is uploaded
                file.SaveAs(path);
                return pic;
            }
            else
            {
                return "";
            }
        }

        public string DeletePhotoByWorkerId(int workerId)
        {
            WorkerDBContext contextObj = new WorkerDBContext();
            var _worker = contextObj.worker.Find(workerId);

            if (!string.IsNullOrEmpty(_worker.Photo))
            {
                string path = Path.Combine(Server.MapPath("~/Images"), _worker.Photo);

                if (System.IO.File.Exists(path))
                    System.IO.File.Delete(path);
            }
            return "";
        }
    }
}