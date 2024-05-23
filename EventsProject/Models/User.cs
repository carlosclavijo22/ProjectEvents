using System;
using System.Collections.Generic;

namespace EventsProject.Models
{
    public partial class User
    {
        public int IdUser { get; set; }
        public string? Username { get; set; }
        public string? NameUser { get; set; }
        public string? LastnameUser { get; set; }
        public string? EmailUser { get; set; }
        public string? PasswordUser { get; set; }
    }
}
