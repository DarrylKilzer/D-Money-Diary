import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Entry = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        creatorId: { type: String, ref: "Profile", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

Entry.virtual("creator", {
    localField: "creatorId",
    ref: "Profile",
    foreignField: "_id",
    justOne: true
});

export default Entry;
