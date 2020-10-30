import { ProxyState } from "../AppState.js";

export default class Value {
    constructor(data) {
        this.title = data.title
        this.description = data.description
        this.id = data.id
        this.creator = data.creator
    }

    get Template() {
        return /*html*/`
        <div class="col-5">
                <div class="card p-2">
                    <button type="button" class="${this.creator.id != ProxyState.profile.id ? 'd-none ' : ''}close w-25 text-danger ml-auto" onclick="app.entryController.delete('${this.id}')" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="card-title p-2">
                        <div class="d-flex align-items-center">
                            <img src="${this.creator.picture}" class="avatar">
                            <h5 class="text mx-2">${this.title}</h5>
                        </div>
                    </div>
                    <div class="card-body border-top">
                    <p>${this.description}</p>
                    </div>
                </div>
            </div>
            `
    }
}