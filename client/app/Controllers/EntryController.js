import { ProxyState } from "../AppState.js";
import { entryService } from "../Services/EntryService.js";


//Private
function _draw() {
    let template = ""
    console.log(ProxyState.entries);
    ProxyState.entries.forEach(e => template += e.Template);
    document.getElementById("entries").innerHTML = template
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
        e.target.reset()
        $('.modal').modal('toggle')
    }

    delete(id) {
        entryService.delete(id)
    }

}
