let usersData = [
    {id : 1, Name : "William" , Password : "12wili12"},
    {id : 2, Name : "Michael" , Password : "12wili12"},
    {id : 3, Name : "Elijah" , Password : "12wili12"},
    {id : 4, Name : "Alexander" , Password : "12wili12"},
    {id : 5, Name : "Logan" , Password : "12wili12"}
];

console.log(usersData);

let userName = document.getElementById ("user_name");
let userPassword = document.getElementById ("user_password");
let btnSave = document.getElementById ("btn_save");

let saveUserName ;
let saveUserPassword ;
let checkData ;

btnSave.addEventListener ("click" , () => {
    saveUserName = userName.value.toLowerCase();
    saveUserPassword = userPassword.value.toLowerCase();

    checkData = usersData.some ((user) => {
        if (user.Name.toLowerCase() === saveUserName && user.Password.toLowerCase() === saveUserPassword) {
            userName.style.backgroundColor = "rgb(234, 255, 224)";
            userName.style.color = "rgb(95, 161, 66)";
            userPassword.style.backgroundColor = "rgb(234, 255, 224)";
            userPassword.style.color = "rgb(95, 161, 66)";
            return true;
        }else {
            userName.style.backgroundColor = "rgb(255, 224, 233)";
            userName.style.color = "rgb(161, 66, 96)";
            userPassword.style.backgroundColor = "rgb(255, 224, 233)";
            userPassword.style.color = "rgb(161, 66, 96)";
        }
    });
});
