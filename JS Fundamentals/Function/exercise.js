//1
function solve(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i+1];
        let z = input[i+2];
        
        if(insideVolume(x, y, z)) {
            console.log('inside');
        }else {
            console.log('outside');
        }
    }
    
    function insideVolume(x, y, z) {
        let x1 = 10; let x2 = 50;
        let y1 = 20; let y2 = 80;
        let z1 = 15; let z2 = 50;
    
        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                if(z >= z1 && z <= z2){
                    return true;
                }
            }
        }
        return false;
    }
}//solve([8, 20, 22, 13.1, 50, 31.5]);

function roadRadar(input) {
    let speed = input[0];    
    let area = input[1];
    let limit = getLimit(area);
    let infraction = getInfraction(speed, limit);
    if (infraction) {
        console.log(infraction);
    }

    //zone
    function getLimit(area){
        switch (area) {
            case 'motorway': 
                return 130;
            case 'interstate': 
                return 90;      
            case 'city': 
                return 50;
            case 'residential': 
                return 20;
        }
    }
    //infraction
    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if(overSpeed <= 0) {
            return false;
        }else {
            if (overSpeed <= 20) {
                return 'speeding';
            }
            if (overSpeed <= 40) {
                return 'excessive speeding';
            }
            if (overSpeed > 40) {
                return 'reckless driving';
            }
        }
    }
}//roadRadar([131, 'motorway']);

//3
function templateFormat(input) {
    let str = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n\t<question>\n';
for (let i = 0; i < input.length; i += 2) {
    let question = input[i];
    let answer = input [i+1];
    str += `\t\t${question}\n\t</question>\n\t<answer>\n\t\t${answer}\n\t</answer>\n`
}

    str += '</quiz>';
    return str;
}console.log(templateFormat(['question', 'answer','Dry ice is a frozen form of which gas?', 'Carbon Dioxide']));