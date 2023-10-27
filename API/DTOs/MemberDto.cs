using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{   
    // Add Automapper to map dto and AppUser class 
    public class MemberDto
    {

        public int Id { get; set; }

        // [Required] way to add validation to Username and password

        public string UserName { get; set; }
        public string PhotoUrl  { get; set; }   

        public int Age { get; set; }

        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public string Introduction { get; set; }

        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }

        public string Country { get; set; }

        public List<PhotoDto> Photos { get; set; } = new();

    }

    public class PhotoDto
    {
        public int Id { get; set; } 
        public string Url { get; set; }
        public bool IsMain { get; set; }
    }
}