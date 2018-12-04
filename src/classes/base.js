class Base {
  type = '';

  name = '';

  constructor(name = '') {
    this.name = name;
  }

  serialize() {
    const result = Object.assign({}, this);

    return result;
  }

  validate() {
    return !!this.name;
  }
}

export default Base;
