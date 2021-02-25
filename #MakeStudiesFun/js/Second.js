class Second{
    constructor(){

    }

    getSec(){
        var secCountRef = database.ref('secs')
        secCountRef.on("value", (data) => {
            secCount = data.val();
        })
    }

    updateSec(secs){
        database.ref('/').update({
            secCount : secs
        })
    }

    update(){
        var secIndex = "secs/sec" + this.index
        database.ref(secIndex).set({
            sec : this.sec
        })
    }
}