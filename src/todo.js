
// const showMessage = () => {
//     const textbox = document.getElementById("input-message");
//     const inputValue = textbox.value;
//     const outputText = document.getElementById("output-message")
//     if (inputValue === "") {
//         outputText.className = "flex justify-center p-4 mx-auto mt-4 bg-red-300"
//         outputText.innerText = 'タスクを記入してください'
//     }
//     else {
//         outputText.className = "flex justify-center p-4 mx-auto mt-4 bg-gray-50 rounded-tl-xl rounded-br-xl"
//         outputText.innerText = inputValue + 'を追加しました'
//     }
// }

async function asyncShowMessage() {
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;
    const outputText = document.getElementById("output-message")
    if (inputValue === "") {
        outputText.className = "flex justify-center p-4 mx-auto mt-4 bg-red-300"
        outputText.innerText = 'タスクを記入してください'
    }
    else {
        outputText.className = "flex justify-center p-4 mx-auto mt-4 bg-gray-50 rounded-tl-xl rounded-br-xl"
        outputText.innerText = inputValue + 'を追加しました'
    }
}
asyncShowMessage()