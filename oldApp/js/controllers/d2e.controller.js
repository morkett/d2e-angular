function D2eController(){
  var controller = this;



  function init() {
    console.log(controller);

  }


  init();
}



angular
  .module('D2eApp')
  .controller('D2eController', D2eController);
