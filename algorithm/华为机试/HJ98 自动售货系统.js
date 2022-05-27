// https://www.nowcoder.com/practice/cd82dc8a4727404ca5d32fcb487c50bf

// 退币算法：
// 考察知识点：这道题除了测试集E010和E009后面没有回车之外（疯狂吐槽），唯一值得注意的是退币算法。

// 本题涉及到两个算法：一、足够时，尽最大可能退纸张数最少的钱。二、不足时，尽最大可能退最多的钱。

// 一：足够时，尽最大可能退纸张数最少的钱
// 我使用了贪心算法，在当前剩余的储钱箱中找最大且小于剩余未付金钱的纸币。

// 例如：未付钱币：9元，应该先找5元，如果没有5元，则找2元。依次类推。

// 但是按照这种方案找钱，可能出现找不开的情况。

// 例如：
// 现有钱币：

// 1元	2元	5元	10元
// 0张	3张	1张	0张
// 需要退出6元时，应该退2元，而不是5元。所以要在选择每一步后判断是否成功。

// int moneyNumber[4] = {1, 2, 5, 10};
// //current储钱箱里钱的数量，大小为4，分别表示 1 2 5 10元。
// //例如{1，1，1，1} 1 2 5 10元 都有一张
// bool enough(vector<int>& current, int money){
//     if(money == 0)return true;//需要找的钱为0时，成功。
//     for(int i = current.size()-1 ; i >= 0 ; --i){
//         if(current[i] > 0 && money >= moneyNumber[i]){
//             current[i]--;//先把最大的钱给你。
//             if(enough(current, money-moneyNumber[i]))
//                 return true;//如果下一步成功了，则这一步也成功。
//             else
//                 current[i]++;//当前选择不成功，则需要把钱拿回来。
//         }
//     }
//     return false;//我这里的钱都少于需要找的钱
// }
// 二、不足时，尽最大可能退最多的钱
// 直接从储钱箱中拿出最大的，且小于剩余钱币的。

// int moneyNumber[4] = {1, 2, 5, 10};
// //current储钱箱里钱的数量，大小为4，分别表示 1 2 5 10元。
// //例如{1，1，1，1} 1 2 5 10元 都有一张
// void bestCallback(vector<int>& current, int money){
//     for(int i = current.size()-1 ; i >= 0 ; --i){
//         while(current[i] > 0 && money >= moneyNumber[i]){
//             current[i]--;
//             money -= moneyNumber[i];
//         }
//     }
// }

// 存钱罐
class Bank {
    constructor(initStr = '0-0-0-0') {
        const moneyMap = [1, 2, 5, 10]
        this.bank = toNums(initStr, '-').map((num, i) => {
            return {
                val: moneyMap[i],
                num
            }
        })
    }
    // 查询存钱罐信息
    query() {
        this.bank.forEach(item => {
            print(`${item.val} yuan coin number=${item.num}`)
        })
    }
    // 数钱
    count(vals) {
        const map = {
            1: 0,
            2: 1,
            5: 2,
            10: 3
        }
        let sum = 0
        vals.forEach(v => {
            const coin = this.bank[map[v]]
            sum += coin.num * coin.val
        })
        return sum;
    }
    // 找零
    // withdraw(balance) {
    //     if (balance === 0) {
    //         print('E009:Work failure')
    //         return 0
    //     }
    //     const info = [0, 0, 0, 0]
    //     for (let i = this.bank.length - 1; i >= 0; i--) {
    //         const coin = this.bank[i]
    //         if (balance >= coin.val) {
    //             const n = Math.floor(balance / coin.val)
    //             balance -= n * coin.val
    //             this.bank[i].num -= n
    //             info[i] = n
    //         }
    //     }
    //     info.forEach((n, i) => {
    //         print(`${this.bank[i].val} yuan coin number=${n}`)
    //     })
    //     return balance
    // }
    // 上面注释未考虑全面 比如 {1:0, 2:3, 5:1, 10:0}此时要找6就会返回一张5，其实应该返回3张2
    withdraw(balance) {
        if (balance === 0) {
            print('E009:Work failure')
            return 0
        }

        // 是否能够正好找完整
        const info = [0, 0, 0, 0]
        function enough(coins, money) {
            if (money === 0) return true
            for (let i = coins.length - 1; i >= 0; i--) { // 从最大的钱开始找
                if (coins[i].num > 0 && coins[i].val <= money) {
                    coins[i].num--; //先给一张给你
                    info[i]++; // 记录找钱数量
                    if (enough(coins, money - coins[i].val)) { // 如果剩下的钱可以找开，则找钱就行了
                        return true
                    }
                    coins[i].num++; //否则再把钱拿回来
                    info[i]--; // 取消记录找钱数量
                }
            }
            return false
        }

        let isEnough = enough(this.bank, balance)
        if (!isEnough) {
            // 二、不足时，尽最大可能退最多的钱
            for (let i = this.bank.length - 1; i >= 0; i--) {
                const coin = this.bank[i]
                if (balance >= coin.val) {
                    const n = Math.floor(balance / coin.val)
                    balance -= n * coin.val
                    this.bank[i].num -= n
                    info[i] = n
                }
            }
        }

        info.forEach((n, i) => {
            print(`${this.bank[i].val} yuan coin number=${n}`)
        })
        return isEnough ? 0 : balance
    }
    // 放钱
    add(money) {
        const map = {
            1: 0,
            2: 1,
            5: 2,
            10: 3
        }
        this.bank[map[money]].num++
    }
}
// 商品管理
class Goods {
    constructor(initStr = '0-0-0-0-0-0') {
        const priceMap = [2, 3, 4, 5, 8, 6]
        this.goods = toNums(initStr, '-').map((num, i) => {
            return {
                num,
                name: 'A' + (i + 1),
                price: priceMap[i]
            }
        })
    }
    query() {
        const goodsInfo = [...this.goods]
        goodsInfo.sort((a, b) => {
            if (a.num === b.num) {
                return a.name > b.name ? 1 : -1
            }
            return a.num - b.num
        })
        goodsInfo.forEach(item => {
            print(`${item.name} ${item.price} ${item.num}`)
        })
    }
    isEmpty() {
        return this.goods.every(item => item.num === 0)
    }
    buy(which, balance) {
        if (which.length !== 2 || which[0] !== 'A' || (which[1] < '1' && which[1] > '6')) {
            print('E006:Goods does not exist')
            return 0
        }
        const cur = this.goods[which[1] - 1]
        if (cur.num === 0) {
            print('E007:The goods sold out')
            return 0
        }
        if (balance < cur.price) {
            print('E008:Lack of balance')
            return 0
        }
        print(`S003:Buy success,balance=${balance - cur.price}`)
        return cur.price
    }
}
function mock(str) {
    let goods = new Goods()// 商品管理
    let bank = new Bank() // 存钱罐管理
    let balance = 0 // 投币额
    let cmds = str.split(';')

    for (let cmd of cmds) {
        switch (cmd[0]) {
            case 'r':
                // 初始化
                init(cmd)
                break;
            case 'c':
                // 退币
                balance = bank.withdraw(balance)
                break;
            case 'q':
                // 信息查询
                query(cmd)
                break;
            case 'p':
                // 投币
                pay(cmd)
                break;
            case 'b':
                // 购买商品
                buy(cmd)
                break;
        }
    }

    function init(cmd) {
        const [, goodsStr, bankStr] = cmd.split(' ')
        goods = new Goods(goodsStr)
        bank = new Bank(bankStr)
        print('S001:Initialization is successful')
    }

    function query(cmd) {
        const [, type] = cmd.split(' ')
        if (type === '0') {
            // 商品信息查询
            goods.query()
        } else if (type === '1') {
            // 查询存钱盒信息
            bank.query()
        } else {
            print('E010:Parameter error')
        }
    }

    function pay(cmd) {
        const [, money] = toNums(cmd)
        if (money !== 1 && money !== 2 && money !== 5 && money !== 10) {
            return print('E002:Denomination error');

        }
        if (money !== 1 && money !== 2) {
            if (money > bank.count([1, 2]))
                return print('E003:Change is not enough, pay fail')
        }
        if (goods.isEmpty()) {
            return print('E005:All the goods sold out')
        }
        balance += money;
        bank.add(money)
        return print(`S002:Pay success,balance=${balance}`)
    }

    function buy(cmd) {
        const [, which] = cmd.split(' ')
        balance -= goods.buy(which, balance)
    }

}

function toNums(str, d = ' ') {
    return str.split(d).map(item => +item)
}
function print(info) {
    console.log(info)
}

console.log(mock('r 22-18-21-21-7-20 3-23-10-6;c;q0;p 1;b A6;c;b A5;b A1;c;q1;p 5;'))