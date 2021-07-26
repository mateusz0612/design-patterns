export class Developer {
  private name: string;
  private type = "Developer";

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
