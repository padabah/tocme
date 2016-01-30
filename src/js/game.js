(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      // Variable para habilitar el movimiento del personaje
      this.canMove = true;

      this.playerVelocity = 300;
      this.playerScaleVelocity = 0.002;
      this.playerScale = 0.2;

      this.game.add.tileSprite(0, 0, 600, 800, 'bedroom01');

      this.wall = this.game.add.sprite(0, 300, null);
      this.wall2 = this.game.add.sprite(0, 300, null);
      this.wall.scale.setTo(5, 1);
      this.wall2.scale.setTo(5, 1);


      this.game.physics.startSystem(Phaser.Physics.P2JS);
      this.input.onDown.add(this.onInputDown, this);

      this.player = this.game.add.sprite(90, 303, 'toki_sprite');
      this.player.scale.setTo(this.playerScale);
      this.game.physics.p2.enable(this.player, true);
      this.game.physics.p2.enable(this.wall, true);
      this.game.physics.p2.enable(this.wall2, true);
      this.wall2.body.immovable = true;
      this.wall2.body.static = true;

      // Añadimos las animaciones
      this.player.animations.add('sides', [3, 4, 5], 10, true);
      this.player.animations.add('back', [0, 1, 2], 10, true);

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
      this.playerMovements(this.player);
    },

    render: function(){
    },

    onInputDown: function () {
      this.game.state.start('mini1');
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
          player.body.moveUp(this.playerVelocity);
          this.playerChangeScale(-this.playerScaleVelocity);

          // Activamos la animación
          player.animations.play('back');
        } else if (holdd) {
          //DOWN
          player.body.moveDown(this.playerVelocity);
          this.playerChangeScale(this.playerScaleVelocity);

          // Activamos la animación
          player.animations.play('sides');
        } else if (holdr) {
          //RIGHT
          player.body.moveRight(this.playerVelocity);

          // Activamos la animación
          player.animations.play('sides');
        } else if (holdl) {
          //LEFT
          player.body.moveLeft(this.playerVelocity);

          // Activamos la animación
          player.animations.play('sides');
        }
      } else {
        this.player.frame = 3;
      }
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Game = Game;
}());
