(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
      this.load.image('bedroom01', 'assets/bedroom01.png');
      this.load.image('toki', 'assets/toki.png');
      this.load.spritesheet('background', 'assets/backgroundanimation.png', 600, 800, 4);
      this.load.spritesheet('toki_sprite', 'assets/Toki-Sprite.png', 380, 462);
      this.load.image('1px', 'assets/1px.png');
      this.load.image('nexusback', 'assets/nexusback.png');
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
