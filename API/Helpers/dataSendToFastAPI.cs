                using System.Text.Json;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API.DTOs;
using Newtonsoft.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace API.Helpers
{
    public class SendToFastAPI
    {
            List<int> recommendedUsers ;
        public async Task<List<int>> SendPostRequestAsync(sendDataToFastApi currentUser , List<sendDataToFastApi> otherusers)
        {
            // Set the URL of your FastAPI endpoint
            string apiUrl = "http://127.0.0.1:8000/get";

            // Create an instance of HttpClient
            using (HttpClient httpClient = new HttpClient())
            {
                // Define your JSON data

                // Assuming currentUser and otherusers are objects you want to serialize to JSON
                string jsonData = System.Text.Json.JsonSerializer.Serialize(new { user_data = currentUser, otherUsers = otherusers });


                // Create a StringContent object with the JSON payload
                StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                try
                {
                    // Send the POST request to the FastAPI endpoint
                    HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content);

                    // Check if the request was successful (status code 200 OK)
                    if (response.IsSuccessStatusCode)
                    {
                        // Read and display the response content
                        string responseContent = await response.Content.ReadAsStringAsync();

                        // List<Number> businessunits = JsonConvert.DeserializeObject<List<Number>>(responseContent);
                        ResponseModel responseModel = JsonConvert.DeserializeObject<ResponseModel>(responseContent);

                        // Access the recommended users list
                        recommendedUsers = responseModel.recommended_users;
                        List<int> freshList = new List<int>();
                        foreach (int userId in recommendedUsers)
                        {
                            freshList.Add(userId);
                        Console.WriteLine($"\nResponse from FastAPI\n: {userId}");
                        }
                        Console.WriteLine($"\nResponse from FastAPI\n: {freshList}");
                        return freshList;
                    }
                    else
                    {
                        Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Exception: {ex.Message}");
                }
            }
                        return recommendedUsers;
            
        }
        static List<int> ParseResponse(string responseContent)
        {
            // Check if the responseContent starts with "System.Collections.Generic.List`1[System.Int32]"
            if (responseContent.StartsWith("System.Collections.Generic.List`1[System.Int32]"))
            {
                // Extract the list content and convert it to List<int>
                string listContent = responseContent.Substring(responseContent.IndexOf('['), responseContent.LastIndexOf(']') - responseContent.IndexOf('[') + 1);
                List<int> parsedList = new List<int>(Array.ConvertAll(listContent.Split(','), int.Parse));
                return parsedList;
            }
            else
            {
                // Handle invalid response
                Console.WriteLine("Invalid response format.");
                return new List<int>();
            }
        }
    }
    

    class ResponseModel
    {
        public List<int> recommended_users { get; set; }
    }
}
