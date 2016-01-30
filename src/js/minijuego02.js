(function() {
  'use strict';

  function MiniJuego02() {}

  MiniJuego02.prototype = {
    create: function () {
      this.nexus = this.game.add.sprite(425, 772, 'nexusback');
    },

    update: function () {

    },

    onDown: function () {

    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].MiniJuego02 = MiniJuego02;
}());
