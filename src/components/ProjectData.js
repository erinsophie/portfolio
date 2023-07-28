import weatherAppImg from '../assets/img/weather-app.png';
import todoListImg from '../assets/img/todo-list.png';
import battleshipImg from '../assets/img/battleship.png';

const projectsList = [
  {
    title: 'Weather App',
    description:
      'Search for any city and the current data, including local time, temperature and condition will be displayed.',
    site: 'https://erinsophie.github.io/weather-app/',
    source: 'https://github.com/erinsophie/weather-app',
    image: weatherAppImg,
    tech: ['HTML', 'CSS', 'Javascript', 'Weather API'],
  },

  {
    title: 'Todo List',
    description:
      'Create projects with tasks or have separate tasks in your inbox. Tasks are also separated into due this week and due today.',
    site: 'https://erinsophie.github.io/todo-list/',
    source: 'https://github.com/erinsophie/todo-list',
    image: todoListImg,
    tech: ['HTML', 'CSS', 'Javascript', 'date-fns'],
  },

  {
    title: 'Battleship',
    description: 'Play against the computer in this interactive browser-based game akin to the Hasbro™ board game, Battleship.',
    site: 'https://erinsophie.github.io/battleship/',
    source: 'https://github.com/erinsophie/battleship',
    image: battleshipImg,
    tech: ['HTML', 'CSS', 'Javascript', 'Jest'],
  },
];

export default projectsList;
