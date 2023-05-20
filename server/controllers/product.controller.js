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
const Product = require('../models/product.model');

module.exports.getAllProduct = (request, response) => {
    Product.find({})
        .then(products => {
            console.log(products); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(products);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
}



module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
