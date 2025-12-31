let textField = document.querySelector('.text');
let characterCount = document.querySelector('.charCount');
let maxLength = Number(textField.getAttribute('maxlength'));

textField.addEventListener('input', ()=>{
    let currentLength = textField.value.length
    characterCount.textContent = `${currentLength} / 250`;

    if (currentLength >= maxLength){
    textField.style.border = "2px solid red";
    textField.style.color = "red";
} else {
    textField.style.border = "";
    textField.style.color = "";
}
})
