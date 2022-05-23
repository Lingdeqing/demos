// https://www.nowcoder.com/practice/119bcca3befb405fbe58abe9c532eb29


function move(s) {
    let i = 0, x = 0, y = 0;
    while (i < s.length) {
        switch (s[i]) {
            case 'A':
            case 'S':
            case 'D':
            case 'W':
                const step = {
                    'A': (dx) => x -= dx,
                    'S': (dy) => y -= dy,
                    'W': (dy) => y += dy,
                    'D': (dx) => x += dx,
                }[s[i]]
                i++;
                let delta = 0
                while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                    delta = delta * 10 + (+s[i]);
                    i++;
                }
                if (i >= s.length || s[i] === ';') {
                    // 合法
                    step(delta)
                    i++;
                }
                break;
            default:
                // 跳过不合法的输入
                while (i < s.length && s[i] !== ';') i++;
                i++;

        }
    }
    return [x, y]
}

console.log(move('A10;S20;W10;D30;X;A1A;B10A11;;A10;'))