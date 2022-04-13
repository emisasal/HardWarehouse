const { Schema, model } = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

const RatingItem = new Schema({
  user: {
    type: String,
    required: true
  },
  valueReview: {
    type: Number,
    default: 0,
  },
  review: {
    type: String,
    default: '',
  },
});

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
  image: {
    type: String,
    default: '',
  },
  details: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
    index: true,
  },
  rating: {
    type: [RatingItem],
    default: [],
  },
});

ProductSchema.plugin(mongoosePagination);

const ProductModel = model('Product', ProductSchema);

module.exports = { ProductModel, ProductSchema, RatingItem };
