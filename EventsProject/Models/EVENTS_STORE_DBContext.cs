using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EventsProject.Models
{
    public partial class EVENTS_STORE_DBContext : DbContext
    {
        public EVENTS_STORE_DBContext()
        {
        }

        public EVENTS_STORE_DBContext(DbContextOptions<EVENTS_STORE_DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Evento> Eventos { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;DataBase=EVENTS_STORE_DB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Evento>(entity =>
            {
                entity.HasKey(e => e.IdEvento)
                    .HasName("PK__eventos__C8DC7BDAC1383318");

                entity.ToTable("eventos");

                entity.Property(e => e.IdEvento).HasColumnName("idEvento");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.Estado)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("estado")
                    .HasDefaultValueSql("('activo')");

                entity.Property(e => e.Fecha)
                    .HasColumnType("date")
                    .HasColumnName("fecha");

                entity.Property(e => e.Lugar)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("lugar");

                entity.Property(e => e.Precio)
                    .HasColumnType("decimal(6, 2)")
                    .HasColumnName("precio");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.IdUser)
                    .HasName("PK__users__D2D146375350173E");

                entity.ToTable("users");

                entity.Property(e => e.IdUser).HasColumnName("id_user");

                entity.Property(e => e.EmailUser)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email_user");

                entity.Property(e => e.LastnameUser)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("lastname_user");

                entity.Property(e => e.NameUser)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("name_user");

                entity.Property(e => e.PasswordUser)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password_user");

                entity.Property(e => e.Username)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("username");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
