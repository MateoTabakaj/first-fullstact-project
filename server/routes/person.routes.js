
const PersonController = require('../controllers/person.controller');

module.exports = app => {
    app.get('/api/people', PersonController.findAllPersons);
    app.get('/api/people/:id', PersonController.findOneSinglePerson);
    app.post('/api/people', PersonController.createNewPerson);
    app.patch('/api/people/:id', PersonController.updateExistingPerson);
    app.delete('/api/people/:id', PersonController.deleteAnExistingPerson);
}
