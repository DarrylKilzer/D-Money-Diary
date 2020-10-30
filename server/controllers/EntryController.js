import BaseController from "../utils/BaseController";
import { entryService } from "../services/EntryService";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class EntryController extends BaseController {
    constructor() {
        super('api/entries')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getAll)
            .get('/user', this.getMyEntries)
            .post('', this.create)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            res.send(await entryService.getAll({ isPrivate: false }))
        } catch (error) {
            next(error)
        }
    }

    async getMyEntries(req, res, next) {
        try {
            res.send(await entryService.getAll({ creatorId: req.userInfo.id }))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            res.send(await entryService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await entryService.delete(req.userInfo.id, req.params.id))
        } catch (error) {
            next(error)
        }
    }
}