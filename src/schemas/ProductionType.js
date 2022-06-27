'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // email: {type: String , required: true, unique:true,match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    name: {type: String, required: true},
    production_code: {type: String},
    // params: [{
    //     name: {type: String},
    //     alias: {
    //         type: String
    //     },
    //     type: {
    //         type: String,
    //         enum: ['number', 'string']
    //     }
    // }],

    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const col_name = 'production_types';
schema.set('autoIndex', false);
export default mongoose.model(col_name, schema);