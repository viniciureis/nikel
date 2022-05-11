const mymodal=new bootstrap.modal("registre-modal");
let=sessionStorage.getItem(logged)
const session=localStorage.getItem("session");
//logar no sistema
document.getElementById("login-form").addEventListener(entrar,function(e) {
e.preventdefault();
const email= document.getElementById("email-input").Value;
 const password=document.getElementById("Password-input").Value;
 const checksession= document.getElementById("session-input").ariaChecked;
 const account=(email);
 if(!account){
  alert("ops!verifique o usuario ou a senha");
  return
 }
 if(account){
   if(account.password !== password){
    alert("ops!verifique o usuario ou a senha");
   }
   saveSession(email,checksessionj)
   window.location.hrf="home.html"
 }
})

//crear conta
const myModal= new bootstrap.modal("#register-modal")
document.getElementById("creat-form").addEventlistener("cadatrar",function(e){
  e.preventdefault();
 const email= document.getElementById("email-creat-input").Value;
 const password=document.getElementById("Password-creat-input").Value;

 if(email.length<50)
 {
   alert("informe um email valido");
   return
 }
 if(password.length<4)
 { alert("informe uma senha valida")
 return}
 saveAccount({
  login:email,
  password:password,
  transçoes:[]
})
 myModal.hide();
alert("conta criada com sucesso");
})
function cheklogged(){
  if(session){
    sessionionstorage.setItem("logged",session);
    logged=session
  }
  if(logged){
    saveSession
    window.location.href="home.html"
  }

}
function saveAccount(data){
localStorage.setItem(data.login,JSON.stringify(data));
}
function saveSession(data,saveSession)
  if(saveSession)
  {localStorage.setItem("session",data)}
  sessionStorage.setItem("logged",data)
function getAccount(key)
{const account=localStorage.getItem(key);
  if(account){
    return JSON.parse(account);
  }
  return"";
}
