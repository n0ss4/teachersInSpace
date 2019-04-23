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
                                                                                                                                             
  by n0ss4, davidam22 and zyro.

 */

// Variables globales:
var profesores = [];
var elegido;

// TAMAÑO del VIDEOJUEGO [RESPONSIVE]
var w = window.outerWidth - 30;
var h = window.outerHeight - 110;

// EL PUNTO "Y" DE LAS IMAGENES.
var y = h - 350;

//
var bullets;
var ship;
var speed;
var stats;
var cursors;
var lastFired = 0;

var config = {
  type: Phaser.WEBGL,
  width: w,
  height: h,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [Inicio, EscogerJugador, PantallaJuego],
  pixelArt: true,
  roundPixels: true
};

var game = new Phaser.Game(config);
