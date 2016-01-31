(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      // Variable para habilitar el movimiento del personaje
      this.canMove = true;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.tileSprite(0, 0, 600, 800, 'bedroom01');

      //Añadimos los sprites para el escenario
      this.player_bed = this.game.add.sprite(90, 98, 'bed_player');
      this.player_bed.scale.setTo(0.23, 0.23);

      this.mesa = this.game.add.sprite(534, 80, 'mesa');
      this.mesa.rotation = 1.55;
      this.mesa.scale.setTo(0.50, 0.50);
      
      //Paredes
      this.createWalls();

      // Jugardor
      this.player = this.game.add.sprite(90, 303, 'toki_sprite', 3);
      this.player.scale.setTo(0.25, 0.25);

      this.player.playerVelocity = 300;
      this.player.initialPlayerFrame = 3;

      // Activamos las físicas en el player
      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

      // Añadimos las animaciones
      this.player.animations.add('sides', [3, 4, 5], 10, true);
      this.player.animations.add('back', [0, 1, 2], 10, true);

      this.cursors = this.game.input.keyboard.createCursorKeys();
      this.game.input.onDown.add(this.moveSprite, this)
    },

    update: function () {
      /*if ( this.game.physics.arcade.collide(this.player, this.wall0) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.wall1) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.wall2) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.wall3) )
        this.stopMovingPlayer(this.player);*/

      this.playerMovements(this.player);
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

    // Funciones para crear los objetos de la habitación
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

    createSolidObjects: function () {
      this.bed = this.game.add.sprite.sprite(534, 80, '1px');
      this.bed.scale.setTo(68, 68);
      this.game.physics.enable(this.bed, Phaser.Physics.ARCADE);
      this.bed.body.immovable = true;
    },

    // Función para calcular la posición a la que tiene que ir el player
    moveSprite: function (pointer) {
      // Almacenamos la nueva posición del jugador
      this.player.newPositionX = parseInt(pointer.x);
      this.player.newPositionY = parseInt(pointer.y);

      // Variables de control para ver la dirección
      this.player.movingDown = ( this.player.newPositionY > this.player.body.y ? true : false );
      this.player.movingRight = ( this.player.newPositionX > this.player.body.x ? true : false );

      // Variables de control para ver si se está moviendo
      this.player.stopMovingY = false;
      this.player.stopMovingX = false;
      this.player.playerMoving = true;

      // Declaramos la siguiente animación
      this.player.nextAnimation = ( this.player.movingDown ? 'sides' : 'back' );
    },

    // Función para controlar el movimiento del player
    playerMovements: function(player) {
      // Almacenamos la posición actual del player
      var playerX = parseInt(player.body.position.x);
      var playerY = parseInt(player.body.position.y);

      // Comprobamos si se tiene que parar o seguir
      if ( player.stopMovingX && player.stopMovingY && player.playerMoving ) {
        this.stopMovingPlayer(player);
      } else {
        if ( playerX == player.newPositionX ) {
          // Comprobamos si ya ha llegado a la posición de la X
          player.stopMovingX = true;
          player.body.velocity.x = 0;
        } else if ( playerY == player.newPositionY ) {
          // Comprobamos si ya ha llegado a la posición de la Y
          player.stopMovingY = true;
          player.body.velocity.y = 0;
        } else if ( player.playerMoving ) {
          // Seguimos moviendo al player

          // Comprobamos la dirección de la X
          if (player.newPositionX < player.position.x) {
            // LEFT

            // Comprobamos si nos hemos pasado
            if (player.movingRight) {
              player.stopMovingX = true;
              player.body.velocity.x = 0;
            } else
              player.body.velocity.x = -player.playerVelocity;
          } else {
            // RIGHT

            if (player.movingRight)
              player.body.velocity.x = player.playerVelocity;
            else {
              player.stopMovingX = true;
              player.body.velocity.x = 0;
            }
          }

          // Comprobamos la dirección de la Y
          if (player.newPositionY < player.position.y) {
            // UP

            // Comprobamos si nos hemos pasado
            if (player.movingDown) {
              player.stopMovingY = true;
              player.body.velocity.y = 0;
            } else
              player.body.velocity.y = -player.playerVelocity;
          } else if (player.newPositionY > player.position.y) {
            // DOWN

            if(player.movingDown)
              player.body.velocity.y = player.playerVelocity;
            else {
              player.stopMovingY = true;
              player.body.velocity.y = 0;
            }
          }

          // Activamos la animación
          player.animations.play(player.nextAnimation);
        }
      }
    },

    // Función para terminar el movimiento del player
    stopMovingPlayer: function (player) {
      player.playerMoving = false;
      player.stopMovingX = true;
      player.stopMovingY = true;

      player.frame = player.initialPlayerFrame;
      player.body.velocity.x = 0;
      player.body.velocity.y = 0;
      player.animations.stop();
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Game = Game;
}());
