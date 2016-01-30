

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


  },

  update: function () {


  },

  render: function(){
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
window['tocme'].Mini1 = Mini1;
}());
