class EscogerJugador extends Phaser.Scene {
    constructor(){
        super({ key: "EscogerJugador" });
    }

    preload ()
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

        // DISPAR
        this.load.image('bullet', 'assets/sprites/bullet.png');
    }

    create(){
        // IMAGEN de FONDO a 100%
        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'fondo').setOrigin(0);


        // POSICIONES de LOS PROFESORES
        this.juaky =     this.add.sprite(w-1250, y, 'juaky');
        this.vallejo =   this.add.sprite(w-1050, y, 'vallejo');
        this.marc =      this.add.sprite(w-850, y, 'marc');
        this.albert =    this.add.sprite(w-650, y, 'albert');
        this.josep =     this.add.sprite(w-450, y, 'josep');
        this.valles =    this.add.sprite(w-250, y, 'valles');

        // Añadiendo los profesores en el array.
        profesores.push(this.juaky,this.vallejo,this.marc,this.albert,this.josep,this.valles);

        // HACER que los SPRITE's SEAN CLICKABLES,
        // el "useHandCursor: true" hace la misma función que en CSS en "cursor: pointer"
        for(let i = 0; i < profesores.length; i++){
            profesores[i].setInteractive({useHandCursor: true});
        }

        // AL PULSAR uno de los SPRITE's que llame a la FUNCIÓN LISTENER
        this.input.on('gameobjectdown', function(pointer, gameObject){
            this.scene.start("PantallaJuego", listener(pointer, gameObject));
        }, this);
    }

    update(){

    }

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

    console.log(elegido);

    return elegido;
}



