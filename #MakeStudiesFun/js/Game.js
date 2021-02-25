class Game{
    constructor(){

    }

    async create(){
        if (gameState === 'form'){
            form = new Form(100, 100, 20, 20)
            var h = new Hour()
            var m = new Minute() 
            var s = new Second()
            
            var hourCountRef = await database.ref('hours').once('value')
            var minCountRef = await database.ref('mins').once('value')
            var secCountRef = await database.ref('secs').once('value')
            if(hourCountRef.exists()){
                hourCount = hourCountRef.val();
                hour.getCount();
            }
            if(minCountRef.exists()){
                minCount = minCountRef.val();
                min.getCount();
            }
            if(secCountRef.exists()){
                secCount = secCountRef.val();
                sec.getCount();
            }
            startButton.visible = false;
            form.show()
            form.display()
        }
    }

    display(){
        if (gameState === "Start"){
            textSize(30);
            text("Welcome to the App", 450, 250);
            
            startButton.visible = true;
            form.hide();
            robot.hide();
            cloud.hide();
            
            if (mousePressedOver(startButton)){
              gameState = "form";
            }
        }
        
        if (gameState === "welcome"){
            form.hide();
            form.visible = "false"
        
            robot.visible = "true"

            robot.scale = 2
            cloud.scale = 0.5
            cloud.visible = "true"
            cloud.depth = 0
        
            text("You have " + form.display.hours + ": " + form.display.mins + ": "+ form.display.secs, 300, 200)
            cloud.visible = "false"
        }
    }
   
}