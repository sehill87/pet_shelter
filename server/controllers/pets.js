const mongoose = require('mongoose'),
    Pet = mongoose.model('Pet')
    // Review = mongoose.model('Review')

module.exports = {
    all_pets: function (req, res) {
        console.log("----")
        Pet.find({}, function (err, pets) {
            if (err) {
                console.log(err);
            } else {
                res.json(pets);
            }
        }).sort({ type: -1 })
    },
    one_pet: function (req, res) {
        Pet.findOne({ _id: req.params.id }, function (err, name) {
            if (err) {
                console.log(err)
            } else {
                res.json(name)
            }
        })
    },
    new: function (req, res) {
        console.log('REQUEST', req.body.name)
        // var restaurant = new Restaurant({ name: req.body.name, cuisine: req.body.cuisine });
        // console.log(restaurant)
        // restaurant.save(function (err) {
        //     if (err) {
        //         console.log(err);
        //         res.json({ message: "Error!!!", errors: err})
        //     } else {
        //         res.json({ message: "Success!!!", restaurant: restaurant })
        //     }
        // })
        Pet.create(req.body, function (err, pet) {
            if (err) {
                console.log(err);
                res.json({ message: "Error!!!", errors: err})
            } else {
                res.json({ message: "Success!!!", pet: pet})
            }
        })
    },

    update: function(req, res) {
        var updates = {};
        if(req.body.name) {
            updates['name'] = req.body.name;
        }
        if(req.body.type) {
            updates['type'] =req.body.type;
        }
        if(req.body.description) {
            updates['description'] = req.body.description
        }
        if(req.body.skill1) {
            updates['skill1'] = req.body.skill1
        }
        if(req.body.skill2) {
            updates['skill2'] = req.body.skill2
        }
        if(req.body.skill3) {
            updates['skill3'] = req.body.skill3
        }
        updates['updated_at'] = Date.now();
        console.log(updates)
        // Pet.updateMany({ _id: req.params.id}, {$set: updates}, {runValidators: true}, function(err, pet) {
        //     if(err) {
        //         console.log('something went wrong!')
        //         res.json({ message: "Error!!!", errors: err })
        //     } else {
        //         res.json({ message: 'Updates Complete!', pet: pet })
        //     }
        // })

        // Restaurant.update({ _id: req.params.id}, {$set: {name: updates['name'], cuisine: updates['cuisine'], updated_at: updates['updated_at']}}, {runValidators: true}, function(err, restaurant) {
        //     console.log(err)
        //     if (err) {
        //         console.log('something went wrong!')
        //         res.json({ message: "Error!!!", errors: err })
        //     } else {
        //         res.json({ message: 'Updates Complete!', restaurant: restaurant})
        //     }
        // })
        Pet.findOne({_id: req.params.id}, function(err, pet) {
            if (err) {
                console.log('something went wrong!')
                res.json({ message: "Error!!!", errors: err })
            } else {
                console.log(pet, "------");
                pet.name = req.body.name;
                pet.type = req.body.type;
                pet.description = req.body.description
                pet.skill1 = req.body.skill1
                pet.skill2 = req.body.skill2
                pet.skill3 = req.body.skill3
                pet.updated_at = Date.now();
                pet.save( function(err, updatedPet) {
                    if (err) {
                        console.log('something went wrong!')
                        res.json({ message: "Error!!!", errors: err })
                    } else {
                        res.json({ message: 'Updates Complete!', pet: updatedPet})
                    }
                })
            }
        })
    },

    remove: function (req, res) {
        Pet.deleteOne({ _id: req.params.id }, function (err) {
            if (err) {
                console.log('Error????');
                console.log(err);
            } else {
                res.json({ message: "Deleted!!!", _id: req.params.id})
                // res.redirect('/tasks');
            }
        })
    }
}

