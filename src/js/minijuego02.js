(function() {
  'use strict';

  function MiniJuego02() {}

  MiniJuego02.prototype = {
    create: function () {
      this.nexus = this.game.add.sprite(87, 14, 'nexusback');
      this.aceptar = this.game.add.sprite(147, 500, 'aceptar');
      this.posponer = this.game.add.sprite(320, 500, 'posponer');
      this.alarma = this.game.add.sprite(170, 190, 'alarma');

      var relojSonando = this.game.add.sprite(200, 322, 'relojSonando');
      var movimiento = relojSonando.animations.add('movimiento');
      relojSonando.animations.play('movimiento', 5, true);

      this.aceptar.inputEnabled = true;
      this.aceptar.events.onInputDown.add(this.listenerAceptar, this);

      this.posponer.inputEnabled = true;
      this.posponer.events.onInputDown.add(this.listenerPosponer, this);

      this.text = this.game.add.text(250, 16, '', { fill: '#ffffff' });

      this.counter = 0;
      this.numFrames = 3;
      this.nowMinutes = new Date();
      this.seleccionado = false;
    },

    update: function () {
      if (this.checkLastNowMinutes(1)){
        this.nowMinutes = new Date();
        this.counter++;
        if (this.counter < this.numFrames){
          this.alarma.frame = this.counter;
          if(!this.seleccionado){
            this.finKO();
          }
          else{
            this.seleccionado = false;
            this.aceptar.visible = true;
            this.posponer.visible = true;
          }
        }
        else{
          this.finKO();
        }
      }
    },

    onDown: function () {

    },

    listenerAceptar: function() {
      if (this.counter == (this.numFrames-1)){
        this.finOK();
      }
      else{
        this.finKO();
      }
    },

    listenerPosponer: function() {
      this.seleccionado = true;
      this.aceptar.visible = false;
      this.posponer.visible = false;
    },

    checkLastNowMinutes: function(minutesDiff){
      return ((new Date() - this.nowMinutes) / 10000) >= minutesDiff;
    },

    finKO : function(){
      this.text.text = "KO";
    },

    finOK : function(){
      this.text.text = "OK";
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].MiniJuego02 = MiniJuego02;
}());
