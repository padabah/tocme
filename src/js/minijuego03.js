(function() {
  'use strict';

  function MiniJuego03() {}

  MiniJuego03.prototype = {
    create: function () {
      // animation background
      var papel = this.game.add.sprite(0, 0, 'background');
      var desplegar = papel.animations.add('desplegar');
      papel.animations.play('desplegar', 8, false);
      
      this.lampara = this.game.add.sprite(100, 0, 'lampara');
      this.lamparaFrame = 0;

      this.game.input.onDown.add(this.listenerInputDown, this);
      this.text = this.game.add.text(250, 16, '', { fill: '#ffffff' });
      this.counter = 0;
      this.finalCounter = 10;

      this.text = this.game.add.text(250, 16, '', { fill: '#ffffff' });
    },

    update: function () {
      if (this.counter >= this.finalCounter){
        this.finOK();
      }
    },

    onDown: function () {

    },

    listenerInputDown: function(){
      if((this.lampara.frame == 0 && this.isInside(this.game.input._x, this.game.input._y, 224, 254, 428, 449))
        ||(this.lampara.frame == 1 && this.isInside(this.game.input._x, this.game.input._y, 217, 245, 415, 440))){
        this.lampara.frame = (this.lampara.frame + 1) % 2;
        this.counter++;
      }
    },

    isInside: function (x, y, x1, x2, y1, y2){
      return x >= x1 && x <= x2 && y >= y1 && y <= y2;
    },

    finKO : function(){
      this.text.text = "KO";
    },

    finOK : function(){
      //this.text.text = "OK";
      this.game.state.start('game', true, false, 2);
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].MiniJuego03 = MiniJuego03;
}());
