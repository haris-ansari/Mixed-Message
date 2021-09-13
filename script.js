const time = new Date();
const greetMessage = name => {
    const timeHour = time.getHours();
    if(timeHour < 12){
        return `Hello ${name}, may your morning is going well. Get inspired by this quote.-`
    }else if(timeHour < 16){
        return`Hello ${name}, may your afternoon is going well. Get inspired by this quote.-`
    }else if(timeHour < 20){
        return `Hello ${name}, may your evening is going  well. Get inspired by this quote.-`
    }else{
        return ` Hello ${name}, may your night is going well. Get inspired by this quote.-`
    };
}

console.log(greetMessage());