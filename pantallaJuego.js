class PantallaJuego extends Phaser.Scene {
    constructor(){
        super({ key: "PantallaJuego" });
    }

    init (data)
    {
        this.jugador = data;
    }

    preload(){
        // FONDO
        this.load.image('fondo', 'img/starfield.png');
        
    }


    create(){
        // IMAGEN de FONDO a 100%
        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'fondo').setOrigin(0);

        //
        this.x = this.add.sprite(w/2,h-100,elegido);


        // Para que se puedan mover los INPUT's.
        this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        if (this.x != undefined) {
            if (this.keyLeft.isDown) {
                this.x.x = this.x.x - 10;
            }
        
            if(this.keyRight.isDown){
                this.x.x = this.x.x + 10;
            }
        }
    }
}