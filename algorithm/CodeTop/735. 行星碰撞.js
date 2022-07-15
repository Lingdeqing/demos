// 735. 行星碰撞
// https://leetcode.cn/problems/asteroid-collision/

// 二刷
function asteroidCollision(asteroids) {
    let stack = [],
        peek = () => stack[stack.length - 1],
        pop = () => stack.pop(),
        push = (item) => stack.push(item),
        isEmpty = () => stack.length === 0,
        asteroid = 0;
    for (let i = 0; i < asteroids.length; i++) {
        asteroid = asteroids[i]
        if (asteroid >= 0 || isEmpty() || peek() < 0) {
            push(asteroid)
        } else {
            while (!isEmpty() && peek() > 0 && asteroid < 0) {
                if (peek() === -asteroid) {
                    pop()
                    asteroid = 0;
                    break;
                } else {
                    asteroid = peek() > -asteroid ? peek() : asteroid
                    pop()
                }
            }
            if (asteroid !== 0) {
                push(asteroid)
            }
        }
    }
    return stack
}

console.log(asteroidCollision([10, 5, -5, -12, 10]))