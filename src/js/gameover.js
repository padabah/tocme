(function() {
  'use strict';

  function GameOver() {}

  GameOver.prototype = {
    active: function() {
      this.game.time.events.add(Phaser.Timer.SECOND, this.createText, this);
    },
    create: function () {
      this.count = 1;
      this.input.onDown.add(this.onDown, this);

      // animation background
      var papel = this.game.add.sprite(0, 0, 'background');
      var desplegar = papel.animations.add('desplegar');
      papel.animations.play('desplegar', 3, false);

      //Player.

      this.player1 = this.game.add.sprite(328, 424, 'tokigameover');
      this.player1.scale.setTo(0.75, 0.75);

      //this.player.playerVelocity = 300;
      //this.player.initialPlayerFrame = 1;

      // Activamos las físicas en el player


      // Añadimos las animaciones
      this.player1.animations.add('parpadear', [0, 1], 10, true);
      this.player1.animations.play('parpadear', 2, true);

      // var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5 *0.5,
      //   'MENU', {font: 'Indie Flower', fill: '#111111', align: 'center', fontSize: 50
      // });
      var text = this.game.add.text(90,100, "GAME OVER", {font: 'IndieFlower', fill:'#111111', fontSize: 100});
      var text2 = this.game.add.text(110,230, "Thanks for making \nmy life a little \nmore bearable. \n\n", {font: 'IndieFlower', fill:'#111111', fontSize: 50});
      var text3 = this.game.add.text(80,500, "Now...\n GO OUT!", {font: 'IndieFlower', fill:'#111111', fontSize: 50});
      var text4 = this.game.add.text(100,700, "Signed:\n \t\t TOKI", {font: 'IndieFlower', fill:'#111111', fontSize: 30});
      //text.anchor.set(0.5);


      this.player1.inputEnabled = true;
      this.player1.events.onInputDown.add(function(){
        this.game.state.start('game');
      }, this);


    },

    update: function () {
      // if(this.count == 1)
      //   this.text = this.game.add.text(100,100,"MENU", {font: 'Indie Flower', fill:'#111111', fontSize: 50});
      //   this.text = "MENU"
      // this.count++;
    },

    onDown: function () {
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].GameOver = GameOver;
}());
