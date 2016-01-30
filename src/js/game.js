(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {

      this.playerVelocity = 300;
      this.playerScaleVelocity = 0.002;
      this.playerScale = 0.2;

      this.game.add.tileSprite(0, 0, 600, 800, 'bedroom01');

      this.wall = this.game.add.sprite(0, 300, 'block');
      this.wall2 = this.game.add.sprite(0, 300, 'block');
      this.wall.scale.setTo(5, 1);
      this.wall2.scale.setTo(5, 1);


      this.game.physics.startSystem(Phaser.Physics.P2JS);


      this.input.onDown.add(this.onInputDown, this);

      this.player = this.game.add.sprite(90, 303, 'toki');
      this.player.scale.setTo(this.playerScale);
      this.game.physics.p2.enable(this.player, true);
      this.game.physics.p2.enable(this.wall, true)
      this.game.physics.p2.enable(this.wall2, true)
      this.wall2.body.immovable = true;
      this.wall2.body.static = true;

      this.player.body.setZeroDamping();
      this.player.body.fixedRotation = true;
      this.player.body.setCircle(28);
      this.player.body.offset.setTo(0, 1000);

      /*this.bounds = new Phaser.Polygon([new Phaser.Point(72, 303), new Phaser.Point(505, 303),
                                        new Phaser.Point(600, 579), new Phaser.Point(600, 800),
                                        new Phaser.Point(0, 800), new Phaser.Point(0, 528), new Phaser.Point(72, 303) ]);


      this.graphics = this.game.add.graphics(0, 0);
      this.graphics.lineStyle(1, 0xffd900, 1);
      this.graphics.drawPolygon(this.bounds.points);*/

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
        this.game.state.start('mini1');
      }
    },

    render: function(){
    },

    onInputDown: function () {
      this.game.state.start('mini1');
    },

    playerChangeScale: function(velocityScale){
      this.playerScale += velocityScale;
      this.player.scale.setTo(this.playerScale);
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Game = Game;
}());
