"use strict";


function ShowMessage() {
    // 変数宣言
    const textbox = document.getElementById('textbox');
    const textValue = textbox.value;
    const showInput = document.getElementById('showInput');
    const showList = document.getElementById('showList');
    const createList = document.createElement('li');
    const List = document.getElementsByTagName('li')
    const length = document.getElementById('length');
    const showLength = showList.childElementCount + 1
    const footer = document.getElementsByTagName('footer')
    // 条件分岐
    if (textValue == "") {
        showInput.className = 'flex p-4 mx-auto mt-2 bg-red-200 rounded-lg'
        showInput.innerText = 'タスクを入力してください'
    }
    else {
        showInput.className = 'flex justify-center px-4 mx-8 mt-2 text-left bg-gray-200 rounded-lg '
        showInput.innerText = `${textValue}\nが追加されました`
        showList.appendChild(createList).innerText = textValue
        List.className = 'w-max'
        length.className = 'flex justify-center py-2 mx-auto text-center bg-blue-200'
        length.innerText = `${showLength} 個タスクがあります`;
        function clear() {
            const textValue = document.getElementById('textbox')
            textValue.value = '';
        }
        clear()
    }
    return false;
}

ShowMessage();
