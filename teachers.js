
// TAMAÑO del VIDEOJUEGO [RESPONSIVE]
var w = window.outerWidth-30;
var h = window.outerHeight-110;

// EL PUNTO "Y" DE LAS IMAGENES.
var y = h-350;

var config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // FONDO
    this.load.image('fondo', 'img/starfield.png');

    // PROFESORES
    this.load.image('juaky', 'img/ojo.png');
    this.load.image('vallejo', 'img/ojo.png');
    this.load.image('marc', 'img/ojo.png');
    this.load.image('albert', 'img/ojo.png');
    this.load.image('josep', 'img/ojo.png');
    this.load.image('valles', 'img/ojo.png');
}


function create ()
{
    // IMAGEN de FONDO a 100%
    this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'fondo').setOrigin(0);

    // POSICIONES de LOS PROFESORES
    juaky =     this.add.sprite(w-1250, y, 'juaky');
    vallejo =   this.add.sprite(w-1050, y, 'vallejo');
    marc =      this.add.sprite(w-850, y, 'marc');
    albert =    this.add.sprite(w-650, y, 'albert');
    josep =     this.add.sprite(w-450, y, 'josep');
    valles =    this.add.sprite(w-250, y, 'valles');

    // HACER que los SPRITE's SEAN CLICKABLES
    juaky.setInteractive();
    vallejo.setInteractive();
    marc.setInteractive();
    albert.setInteractive();
    josep.setInteractive();
    valles.setInteractive();

    // AL PULSAR uno de los SPRITE's que llame a la FUNCIÓN LISTENER
    this.input.on('gameobjectdown', listener);
}

function update ()
{
    
}

function listener (pointer, gameObject) {
    
    // UN EJEMPLO MOSTRANDO EL NOMBRE DE LOS PROFESORES
    alert(gameObject.texture.key);

}



