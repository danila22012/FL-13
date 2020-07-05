// TODO: Your code goes here

function CreateVehicle(color, model, maxSpeed, engine){
    this.tempColor
    this.tempModel
    this.tempEngine
    this.tempMaxSpeed = maxSpeed
    this.intervalState 
    this.setInfo = function (){
        this.tempColor = color
        
        this.tempModel = model
        this.tempMaxSpeed = maxSpeed
        this.tempEngine= engine
    }
    this.getInfo = function (){

        if(typeof this.tempColor === 'undefined'){
            this.setInfo()
        }
        
        let tempObj = {}
        tempObj.color = this.tempColor
        tempObj.model = this.tempModel
        tempObj.maxSpeed = this.tempMaxSpeed
        tempObj.engine = this.tempEngine

        console.log(tempObj)
    }
    
    this.upgradeEngine = function(newEngine, maxSpeed){
        this.tempEngine = newEngine;
        this.tempMaxSpeed = maxSpeed;   
    }
    this.drive = function(){

        if( typeof this.intervalState ==='undefined'){ //проверка на активность интервала
            
        } else if( this.intervalState === 0){
            console.log('allready driving')
            return
        }
        this.currentSpeed = 0;
        this.driveMaxSpeed = 0;
        console.log(this.intervalState)
        


        const drive = setInterval(() => { 
           
            
            console.log( this.currentSpeed += 20)
            if(this.driveMaxSpeed <= this.currentSpeed) {
            this.driveMaxSpeed = this.currentSpeed 
            }

            if( this.currentSpeed >= this.tempMaxSpeed && this.currentSpeed <= this.tempMaxSpeed + 20 ){
                console.log('speed is to high')
            } else if(this.currentSpeed >= this.tempMaxSpeed + 20){
                console.log('engine begin to break')
                setTimeout(() => {
                    clearInterval(drive);
                    this.intervalState = null
                        
                }, 0);
                this.stop()
            }
        }, 2000);
        this.driveState = drive;


    }
    this.stop = function(){
        setTimeout(() => {
            clearInterval(this.driveState);
            
        }, 0);
        let stop = setInterval(() => {
            console.log( this.currentSpeed -= 20)
            if(this.currentSpeed <= 0 ){
                setTimeout(() => {
                    clearInterval(stop);
                        
                }, 0);
                console.log('vehicle has stopped')
                console.log(`max speed was ${this.driveMaxSpeed}`)
            }
        },1500)
    }
}


const car = new CreateVehicle('green', 'r8', 70 ,'v10')
car.getInfo()
car.changeColor = function(newColor){
    newColor !== this.tempColor? this.tempColor = newColor : console.log('choose another one')
}
car.drive()