function ContactController($log){
  var controller = this;

  controller.contactInfo = [
    {
      enquiry: 'GENERAL ENQUIRIES',
      phone: '0207 3716 987',
      phoneNum: '02073716987',
      email: 'info@downtoearth.co.uk'
    },
    {
      enquiry: 'CATERING & EVENTS',
      phone: ' 0777 8755 373',
      phoneNum: '07778755373',
      email: 'catering@downtoearth.co.uk'
    },
    {
      enquiry: 'LIFESTYLE STUDIO',
      phone: '0207 3716 987',
      phoneNum: '02073716987',
      email: 'lifestyle@downtoearth.co.uk'
    },
    {
      enquiry: 'CAREERS',
      phone: '0207 3716 987',
      phoneNum: '02073716987',
      email: 'hr@downtoearth.co.uk'
    }
  ];

  controller.address = [
    {
      enquiry: 'ADDRESS',
      address: '240-242 Kensington High St London W8 6ND'}
  ];



  controller.showTrain = false;
  controller.showBus = false;
  controller.showCar = false;
  controller.showBike = false;


  controller.toggleTrain = function() {
    controller.showTrain = !controller.showTrain;
    controller.showBus = false;
    controller.showCar = false;
    controller.showBike = false;
  };
  controller.toggleBus = function() {
    controller.showTrain = false;
    controller.showBus = !controller.showBus;
    controller.showCar = false;
    controller.showBike = false;
  };
  controller.toggleCar = function() {
    controller.showTrain = false;
    controller.showBus = false;
    controller.showCar = !controller.showCar;
    controller.showBike = false;
  };
  controller.toggleBike = function() {
    controller.showTrain = false;
    controller.showBus = false;
    controller.showCar = false;
    controller.showBike = !controller.showBike;
  };

  controller.map = {
    center: { latitude: 51.500040, longitude: -0.196268 },
    zoom: 15 };



  controller.marker = {
    id: 0,
    coords: {
      latitude: 51.49893,
      longitude: -0.199866
    },
    options: { draggable: false,
      icon: '../images/mapIcon.png'
    },
    events: {
      dragend: function (marker) {
        $log.log('marker dragend');
        var lat = marker.getPosition().lat();
        var lon = marker.getPosition().lng();
        $log.log(lat);
        $log.log(lon);

        controller.marker.options = {
          draggable: true,
          labelContent: 'lat: ' + controller.marker.coords.latitude + ' ' + 'lon: ' + controller.marker.coords.longitude,
          labelAnchor: '100 0',
          labelClass: 'marker-labels'
        };
      }
    }
  };

  var styleArray = [
    {
      featureType: 'all',
      stylers: [
        { saturation: '-100' ,
          gamma: '0.5' }
      ]
    }
  ];
  controller.options = {
    styles: styleArray,
    streetViewControl: false,
    mapTypeControl: false
  };


}

angular
  .module('d2eApp')
  .controller('ContactController', ContactController);
