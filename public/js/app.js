const app = angular.module('Gifs_App', []);

app.controller('MainController', ['$http', function($http) {
  // initial state

  this.newGifData = {};

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

  this.newGif = () => {
    $http({
      method: 'POST',
      url: '/gifs',
      data: this.newGifData
    }).then(response => {
      this.gifs.push(response.data);
      console.log(response.data);
      this.newGifData = {};
    }, error => {
      console.error( error.message );
    }).catch( err => console.error('Catch: ', err));
  }

  this.deleteGif = (id) => {
    $http({
        method: 'DELETE',
        url   : '/gifs/delete/' + id,
        data  : id
      }).then ( ( data ) => {
        // this.gifs.splice(); // remove gif
      } , ( error ) => {
        console.log( error );
      });
  }

}]);
