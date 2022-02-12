document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  if(document.getElementById("nome").value != "" &&       
     document.getElementById("email").value != "" &&  
     document.getElementById("telefone").value != ""){
      alert("Prontinho! você receberá as informações por e-mail")
  }else{
      alert("Ops! verifique se os campos nome e e-mail estão preenchidos.")
  }
}


