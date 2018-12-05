import Base from './base';

class Answer extends Base {
    type = 'Answer';

    result = '';

  serialize() {
    const result = {
      answerId: this.id,
      answerContent: this.result,
    }
    return result;
  }
}

export default Answer;
