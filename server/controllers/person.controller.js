// const Person = require('../models/person.model');    /* this is new */
// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     });
// }
//           /* The method below is new */
// module.exports.createPerson = (request, response) => {
//     // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
//     // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
//     Person.create(request.body) //This will use whatever the body of the client's request sends over
//         .then(person => response.json(person))
//         .catch(err => response.json(err));
// }
const Person = require('../models/person.model');

module.exports.findAllPersons = (req, res) => {
    Person.find()
        .then((allDaPersons) => {
            res.json({ persons: allDaPersons })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSinglePerson = (req, res) => {
    Person.findOne({ _id: req.params.id })
        .then(oneSinglePerson => {
            res.json({ person: oneSinglePerson })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewPerson = (req, res) => {
    Person.create(req.body)
        .then(newlyCreatedPerson => {
            res.json({ person: newlyCreatedPerson })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateExistingPerson = (req, res) => {
    Person.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPerson => {
            res.json({ person: updatedPerson })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingPerson = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
