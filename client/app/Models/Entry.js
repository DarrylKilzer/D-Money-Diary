export default class Value {
    constructor(data) {
        this.title = data.title
        this.description = data.description
        this.id = data.id
        this.creator = data.creator
    }

    get Template() {
        return this.title
    }
}