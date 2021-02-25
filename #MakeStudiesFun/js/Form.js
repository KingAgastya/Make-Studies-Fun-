class Form{
    constructor(){
        this.hours = createInput("Hours")
        this.mins = createInput("Minutes")
        this.secs = createInput("Seconds")
        this.title = createElement("h2")
        this.next = createButton("Next")
    }

    hide(){
        this.hours.hide()
        this.mins.hide()
        this.secs.hide()
        this.title.hide()
        this.next.hide()
    }
    show(){
        this.hours.show()
        this.mins.show()
        this.secs.show()
        this.title.show()
        this.next.show()
    }
    //text(){
      //  text("You have " + this.hours() + ": " + this.mins() + ": "+ this.secs(), 200, 200)
    //}

    display(){
        this.title.html("Enter a time limit")

        this.title.position(600, 300)
        this.hours.position(550, 500)
        this.mins.position(650, 500)
        this.secs.position(750, 500)
        this.next.position(1200, 600)
        

        this.next.mousePressed(()=>{
            this.hours.hide()
            this.mins.hide()
            this.secs.hide()
            this.title.hide()
            this.next.hide()
            gameState = "welcome"
        })
    }
}