// 735. 行星碰撞
// https://leetcode.cn/problems/asteroid-collision/

function asteroidCollision(asteroids) {
    const stack = [], peek = () => stack[stack.length - 1], isEmpty = () => stack.length === 0
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i]
        if (asteroid >= 0 || isEmpty() || peek() < 0) {
            stack.push(asteroid)
        } else {
            while (peek() > 0 && asteroid < 0) {
                if (peek() === -asteroid) { // 相等就不push
                    stack.pop()
                    asteroid = 0
                    break;
                }
                asteroid = peek() > -asteroid ? peek() : asteroid
                stack.pop()
            }
            if (asteroid !== 0) {
                stack.push(asteroid)
            }
        }
    }
    return stack;
}

console.log(asteroidCollision([10, 5, -5, -12, 10]))