(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
      this.load.image('bedroom01', 'assets/bedroom01.png');
      this.load.image('bed_player', 'assets/player_cama.png');
      this.load.image('mesa', 'assets/mesa.png');
      this.load.image('toki', 'assets/toki.png');
      this.load.spritesheet('background', 'assets/backgroundanimation.png', 600, 800, 4);

      this.load.spritesheet('toki_sprite', 'assets/Toki-Sprite.png', 380, 462);
      this.load.image('1px', 'assets/1px.png');
      this.load.image('nexusback', 'assets/nexusback.png');

      // Imagenes para la pantalla con números
      this.load.image('number1', 'assets/number1.png');
      this.load.image('number2', 'assets/number2.png');
      this.load.image('number3', 'assets/number3.png');
      this.load.image('number4', 'assets/number4.png');
      this.load.image('number5', 'assets/number5.png');
      this.load.image('number6', 'assets/number6.png');
      this.load.image('number7', 'assets/number7.png');
      this.load.image('number8', 'assets/number8.png');
      this.load.image('number9', 'assets/number9.png');
      this.load.image('number0', 'assets/number0.png');
      this.load.image('dot', 'assets/dot.png');
      this.load.image('number1a', 'assets/number1a.png');
      this.load.image('number2a', 'assets/number2a.png');
      this.load.image('number3a', 'assets/number3a.png');
      this.load.image('number4a', 'assets/number4a.png');
      this.load.image('number5a', 'assets/number5a.png');
      this.load.image('number6a', 'assets/number6a.png');
      this.load.image('number7a', 'assets/number7a.png');
      this.load.image('number8a', 'assets/number8a.png');
      this.load.image('number9a', 'assets/number9a.png');
      this.load.image('number0a', 'assets/number0a.png');
      this.load.image('dota', 'assets/dota.png');
      this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },

    create: function () {
      // configure game
      this.game.input.maxPointers = 1;

      if (this.game.device.desktop) {
        this.game.scale.pageAlignHorizontally = true;
      } else {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.minWidth =  480;
        this.game.scale.minHeight = 260;
        this.game.scale.maxWidth = 640;
        this.game.scale.maxHeight = 480;
        this.game.scale.forceOrientation(true);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.setScreenSize(true);
      }
      this.game.state.start('preloader');
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Boot = Boot;
}());
