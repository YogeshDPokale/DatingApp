using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    // Add Automapper to map dto and AppUser class 
    public class sendDataToFastApi
    {

        public int Id { get; set; }

        public string UserName { get; set; }

    
        public int Age { get; set; }

       
        public string Gender { get; set; }
        
        public string Interests { get; set; }

    }
}
