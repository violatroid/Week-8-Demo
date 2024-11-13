//What is a javascript testing framework? 
//answer: A pile of JS (Java Script) for testing JS
//
//
//

function testMe(a, b){
    return a + b;
}

//console/log(testMe(6,7)) //expect 13
testData = [
    {inputs:[6,7], output:13},
    {inputs:[6,7], output:99}, //bad test won't get pass
    {inputs:[12,13], output:25}
];

function runner(fn, ioList){
    ioList.forEach(test => {
        result = fn(...test.inputs); //... spread , 
        success = result === test.output; //match expected
        if(success){
            consolfe.log("PASS", i)
        }else{
            console.log("FAIL", i)
        }
    });
}

runner(testMe, testData);