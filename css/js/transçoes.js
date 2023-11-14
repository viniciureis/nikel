const mymodal=new bootstrap.modal("home-modal");
let=sessionStorage.getItem(logged)
const session=localStorage.getItem(session)

let data={transçoes:[]
};

document.getElementById("button-logout").addEventListener("click",logout)



//adicionar lancamento
document.getElementById("transçoes-form").addEventListener("submit",function(e)
{
e.preventDefault("");
  const Value=parseFloat(document.getElementById("value-input").Value);
   const description=document.getElementById("description-input").Value;
  const date=document.getElementById("date-input").value;
  const type=document.querySelector('input[name="type-input"];checked').value;
data.transçoes.unshift({value:value, type:type,description:description, date:date
  });

  savedata(data);
  e.TARGET.reset();
  mymodal.hide();
  gettransçoes()
 
  alert("lancamento adicionado com sucesso.");
});
heklogged();
function cheklogged(){
  if(session){
    sessionionstorage.setItem("logged",session);
    logged=session
    
  }
  if(logged){
    saveSession
    window.location.href="index.html"
    return;
  }
  const dataUser=localStorage.getItem(logged)
  if(dataUser){
    data=JSON.parse(dataUser);
  }
  gettransçoes()
  }
  function logout(){
    sessionStorage.removeItem("logged")
    localStorage.removeItem("session")
    window.location.href="index.html"
  }
  function savedata(data){
    localStorage.setItem(data.login,JSON.stringify(data))
  }
  function gettransçoes(){
    const transçoes=data.transçoes
    let transçoeshtml=``;
    if(transçoes.length){
      transçoes.forEach((item)=>{
        let type="entrada";
        if(item.type==="2"){
          type="saida"
      
        }
        transçoeshtml+=`  
        <tr>
        <th scope="row">${item.date}</th>
        <td>${item.value.tofixed(2)}</td>
        <td>${type}</td>
        <td>${item.description}</td>
      </tr>
      `
      })
    }
    document.getElementById(transçoes-list).innerHTML=transçoes
  }