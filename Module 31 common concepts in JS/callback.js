//callback
function pakhiBhai(callMeBack, patro, patri) {
    if (patri) {
        // console.log(callMeBack);
        callMeBack(patro);
    }
    else {
        console.log("Tomar kopale biya nai");
    }
}

function callSomeOne(person) {
    console.log('callin', person);
}

// pakhiBhai(callSomeOne('montu'), 'kuntu', 'shontu');
pakhiBhai(callSomeOne, 'kuntu', 'shontu');