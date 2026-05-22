/*

=>>>> REST stands for Representational State Transfer.

REST :-  It is a set of rules for applications communicate with servers over HTTP.

==>>>  An API stands for Application Programming Interface.

API :-  It’s a way for different software programs to communicate with each other.


=>>>> An API like a waiter in a restaurant :-
  >> You = the app/user making a request
  >> Kitchen = the server or system with data/functions
  >> Waiter (API) = takes your request to the kitchen and brings back the response

REST API :-  A REST API is a way for the Frontend and the Backend to communicate and exchange data.

==>>> HTTP methods :-

(1) GET :- Used to fetch data from the server.
(2) POST :- Used to create new data on the server.
(3) PATCH :- Used to update specific fields of a resource.
(4) PUT :- Used to replace/update an entire resource.
(5) DELETE :- Used to remove data from the server.

=>> DIfference between PUT & PATCH :-

PUT :- Replace the whole object. Fill and submit the entire value again of an object.
PATCH :- Modify only the changed fields. Edit only one field and leave everything else unchanged.

=>>>> API structure :-
  API is just an array which elemets are the collections of objects with data.

*/

// Example of an API :-

[
  {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
  }
]



