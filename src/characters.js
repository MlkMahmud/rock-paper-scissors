import rock from './images/icon-rock.svg';
import paper from './images/icon-paper.svg';
import scissors from './images/icon-scissors.svg';
import lizard from './images/icon-lizard.svg';
import spock from './images/icon-spock.svg';


const characters = [
  {
    name: 'spock',
    image: spock,
    beats: ['scissors', 'rock']
  },
  {
    name: 'scissors',
    image: scissors,
    beats: ['paper', 'lizard']
  },
  {
    name: 'paper',
    image: paper,
    beats: ['rock', 'spock']
  },
  {
    name: 'lizard',
    image: lizard,
    beats: ['spock', 'paper']
  },
  {
    name: 'rock',
    image: rock,
    beats: ['scissors', 'lizard']
  }
];

export default characters;
