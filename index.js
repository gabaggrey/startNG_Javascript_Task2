var data = [
    {principal: 2500,
    time: 1.8},
    {principal: 1000,
    time: 5},
    {principal: 3000,
    time: 1},
    {principal: 2000,
    time: 3}
];

function interestCalculator(args)
{
    var rate = 0;
    var interest;
    var interestData= [];

    for(var i = 0; i < args.length; i++)
    {
        if(args[i].principal >= 2500 && args[i].time == 2)
        {
            //the rate value for this condition
            rate = 3;

            //calculating the interest rate
            interest = (args[i].principal * rate * args[i].time)/ 100;

            //putting the values in an array of objects with their keys and values
            interestData.push({ "principal": args[i].principal, "rate": rate, "time": args[i].time, "interest": interest});
        }
        else if(args[i].principal >= 2500 && args[i].time >= 3)
        {
            //the rate value for this condition
            rate = 4;

            //calculating the interest rate
            interest = (args[i].principal * rate * args[i].time) / 100;

            //putting the values in an array of objects with their keys and values
            interestData.push({ "principal": args[i].principal, "rate": rate, "time": args[i].time, "interest": interest });
        }
        else if(args[i].principal < 2500 || args[i].time <= 1)
        {
            //the rate value for this condition
            rate = 2;

            //calculating the interest rate
            interest = (args[i].principal * rate * args[i].time) / 100;

            //putting the values in an array of objects with their keys and values
            interestData.push({ "principal": args[i].principal, "rate": rate, "time": args[i].time, "interest": interest });
        }
        else
        {
            //the rate value for this condition
            rate = 1;

            //calculating the interest rate
            interest = (args[i].principal * rate * args[i].time) / 100;

            //putting the values in an array of objects with their keys and values
            interestData.push({ "principal": args[i].principal, "rate": rate, "time": args[i].time, "interest": interest });
        }
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);