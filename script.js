
// Question 1
function CalculateSum(){
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };

    let sum = 0; 
    for (let key in salaries) {
        sum += salaries[key];
    }
    console.log(CalculateSum())
};

// Question 2
function multiplyNumeric(menu){
    for (let key in menu){
        if(typeof(menu[key])=='number'){
            menu[key]*=2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(multiplyNumeric(menu))

//Question 3
function CheckEmailId(str) {
    let atFound = false;
    let dotFound = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '@') {
            if (atFound) {
                return false;
            }
            atFound = true;
        } else if (str[i] === '.' && atFound) {
            if (i > (str.indexOf('@') + 1)) {
                dotFound = true;
                break;
            }
        }
    }

    return atFound && dotFound;
}
console.log(CheckEmailId("xiz6754@gmailcom"))

//Qestion 4
function truncate(str, length) {
    if (str.length > length) {
        return str.slice(0, length) + "...";
    } 
    else {
        return str;
    }
}

//Qestion 5
let styles = ["James", "Brennie"];

styles.push("Robert");
console.log(styles);

let mid = Math.floor(styles.length / 2);
styles[mid] = "Calvin";
console.log(styles);

let firstValue = styles.shift();
console.log(firstValue); 

styles.unshift("Rose", "Regal");
console.log(styles);