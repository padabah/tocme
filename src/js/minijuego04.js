(function() {
  'use strict';

  function MiniJuego04() {}

  MiniJuego04.prototype = {
    create: function () {
      // animation background
      var papel = this.game.add.sprite(0, 0, 'background');
      var desplegar = papel.animations.add('desplegar');
      papel.animations.play('desplegar', 8, false);

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      
      this.numLapices = 7;
      this.lapices = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

      for(var i = 0; i < this.numLapices; i++){
        var l = this.lapices.create(this.game.rnd.integerInRange(0, 100), this.game.rnd.integerInRange(0, 750), 'lapiz');
        l.inputEnabled = true;
        l.input.enableDrag();
        l.events.onDragStop.add(this.dropHandler, this);
        //l.animations.add('spin', [0, 1, 2, 3]);
        //l.play('spin', 20, true);
        //l.body.velocity.set(this.game.rnd.integerInRange(-200, 200), this.game.rnd.integerInRange(-200, 200));
      }

      this.lapices.setAll('body.collideWorldBounds', true);
      this.lapices.setAll('body.bounce.x', 1);
      this.lapices.setAll('body.bounce.y', 1);

      this.text = this.game.add.text(250, 16, '', { fill: '#ffffff' });
    },

    update: function () {
      //this.game.physics.arcade.collide(this.lapices);
      
      var minDy = null;
      for(var i = 0; i < this.lapices.children.length-1; i++){
        var dyi = Math.abs(this.lapices.children[i].y - this.lapices.children[i+1].y);
        if (!minDy || minDy > dyi){
          minDy = dyi;
        }
      }
      this.text.text = minDy;
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
    },

    dropHandler: function(item, pointer){
      //this.selected = item;
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].MiniJuego04 = MiniJuego04;
}());
