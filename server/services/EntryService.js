import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class EntryService {
    async getAll(query = {}) {
        let entries = await dbContext.Entries.find(query)
        return entries;
    }

    async create(data) {
        let entry = await dbContext.Entries.create(data)
        return entry
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