var pet = require('../controllers/pets');
var review = require('../controllers/reviews');
var mongoose = require('mongoose')
var Pet = mongoose.model('Pet')
const path = require('path');


module.exports = function(app) {
    app.get('/api/pets', function(req,res) {
        pet.all_pets(req,res);
    }),
    app.get('/api/pets/:id', function(req,res) {
        pet.one_pet(req,res);
    }),
    app.post('/api/pets', function(req,res) {
        pet.new(req,res);
    }),
    app.put('/api/pets/:id', (req,res) => {
        pet.update(req,res);
    }),
    app.delete('/api/pets/:id', (req,res) => {
        pet.remove(req,res);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}