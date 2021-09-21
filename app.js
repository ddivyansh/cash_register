var bill = document.querySelector("#bill");
var cash = document.querySelector("#cash");
var check = document.querySelector("#check");
// to input the respective amounts
var notes = [2000, 500, 100, 50, 20, 10, 5, 2,1];
var billAmt, cashAmt, returnAmt;

function calculateChangeAmt(returnAmt) {
    //console.log(notes[0]);
    //logic to the return amount in minimum domination of notes
    for (var i = 0; i < notes.length; i++) {
        currAmt = parseInt(returnAmt);
        if (currAmt !== 0) {
            var d = parseInt(returnAmt / notes[i]);
            currAmt = parseInt(returnAmt % notes[i]);
            console.log("For denomination " + notes[i] + " is: ", d);
            returnAmt = parseInt(returnAmt - (notes[i] * d));
            continue;
        } else
            break;
    }

}

function clickHandlerOne() {
    billAmt = parseInt(bill.value);
    cashAmt = parseInt(cash.value);
    returnAmt = parseInt(cashAmt - billAmt);
    console.log("bill :", billAmt);
    console.log("cash: ", cashAmt);
    console.log("return amt: ", returnAmt);
    if (cashAmt < billAmt)
        console.log("You've inserted insufficent amt !");
    else {
        console.log("the return is running: ");
        calculateChangeAmt(returnAmt);

    }
}
check.addEventListener("click", clickHandlerOne);