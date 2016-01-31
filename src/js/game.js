(function() {
  'use strict';

  function Game() {
    
  }

  Game.prototype = {
    init: function(estado){
      estadosViables = Estados.actualizarSiguientes(estado);
      console.log(estadosViables);
    },
    create: function () {
      // Variable para habilitar el movimiento del personaje
      this.canMove = true;

      this.playerVelocity = 300;
      this.playerScaleVelocity = 0.002;
      this.playerScale = 0.2;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.tileSprite(0, 0, 600, 800, 'bedroom01');
      
      //Paredes
      this.createWalls();

      //this.player = this.game.add.sprite(100, 100, 'toki');
      this.player = this.game.add.sprite(90, 303, 'toki_sprite');
      this.player.scale.setTo(0.25, 0.25);
      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

      // Añadimos las animaciones
      this.player.animations.add('sides', [3, 4, 5], 10, true);
      this.player.animations.add('back', [0, 1, 2], 10, true);

      this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function () {
      this.game.physics.arcade.collide(this.player, this.wall0);
      this.game.physics.arcade.collide(this.player, this.wall1);
      this.game.physics.arcade.collide(this.player, this.wall2);
      this.game.physics.arcade.collide(this.player, this.wall3);

      this.playerMovements(this.player);

      for(var i in estadosViables){
        if (minijuego2 == estadosViables[i]){
          this.game.state.start(minijuego2.state_name);
        }
      }

    },

    render: function(){
      /*this.game.debug.body(this.wall0);
      this.game.debug.body(this.wall1);
      this.game.debug.body(this.wall2);
      this.game.debug.body(this.wall3);
      this.game.debug.body(this.player);*/
    },

    onInputDown: function () {
      this.game.state.start('minijuego02');
    },

    playerChangeScale: function(velocityScale){
      this.playerScale += velocityScale;
      this.player.scale.setTo(this.playerScale);
    },

    // Función para controlar el móvimiento del jugardor que le pasamos por parámetro
    playerMovements: function(player) {
      // Declaración de variables para el control del movimiento
      var holdd = ( this.cursors.down.isDown ? true : false );
      var holdu = ( this.cursors.up.isDown ? true : false );
      var holdr = ( this.cursors.right.isDown ? true : false );
      var holdl = ( this.cursors.left.isDown ? true : false );

      // Cancelamos las superposiciones de teclas
      if ( holdu && holdd ) {
        holdu = holdd = false;
      }

      if ( holdr && holdl ) {
        holdr = holdl = false;
      }

      // Controlamos si se ha pulsado alguna letra y se puede mover
      if ((holdu || holdd || holdr || holdl) && this.canMove ) {
        if (holdu) {
          // UP
          player.body.velocity.y = -this.playerVelocity;

          // Activamos la animación
          player.animations.play('back');
        } else if (holdd) {
          //DOWN
          player.body.velocity.y = this.playerVelocity;

          // Activamos la animación
          player.animations.play('sides');
        } else if (holdr) {
          //RIGHT
          player.body.velocity.x = this.playerVelocity;

          // Activamos la animación
          player.animations.play('sides');
        } else if (holdl) {
          //LEFT
          player.body.velocity.x = -this.playerVelocity;

          // Activamos la animación
          player.animations.play('sides');
        }
      } else {
        this.player.frame = 3;
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
      }
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
