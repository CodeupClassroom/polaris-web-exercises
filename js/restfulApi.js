const serverURL = "https://piquant-foregoing-hero.glitch.me/movies";


// // THis is a simple get request
// fetch(serverURL)
//     .then(res => res.json())
//     .then(data => console.log(data))


// const objToSend = {
//     user: "Samuel",
//     message: "Really enjoyed the movies application!"
// };
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(objToSend),
// };
// fetch(serverURL, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */

function AJAX(url, method = "GET", data) {

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(responseData => responseData)
        .catch(err => err)

}
// POST add a record to the database
// AJAX(serverURL,"POST",{title: "Jquery aint got nothin on me"})
//     .then(function (data){
//         console.log(data)
//     })

// GET METHOD for single record
// THis is to fetch a single movie
//     AJAX(serverURL + "/3")
//     .then(data => console.log(data))

// PUT METHOD for updating a record as a whole
// THis is to update and individual record
    // AJAX(serverURL + "/9","PUT",{
    //     name: "Polaris",
    //     message: "We are ready for the weekend!!"
    // })
    //     .then(data => console.log(data))

//PATCH METHOD for updating a portion of the existing record
// AJAX(serverURL + "/9","PATCH",{
//     message: "We are really ready for the weekend!!"
// })
//     .then(data => console.log(data))

// DELETE METHOD for deleting a record
//     AJAX(serverURL + "/5","DELETE")
//     .then(data => console.log(data))
//
//     AJAX(serverURL)
//     .then(data => console.log(data))