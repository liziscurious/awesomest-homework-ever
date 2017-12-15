const app = angular.module('Gifs_App', []);

app.controller('MainController', ['$http', function($http) {
  // initial state

  this.newGifData = {};

  this.gifs = {};

  // this.currentGif = {};

  // this.toggle = true;

  // this.toggleView = () => {
  //   this.toggle = !this.toggle;
  //   this.currentGif = this.gif._id;
  // };

  // this.showUpdateForm = (id) => {
  //   this.clicked = id;
  //   console.log("Is this working?");
  // };

  this.getGifs = () => {
    $http({
      url: '/gifs',
      method: 'GET'
    }).then (
      ( response )=> {
        this.gifs = response.data;
        // console.table(response.data);
      } ,  ( error ) => {
        console.log( error.message );
      }
    );
  }

  this.getGifs();

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

  this.updateGif = (id) => {
    $http({
      method: 'PUT',
      url: '/gifs/' + id,
      data: this.updatedGifData
    }).then(( data ) => {
      this.updatedGifData = {};
    }, error => {
      console.error( error.message );
    }).catch ( err => console.error('Catch: ', err));
    this.getGifs();
  }

  this.deleteGif = (id) => {
    $http({
        method: 'DELETE',
        url   : '/gifs/delete/' + id,
        data  : id
      }).then ( ( data ) => {
        this.getGifs();
      } , ( error ) => {
        console.log( error );
      });
  }

}]);
