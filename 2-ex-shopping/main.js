const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');
function onAdd() {
    // 1. 사용자가 입련한 텍스트를 받아온다.
    const text = input.value;
    if (!text) {
        input.focus();
        return;
    }
    // 2. 받아온 텍스트를 이용한 새로운 item을 만든다 (텍스트 + 삭제버튼)
    const item = createItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({ block: 'center' });
    // 5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();

}
let id = 0;
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
    <li class="item_row">
                <div class="item">
                    <span class="item_name">${text}</span>
                    <button class="item_delete">
                        <i class="fas fa-trash-alt" data-id=${id}></i>
                    </button>
                </div>
                <div class="item_divider"></div>
            </li>
    `;
    id++;
    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');

    // const name = document.createElement('span')
    // name.setAttribute('class', 'item_name');
    // name.innerText = text;


    // const deleteBtn = document.createElement('button')
    // deleteBtn.setAttribute('class', 'item_delete');
    // deleteBtn.innerHTML = '<i class ="fas fa-trash-alt"></i>';
    // deleteBtn.addEventListener('click', () => {
    //     items.removeChild(itemRow);
    // })

    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class', 'item_divider')

    // item.appendChild(name);
    // item.appendChild(deleteBtn);
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);

    return itemRow;

}

addBtn.addEventListener('click', () => {
    onAdd();
})
input.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        onAdd();
    }
})
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
})