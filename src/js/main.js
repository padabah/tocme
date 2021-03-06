window.addEventListener('load', function () {
  'use strict';

  var ns = window['tocme'];
  var game = new Phaser.Game(600, 800, Phaser.AUTO, 'tocme-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('mini1', ns.Mini1);
  game.state.add('gameover', ns.GameOver);

  game.state.add('minijuego02', ns.MiniJuego02);
  game.state.add('minijuego03', ns.MiniJuego03);
  game.state.add('minijuego04', ns.MiniJuego04);
  game.state.add('minijuego05', ns.MiniJuego05);
  game.state.add('minijuego06', ns.MiniJuego06);
  game.state.add('game', ns.Game);

  /* yo phaser:state new-state-files-put-here */

  game.state.start('boot');
}, false);
