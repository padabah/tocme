(function() {
  'use strict';

  function Menu() {}

  Menu.prototype = {
    create: function () {
      var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5,
        'MENU', {font: '42px Arial', fill: '#ffffff', align: 'center'
      });
      text.anchor.set(0.5);
      this.input.onDown.add(this.onDown, this);
      //Auto pasar
      this.game.state.start('game');

      
    },

    update: function () {

    },

    onDown: function () {
      
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Menu = Menu;
}());
