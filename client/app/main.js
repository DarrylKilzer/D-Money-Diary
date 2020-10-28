import { AuthController } from "./Controllers/AuthController.js";
import ValuesController from "./Controllers/ValuesController.js";
import EntryController from "./Controllers/EntryController.js";

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  entryController = new EntryController()
}

window["app"] = new App();
