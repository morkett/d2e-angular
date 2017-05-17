function MenuController(){
  var controller = this;

  controller.breakfast = [
    {
      name: 'raw apple and vanilla porridge',
      info: 'gf-v-n',
      desc: 'crunchy nuts and coconut enriched with sweet superfoods, topped with fresh fruit and served with nutritious cold hemp ‘milk’ or milk of choice',
      price: 5,
      type: 'light'
    },
    {
      name: 'fresh sesonal fruit salad.',
      info: 'gf-vo',
      desc: 'juicy ripe fruits drizzled with organic maple syrup, coconut shreds and bee pollen',
      price: 5,
      type: 'light'
    },
    {
      name: 'home made granola',
      info: 'gf-v',
      desc: 'slowly roasted oats, coconut chips, nuts and seeds lightly drizzled with dark agave syrup, mixed with thinly chopped raisins and apricots and a sprinkle of seasonal spices',
      price: 6,
      type: 'energetic'
    },
    {
      name: 'raw chocolate hazelnut & banana crepe',
      info: 'gf-v-n',
      desc: 'banana and flax pancake smothered in raw ‘nutella’ spread, fresh fruits and maple syrup',
      price: 6,
      type: 'energetic'
    },
    {
      name: 'avocado untoast / avocado toast',
      info: 'gfo-v',
      desc: 'smashed avocado on buckwheat raw crackers or toasted sourdough, with a zinging lemon dressing, cherry tomatoes and activated pumpkin seeds',
      price: 7,
      type: 'open sandwich & english breakfast'
    },
    {
      name: 'sourdough scramble',
      info: 'gfo',
      desc: 'organic free range eggs scrambled with chives, turmeric and black pepper, served on toasted sourdough bread',
      price: 6,
      type: 'open sandwich & english breakfast'
    },
    {
      name: 'open sandwich & english breakfast',
      info: 'gfo-vo',
      desc: 'tamari and garlic marinated mushrooms, roasted cherry tomatoes, scrambled eggs with chives, homemade mexican style baked beans, seasonal greens and toasted sourdough served with butter or ketchup to order',
      price: 12,
      type: 'open sandwich & english breakfast'
    },
    {
      name: 'muffin',
      info: 'v',
      desc: 'individual cup-shaped quick bread made with spelt flour, oatmeal and blueberries',
      price: 3,
      type: 'bites'
    },
    {
      name: 'toast/raw crackers',
      info: 'gfo-vo',
      desc: 'ask server for choice of bread, crackers and accompaniments',
      price: 3,
      type: 'bites'
    }
  ];

  controller.lunchDinner = [
    {
      name: 'kale, lemon and almond detox',
      info: 'gf-v-n',
      desc: 'shredded kale massaged with fresh lemon and ground almonds, served with cranberries, apple and grapefruit maca dressing',
      price: '6 / 12',
      type: 'salads'
    },
    {
      name: 'squash and sage beta boost',
      info: 'gf-v',
      desc: 'seasonal winter squash shavings tossed with cavalo nero greens, rocket, lemon and sage buckwheat crispies and an avocado orange dressing',
      price: '6 / 12',
      type: 'salads'
    },
    {
      name: 'red pepper and pomegranate muhammara salad',
      info: 'gf-v-n',
      desc: 'marinated red pepper strips with juicy tomato bombs, ground walnuts, fresh pomegranate seeds and coriander leaf in an aromatic spiced chilli dressing with pomegranate molasses',
      price: '6 / 12',
      type: 'salads'
    },
    {
      name: 'red pepper and pomegranate muhammara salad',
      info: 'gf-v',
      desc: 'a hand picked and blended mix of soaked cornish seaweeds with cucumber, red onion, sesame oil and tamari with a touch of red chilli flakes',
      price: '6 / 12',
      type: 'salads'
    },
    {
      name: 'sprouted chickpea falafel tabouleh',
      info: 'gf-v',
      desc: 'crunchy and soft sprouted chickpea falafel served with raw cauliflower and parsley tabouleh, topped with tahini sauce and za’atar tomato cubes',
      price: '6 / 12',
      type: 'raw'
    },
    {
      name: 'kimchi sushi rolls',
      info: 'gf-v',
      desc: 'homemade kimchi rolled in nori seaweed, topped with sprouted alfalfa and served with wasabi paste, umeboshi plum and spiced tamari dip',
      price: '12',
      type: 'raw'
    },
    {
      name: 'indonesian almond satay kebabs',
      info: 'gf-v-n',
      desc: 'marinated vegetables skewered in a spicy almond and ginger satay sauce served with spiralised sesame cucumber ‘noodles',
      price: '6/12',
      type: 'raw'
    },
    {
      name: 'zucchini pasta pesto',
      info: 'gf-v-n',
      desc: 'courgette fettuccine ribbons in an aromatic rocket and sunflower seed pesto, sprinkled with almond parmesan',
      price: '6/12',
      type: 'raw'
    },
    {
      name: 'beetroot burger',
      info: 'gf-v',
      desc: 'served in a homemade gluten-free bun with wholegrain mustard mayo, roasted rainbow carrots, parsnips and salad greens',
      price: '9',
      type: 'cooked'
    },
    {
      name: 'pearl barley pilaf',
      info: 'v-n',
      desc: 'lemon and dill pearl barley topped with roasted brussels sprouts and caramelised garlic cloves served with a light smoky chestnut puree',
      price: '9',
      type: 'cooked'
    },
    {
      name: 'tortilla wrap',
      info: 'v-n',
      desc: 'seasonal roasted vegetables with green leaves and homemade hummus served with marinated olives',
      price: '9',
      type: 'cooked'
    },
    {
      name: 'seasonal risotto',
      info: 'gfo-v',
      desc: 'a changing menu of seasonal vegetables in slow cooked arborio rice - please ask your server for details',
      price: '12',
      type: 'cooked'
    },
    {
      name: 'seasonal risotto',
      info: 'gfo-v',
      desc: 'a changing menu of seasonal vegetables in slow cooked arborio rice - please ask your server for details',
      price: '12',
      type: 'cooked'
    },
    {
      name: 'melanzane',
      info: 'gfo-v',
      desc: 'layers of oven baked aubergine with a rich tomato and herb sauce, topped with almond ‘parmesan’ and fresh oregano, served with toasted sourdough and green leaves',
      price: '12',
      type: 'cooked'
    },
    {
      name: 'soup of the day',
      info: 'gfo-vo',
      desc: 'please ask your server for our daily seasonal soup served warmed or chilled with a choice of bread',
      price: '7',
      type: 'specials'
    },
    {
      name: 'special of the day',
      desc: 'chef\'s special dish of day, either raw or cooked. please ask your server for details',
      price: '12',
      type: 'specials'
    },
    {
      name: 'sunday roast (sunday special only)',
      info: 'gf-v-n',
      desc: 'three layer nut roast topped with thick tomato sauce, accompanied by roasted rosemary potatoes, cumin carrots and slowly cooked red cabbage apple sauce',
      price: '12',
      type: 'specials'
    },
    {
      name: 'raw tasting tapas',
      info: 'gf-v-n',
      desc: 'a selection of dishes from our raw food menu to try - perfect for the uninitiated, the curious or the undecided!',
      price: '15',
      type: 'share'
    },
    {
      name: 'vegan mezze',
      info: 'gf-v-n',
      desc: 'a generous platter of rice-stuffed vine leaves, marinated olives, sun-dried tomatoes, hummus, guacamole, mixed leaf salad and buckwheat crackers',
      price: '15',
      type: 'share'
    },
    {
      name: 'bread/crackers',
      info: 'gfo-vo',
      desc: 'ask server for choice of bread or crackers',
      price: '3',
      type: 'sides'
    },
    {
      name: 'marinated olives',
      info: 'v',
      desc: 'a choice of green or black olives marinated with mediterranean herbs and fresh lemon juice.',
      price: '3',
      type: 'sides'
    },
    {
      name: 'hummus/guacamole',
      info: 'v',
      desc: 'individual portion of home made classic dips',
      price: '3',
      type: 'sides'
    }
  ];

  controller.juices = [
    {
      name: 'green phanatic',
      desc: 'kale, cucumber, celery, fennel, lime',
      price: '5',
      type: 'pure'
    },
    {
      name: 'wonder juice',
      desc: 'apple, orange, carrot, green tea, lemon',
      price: '5',
      type: 'pure'
    },
    {
      name: 'sweet green',
      desc: 'celery, cucumber, apple, mint',
      price: '5',
      type: 'pure'
    },
    {
      name: 'the sunrise',
      desc: 'orange, apple, carrot, ginger',
      price: '5',
      type: 'pure'
    },
    {
      name: 'the garden',
      desc: 'cucumber, tomato, carrot',
      price: '5',
      type: 'pure'
    },
    {
      name: 'the cure',
      desc: 'beetroot, apple, celery, ginger',
      price: '5',
      type: 'pure'
    },
    {
      name: 'exotica',
      desc: 'orange, banana, apple, lemon',
      price: '5',
      type: 'super'
    },
    {
      name: 'purity',
      desc: 'avocado, apple, cucumber, celery, lime',
      price: '5',
      type: 'super'
    },
    {
      name: 'apple pie',
      desc: 'apple, almond milk, banana, cinnamon, honey',
      price: '5',
      type: 'super'
    },
    {
      name: 'kick it greens',
      desc: 'spinach, apple, celery, fennel, mint',
      price: '5',
      type: 'super'
    },
    {
      name: 'banana milk',
      desc: 'banana, berries, coconut flakes, milk of choice',
      price: '5',
      type: 'super'
    },
    {
      name: 'pearfection',
      desc: 'coconut water, pear, fennel, cucumber',
      price: '5',
      type: 'super'
    },
    {
      name: 'orange',
      price: '4',
      type: 'simple'
    },
    {
      name: 'apple',
      price: '4',
      type: 'simple'
    },
    {
      name: 'pineapple',
      price: '4',
      type: 'simple'
    },
    {
      name: 'carrot',
      price: '4',
      type: 'simple'
    },
    {
      name: 'tomato',
      price: '4',
      type: 'simple'
    },
    {
      name: 'beetroot',
      price: '4',
      type: 'simple'
    },
    {
      name: 'elderflower & fruit',
      price: '2',
      type: 'other'
    },
    {
      name: 'lemon & ginger',
      price: '2',
      type: 'other'
    },
    {
      name: 'lime & mint',
      price: '2',
      type: 'other'
    }
  ];


  controller.teaCoffee = [

    {
      name: 'tea pot',
      info: '(1x bag or loose leaf) black, green, white and flavoured. ask the server for full variety',
      price: '2.50',
      type: 'tea'
    },
    {
      name: 'matcha latte',
      price: '3',
      type: 'tea'
    },
    {
      name: '  matcha green',
      price: '3',
      type: 'tea'
    },
    {
      name: 'fresh mint',
      price: '2.50',
      type: 'tea'
    },
    {
      name: 'ginger, lemon zest & honey',
      price: '2.50',
      type: 'tea'
    },
    {
      name: 'espresso/machiato',
      price: '2',
      type: 'coffee'
    },
    {
      name: 'americano',
      price: '2',
      type: 'coffee'
    },
    {
      name: 'cappucino',
      price: '2.50',
      type: 'coffee'
    },
    {
      name: 'latte',
      price: '2.50',
      type: 'coffee'
    },
    {
      name: 'flat white',
      price: '2.50',
      type: 'coffee'
    },
    {
      name: 'mocha',
      price: '2.50',
      type: 'otherhot'
    },
    {
      name: 'hot chocolate',
      price: '3',
      type: 'otherhot'
    },
    {
      name: 'chai latte',
      price: '2.50',
      type: 'otherhot'
    }
  ];



}
angular
  .module('d2eApp')
  .controller('MenuController', MenuController);
