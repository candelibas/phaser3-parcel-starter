import Phaser from 'phaser';

import Game from './scenes/Game';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [Game],
};

new Phaser.Game(config);

// This is for preventing re-run multiple scenes
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}