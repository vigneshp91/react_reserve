import mongoose from 'mongoose';
import shortid from 'shortid';


const {String,Number} = mongoose.Schema.Types;

const ProductsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    sku:{
        type: String,
        required: true,
        unique: true,
        default:shortid.generate()
    },
    mediaUrl:{
        type: String,
        required: true
    }
});

//check the schema already present if not so generate schema
export default mongoose.models.Products || mongoose.model("Products",ProductsSchema);