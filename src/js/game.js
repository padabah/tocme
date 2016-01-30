(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      // Variable para habilitar el movimiento del personaje
      this.canMove = true;

      this.playerVelocity = 500;
      this.playerScaleVelocity = 0.002;
      this.playerScale = 0.2;

      this.tween;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.tileSprite(0, 0, 600, 800, 'bedroom01');
      
      //Paredes
      this.createWalls();

      this.player = this.game.add.sprite(90, 303, 'toki_sprite', 3);
      this.player.scale.setTo(0.25, 0.25);
      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

      // Añadimos las animaciones
      this.player.animations.add('sides', [3, 4, 5], 10, true);
      this.player.animations.add('back', [0, 1, 2], 10, true);

      this.cursors = this.game.input.keyboard.createCursorKeys();
      this.game.input.onDown.add(this.moveSprite, this)
    },

    update: function () {
      this.game.physics.arcade.collide(this.player, this.wall0);
      this.game.physics.arcade.collide(this.player, this.wall1);
      this.game.physics.arcade.collide(this.player, this.wall2);
      this.game.physics.arcade.collide(this.player, this.wall3);
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
    },

    moveSprite: function (pointer) {
      // Comprobamos si se está ejecutando un tween anterior
      if ( this.tween && this.tween.isRunning ) {
        this.tween.stop();
      }

      // Calculamos la duración en función de la distancia para que siempre sea la misma
      var duration = (this.game.physics.arcade.distanceToPointer(this.player, pointer) / 300) * this.playerVelocity;

      // Añadimos un tween para realizar el movimiento
      this.tween = this.game.add.tween(this.player).to({
          x: pointer.x,
          y: pointer.y
        },
        duration,
        Phaser.Easing.Linear.None,
        true
      );

      this.tween.onStart.add(function () {
        // Activamos la animación correspondiente
        this.player.animations.play((this.player.position.y < pointer.y ? 'sides' : 'back'));
      }, this);

      // Cuando termina terminamos la animación y volvemos al sprite inicial
      this.tween.onComplete.add(function () {
        this.player.frame = 3;
        this.player.animations.stop()
      }, this);
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Game = Game;
}());
