const password = "12345"
let login = prompt("Введіть логін")
if (login=="Admin"){
    (prompt("Введіть пароль") == password)? alert("Ласкаво просимо") : alert("Невірний пароль")
}
else{
    alert("Доступ заборонено")
}
