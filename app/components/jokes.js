import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JokesComponent extends Component {
  jokes = [
    {
      question: 'a',
      answer: 'aa',
    },
    {
      question: 'b',
      answer: 'bb',
    },
    {
      question: 'c',
      answer: 'cc',
    },
  ]

  @tracked
  currentJokeNumber = 0

  @tracked
  answerShown = false

  @action
  showAnswer() {
    this.answerShown = true
  }

  get currentJoke() {
    return this.jokes[this.currentJokeNumber]
  }

  @action
  nextJoke() {
    this.answerShown = false
    this.currentJokeNumber = (this.currentJokeNumber + 1) % this.jokes.length
  }
}
