import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    h_name:{
      type:String,
      required:true,
  },
  h_location:{
      type:String,
      required:true, 
  },
  vacancies:{
      type:Number,
      required:true,
  },
  contact:{
      type:String,
      required:true,
  },
  h_images:{
      type:String,
      required:false,
      default:null,
  },
  rent:{
      type:Number,
      required:true,
      default:1000,
  },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
