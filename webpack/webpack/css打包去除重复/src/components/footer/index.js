import "./index.less";

export default function footer(){
    const div = document.createElement('div');
    div.innerHTML = 'footer';
    div.className = 'footer';
    document.body.appendChild(div);
}