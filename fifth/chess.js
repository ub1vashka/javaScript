function chessGeneration (){
        var mainBlock = document.querySelector('.main-block');
        var block;
        var cell = true;

        for (var i = 0; i < 8; i++){
            for (var j = 0; j < 8; j++){
                if (j == 0) cell = !cell;
        
                block = document.createElement('div');
        
                if (cell) block.className = 'block black';
                else block.className = 'block white';
        
                mainBlock.appendChild(block);
                cell = !cell;
            }
        }
}



chessGeneration();

