// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// Start with an array that hold 10 object to coincide with the 10 questions 
//each object will have a key value pair of
//name: (a string of the person name)
// photo (with a link)
// scores array (10 strings to coincide with the answers options)
// ===============================================================================


var friends = [
    {
        name: "Luzanne Burt",
        photo: "https://pixel.nymag.com/imgs/daily/vulture/2019/04/09/09-princess-diana-new-1.w330.h330.jpg",
        scores: ["3","3","3","3","3","3","3","3","3","3"]
    }
  
];

// Here we export the array. This makes it accessible to other files using require.

module.exports = friends;