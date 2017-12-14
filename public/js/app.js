const app = angular.module('Gifs_App', []);

app.controller('MainController', ['$http', function($http) {
  // initial state

  this.gifs = [
    { title: 'Lando',
    url: 'https://media.giphy.com/media/3ornk7TgUdhjhTYgta/giphy.gif'},

    { title: 'Darth Vader',
    url: 'https://media.giphy.com/media/ZX6NHzA9Fcddm/giphy.gif'},

    { title: 'Trap',
    url: 'https://media.giphy.com/media/8McNH1aXZnVyE/giphy.gif'},

    { title: 'BB-8',
    url: 'https://media.giphy.com/media/5xaOcLOqNmWHaLeB14I/giphy.gif'},

    { title: 'Yoda',
    url: 'https://media.giphy.com/media/yDYAHbqe5DfyM/giphy.gif'}

  ];


}]);
