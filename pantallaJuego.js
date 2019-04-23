class PantallaJuego extends Phaser.Scene {
  constructor() {
    super({ key: "PantallaJuego" });
  }

  init(data) {
    this.jugador = data.texture.key;
  }

  preload() {
    // FONDO
    this.load.image("fondo", "img/starfield.png");
    this.load.image("bullet", "img/bullet.png");
  }

  create() {
    // IMAGEN de FONDO a 100%
    this.bg = this.add
      .tileSprite(0, 0, game.config.width, game.config.height, "fondo")
      .setOrigin(0);
    var Bullet = new Phaser.Class({
      Extends: Phaser.GameObjects.Image,

      initialize: function Bullet(scene) {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, "bullet");

        this.speed = Phaser.Math.GetSpeed(w / 2, 1);
      },

      fire: function(x, y) {
        this.setPosition(x, y - 50);

        this.setActive(true);
        this.setVisible(true);
      },

      update: function(time, delta) {
        this.y -= this.speed * delta;

        if (this.y < -50) {
          this.setActive(false);
          this.setVisible(false);
        }
      }
    });

    bullets = this.add.group({
      classType: Bullet,
      maxSize: 10,
      runChildUpdate: true
    });

    ship = this.add.sprite(w / 2, h - 100, this.jugador).setDepth(1);

    cursors = this.input.keyboard.createCursorKeys();

    speed = Phaser.Math.GetSpeed(300, 1);
  }

  update(time, delta) {
    if (cursors.left.isDown) {
      ship.x -= speed * delta;
    } else if (cursors.right.isDown) {
      ship.x += speed * delta;
    }

    if (cursors.up.isDown && time > lastFired) {
      var bullet = bullets.get();

      if (bullet) {
        bullet.fire(ship.x, ship.y);

        lastFired = time + 50;
      }
    }
  }
}
