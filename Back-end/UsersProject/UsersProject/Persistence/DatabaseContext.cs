using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

using UsersProject.Model;

namespace UsersProject.Persistence
{
    //Class that represents the Database Context.
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Usuario> Users { get; set; }
    }
}
