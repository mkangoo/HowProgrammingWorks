class Student {
  constructor(name, year, groupe) {
    this.name = name;
    this.year = year;
    this.groupe = groupe;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name === "string") {
      this._name = name;
    } else {
      throw new Error("Name must be string");
    }
  }
}
