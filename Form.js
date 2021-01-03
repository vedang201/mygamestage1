class Form{
    constructor(){
     this.angerButton = createButton('Feeling angry');
     this.depressButton= createButton('Having anxiety');
     
    }
    hide(){
        this.angerButton.hide();
        this.depressButton.hide();
    }
    display(){
        this.angerButton.position(200,200);
        this.depressButton.position(250,200);

        this.angerButton.mousePressed(()=>{
            this.angerButton.hide();
            this.depressButton.hide();
            game.update(1);

        }) 
        this.depressButton.mousePressed(()=>{
            this.angerButton.hide();
            this.depressButton.hide();
            game.update(2);

        })        
    }

}