import { Auth0Provider } from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";
import BaseController from "../utils/BaseController";
import { entryService } from "../services/EntryService";

export class ProfilesController extends BaseController {
  constructor() {
    super("profile");
    this.router
      .get("/:id/entries", this.getProfileEntries)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserProfile)
    // NOTE this would allow us to go and retrieve all the entries for a particular profile
  }

  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }

  async getProfileEntries(req, res, next) {
    try {
      let entries = await entryService.getEntriesByProfileId(req.params.id);
      res.send(entries);
    } catch (error) {
      next(error);
    }
  }


}
