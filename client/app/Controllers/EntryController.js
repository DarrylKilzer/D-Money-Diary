import { ProxyState } from "../AppState.js";
import { entryService } from "../Services/EntryService.js";


//Private
function _draw() {
    let entries = ProxyState.entries;
    console.log(entries);
}

//Public
export default class EntryController {
    constructor() {
        ProxyState.on("entries", _draw);
    }

    create(e) {
        e.preventDefault();
        let data = {
            title: e.target.title.value,
            description: e.target.description.value
        }
        entryService.create(data)
    }

}
