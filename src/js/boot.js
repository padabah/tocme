(function () {
  'use strict';

  function Boot() {}

  function createText() {

      text = game.add.text(game.world.centerX, game.world.centerY, "- phaser -\nrocking with\ngoogle web fonts");
      text.anchor.setTo(0.5);

      text.font = 'Revalia';
      text.fontSize = 60;

      //  x0, y0 - x1, y1
      grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
      grd.addColorStop(0, '#8ED6FF');
      grd.addColorStop(1, '#004CB3');
      text.fill = grd;

      text.align = 'center';
      text.stroke = '#000000';
      text.strokeThickness = 2;
      text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

      text.inputEnabled = true;
      text.input.enableDrag();

      text.events.onInputOver.add(over, this);
      text.events.onInputOut.add(out, this);

  }

  Boot.prototype = {
    preload: function () {
      // window.WebFontConfig = {
      //
      //   var self
      //
      //     //  'active' means all requested fonts have finished loading
      //     //  We set a 1 second delay before calling 'createText'.
      //     //  For some reason if we don't the browser cannot render the text the first time it's created.
      //     active: function() { this.game.time.events.add(Phaser.Timer.SECOND, createText, this); },
      //
      //     //  The Google Fonts we want to load (specify as many as you like in the array)
      //     google: {
      //       families: ['Revalia']
      //     }
      //
      // };



      //  Load the Google WebFont Loader script
      //this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
      this.load.image('preloader', 'assets/preloader.gif');
      this.load.image('bedroom01', 'assets/bedroom_yellow.png');
      this.load.image('bedroomFull', 'assets/bedroom_full.png');
      this.load.image('bed_player', 'assets/player_cama.png');
      this.load.image('mesa', 'assets/mesa.png');
      this.load.image('toki', 'assets/toki.png');
      this.load.spritesheet('toki3', 'assets/toki3.png', 348, 474);
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
      this.load.image('aceptar', 'assets/aceptar.png');
      this.load.image('posponer', 'assets/posponer.png');
      this.load.spritesheet('alarma', 'assets/alarma.png', 265, 115, 3);
      this.load.spritesheet('relojSonando', 'assets/relojSonando.png', 192, 150, 2);
      this.load.spritesheet('lampara', 'assets/lampara.png', 373, 750, 2);
      this.load.image('lapiz', 'assets/lapiz.png');
      this.load.image('plantilla', 'assets/plantilla.png');
      for(var i=0; i<8; i++){
        this.load.image('palabra_'+i, 'assets/palabra_'+i+'.png');
      }
      this.load.image('cajon', 'assets/cajon.png');
      for(var i=0; i<4; i++){
        this.load.spritesheet('calzoncillos_'+i, 'assets/calzoncillos_'+i+'.png', 150, 143, 2);
      }
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
