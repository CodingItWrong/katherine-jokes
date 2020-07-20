import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class JokesComponent extends Component {
  jokes = [
    {
      question: "Knock, knock. Who's there? Olive. Olive who?",
      answer: "Olive you so much."
    },
    {
      question: "Knock, knock. Who's there? Ken. Ken who?",
      answer: "Ken you hear me?"
    },
    {
      question: "Knock, knock. Who's there? Duane. Duane who?",
      answer: "Duane the bathtub, please."
    },
    {
      question: "Knock, knock. Who's there? Sue. Sue who?",
      answer: "Sue-prise!"
    },
    {
      question: "Knock, knock. Who's there? Luke. Luke who?",
      answer: "Luke out below!"
    },
    {
      question: "Knock, knock. Who's there? Wayne. Wayne who?",
      answer: "Wayne Wayne go away."
    },
    {
      question: "Knock, knock. Who's there? Les. Les who?",
      answer: "Les get out of here!"
    },
    {
      question: "Why is it hard to play cards in the jungle?",
      answer: "Because there are so many cheetahs!"
    },
    {
      question: "What do you do when you love someone?",
      answer: 'You say "I\'ll do olive my Emily Jokes with you!"'
    },
    {
      question: "Knock, knock. Who's there? Les. Les who?",
      answer: "Les go see the movies!"
    },
    {
      question: "What do you call a train that sneezes?",
      answer: "Ah-choo-choo train!",
    },
    {
      question: "What kind of bug wears a red dress?",
      answer: "A lady bug!",
    },
    {
      question: "What are soft, white visitors from Mars?",
      answer: "Martian-mallows!",
    },
    {
      question: "How did the robot wear earrings?",
      answer: "She had her gears pierced!",
    },
    {
      question: "Why did the sailor love her cookies?",
      answer: "Because they were full of chocolate ships!",
    },
    {
      question: "What kind of bugs like toast?",
      answer: "Butterflies!",
    },
    {
      question: "What did the bread do on vacation?",
      answer: "It loafed around!",
    },
    {
      question: "What happens to a frog's car when it breaks down?",
      answer: "It gets toad away.",
    },
    {
      question: "What did the duck say when he bought lipstick?",
      answer: "Put it on my bill.",
    },
    {
      question: "Why was 6 afraid of 7?",
      answer: "Because 7, 8, 9."
    },
    {
      question: "What musical instrument is found in the bathroom?",
      answer: "A tuba toothpaste.",
    },
    {
      question: "What do you call cheese that's not yours?",
      answer: "Nacho cheese.",
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
