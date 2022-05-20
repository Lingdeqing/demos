// https://www.nowcoder.com/practice/ba241b85371c409ea01ac0aa1a8d957b

function choose7(n) {
    let res = 0
    for(let i = 1; i<=n; i++){
        if(i%7===0){
            res++
        } else {
            let num = i;
            while(num){
                if(num % 10 === 7){
                    res++;
                    break;
                }
                num = ~~(num / 10)
            }
        }
    }
    return res
}