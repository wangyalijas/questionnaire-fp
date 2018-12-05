class Base {
  type = '';

  name = '';

  constructor(name = '') {
    this.name = name;
  }


  validate() {
    return !!this.result;
  }
}

export default Base;
