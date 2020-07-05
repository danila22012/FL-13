function Fighter(fighter){
    
    this.name;
    this.damage;
    this.hp;
    this.strength;
    this.agility;
    this.getName = function(){

        let _name = fighter.name
        return _name
    }
    this.getDamage = function(){

        let _damage= fighter.damage
        return _damage
    }
    this.getHealth = function(){

        let _hp = fighter.hp
        return _hp
    }
    this.getStrength = function(){

        let _strength = fighter.strength
        return _strength
    }
    this.getAgility = function(){

        let _agility = fighter.agility
        return _agility
    }
    this.attack = function (fighter){

        
        let hp = fighter.getHealth()
        if(typeof fighter.tempHP !== 'undefined') {
 hp = fighter.tempHP 
}
        let dmg = fighter.getDamage()
        let agi = fighter.getAgility()
        let str = fighter.getStrength()
        let win = 0;
        let lose = 0;
        console.log(hp)
        console.log(dmg)
        

        let prob = 100 - (agi + str)
        let possib = Math.random(0,100) * 100;
        console.log(possib)
        
        if(possib >= prob){
            console.log(`${fighter.getName()} makes ${this.getDamage()} to ${this.getName()}`)
           hp = hp - this.getDamage()
           console.log(hp)
        } else {
 console.log(`${fighter.getName()}attack missed`) 
}
        

       
        fighter.tempHP = hp;
        fighter.tempWin = win;
        fighter.tempLoses = lose;
        
    }
    this.heal = function(amount){
        this.tempHP = this.tempHP + amount
        console.log(this.tempHP)
    }
    this.dealDamage = function (amount){
        this.tempHP = this.tempHP - amount
        console.log(this.tempHP)
    }
    this.logCombatHistory = function (){
        console.log(
            `${this.getName()}
            Wins:${this.tempWin}
            Loses:${this.tempLoses}`
        )
    }
    this.addWin = function (){
        this.tempWin = this.tempWin + 1
    }
    this.addlose = function (){
        this.tempWin = this.tempLoses + 1
    }
    
    
}
const myFighter = new Fighter({name:'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const myFighter2 = new Fighter({name:'Commodus', damage: 20, hp: 90, strength: 25, agility: 20});



console.log(myFighter)






function battle(myFighter,myFighter2){
    myFighter2.attack(myFighter)
   
    function repeat(){

        myFighter.attack(myFighter2)
        if(myFighter2.tempHP <= 0) {
            myFighter2.tempLoses = 1;
            myFighter.tempWin = 1;
            console.log('Maximus has won')
            return
        }
        battle(myFighter,myFighter2)
    }
    if(myFighter.tempHP <= 0){
        myFighter.tempLoses = 1;
        myFighter2.tempWin = 1;
        console.log('Commodus has won')
        return
    }
    
    repeat(myFighter,myFighter2)
    

}
battle(myFighter,myFighter2)
