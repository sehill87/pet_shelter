var mongoose = require('mongoose');

// var ReviewSchema = new mongoose.Schema({
//     customer: { type: String, required: [true, "Name cannot be blank"], minlength: [3, "Customer name must be at least 3 characters"] },
//     stars: { type: Number, required: [true, "Please select number of stars"] },
//     review: { type: String, required: [true, "Review cannot be blank"], minlength: [3, "Review must continain at least 3 characters"] },
//     created_at: { type: Date, default: Date.now },
//     updated_at: { type: Date, default: Date.now }
// })

var PetSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name cannot be blank"], unique: [true, "Name already exists"], minlength: [3, "Pet name must be at least 3 characters"] },
    type: { type: String, sort: [true], required: [true, "Type cannot be blank"], minlength: [3, "Pet type must be at least 3 characters in length."] },
    description: { type: String, required: [true, 'Description cannont be blank'], minlength: [3, 'Description must have at least 3 characters'] },
    skill1: { type: String},
    skill2: { type: String},
    skill3: { type: String}, 
    created_at: { type: Date, default: Date.now},
    updated_at: { type: Date, default: Date.now}
    // reviews: [ReviewSchema]
});

mongoose.model('Pet', PetSchema);
// mongoose.model('Review', ReviewSchema)