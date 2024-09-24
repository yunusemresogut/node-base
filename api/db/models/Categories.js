const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    is_active: { type: Boolean, default: true },
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class Categories extends mongoose.Model {

}

schema.loadClass(Categories);
module.exports = mongoose.model('Categories', schema);