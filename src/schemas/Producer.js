
'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String},
    phone: {type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const col_name = 'producers';
schema.set('autoIndex', false);
export default mongoose.model(col_name, schema);