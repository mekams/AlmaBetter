let person={
    fullName:'Salman Khan',
    talk : function(state,pincode){
        console.log('\nHello my name is',this.fullName,'from',state,pincode)
    }
}

let person1 ={
    fullName : 'Sharukh Khan'
}

person.talk('Uttar Pradesh',201309)              ////normal function call
person.talk.call(person1,'Mumbai',400006)    ////call method 
person.talk.apply(person1,['Mumbai',400006])    ///apply method


