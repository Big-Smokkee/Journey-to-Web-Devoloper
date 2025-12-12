function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let passCount = 0;
    let failCount = 0;
    let avg = 0;
    const report = {
        finalScore: avg,
        pass: passCount,
        fail: failCount
    };
    let sum = 0; 
    for (const mark of marks)
    {
        if (mark >= 0 && mark < 40)
            failCount++;
        else if (mark >= 40 && mark <= 100)
            passCount++;
        sum += mark;
    }
    if (marks.length > 0) {
        avg = Math.round(sum / marks.length);
        report.finalScore = avg;
        report.pass = passCount;
        report.fail = failCount;
    }
    
    return report;
}
// const arr = 100;
// console.log(resultReport(arr));