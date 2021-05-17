db.Sliit.insertOne({
 "name": "John",
 "dateOfBirth": "1990-01-01T00:00:00Z",
 "subjects": ["Application frameworks", "Computer architecture"]
})

//q7
db.Sliit.insertMany([{
    "name": "Smith",
    "dateOfBirth": "1990-01-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "isActive": true
},
{
"name": "Jane",
"dateOfBirth": "1990-02-15T00:00:00Z",
"subjects": ["Application frameworks", "Computer architecture"],
"isActive": false
}])

db.Sliit.insertOne({
    
    "name": "Smith",
    "dateOfBirth": "1990-01-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "isActive": true
})
    



