'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    production_id: mongoose.Schema.Types.ObjectId,
    order_id: mongoose.Schema.Types.ObjectId,
    dongia: {type: String},
    soluong: {type: String},
    thanhtien: {type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const col_name = 'items';
schema.set('autoIndex', false);
export default mongoose.model(col_name, schema);