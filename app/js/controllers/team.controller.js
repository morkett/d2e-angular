function TeamController(){
  var controller = this;

  controller.teamMembers = [
    {
      firstName: 'Rui',
      lastName: 'James',
      role: 'IGM',
      img: 'foto_2colour.png',
      desc: 'having worked at harrods food hall for over 12 years, rui is a speciality food aficionado. he has since been busy ensuring down to earth is put on the london map as a destination for tasty, nutritious, heathy organic food. his passion for good food is contagious, his attention to detail will ensure guests have a memorable and unique lifestyle experience.'
    },
    {
      firstName: 'Karen',
      lastName: 'Hope',
      role: 'head chef',
      img: 'foto_2colour.png',
      desc: 'over 7 years experience as vegan, vegetarian and raw food chef, including working for inspiral, karen has joined our team in july. her passion for all things organic is reflected in the care and presentation of every dish. karen is also keen in catering for all dietary requirement without ever compromising on taste.'
    },
    {
      firstName: 'Claudia',
      lastName: 'Zeto',
      role: 'pastry chef',
      img: 'foto_2colour.png',
      desc: 'claudia has joined our team in august. her vast experience in making fantastic, gluten free, dairy free, no added refined sugar and raw cakes is unparalleled. her latest creation is a cappuccino raw "cheezecake". this is set to impress even the most discerning of sweet tooth\'s... its crunchy, its smooth, its creamy and has a caffeine kick!'
    }
  ];


}



angular
  .module('d2eApp')
  .controller('TeamController', TeamController);
