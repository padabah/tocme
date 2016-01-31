(function() {
  'use strict';

  function Game() {

  }

  Game.prototype = {
    init: function(estado){
      this.estadoAnterior = estado;
      estadosViables = Estados.actualizarSiguientes(estado);
      console.log(estadosViables);

    },

    create: function () {
      // Variable para habilitar el movimiento del personaje
      this.canMove = true;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.tileSprite(0, 0, 1452, 1746, 'bedroomFull');
      this.game.world.setBounds(0, 0, 1452, 1746)

      this.ratio = 1452 / 600;

      //800

      //Añadimos los sprites para el escenario
      /*this.player_bed = this.game.add.sprite(68, 98, 'bed_player');
      this.player_bed.scale.setTo(0.23, 0.23);

      this.mesa = this.game.add.sprite(534, 80, 'mesa');
      this.mesa.rotation = 1.55;
      this.mesa.scale.setTo(0.50, 0.50);*/

      //Paredes y objetos de la habitación
      this.actions = [];
      this.createWalls();
      this.createSolidObjects();

      // Jugardor
      this.player = this.game.add.sprite(260, 120, 'toki_sprite', 3);


      this.goto = null;

      this.player.scale.setTo(0.4, 0.4);

      if(this.estadoAnterior){
        this.player.playerVelocity = 300;
      }
      
      this.player.initialPlayerFrame = 3;
      this.player.anchor.x = 0.5;
      this.player.anchor.y = 0.5;

      this.game.camera.follow(this.player);

      // Activamos las físicas en el player
      this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

      // Añadimos las animaciones
      this.player.animations.add('sides', [3, 4, 5], 10, true);
      this.player.animations.add('back', [0, 1, 2], 10, true);

      this.stopMovingPlayer(this.player);

      this.cursors = this.game.input.keyboard.createCursorKeys();
      //this.game.input.onDown.add(this.animateSprite, this)
    },

    showAction: function(action, stateName){
      action.alpha = 1;
      // action.input.onTap.add();
      if(!action.inputEnabled){
         action.events.onInputDown.add(function functionName() {
           if(this.alpha)
            console.log(stateName)
            this.game.state.start(stateName);
        }, action);
      }
      action.inputEnabled = true;

    },

    hideActions: function(){
      this.actions.forEach(function(action){
        action.alpha = 0;
      })
    },

    update: function(){

      if ( this.game.physics.arcade.collide(this.player, this.wall0) ){
        this.stopMovingPlayer(this.player);
      }
      else if ( this.game.physics.arcade.collide(this.player, this.wall1) ){
        this.stopMovingPlayer(this.player);
      }
      else if ( this.game.physics.arcade.collide(this.player, this.wall2) ){
        this.stopMovingPlayer(this.player);
      }
      else if ( this.game.physics.arcade.collide(this.player, this.wall3) ){
        this.stopMovingPlayer(this.player);
      }
      else if ( this.game.physics.arcade.collide(this.player, this.table) ){
        this.stopMovingPlayer(this.player);
        this.showAction(this.actionMesa, 'minijuego04');
      }
      else if ( this.game.physics.arcade.collide(this.player, this.bed) ){
        this.stopMovingPlayer(this.player);
      }
      else if ( this.game.physics.arcade.collide(this.player, this.lampara) ){
        this.stopMovingPlayer(this.player);
        this.showAction(this.actionLampara, 'minijuego03');
      }
      else if ( this.game.physics.arcade.collide(this.player, this.armario) ){
        this.stopMovingPlayer(this.player);
        this.showAction(this.actionArmario, 'minijuego06');
      }
      else if ( this.game.physics.arcade.collide(this.player, this.alfombra) ){
        this.stopMovingPlayer(this.player);
        this.game.state.start('mini1');
      }
      else if ( this.game.physics.arcade.collide(this.player, this.kraken) ){
        this.stopMovingPlayer(this.player);
        this.game.state.start('minijuego05');
      }
      else{
        console.log();
        this.hideActions();
      }

      this.playerMovements(this.player);

      for(var i in estadosViables){
        if (minijuego2 == estadosViables[i]){
          //this.game.state.start(minijuego2.state_name);
        }
      }

    },

    render: function(){
      // this.game.debug.body(this.wall0);
      // this.game.debug.body(this.wall1);
      // this.game.debug.body(this.wall2);
      // this.game.debug.body(this.wall3);
      // this.game.debug.body(this.player);
      // this.game.debug.body(this.table);
      // this.game.debug.body(this.bed);
      // this.game.debug.body(this.lampara);
      // this.game.debug.body(this.armario);
      //this.game.debug.body(this.alfombra);
      this.game.debug.body(this.kraken);
      this.game.debug.cameraInfo(this.game.camera, 32, 32);
      this.game.debug.spriteCoords(this.player, 32, 500);
    },

    // Funciones para crear los objetos de la habitación
    createWalls: function(){
      //arriba
      this.wall0 = this.game.add.sprite(0, 0, '1px');
      this.wall0.scale.setTo(1452,100);
      this.game.physics.enable(this.wall0, Phaser.Physics.ARCADE);
      this.wall0.body.immovable = true;

      //izquierda
      this.wall1 = this.game.add.sprite(0, 100, '1px');
      this.wall1.scale.setTo(40, 1800);
      this.game.physics.enable(this.wall1, Phaser.Physics.ARCADE);
      this.wall1.body.immovable = true;

      //abajo
      this.wall2 = this.game.add.sprite(0, 1650, '1px');
      this.wall2.scale.setTo(1452, 66);
      this.game.physics.enable(this.wall2, Phaser.Physics.ARCADE);
      this.wall2.body.immovable = true;

      //derecha
      this.wall3 = this.game.add.sprite(1300, 100, '1px');
      this.wall3.scale.setTo(50, 1800);
      this.game.physics.enable(this.wall3, Phaser.Physics.ARCADE);
      this.wall3.body.immovable = true;
    },

    createSolidObjects: function () {
      // MESA
      this.table = this.game.add.sprite(1002, 203, '1px');
      this.table.scale.setTo(304, 540);
      this.game.physics.enable(this.table, Phaser.Physics.ARCADE);
      this.table.body.immovable = true;

      this.actionMesa = this.game.add.sprite(1080, 622, 'exclamation');
      this.actionMesa.alpha = 0;
      this.actionMesa.scale.setTo(0.3, 0.3);
      this.actions.push(this.actionMesa);


      // CAMA
      this.bed = this.game.add.sprite(40, 100, '1px');
      this.bed.scale.setTo(330, 420);
      this.game.physics.enable(this.bed, Phaser.Physics.ARCADE);
      this.bed.body.immovable = true;

      // LUZ
      this.lampara = this.game.add.sprite(430, 120, '1px');
      this.lampara.scale.setTo(110, 140);
      this.game.physics.enable(this.lampara, Phaser.Physics.ARCADE);
      this.lampara.body.immovable = true;

      this.actionLampara = this.game.add.sprite(450, 120, 'exclamation');
      this.actionLampara.alpha = 0;
      this.actionLampara.scale.setTo(0.3, 0.3);
      this.actions.push(this.actionLampara);

      // ARMARIO
      this.armario = this.game.add.sprite(26, 925, '1px');
      this.armario.scale.setTo(280, 390);
      this.game.physics.enable(this.armario, Phaser.Physics.ARCADE);
      this.armario.body.immovable = true;

      this.actionArmario = this.game.add.sprite(180, 980, 'exclamation');
      this.actionArmario.alpha = 0;
      this.actionArmario.scale.setTo(0.3, 0.3);
      this.actions.push(this.actionArmario);


      this.alfombra = this.game.add.sprite(654, 599, '1px');
      this.alfombra.scale.setTo(20, 20);
      this.game.physics.enable(this.alfombra, Phaser.Physics.ARCADE);
      this.alfombra.body.immovable = true;

      this.kraken = this.game.add.sprite(1010, 1131, '1px');
      this.kraken.scale.setTo(300, 500);
      this.game.physics.enable(this.kraken, Phaser.Physics.ARCADE);
      this.kraken.body.immovable = true;


    },

    playerMovements: function(player) {
      if (this.game.input.mousePointer.isDown){
        this.goto = new Phaser.Rectangle(this.game.input.x + this.game.camera.x, this.game.input.y + this.game.camera.y, 2, 2);
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
