const display = require("./PrintPage");
const score = require("./Score");
//let student = require("./student");
let rsync = require('readline-sync');

module.exports = () => {
    try {
        var scoreSql=[];
        //var addstudent=[];
        while(1) {
        var answer = rsync.question(display.Menu());
            if (answer === '1') {
                let addStudent = rsync.question(display.OneInTips());
                let addstudent = addStudent.split(',');
                while (addstudent.length < 5) {
                    addStudent = rsync.question(display.OneErrorTips());
                    // console.log(addstudent[0]);
                    addstudent = addStudent.split(',');
                }
                scoreSql.push(score.addScore(addstudent));
                let tips=rsync.question(display.OneRightTips(addstudent[0]));
            }
            if (answer === '2') {
                let PrintStudent = rsync.question(display.TwoInTips());
                for(let s of scoreSql) {
                    if (PrintStudent === s.id) {
                        PrintStudent=rsync.question(display.ScoreList(s,score.sql(scoreSql)));
                    }
                    else continue;
                }
            }
            if(answer==='3')break;
        }
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};