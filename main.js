function checkNumber(el) {
    const num = document.getElementById('num').value;
    if (num > 7) { 
        alert("Привет");
    }
    return false;
}
function checkName(el) {
    const imya = "Вячеслав";
    const name = document.getElementById('name').value;
    if (name === imya) { 
        alert("Привет, " + imya);        
    } else {
        alert("Нет такого имени");
    }
    return false;
}