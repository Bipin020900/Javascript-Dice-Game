
function rotate(){
        let dicemotion = document.getElementById('dice');
        dicemotion.classList.add('animation');

        setTimeout(()=>{
                let number = Math.floor(Math.random()*6);
                document.getElementById('dice').innerText = number;
                dicemotion.classList.remove('animation');
        }, 2000)
        
        document.getElementById('dice').innerText = " ";
}
