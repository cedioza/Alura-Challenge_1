
const encriptar=document.getElementById("encriptar");
const desencriptar=document.getElementById("desencriptar");
const resultado=document.getElementById("resultado");
const copiar=document.getElementById("copiar");

encriptar.addEventListener("click",encriptador);
desencriptar.addEventListener('click',desencriptador);
copiar.addEventListener('click',copiar_resultado);

function copiar_resultado(){
    resultado.select();
    document.execCommand('copy');

    alert("Copiado!");

}

function desencriptador()
{
 
 let texto=document.getElementById("texto").value;
 let texto_desencriptado=texto;
 if(texto_desencriptado.isupper())
 {
     Alert("Debe ingresar letras en minuscula")
 }
 else
 {
    texto_desencriptado=texto_desencriptado.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ufat','u').replaceAll('ober','o');

    resultado.value=texto_desencriptado;
 }

}

function encriptador()
{
    let texto=document.getElementById("texto").value;
    let texto_encriptado=texto;
    if(texto_desencriptado.isupper())
    {
        Alert("Debe ingresar letras en minuscula")
    }
    else
    {
        texto_encriptado=texto_encriptado.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('u','ufat').replaceAll('o','ober');
    }
    

 
 resultado.value=texto_encriptado
}