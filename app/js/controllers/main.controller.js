function MainController(){
  var controller = this;

  controller.homeNav = true;

  controller.homeNavToggle = function() {
    controller.homeNav= !controller.homeNav;
  };

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

//////////////////////////////////////
  controller.canShowHomeBg = false;

  controller.toggleHomeBg = function() {
    controller.canShowHomeBg = true;
    controller.canShowAboutBg =
    controller.canShowTeamBg =
    controller.canShowMenuBg =
    controller.canShowContactBg = false;

  };
  controller.canShowAboutBg = false;

  controller.toggleAboutBg = function() {
    controller.canShowAboutBg = true;
    controller.canShowHomeBg =
    controller.canShowTeamBg =
    controller.canShowMenuBg =
    controller.canShowContactBg = false;

  };
  controller.canShowTeamBg = false;

  controller.toggleTeamBg = function() {
    controller.canShowTeamBg = true;
    controller.canShowHomeBg =
    controller.canShowAboutBg =
    controller.canShowMenuBg =
    controller.canShowContactBg = false;

  };
  controller.canShowMenuBg = false;

  controller.toggleMenuBg = function() {
    controller.canShowMenuBg = true;
    controller.canShowHomeBg =
    controller.canShowAboutBg =
    controller.canShowTeamBg =
    controller.canShowContactBg = false;
  };
  controller.canShowContactBg = false;

  controller.toggleContactBg = function() {
    controller.canShowContactBg = true;
    controller.canShowHomeBg =
    controller.canShowAboutBg =
    controller.canShowTeamBg =
    controller.canShowMenuBg = false;
  };

}



angular
  .module('d2eApp')
  .controller('MainController', MainController);
