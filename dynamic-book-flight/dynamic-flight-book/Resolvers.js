const resolvers = {
    Query: {
        flight: () =>[
            {
              "from": "XYZ International Airport",
              "to": "NEW DELHI International Airport",
             
              "passengersClass": "1Adult.BusinessClass",
      
            },
            {
              "from": "XYZ International Airport",
              "to": "NEW DELHI International Airport",
             
              "passengersClass": "1Adult.BusinessClass",
             
            },
            {
              "from": "XYZ International Airport",
              "to": "NEW DELHI International Airport",
             
              "passengersClass": "1Adult.BusinessClass",
       
            },
            {
              "from": "NEW DELHI International Airport",
              "to": "XYZ International Airport",
           
              "passengersClass": "1Adult.BusinessClass",
       
            },
            {
              "from": "NEW DELHI International Airport",
              "to": "XYZ International Airport",
            
              "passengersClass": "1Adult.BusinessClass",      
            }
          ]
    }
}

module.exports = resolvers;