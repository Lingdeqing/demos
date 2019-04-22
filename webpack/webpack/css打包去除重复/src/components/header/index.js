import "./index.less";

export default function header(){
    const div = document.createElement('div');
    div.innerHTML = `<h2>header</h2>
    <p>
    css文件重复import的话,css-loader会保证最终结果中只有个一份依赖
    </p>
    <p>
    less文件重复import的话，less-loader会重复输出，因为less的import可以在嵌套的选择中，或者某个样式后面，或者某个变量后面
    </p>
    `;
    div.className = 'header';
    document.body.appendChild(div);
}