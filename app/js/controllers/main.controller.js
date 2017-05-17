function MainController(){
  var controller = this;
  // controller.startSound = false;
  //
  // controller.toggleStart = function() {
  //   controller.startSound = !controller.startSound;
  // };

  controller.navAni = false;



  controller.toggleNav = function() {
    controller.navAni = !controller.navAni;
    console.log(controller.navAni);
  };

}



angular
  .module('d2eApp')
  .controller('MainController', MainController);
