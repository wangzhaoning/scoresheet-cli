function Menu() {
    return '1. 添加学生\n' +
        '2. 生成成绩单\n' +
        '3. 退出\n' +
        '请输入你的选择（1～3）：\n';
}
function OneInTips() {
    return '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n';
}
function TwoInTips() {
    return '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n';
}
function OneErrorTips() {
    return '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n';
}
function TwoErrorTips() {
    return '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n';
}
function OneRightTips(name) {
     console.log(`学生${name}的成绩被添加`);
}
function ScoreList(sorce,sql) {
    console.log('成绩单');
    console.log('姓名|数学|语文|英语|编程|平均分|总分');
    console.log('========================');
    process.stdout.write(sorce.name+'|');
    for (let s of sorce.score) {
        process.stdout.write(s+('|'));
    }
    console.log();
    console.log('========================');
    console.log(`全班总分平均数:${sql.average}`);
    console.log(`全班总分中位数:${sql.mid}`);
}
module.exports = {Menu,OneInTips,TwoInTips,OneErrorTips,TwoErrorTips,OneRightTips,ScoreList}