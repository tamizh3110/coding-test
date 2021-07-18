function shuffle(data){

    //Fisher Yates Shuffle
    
    for(let i = data.length-1;i>=0;i--){
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [data[i], data[j]] = [data[j],data[i]];
    }
    return data    
}

module.exports = shuffle