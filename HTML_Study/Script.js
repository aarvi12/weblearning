function init() 
{
    var h1tags = document.getElementsByTagName("h1")
    h1tags[0].onclick=react;
}

function react()
{
    var h1tags = document.getElementsByTagName("h1")
    var id=h1tags[1];
    id.innerHTML =  "Clicked"  ; 
    id.style.color = "red"  ; 
}
onload = init ; 