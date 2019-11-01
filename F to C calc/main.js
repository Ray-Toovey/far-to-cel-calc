//event listner
document.getElementById('calc-btn').addEventListener("click", convert)

//event function
function convert(){
    let TempF = Number(document.getElementById('TempF').value);
    let TempC = (TempF - 32) * 5/9;

    //round to 2 decimal places
    TempC = TempC * 100;
    TempC = Math.round(TempC);
    TempC = TempC / 100;

    //output
    console.log('TempC:' + TempC)
    document.getElementById('total').innerHTML = TempC;
}
