import Phaser from 'phaser';

import logoSprite from '../../assets/logo.png';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Menu' });
  }

  preload() {
    this.load.image('logo', logoSprite);
  }

  create() {
    let logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });
  }
}