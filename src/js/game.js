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

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.tileSprite(0, 0, 600, 800, 'bedroom01');

      //Paredes y objetos de la habitación
      this.createWalls();
      this.createSolidObjects();

      // Jugardor
      this.player = this.game.add.sprite(260, 120, 'toki_sprite', 3);
      this.player.scale.setTo(0.25, 0.25);

      this.player.playerVelocity = 300;
      this.player.initialPlayerFrame = 3;
      this.player.anchor.x = 0.5;
      this.player.anchor.y = 0.5;

      // Activamos las físicas en el player
      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

      // Añadimos las animaciones
      this.player.animations.add('sides', [3, 4, 5], 10, true);
      this.player.animations.add('back', [0, 1, 2], 10, true);

      this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function(){
      
      if ( this.game.physics.arcade.collide(this.player, this.wall0) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.wall1) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.wall2) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.wall3) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.table) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.bed) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.lampara) )
        this.stopMovingPlayer(this.player);
      if ( this.game.physics.arcade.collide(this.player, this.armario) )
        this.stopMovingPlayer(this.player);

      this.playerMovements(this.player);

      // Controlamos cual es el siguiente estado
      // for(var i in estadosViables){
      //   if (minijuego2 == estadosViables[i]){
      //     this.game.time.events.add(Phaser.Timer.SECOND * 4, this.game.state.start(minijuego2.state_name), this);
      //   } else if (minijuego1 == estadosViables[i]){
      //     this.game.state.start(minijuego1.state_name);
      //   }
      // }
    },

    render: function(){
      this.game.debug.body(this.wall0);
      this.game.debug.body(this.wall1);
      this.game.debug.body(this.wall2);
      this.game.debug.body(this.wall3);
      this.game.debug.body(this.player);
      this.game.debug.body(this.table);
      this.game.debug.body(this.bed);
      this.game.debug.body(this.lampara);
      this.game.debug.body(this.armario);
    },

    // Funciones para crear los objetos de la habitación
    createWalls: function(){
      this.wall0 = this.game.add.sprite(0, 0, '1px');
      this.wall0.scale.setTo(600,100);
      this.game.physics.enable(this.wall0, Phaser.Physics.ARCADE);
      this.wall0.body.immovable = true;

      this.wall1 = this.game.add.sprite(0, 100, '1px');
      this.wall1.scale.setTo(40, 636);
      this.game.physics.enable(this.wall1, Phaser.Physics.ARCADE);
      this.wall1.body.immovable = true;

      this.wall2 = this.game.add.sprite(0, 735, '1px');
      this.wall2.scale.setTo(600, 66);
      this.game.physics.enable(this.wall2, Phaser.Physics.ARCADE);
      this.wall2.body.immovable = true;

      this.wall3 = this.game.add.sprite(550, 100, '1px');
      this.wall3.scale.setTo(50, 636);
      this.game.physics.enable(this.wall3, Phaser.Physics.ARCADE);
      this.wall3.body.immovable = true;
    },

    createSolidObjects: function () {
      // MESA
      this.table = this.game.add.sprite(428, 100, '1px');
      this.table.scale.setTo(122, 263);
      this.game.physics.enable(this.table, Phaser.Physics.ARCADE);
      this.table.body.immovable = true;

      // CAMA
      this.bed = this.game.add.sprite(40, 100, '1px');
      this.bed.scale.setTo(130, 180);
      this.game.physics.enable(this.bed, Phaser.Physics.ARCADE);
      this.bed.body.immovable = true;

      // LUZ
      this.lampara = this.game.add.sprite(170, 100, '1px');
      this.lampara.scale.setTo(64, 40);
      this.game.physics.enable(this.lampara, Phaser.Physics.ARCADE);
      this.lampara.body.immovable = true;

      // ARMARIO
      this.armario = this.game.add.sprite(40, 420, '1px');
      this.armario.scale.setTo(86, 194);
      this.game.physics.enable(this.armario, Phaser.Physics.ARCADE);
      this.armario.body.immovable = true;
    },

    playerMovements: function(player) {
      if (this.game.input.mousePointer.isDown){
        this.goto = new Phaser.Rectangle(this.game.input.x, this.game.input.y, 2, 2);
      }

      //if (!Phaser.Rectangle.contains(this.player.body, this.game.goto.x, this.game.goto.y)){
      if (this.goto && !Phaser.Rectangle.intersects(this.player.body, this.goto)){
        this.game.physics.arcade.moveToXY(player, this.goto.x, this.goto.y, 400);
        this.animateSprite(this.goto);
      }
      else{
          this.stopMovingPlayer(player);
      }
    },

    // Función para calcular la posición a la que tiene que ir el player
    animateSprite: function (pointer) {
      // Almacenamos la nueva posición del jugador
      this.player.newPositionX = parseInt(pointer.x);
      this.player.newPositionY = parseInt(pointer.y);

      // Variables de control para ver la dirección
      this.player.movingDown = ( this.player.newPositionY > this.player.body.y ? true : false );
      this.player.movingRight = ( this.player.newPositionX > this.player.body.x ? true : false );

      // Declaramos la siguiente animación
      this.player.nextAnimation = ( this.player.movingDown ? 'sides' : 'back' );
      this.player.animations.play(this.player.nextAnimation);
    },

    // Función para terminar el movimiento del player
    stopMovingPlayer: function (player) {
      player.body.velocity.setTo(0, 0);
      player.animations.stop();
    }
  };


  window['tocme'] = window['tocme'] || {};
  window['tocme'].Game = Game;
}());
