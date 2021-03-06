import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class JokesComponent extends Component {
  jokes = [
    {
      question: "Why did the dairy farmer separate the curds and whey?",
      answer: "Because cheese so silly."
    },
    {
      question: "Knock, knock. Who's there? Howard. Howard who?",
      answer: "Howard you?"
    },
    {
      question: "Knock, knock. Who's there? Philip. Philip who?",
      answer: "Philip your pool, I want to take a dip."
    },
    {
      question: "Knock, knock.",
      answer: "Who's Jamie?"
    },
    {
      question: "Knock, knock. Who's there? Iva. Iva who?",
      answer: "Iva sore hand from knocking."
    },
    {
      question: "Knock, knock. Who's there? Anita. Anita who?",
      answer: "Anita borrow a pencil."
    },
    {
      question: "Knock, knock. Who's there? Dwayne. Dwayne who?",
      answer: "Dwayne the bathtub, it's overflowing!"
    },
  ];

  @tracked currentJokeNumber = this.randomJokeNumber;

  @tracked answerShown = false;

  @action
  showAnswer() {
    this.answerShown = true;
  }

  get randomJokeNumber() {
    return Math.floor(Math.random() * this.jokes.length);
  }

  get currentJoke() {
    return this.jokes[this.currentJokeNumber];
  }

  @action
  nextJoke() {
    this.answerShown = false;
    this.currentJokeNumber = this.randomJokeNumber;
  }
}
