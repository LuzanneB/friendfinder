// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================



// ===============================================================================
// ROUTING
// ===============================================================================


  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

 

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------


    // Note the code here. Our "server" will respond to a user"s survey result
    // Then compare those results against every user in the database.
    // It will then calculate the difference between each of the numbers and the user"s numbers.
    // It will then choose the user with the least differences as the "best friend match."
    // In the case of multiple users with the same result it will choose the first match.
    // After the test, it will push the user to the database.

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
 

    // Here we take the result of the user"s survey POST and parse it.
    
    // This variable will calculate the difference between the user"s scores and the scores of
    // each user in the database
    

    // Here we loop through all the friend possibilities in the database.
    
      // We then loop through all the scores of each friend
      
        // We calculate the difference between the scores and sum them into the totalDifference
   

      // If the sum of differences is less then the differences of the current "best match"

        // Reset the bestMatch to be the new friend.
     
    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).


    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
 