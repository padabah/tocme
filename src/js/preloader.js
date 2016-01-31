(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {
    preload: function () {
      this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
      this.load.setPreloadSprite(this.asset);
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.loadResources();

      this.ready = false;
      this.game.soundReady = false;
    },

    loadResources: function () {
      this.load.audio('song1', 'assets/pisong.mp3');

      var _self = this;



      this.game.sounds = [];
      this.game.audios = {};
      //this.game.audios.alarma1 = this.game.add.audio('alarma1');
      //this.game.audios.movil1 = this.game.add.audio('movil1');
      addSound('movil1');
      addSound('alarma1');
      addSound('lampara1');
      addSound('kraken3');
      addSound('bien1');
      addSound('bien2');
      addSound('nervios1');
      addSound('nervios2');
      addSound('nervios3');
      this.game.soundReady = false;

      function addSound(name){
        _self.game.audios[name] = _self.game.add.audio(name);
        _self.game.sounds.push(_self.game.audios[name]);
      }

    //  Being mp3 files these take time to decode, so we can't play them instantly
    //  Using setDecodedCallback we can be notified when they're ALL ready for use.
    //  The audio files could decode in ANY order, we can never be sure which it'll be.

      this.game.sound.setDecodedCallback(this.game.sounds, this.soundEnd, this);
    },

    create: function () {

    },

    soundEnd: function(){
      this.game.soundReady = true;
    },

    update: function () {
      if (!!this.ready) {
      //  if (!!this.ready && this.game.soundReady) {
        this.game.state.start('menu');
       }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['tocme'] = window['tocme'] || {};
  window['tocme'].Preloader = Preloader;
}());
