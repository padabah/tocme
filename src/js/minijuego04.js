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

      this.limitOK = (this.numLapices-2)*2 + 2;

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
      this.game.state.start('game');
    },

    dropHandler: function(item, pointer){
      console.log(item.position);
      var ds = [];
      var ordenados = 0;
      var ord1 = 0;
      var ord2 = 0;
      var sum = 0;
      for(var i = 0; i < this.numLapices; i++){
        var d = 0;
        for(var j = 0; j < this.numLapices; j++){
          if(i != j){
            var distance = this.lapices.children[i].position.distance(this.lapices.children[j].position)
            if (distance >= 0 && distance <= 70){
              d++;
            }
          }
        }
        if(d == 1) {
          ord1++;
          ordenados++;
        }
        else if(d ==2) {
          ord2++;
          ordenados++;
        }
        ds.push(d);
        sum += d;
      }
      console.log(ds);
      console.log(sum);

      if ( (this.numLapices - 2) == ord2 && ord1 == 2){
        this.finOK();
      }

      if (sum < (this.limitOK*0.2)) this.text.text  ="NOOOOOO, estoy muy nervioso!!!!!";
      else if (sum < (this.limitOK*0.4)) this.text.text  ="Bueno, estoy un poco nervioso.";
      else if (sum < (this.limitOK*0.6)) this.text.text  ="Vamos mejorando.";
      else if (sum < (this.limitOK*0.8)) this.text.text  ="Uy, casi!";
      else if (sum> this.limitOK) this.text.text  ="NOOOOOOOOO, están muy cercaaaaaaaa.";
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].MiniJuego04 = MiniJuego04;
}());
