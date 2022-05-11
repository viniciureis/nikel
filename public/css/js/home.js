const mymodal=new bootstrap.modal("home-modal");
let=sessionStorage.getItem(logged)
const session=localStorage.getItem("session")
let data={transçoes:[]}
document.getElementById("button-logout").addEventListener("click",logout)
document.getElementById("transçoes-button").addEventListener("click",function(){
  window.location.href=transçoes.html
})
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
  getcashIn();
  getcashOut();
  gettotal();
  alert("lancamento adicionado com sucesso.");
});


cheklogged();
function cheklogged(){
  if(session){
    sessionionstorage.setItem("logged",session);
    logged=session
    
  }
  if(logged){
    saveSession
    window.location.href="index.html"
    return
  }
  const dataUser=localStorage.getItem(logged)
  if(dataUser){
    data=JSON.parse(dataUser);

  }
 getcashIn();
 getcashOut();
}
function logout(){
  sessionStorage.removeItem("logged")
  localStorage.removeItem("session")
  window.location.href="index.html"
}
function getcashIn(){
const transçoes=data.transçoes
const cashIn=transçoes.filter((item)=>item.type="1");
if(cashIn.length) {
  let cashInhtml=``;
  let limit=0
} 
if(cashIn.length>5){
  limit=5;
}else{
  limit=cashIn.length
}
for (let index = 0; index < limit; index++) {
 cashInhtml+=` <div class="row mb-4">
 <div class="col-12">
   <h3 class="fs-2">R$ ${cashIn[index].value.tofixed(2)}</h3>
   <div class="container p-0">
     <div class="row">
       <div class="col-12 col-md-8">
        <p>${cashIn[index].description}</p> 
       </div>
       <div class="col-12 col-md-3 d-flex justify-content-end">
      ${cashIn[index].date}
       </div>
     </div>
   </div>
 </div>
</div>`

}

document.getElementById("cash-in-list").innerHTML=cashInhtml;
}
function getcashOut(){
  const transçoes=data.transçoes
  const cashIn=transçoes.filter((item)=>item.type="2");
  if(cashIn.length) {
    let cashInhtml=``;
    let limit=0
  } 
  if(cashIn.length>5){
    limit=5;
  }else{
    limit=cashIn.length
  }
  for (let index = 0; index < limit; index++) {
   cashInhtml+=` <div class="row mb-4">
   <div class="col-12">
     <h3 class="fs-2">R$ ${cashIn[index].value.tofixed(2)}</h3>
     <div class="container p-0">
       <div class="row">
         <div class="col-12 col-md-8">
          <p>${cashIn[index].description}</p> 
         </div>
         <div class="col-12 col-md-3 d-flex justify-content-end">
        ${cashIn[index].date}
         </div>
       </div>
     </div>
   </div>
  </div>`
  
  }
  
  document.getElementById("cash-out-list").innerHTML=cashInhtml;
}
function gettotal(){
  const transçoes=data.transçoes;
  let total=0
  transçoes.forEach((intem)=>{
    if(item.type==='1'){
      total+= item.value;
    } else{
      total-= item.value;
    }
  });
  document.getElementById("total").innerHTML=`R$ ${total.toFixed(2)}`;
}
function savedata(data){
  localStorage.setItem(data.login,JSON.stringify(data))
}