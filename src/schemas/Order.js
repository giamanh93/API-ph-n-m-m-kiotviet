'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer_id: mongoose.Schema.Types.ObjectId,
    customer_name: {type: String},
    customer_phone: {type: String},
    customer_address: {type: String},
    customer_description: {type: String},
    start_date: {type: Date},
    total: {
        type: Number,
        default: 0
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const col_name = 'orders';
schema.set('autoIndex', false);
export default mongoose.model(col_name, schema);