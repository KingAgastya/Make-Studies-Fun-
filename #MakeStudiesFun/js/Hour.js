class Hour{
    constructor(){

    }

    getHour(){
        var hourCountRef = database.ref('hours')
        hourCountRef.on("value", (data) => {
            hourCount = data.val();
        })
    }

    updateHour(hours){
        database.ref('/').update({
            hourCount : hours
        })
    }

    update(){
        var hourIndex = "hours/hour" + this.index
        database.ref(hourIndex).set({
            hour : this.hour
        })
    }
}