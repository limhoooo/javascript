
const CARROT_SIZE = 80;

export class Field {
    constructor() {
        this.field = document.querySelector('.game_field');
        this.fieldRect = this.field.getBoundingClientRect();
    }
    addInit() {
        this._addItem('carrot', 3, 'img/carrot.png');
        this._addItem('bug', 3, 'img/bug.png');
    }
    init() {
        this.field.innerHTML = '';
    }
    _addItem(name, count, path) {
        const x1 = 0;
        const x2 = this.fieldRect.width - CARROT_SIZE;
        const y1 = 0;
        const y2 = this.fieldRect.height - CARROT_SIZE;
        for (let i = 0; i < count; i++) {
            const item = document.createElement('img');
            item.setAttribute('class', name);
            item.setAttribute('src', path);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            this.field.appendChild(item);
        }
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}