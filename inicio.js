class Inicio extends Phaser.Scene {
    constructor(){
        super({ key: "Inicio" });
    }

    preload(){
        // FONDO
        this.load.image('fondo', 'img/starfield.png');

        // BOTÓ
        this.load.image('btnInicio', 'img/btnInicio.png');
        this.load.image('btnText', 'img/btnText.png');
        
    }

    create(){
        // IMAGEN de FONDO a 100%
        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'fondo').setOrigin(0);

        this.btnInicio = this.add.image(0, 0, 'btnInicio');
        this.btnText = this.add.image(0, 0, 'btnText');

        this.container = this.add.container(w/2, h/2, [ this.btnInicio, this.btnText ]);

        this.btnInicio.setInteractive({useHandCursor: true});

        this.input.on('gameobjectdown', function(){
            this.scene.start("EscogerJugador");
        }, this);

    }
    
}