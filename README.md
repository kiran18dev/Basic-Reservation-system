# Basic-Reservation-system

to install dependencies
`npm install`

to run the project
`npm start`

mongodb must be running in your local machine with db as mydb with provided url: `mongodb://localhost:27017/mydb`

you may access the server at : `http://localhost:3333`

you may book new reservations to the server at : `http://localhost:3333/reservation`

http method to be used : POST

sample data for : 

`
    {
        "name": "sample name",
        "hotelName": "some hotel",
        "arrivalDate": "12/3/2017",
        "departureDate": "12/4/2017"
    }
`
when posting data or booking a new resrvation. Following fields : name, hotelName must be non-empty string. departureDate must be greater than arrivalDate with provided format above, else there would be 400 http status error with error message.


you may get all reservations from the server using 

`http://localhost:3333/reservations`

http method to be used : GET


you may get specific reservations from the server using id 

`http://localhost:3333/reservation/:id`

http method to be used : GET

