

(function() {
'use strict';

function Mini1() {}

Mini1.prototype = {
  create: function () {


    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.input.onDown.add(this.onInputDown, this);


    // animation background
    var papel = this.game.add.sprite(0, 0, 'background');
    var desplegar = papel.animations.add('desplegar');
    papel.animations.play('desplegar', 8, false);

    this.player = this.game.add.sprite(90, 303, 'toki');
    this.player.scale.setTo(this.playerScale);
    this.game.physics.p2.enable(this.player, true);
    this.cursors = this.game.input.keyboard.createCursorKeys();

    //Caracteristicas player

    this.player.body.setZeroDamping();
    this.player.body.fixedRotation = true;
    this.player.body.setCircle(28);
    this.player.body.offset.setTo(0, 1000);

    //Creación de botones.
    
    this.number1 = this.game.add.sprite(70, 280, 'number1');
    this.number2 = this.game.add.sprite(230, 280, 'number2');
    this.number3 = this.game.add.sprite(390, 280, 'number3');
    this.number4 = this.game.add.sprite(70, 400, 'number4');
    this.number5 = this.game.add.sprite(230 , 400, 'number5');
    this.number6 = this.game.add.sprite(390, 400, 'number6');
    this.number7 = this.game.add.sprite(70, 520, 'number7');
    this.number8 = this.game.add.sprite(230 , 520, 'number8');
    this.number9 = this.game.add.sprite(390, 520, 'number9');
    this.number0 = this.game.add.sprite(70, 640, 'number0');
    this.dot = this.game.add.sprite(230 , 640, 'dot');
    this.number1a = this.game.add.sprite(70, 280, 'number1a');
    this.number2a = this.game.add.sprite(230, 280, 'number2a');
    this.number3a = this.game.add.sprite(390, 280, 'number3a');
    this.number4a = this.game.add.sprite(70, 400, 'number4a');
    this.number5a = this.game.add.sprite(230 , 400, 'number5a');
    this.number6a = this.game.add.sprite(390, 400, 'number6a');
    this.number7a = this.game.add.sprite(70, 520, 'number7a');
    this.number8a = this.game.add.sprite(230 , 520, 'number8a');
    this.number9a = this.game.add.sprite(390, 520, 'number9a');
    this.number0a = this.game.add.sprite(70, 640, 'number0a');
    this.dota = this.game.add.sprite(230 , 640, 'dota');
    this.number1a.visible = false;
    this.number2a.visible = false;
    this.number3a.visible = false;
    this.number4a.visible = false;
    this.number5a.visible = false;
    this.number6a.visible = false;
    this.number7a.visible = false;
    this.number8a.visible = false;
    this.number9a.visible = false;
    this.number0a.visible = false;
    this.dota.visible = false;

    this.number1a.inputEnabled = true;
    this.number1.inputEnabled = true;
    this.number2a.inputEnabled = true;
    this.number2.inputEnabled = true;
    this.number3a.inputEnabled = true;
    this.number3.inputEnabled = true;
    this.number4a.inputEnabled = true;
    this.number4.inputEnabled = true;
    this.number5a.inputEnabled = true;
    this.number5.inputEnabled = true;
    this.number6a.inputEnabled = true;
    this.number6.inputEnabled = true;
    this.number7a.inputEnabled = true;
    this.number7.inputEnabled = true;
    this.number8a.inputEnabled = true;
    this.number8.inputEnabled = true;
    this.number9a.inputEnabled = true;
    this.number9.inputEnabled = true;
    this.number0a.inputEnabled = true;
    this.number0.inputEnabled = true;
    this.dota.inputEnabled = true;
    this.dot.inputEnabled = true;

    this.number1.events.onInputDown.add(function(){
        this.number1.visible = false;
        this.number1a.visible = true;
    }, this);

    this.number1a.events.onInputDown.add(function(){
        this.number1.visible = true;
        this.number1a.visible = false;
    }, this);

    this.number2.events.onInputDown.add(function(){
        this.number2.visible = false;
        this.number2a.visible = true;
    }, this);

    this.number2a.events.onInputDown.add(function(){
        this.number2.visible = true;
        this.number2a.visible = false;
    }, this);

    this.number3.events.onInputDown.add(function(){
        this.number3.visible = false;
        this.number3a.visible = true;
    }, this);

    this.number3a.events.onInputDown.add(function(){
        this.number3.visible = true;
        this.number3a.visible = false;
    }, this);

    this.number4.events.onInputDown.add(function(){
        this.number4.visible = false;
        this.number4a.visible = true
    }, this);

    this.number4a.events.onInputDown.add(function(){
        this.number4.visible = true;
        this.number4a.visible = false;
    }, this);

    this.number5.events.onInputDown.add(function(){
        this.number5.visible = false;
        this.number5a.visible = true;
    }, this);

    this.number5a.events.onInputDown.add(function(){
        this.number5.visible = true;
        this.number5a.visible = false;
    }, this);

    this.number6.events.onInputDown.add(function(){
        this.number6.visible = false;
        this.number6a.visible = true;
    }, this);

    this.number6a.events.onInputDown.add(function(){
        this.number6.visible = true;
        this.number6a.visible = false;
    }, this);

    this.number7.events.onInputDown.add(function(){
        this.number7.visible = false;
        this.number7a.visible = true;
    }, this);

    this.number7a.events.onInputDown.add(function(){
        this.number7.visible = true;
        this.number7a.visible = false;
    }, this);

    this.number8.events.onInputDown.add(function(){
        this.number8.visible = false;
        this.number8a.visible = true;
    }, this);

    this.number8a.events.onInputDown.add(function(){
        this.number8.visible = true;
        this.number8a.visible = false;
    }, this);

    this.number9.events.onInputDown.add(function(){
        this.number9.visible = false;
        this.number9a.visible = true;
    }, this);

    this.number9a.events.onInputDown.add(function(){
        this.number9.visible = true;
        this.number9a.visible = false;
    }, this);

    this.number0.events.onInputDown.add(function(){
        this.number0.visible = false;
        this.number0a.visible = true;
    }, this);

    this.number0a.events.onInputDown.add(function(){
        this.number0.visible = true;
        this.number0a.visible = false;
    }, this);

    this.dot.events.onInputDown.add(function(){
        this.dot.visible = false;
        this.dota.visible = true;
    }, this);

    this.dota.events.onInputDown.add(function(){
        this.dot.visible = true;
        this.dota.visible = false;
    }, this);


    //Posiciones botones


  },

  update: function () {


  },


  render: function(){
  },

  onInputDown: function () {

  },

  playerChangeScale: function(velocityScale){
    this.playerScale += velocityScale;
    this.player.scale.setTo(this.playerScale);
  }
};

window['tocme'] = window['tocme'] || {};
window['tocme'].Mini1 = Mini1;
}());
