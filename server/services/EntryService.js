import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class EntryService {
    async getEntriesByProfileId(userId) {
        return await dbContext.Entries.find({ creatorId: userId })
    }

    async delete(userId, id) {
        return await dbContext.Entries.findOneAndDelete({ creatorId: userId, _id: id })
    }

    async getAll(query = {}) {
        return await dbContext.Entries.find(query).populate("creator", "-updatedAt -subs")
    }

    async create(data) {
        return await dbContext.Entries.create(data)
    }

    async findById(id) {
        let entry = await dbContext.Entries.findById(id);
        if (!entry) {
            throw new BadRequest("Invalid Id");
        }
        return entry;
    }
}

export const entryService = new EntryService();