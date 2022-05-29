// https://www.nowcoder.com/practice/74c493f094304ea2bda37d0dc40dc85b

// #include <iostream>
//  /*
//   鸡翁a只(0≤a≤20) 鸡母b只(0≤b≤33) 鸡雏(100-a-b)只 由5a+3b+(100-a-b)/3=100
//   得到关系式b=25-7a/4，也就是说鸡翁数量是4的倍数，最少0只 做多20只
//   设一个变量num(0≤num≤3，≤3是要保证鸡母数不为负)
//   则鸡翁4num只，鸡母为25-7num只，鸡雏为75+3num只
//  */
// int main()
// {
//     for(int num=0;num<=3;num++) // 只需要执行num=0 1 2 3时的4次for循环
//         std::cout<<4*num<<" "<<25-7*num<<" "<<75+3*num<<std::endl;
// }

function maiji() {
    const res = []
    for (let i = 0; i <= 100 / 5; i++) {
        for (let j = 0; j <= 100 / 3; j++) {
            for (let k = 0; k <= 100 / (1 / 3); k++) {
                if (i + j + k === 100 && i * 5 + j * 3 + k * 1 / 3 === 100) {
                    res.push([i, j, k])
                }
            }
        }
    }
    return res
}

console.log(maiji())