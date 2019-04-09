/**
 *

_________ _______  _______  _______           _______  _______  _______   _________ _          _______  _______  _______  _______  _______   
\__   __/(  ____ \(  ___  )(  ____ \|\     /|(  ____ \(  ____ )(  ____ \  \__   __/( (    /|  (  ____ \(  ____ )(  ___  )(  ____ \(  ____ \  
   ) (   | (    \/| (   ) || (    \/| )   ( || (    \/| (    )|| (    \/     ) (   |  \  ( |  | (    \/| (    )|| (   ) || (    \/| (    \/  
   | |   | (__    | (___) || |      | (___) || (__    | (____)|| (_____      | |   |   \ | |  | (_____ | (____)|| (___) || |      | (__      
   | |   |  __)   |  ___  || |      |  ___  ||  __)   |     __)(_____  )     | |   | (\ \) |  (_____  )|  _____)|  ___  || |      |  __)     
   | |   | (      | (   ) || |      | (   ) || (      | (\ (         ) |     | |   | | \   |        ) || (      | (   ) || |      | (        
   | |   | (____/\| )   ( || (____/\| )   ( || (____/\| ) \ \__/\____) |  ___) (___| )  \  |  /\____) || )      | )   ( || (____/\| (____/\  
   )_(   (_______/|/     \|(_______/|/     \|(_______/|/   \__/\_______)  \_______/|/    )_)  \_______)|/       |/     \|(_______/(_______/ 
                                                                                                                                             
  by n0ss4, dayachi and zyro.

 */

// Variables globales:
var profesores = [];
var elegido;

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

    // Añadiendo los profesores en el array.
    profesores.push(juaky,vallejo,marc,albert,josep,valles);

    // HACER que los SPRITE's SEAN CLICKABLES,
    // el "useHandCursor: true" hace la misma función que en CSS en "cursor: pointer"
    for(let i = 0; i < profesores.length; i++){
        profesores[i].setInteractive({useHandCursor: true});
    }

    // AL PULSAR uno de los SPRITE's que llame a la FUNCIÓN LISTENER
    this.input.on('gameobjectdown', listener);
}

function update ()
{
    elegido = this.input.x;
}

function listener (pointer, gameObject) {
    
    // Una vez seleccionado el profesor que quieres se eliminaran los demas.
    for(let i = 0; i < profesores.length; i++){
        if(gameObject.texture.key != profesores[i].texture.key){
            profesores[i].visible = false;
        }
    }

    // Eliminar el array profesores ya que no lo utilizaremos más
    profesores.splice(0);

    // El profesor elegido guardarlo en está variable
    elegido = gameObject;

    // El profesor seleccionado se colocara en el centro de la pantalla.
    elegido.x = w/2;
    elegido.y = h-100;
}



