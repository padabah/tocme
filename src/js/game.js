(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {

      this.playerVelocity = 300;
      this.playerScaleVelocity = 0.002;
      this.playerScale = 0.2;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.tileSprite(0, 0, 600, 800, 'bedroom01');
      
      //Paredes
      this.createWalls();

      this.player = this.game.add.sprite(100, 100, 'toki');
      this.player.scale.setTo(0.25, 0.25);
      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
      
      this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function () {

      this.game.physics.arcade.collide(this.player, this.wall0);
      this.game.physics.arcade.collide(this.player, this.wall1);
      this.game.physics.arcade.collide(this.player, this.wall2);
      this.game.physics.arcade.collide(this.player, this.wall3);


      this.player.body.velocity.x = 0;
      this.player.body.velocity.y = 0;

      if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -this.playerVelocity;
      }
      else if (this.cursors.right.isDown) {
        this.player.body.velocity.x = this.playerVelocity;
      }

      if (this.cursors.up.isDown) {
        this.player.body.velocity.y = -this.playerVelocity;
      }
      else if (this.cursors.down.isDown){
        this.player.body.velocity.y = this.playerVelocity;
      }
    },

    render: function(){
      this.game.debug.body(this.wall0);
      this.game.debug.body(this.wall1);
      this.game.debug.body(this.wall2);
      this.game.debug.body(this.wall3);
      this.game.debug.body(this.player);
    },

    onInputDown: function () {
      this.game.state.start('minijuego02');
    },

    playerChangeScale: function(velocityScale){
      this.playerScale += velocityScale;
      this.player.scale.setTo(this.playerScale);
    },

    createWalls: function(){
      this.wall0 = this.game.add.sprite(0, 0, '1px');
      this.wall0.scale.setTo(600, 100);
      this.game.physics.enable(this.wall0, Phaser.Physics.ARCADE);
      this.wall0.body.immovable = true;

      this.wall1 = this.game.add.sprite(0, 100, '1px');
      this.wall1.scale.setTo(68, 634);
      this.game.physics.enable(this.wall1, Phaser.Physics.ARCADE);
      this.wall1.body.immovable = true;

      this.wall2 = this.game.add.sprite(0, 735, '1px');
      this.wall2.scale.setTo(600, 66);
      this.game.physics.enable(this.wall2, Phaser.Physics.ARCADE);
      this.wall2.body.immovable = true;

      this.wall3 = this.game.add.sprite(538, 100, '1px');
      this.wall3.scale.setTo(64, 634);
      this.game.physics.enable(this.wall3, Phaser.Physics.ARCADE);
      this.wall3.body.immovable = true;
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Game = Game;
}());
