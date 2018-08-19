//let Student = require("./student");
function addScore(addstudent){
    let studentInfo={};
    let subject=[];
    studentInfo.score=[];
    studentInfo.name=addstudent[0];
    studentInfo.id=addstudent[1];
    studentInfo.nation=addstudent[2];
    studentInfo.klass=addstudent[3];
    for(let i=4;i<addstudent.length;i++)
    {
        subject.push(addstudent[i]);
        studentInfo.score.push(addstudent[i]);
    }
    //let scores = this.subjects.map(e => parseInt(e.score));
    studentInfo.sum=subject.reduce((total, current)=>parseInt(total)+parseInt(current));
    //console.log(studentInfo.sum);
    studentInfo.average=studentInfo.sum/subject.length;
    studentInfo.score.push(studentInfo.average);
    studentInfo.score.push(studentInfo.sum);
    return studentInfo;
}
function sql(scoresql){
    let sqlInfo={};
    sqlInfo.sum=0;
    for(let s of scoresql)
    {
        sqlInfo.sum+=s.average;
    }
    sqlInfo.average=sqlInfo.sum/scoresql.length;
    sqlInfo.mid=scoresql[parseInt(scoresql.length/2)].average;
    return sqlInfo;
}
module.exports = {addScore,sql};