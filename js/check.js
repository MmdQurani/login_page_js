let usersData = [
    {id : 1, Name : "William" , Password : "12wili12"},
    {id : 2, Name : "Michael" , Password : "12wili12"},
    {id : 3, Name : "Elijah" , Password : "12wili12"},
    {id : 4, Name : "Alexander" , Password : "12wili12"},
    {id : 5, Name : "Logan" , Password : "12wili12"}
];

console.log(usersData);

let $ = document;
let userName = $.getElementById ("user_name");
let userPassword = $.getElementById ("user_password");
let btnSave = $.getElementById ("btn_save");
let mudalBox = $.getElementById ("mudal_box");

let togglePassword = $.querySelector (".toggle-password");

let saveUserName ;
let saveUserPassword ;
let checkData ;

btnSave.addEventListener ("click" , (event) => {
    event.preventDefault();
    saveUserName = userName.value.toLowerCase();
    saveUserPassword = userPassword.value.toLowerCase();

    checkData = usersData.some ((user) => {
        if (user.Name.toLowerCase() === saveUserName && user.Password.toLowerCase() === saveUserPassword) {
            mudalBox.classList.remove ("animationMUDAL");
            mudalBox.classList.add ("animationMUDALend");
            mudalBox.style.display = "none";
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
            mudalBox.classList.remove ("animationMUDALend");
            mudalBox.style.display = "flex";
            mudalBox.classList.add ("animationMUDAL");
        }
    });
});

togglePassword.addEventListener ("click" , () => {
    if (userPassword.type === "text") {
        togglePassword.classList.remove ("active");
        userPassword.type = "password";
    }else {
        togglePassword.classList.add ("active");
        userPassword.type = "text";
    }
});