let name = prompt('Enter your name');
// let Area = prompt('Which 🏡Place Do You Belong To ? ');
let unit = prompt('How many ⚡units you used in last month ?');

let unt = unit * 1;
let tax = 50;
let total = 0;

// =======================
function logo(){
    var audio = document.getElementById('SS');
    audio.onplay();
}


// Meter screen
let unit_sc = document.getElementById('meter_main_screen');
unit_sc.value = unit;

// ======================================================= 
bill_input_1 = document.getElementById('bill_input_1');
bill_input_2 = document.getElementById('bill_input_2');
bill_input_3 = document.getElementById('bill_input_3');
bill_input_4 = document.getElementById('bill_input_4');
bill_input_5 = document.getElementById('bill_input_5');
bill_input_6 = document.getElementById('bill_input_6');
bill_input_6_2 = document.getElementById('bill_input_6_2');
bill_input_7 = document.getElementById('bill_input_7');

bill_input_4.value = unit;
bill_input_1.value = name;
// =======================================================

if (unt >= 1) {
    if (unt <= 100) {
        let tax1 = tax;
        let unitr_1 = 5.79;
        total = (unt * unitr_1) + tax1;
        bill_input_5.value = total.toFixed(2);
        bill_input_6.value = tax1.toFixed(2);
        bill_input_6_2.value = unitr_1.toFixed(2);
        bill_input_7.value =  bill_input_5.value;
    }
    else {

        if (unit >= 101 && unit <= 200) {
            let tax2 = tax * 1.5;
            let unitr_2 = 8.11;
            total = (unt * 8.11) + tax2;
            bill_input_5.value = total.toFixed(2);
            bill_input_6.value = tax2.toFixed(2);
            bill_input_6_2.value = unitr_2.toFixed(2);
            bill_input_7.value =  bill_input_5.value;
        }
        else if (unit >= 201 && unit <= 300) {

            let tax3 = tax * 2;
            let unitr_3 = 8.11;
            total = (unt * unitr_3) + tax3;
            bill_input_5.value = total.toFixed(2);
            bill_input_6.value = tax3.toFixed(2);
            bill_input_6_2.value = unitr_3.toFixed(2);
            bill_input_7.value =  bill_input_5.value;
        }
        else if (unit >= 301 && unit <= 1000) {
            let tax4 = tax * 2.5;
            let unitr_4 = 19.25;
            total = (unt * unitr_4) + tax4;
            bill_input_5.value = total.toFixed(2);
            bill_input_6.value = tax4.toFixed(2);
            bill_input_6_2.value = unitr_4.toFixed(2);
            bill_input_7.value =  bill_input_5.value;
        }
        else {
            document.getElementById('warning').innerText = 'You are Consuming too much⚡ More tax💰 will apply soon⚠';
        }

    }
}






// =======================================================



// bill_input_5.value = unit;
// bill_input_6.value = unit;
// bill_input_7.value = unit;
