let data = [
    {principal: 2500, time:1.8},
    {principal: 1000, time:5},
    {principal: 3000, time:1},
    {principal: 2000, time:3}
];

let interestCalculator = (array) => {

let interestData = [];

for (let i = 0; i <array.length; i++) {

    interestData.principal = array[i].principal;

    interestData.time = array[i].time;

if ((array [i].principal >=2500) && (array[i].time > 1) && 
    (array[i].time < 3)) {

interestData.rate = 3;

interestData.interest = (interestData.principal * interestData.time * interestData.rate) / 100;

}else if ((array[i].principal >= 2500) && (array[i].time >=3)) {

    interestData.rate = 4;

    interestData.interest = (interestData.principal * interestData.time * interestData.rate) / 100;

}else if ((array[i].principal < 2500) || (array[i].time <= 1)) {

    interestData.rate = 2;

    interestData.interest = (interestData.principal * interestData.time * interestData.rate) / 100;

}else {
    interestData.rate = 1;

    interestData.interest = (interestData.principal * interestData.time * interestData.rate) / 100;
}


interestData.push({principal: interestData.principal,
                    time: interestData.time,
                    rate: interestData.rate,
                    interest: interestData.interest});
} 

console.log(interestData);

return interestData;
}

interestCalculator(data);