// Function to make random joke
const makeJoke = () => {
    
    // Random message parts arrays
    const data1 = ['mother','father','brother','sister'];
    const data2 = ['fat','weird', 'annoying', 'boring'];
    const data3 = ['speaks','walks','sits','moves'];

    // Generate 3 random numbers
    var arr = [];
    while(arr.length < 3){
        var r = Math.floor(Math.random() * 3) ;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    // Generate line 1
    console.log(`Your ${data1[arr[0]]} is so ${data2[arr[1]]},`);
    if (data1[arr[0]] === 'mother'|| data1[arr[0]] === 'sister'){
        console.log(`if she ${data3[arr[2]]}, it is not pleasant.`);
    } else{
        console.log(`if he ${data3[arr[2]]}, it is fine. Guys can do whatever they please.`);
    }
}



makeJoke();
