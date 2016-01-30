window.addEventListener('load', function () {
  'use strict';

  var ns = window['tocme'];
  var game = new Phaser.Game(600, 800, Phaser.AUTO, 'tocme-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);
  /* yo phaser:state new-state-files-put-here */
  game.state.start('boot');
}, false);
