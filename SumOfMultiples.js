function sumMul(n, m) {
    if (m <= 0) return "INVALID";
    let sumNum = 0;
    for (i = n; i < m; i = i + n) {

        sumNum = sumNum + i;
        console.log(sumNum)
    }
    return sumNum;
}
