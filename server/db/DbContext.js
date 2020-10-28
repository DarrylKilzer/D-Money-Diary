import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import EntrySchema from "../models/Entry";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Entries = mongoose.model("Entry", EntrySchema);
}

export const dbContext = new DbContext();
