document.getElementById("enviarMsg").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Botão clicado!"); 
    alert("Mensagem enviada com sucesso!"); 
    document.querySelector("form").submit(); 
});