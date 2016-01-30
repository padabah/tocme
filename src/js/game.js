(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {

      this.playerVelocity = 300;
      this.playerScaleVelocity = 0.002;
      this.playerScale = 0.2;

      this.game.add.tileSprite(0, 0, 600, 800, 'bedroom01');
      this.game.physics.startSystem(Phaser.Physics.P2JS);
      
      this.input.onDown.add(this.onInputDown, this);

      this.lines = [new Phaser.Line(72, 303, 0, 528),
                    new Phaser.Line(72, 303, 505, 303),
                    new Phaser.Line(505, 303, 600, 579)]

      this.player = this.game.add.sprite(90, 303, 'toki');
      this.player.scale.setTo(this.playerScale);
      this.game.physics.p2.enable(this.player, true);

      this.player.body.setZeroDamping();
      this.player.body.fixedRotation = true;
      this.player.body.setCircle(28);

      

      this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function () {

      this.player.body.setZeroVelocity();
      if (this.cursors.left.isDown) {
        this.player.body.moveLeft(this.playerVelocity);
      }
      else if (this.cursors.right.isDown) {
        this.player.body.moveRight(this.playerVelocity);
      }

      if (this.cursors.up.isDown) {
        this.player.body.moveUp(this.playerVelocity);
        this.playerChangeScale(-this.playerScaleVelocity);
      }
      else if (this.cursors.down.isDown){
        this.player.body.moveDown(this.playerVelocity);
        this.playerChangeScale(this.playerScaleVelocity);
      }
    },

    render: function(){
      for(var l in this.lines){
        this.game.debug.geom(this.lines[l]);
      }
    },

    onInputDown: function () {
      this.game.state.start('menu');
    },

    playerChangeScale: function(velocityScale){
      this.playerScale += velocityScale;
      this.player.scale.setTo(this.playerScale);
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Game = Game;
}());
