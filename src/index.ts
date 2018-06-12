import './styles.scss';

function printHello() {
    const message = <HTMLElement>document.createElement('H1');
    const messageText:string = 'Hello Webpack!';
    message.innerHTML = messageText;    
    document.body.appendChild(message);
}
printHello();