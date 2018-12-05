import Base from './base';

class Selection extends Base {
  type = 'Selection';

  result = '';

  constructor(name = '', options = [{
    name: '', sort: 0, isRight: false, class: 'normal',
  }]) {
    super(name);
    this.options = options;
  }

  serialize() {
    const result = {
      selectionId: this.id,
      optionId: this.result,
    }
    return result;
  }

  validate() {
    return super.validate() && this.validateOptions();
  }

  validateOptions() {
    return this.options.every(item => !!item.name);
  }
}

export default Selection;
