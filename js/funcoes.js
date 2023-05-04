
function exibeElementoPorClasse(classe){
    $('.'+classe).show();
}
function exibeSmsSucess(sms){
    
    $('.'+sms).show();
}
function escondeElementoPorClasse(classe){
    $('.'+classe).hide();
}
function valida(classe){
    var nome=document.getElementById('nome').value;
    var telefone=document.getElementById('telefone').value
    var email=document.getElementById('email').value
    var assunto=document.getElementById('assunto').value
    var descricao=document.getElementById('descricao').value
    //alert(nome+email);

    if(nome== null || nome == undefined || nome==''){
        exibeElementoPorClasse(classe);      
    }else  if(email== null || email == undefined || email==''){
        exibeElementoPorClasse(classe);      
    }
    else  if(assunto== null || assunto == undefined || assunto==''){
        exibeElementoPorClasse(classe);      
    }
    else  if(descricao== null || descricao == undefined || descricao==''){
        exibeElementoPorClasse(classe);      
    }else{
        escondeElementoPorClasse(classe);
        exibeSmsSucess("sms");
    }
}