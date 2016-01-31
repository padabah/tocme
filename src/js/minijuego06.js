(function() {
  'use strict';

  function MiniJuego06() {}

  MiniJuego06.prototype = {
    create: function () {
      // animation background
      var papel = this.game.add.sprite(0, 0, 'background');
      var desplegar = papel.animations.add('desplegar');
      papel.animations.play('desplegar', 8, false);

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.cajon = this.game.add.sprite(50, 90, 'cajon');

      this.numCalzoncillos = 20;
      this.calzoncillos = this.game.add.physicsGroup(Phaser.Physics.ARCADE);


      for(var i = 0; i < this.numCalzoncillos; i++){
        var l = this.calzoncillos.create(this.game.rnd.integerInRange(100, 300), this.game.rnd.integerInRange(150, 350), 'calzoncillos_' + this.game.rnd.integerInRange(0, 3));
        l.inputEnabled = true;
        l.input.enableDrag();
        l.events.onDragStop.add(this.dropHandler, this);
        l.events.onInputDown.add(this.listenerCalzoncillo, this);
      }
      

      this.calzoncillos.setAll('body.collideWorldBounds', true);
      this.calzoncillos.setAll('body.bounce.x', 1);
      this.calzoncillos.setAll('body.bounce.y', 1);

      this.text = this.game.add.text(50, 700, '', { fill: '#000' });
    },

    update: function () {
      //this.game.physics.arcade.collide(this.lapices);
      
      
      
    },

    onDown: function () {

    },
    render: function(){
      /*for(var i = 0; i < this.numLapices; i++){
        this.game.debug.body(this.lapices[i]);
      }*/
    },

    finKO : function(){
      this.text.text = "KO";
    },

    finOK: function(){
      this.text.text = "OK";
    },

    dropHandler: function(item, pointer){
      var ps = [new Phaser.Point(95, 126), new Phaser.Point(317, 126), new Phaser.Point(95, 402), new Phaser.Point(317, 402)];
      var numCalzoncillosOrdenados = 0;
      for(var i=0; i < this.calzoncillos.children.length; i++){
        var p = new Phaser.Point(this.calzoncillos.children[i].x, this.calzoncillos.children[i].y);
        if( p.distance(ps[parseInt(this.calzoncillos.children[i].key.split('_')[1])]) < 100 && this.calzoncillos.children[i].frame == 1){
          numCalzoncillosOrdenados++;
        }
      }
      var desordenados = this.numCalzoncillos - numCalzoncillosOrdenados;
      this.text.text = 'Solo faltan ' + desordenados + ' calzoncillos por ordenar';
      if (desordenados == 0){
        this.finOK();
      }
    },

    listenerCalzoncillo: function(item, pointer) {
      item.frame = 1;
    },
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].MiniJuego06 = MiniJuego06;
}());
