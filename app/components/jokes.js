import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JokesComponent extends Component {
  jokes = [
    {
      question: "Knock, knock. Who's there? Olive. Olive who?",
      answer: "Olive you so much.",
    },
    {
      question: "Knock, knock. Who's there? Ken. Ken who?",
      answer: "Ken you hear me?",
    },
    {
      question: "Knock, knock. Who's there? Duane. Duane who?",
      answer: "Duane the bathtub, please.",
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
