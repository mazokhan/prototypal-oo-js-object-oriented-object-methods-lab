function boardMember(name,homestate,training){
    this.name = name
    this.homestate = homestate
    this.training = training
}

boardMember.prototype.veto = function(){
    return 'No, i must disagree'

}

boardMember.prototype.approve = function(){
    return 'You can do that'
}

boardMember.prototype.docharity = function(){
    return 'I like to help people'
}

boardMember.prototype.releasePressStatement = function(){
    return 'You will see great things from scuber'
}

boardMember.prototype.sayHi = function(){
    rerturn `Hi, my name is ${this.name}. I am from ${this.homestate} and i was trained in ${this.training}.`
}