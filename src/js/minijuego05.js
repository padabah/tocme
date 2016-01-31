(function() {
  'use strict';

  function MiniJuego05() {}

  MiniJuego05.prototype = {
    create: function () {
      // animation background
      var papel = this.game.add.sprite(0, 0, 'background');
      var desplegar = papel.animations.add('desplegar');
      papel.animations.play('desplegar', 8, false);

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.plantilla = this.game.add.sprite(0, 90, 'plantilla');

      this.numPalabras = 8;
      this.palabras = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

      for(var i = 0; i < this.numPalabras; i++){
        var l = this.palabras.create(this.game.rnd.integerInRange(0, 100), this.game.rnd.integerInRange(0, 600), 'palabra_' + i);
        l.inputEnabled = true;
        l.input.enableDrag();
        l.events.onDragStop.add(this.dropHandler, this);
      }

      this.palabras.setAll('body.collideWorldBounds', true);
      this.palabras.setAll('body.bounce.x', 1);
      this.palabras.setAll('body.bounce.y', 1);

      this.text = this.game.add.text(50, 700, '', { fill: '#000' });
    },

    update: function () {
      //this.game.physics.arcade.collide(this.lapices);


    },

    onDown: function () {

    },
    render: function(){
      /*for(var i = 0; i < this.numLapices; i++){
        this.game.debug.body(this.lapices[i]);
      }*/
    },

    finKO : function(){
      this.text.text = "KO";
    },

    finOK: function(){
      this.text.text = "OK";
      this.game.state.start('gameover');

    },

    dropHandler: function(item, pointer){
      var ps = [new Phaser.Point(65, 110), new Phaser.Point(190, 109), new Phaser.Point(319, 110), new Phaser.Point(415, 115), new Phaser.Point(520, 111), new Phaser.Point(142, 194), new Phaser.Point(146, 274), new Phaser.Point(25, 350)];
      var numPalabrasOrdenadas = 0;

      for(var i=0; i < this.palabras.children.length; i++){
        var p = new Phaser.Point(this.palabras.children[i].x, this.palabras.children[i].y);
        if( p.distance(ps[parseInt(this.palabras.children[i].key.split('_')[1])]) < 20 ){
          numPalabrasOrdenadas++;
        }
      }
      var desordenados = this.numPalabras - numPalabrasOrdenadas;
      this.text.text = 'Solo faltan ' + desordenados + ' palabras por ordenar';
      if (desordenados == 0){
        this.finOK();
      }
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].MiniJuego05 = MiniJuego05;
}());
