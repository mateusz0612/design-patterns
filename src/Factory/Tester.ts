export class Tester {
  private name: string;
  private type = "Tester";

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}
