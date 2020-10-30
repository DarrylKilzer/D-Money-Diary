import { ProxyState } from "../AppState.js";
import Entry from "../Models/Entry.js";
import { api } from "./AxiosService.js";

class EntryService {
    async delete(id) {
        await api.delete(`/entries/${id}`)
        this.get()
    }

    async create(data) {
        let res = await api.post('/entries', data)
        this.get()
    }

    async get() {
        let res = await api.get('/entries')
        ProxyState.entries = res.data.map(rawEntry => new Entry(rawEntry))
    }
}

export const entryService = new EntryService();

