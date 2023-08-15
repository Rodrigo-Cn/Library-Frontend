function redirect(event) {
    var inputText = document.getElementById("entrada1").value.toLowerCase();
    if (event.key === "Enter") {
        
        window.location.href = "livro.html";
    
    }
}
