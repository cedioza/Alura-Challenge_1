
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
    texto_desencriptado=texto_desencriptado.replaceAll('enter','e');
    texto_desencriptado=texto_desencriptado.replaceAll('imes','i');
    texto_desencriptado=texto_desencriptado.replaceAll('ai','a');
    texto_desencriptado=texto_desencriptado.replaceAll('ufat','u');
    texto_desencriptado=texto_desencriptado.replaceAll('ober','o');
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
        texto_encriptado=texto_encriptado.replaceAll('e','enter');
        texto_encriptado=texto_encriptado.replaceAll('i','imes');
        texto_encriptado=texto_encriptado.replaceAll('a','ai');
        texto_encriptado=texto_encriptado.replaceAll('u','ufat');
        texto_encriptado=texto_encriptado.replaceAll('o','ober');
    }
    

 
 resultado.value=texto_encriptado
}