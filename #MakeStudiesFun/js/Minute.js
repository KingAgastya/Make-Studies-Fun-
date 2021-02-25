class Minute{
    constructor(){

    }

    getMin(){
        var minCountRef = database.ref('mins')
        minsCountRef.on("value", (data) => {
            hourCount = data.val();
        })
    }

    updateMin(mins){
        database.ref('/').update({
            minCount : mins
        })
    }

    update(){
        var minIndex = "mins/min" + this.index
        database.ref(minIndex).set({
            mins : this.min
        })
    }
}