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

const message = {
    sad : ['All-day is not the same, you need to wait and be patient for the good things to happen.', 'Crying alone does not show that you are weak but it shows that you are strong.', 'Wipeout your own tears, because if people come to you, they will come for a deal.', 'When you feel pain, just remember it’s the signal that your sins are getting less.', 'Never let to know the reason of your sadness to others, they won’t get it.'],
    lonely : ['The soul that sees beauty may sometimes walk alone. --- Johann Wolfgang Von Goethe',  'A season of loneliness and isolation is when the caterpillar gets its wings. Remember that next time you feel alone. --- Mandy Hale', 'The greatest thing in the world is to know how to belong to oneself. --- Michel de Montaigne', 'People thing being alone makes you lonely, but I don’t think that’s true. Being surrounded by the wrong people is the loneliest thing in the world. --- Kim Culbertson', 'Sometimes you need to be alone. Not to be lonely, but to enjoy your free time being yourself. --- Anonymous'],
    angry : ['The man who gets angry at the right things and with the right people, and in the right way and at the right time and for the right length of time, is commended. --- Aristotle', 'Whenever you’re in conflict with someone, there is one factor that can make the difference between damaging your relationship and deepening it. That factor is attitude. --- James', 'Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured. --- Twain', 'Anger dwells only in the bosom of fools. --- Einstein', 'Bitterness is like cancer. It eats upon the host. But anger is like fire. It burns it all clean. --- Angelou'],
};

const inspirationalMessage = mood => {
    const randNum = Math.floor(Math.random()*message[mood].length);
    return message[mood][randNum]
}



const getInspired = (name, mood) => {
    console.log(greetMessage(name));
    console.log(inspirationalMessage(mood));
};

getInspired('Haris Ansari', 'sad');