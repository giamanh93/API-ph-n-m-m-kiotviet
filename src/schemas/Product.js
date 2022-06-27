'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id_: mongoose.Schema.Types.ObjectId,
    name: {type: String},
    code: {type: String},
    trademark: {type: Number},
    price: {type: Number},
    sell_price: {type: Number},
    productImage: {type: String},
    product_type: mongoose.Schema.Types.ObjectId,
    producer_id: mongoose.Schema.Types.ObjectId,
    params: [{
        name: {type: String},
        alias: {
            type: String
        },
        type: {
            type: String,
            enum: ['number', 'string']
        },
        value: Schema.Types.Mixed
    }], 
});

const col_name = 'products';
schema.set('autoIndex', false);
export default mongoose.model(col_name, schema);