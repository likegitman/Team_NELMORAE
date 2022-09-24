const login_Btn=document.querySelector(".log_submit");
const id_inp=document.querySelector(".id_input");
const pwd_inp=document.querySelector(".pwd_input");

function confirm_id(){
    if(id_inp.value===""){
        alert("아이디를 입력하세요.");
    } else if(pwd_inp.value==="") {
        alert("비밀번호를 입력하세요.");
    }
}

login_Btn.addEventListener("click", confirm_id);