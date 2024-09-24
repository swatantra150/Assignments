const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter the number of chairs: '));
let meeting = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 5]]
console.log(meeting.length);
let chairs = []

for (let i = 0; i < meeting.length; i++) {
    let avaliable = 0;
    if (meeting[i][0].length <meeting[i][1]) {
        avaliable = meeting[i][1] - meeting[i][0].length
        if (number > 0) {
            if (number >= avaliable) {
                number -= avaliable
                chairs.push(avaliable)
            }else{
                chairs.push(number)
                number=0
            }
        } else {
            break;
        }
    } else {
        chairs.push(0)
    }
}
console.log(chairs);
