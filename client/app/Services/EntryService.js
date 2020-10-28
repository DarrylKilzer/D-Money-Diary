import { ProxyState } from "../AppState.js";
import Entry from "../Models/Entry.js";
import { api } from "./AxiosService.js";

class EntryService {

    async create(data) {
        let res = await api.post('/entries', data)
        this.get()
    }

    async get() {
        let res = await api.get('/entries')
        ProxyState.entries = res.data
    }
}

export const entryService = new EntryService();

