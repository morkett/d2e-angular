function MainController(){
  var controller = this;

  controller.homeNav = true;

  controller.navAni = false;

  controller.showBreakfast = true;
  controller.showLunch = false;
  controller.showJuice = false;
  controller.showTea = false;


  controller.toggleNav = function() {
    controller.navAni = !controller.navAni;
  };


  controller.toggleBreakfast = function() {
    controller.showBreakfast = true;
    controller.showLunch = false;
    controller.showJuice = false;
    controller.showTea = false;
  };
  controller.toggleLunch = function() {
    controller.showBreakfast = false;
    controller.showLunch = true;
    controller.showJuice = false;
    controller.showTea = false;
  };
  controller.toggleJuice = function() {
    controller.showBreakfast = false;
    controller.showLunch = false;
    controller.showJuice = true;
    controller.showTea = false;
  };
  controller.toggleTea = function() {
    controller.showBreakfast = false;
    controller.showLunch = false;
    controller.showJuice = false;
    controller.showTea = true;
  };


}



angular
  .module('d2eApp')
  .controller('MainController', MainController);
