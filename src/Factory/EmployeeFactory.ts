import { Developer } from "./Developer";
import { Tester } from "./Tester";

export class EmployeeFactory {
  createEmployee(name: string, type: string) {
    switch (type) {
      case "Developer":
        return this._createDeveloper(name);
      case "Tester":
        return this._createTester(name);
      default:
        throw new Error();
    }
  }

  private _createDeveloper(name: string) {
    return new Developer(name);
  }

  private _createTester(name: string) {
    return new Tester(name);
  }
}
