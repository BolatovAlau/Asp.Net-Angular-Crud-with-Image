using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication3
{
    public class Validator
    {
        public static bool ValidateWorker(Worker worker)
        {
            if (ValidateWord(worker.Name) && ValidateWord(worker.Surname) && ValidateWord(worker.MiddleName) 
                && ValidateWord(worker.Sex) && ValidateWord(worker.Position) && ValidateWord(worker.Subdivision))
                return true;
            return false;
        }
        public static bool ValidateWord(string word)
        {
            if (word != null && word.Length > 0 && word.Length < 65)
                return true;
            return false;
        }
    }
    public class Worker
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string MiddleName { get; set; }
        public string Sex { get; set; }
        public string Photo { get; set; }
        public string Position { get; set; }
        public string Subdivision { get; set; }
        public bool CreateDep { get; set; }
        public bool CloseDep { get; set; }
        public bool OkDep { get; set; }
        public bool OkOpenDep { get; set; }
    }
    public class WorkerDBContext : DbContext
    {
        public DbSet<Worker> worker { get; set; }
    }
}