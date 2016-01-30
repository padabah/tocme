(function() {
  'use strict';

  function MiniJuego02() {}

  MiniJuego02.prototype = {
    create: function () {
      this.nexus = this.game.add.sprite(87, 14, 'nexusback');
      this.nexus = this.game.add.sprite(147, 442, 'aceptar');
      this.nexus = this.game.add.sprite(320, 442, 'posponer');
      this.nexus = this.game.add.sprite(170, 190, 'alarma');
    },

    update: function () {

    },

    onDown: function () {

    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].MiniJuego02 = MiniJuego02;
}());
