window.onload = function(){
    var mas = document.querySelectorAll("img"); 
    for (var i = 0; i < mas.length; i++) {
        mas[i].onclick = f;
    }
}

    function f(e) {
        var big = document.getElementById('bigImg');
        big.innerHTML = "";
        var small = e.target;
        var imgName = small.id.split("_");
        var p = 'big/'+imgName[1]+'.png';
        var bigImage = document.createElement('img');
        bigImage.src = p;
        big.appendChild(bigImage);
        bigImage.onerror = function(){
            alert("Картинка не найдена");
        }
        }