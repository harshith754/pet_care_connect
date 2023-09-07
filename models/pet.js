import  { Schema,model,models } from "mongoose"

const PetSchema = new Schema({
  city:{
    type:String,
    required: [true, 'Location is required!'],
  },
  name: {
    type:String,
    required: [true, 'Name is required!'],
  },
  breed: {
    type:String,
    required: [true, 'Breed is required!'],
  },
  gender: {
    type:String,
    required: [true, 'Gender is required!'],
  },
  size: {
    type:String,
    required: [true, 'Size is required!'],
  },
  age: {
    type:String,
    required: [true, 'Age is required!'],
  }
})

const Pet = models.Pet || model("Pet" , PetSchema )


export default Pet;