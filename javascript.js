let playermove='';
        let result='';

        //yaha pe jo niche se count tha usse wapas variable cchnage kiya and then agar null(by reset button) aay to default wali values de denge
        let obj=JSON.parse(localStorage.getItem('count')) || {
             win:0,
             lose:0,
             tie:0
             
         }
         function resetResultt(){
            document.querySelector('.Resultt').textContent=``;
         }
         function resetlink(){
            document.querySelector('.link').innerHTML=``;
         }
         function resetmyhand(){
            document.querySelector('.myhand').innerHTML=``
         }
         
          
         
         function updatewinlosetie(){
                document.querySelector('.Winlosetie').innerHTML=`Win: ${obj.win} lose: ${obj.lose} Tie: ${obj.tie}`;
            }
            updatewinlosetie();

         

        function forcomputerchoice(){
            let randomnum=Math.random();
        let computerchoice='';
        if (randomnum>0 && randomnum<=1/3)
        {
          computerchoice='Rock';       
        }
        else if(randomnum>1/3 && randomnum<=2/3)
        {
            computerchoice='Paper';
        }
        else{
            computerchoice='Scissors';
        }
        return computerchoice;

        }

        function gamedecision(playermove,computerchoice){

            if(playermove=='Rock')
            {
                if(computerchoice=='Scissors')
                {
                    result='YOU WIN';
                    obj.win++;
                }
                else if(computerchoice=='Paper')
                {
                    result='YOU LOSE';
                    obj.lose++;
                }
                else{
                    result='ITS A TIE';
                    obj.tie++;
                }
            }
            else if(playermove=='Scissors')
            {
               if(computerchoice=='Scissors')
                {
                    result='ITS A TIE';
                    obj.tie++;
                }
                else if(computerchoice=='Paper')
                {
                    result='YOU WIN';
                    obj.win++;
                }
                else{
                    result='YOU LOSE';
                    obj.lose++;
                } 
            }
            else
            {
                if(computerchoice=='Scissors')
                {
                    result='YOU LOSE';
                    obj.lose++;
                }
                else if(computerchoice=='Paper')
                {
                    result='ITS A TIE';
                    obj.tie++;
                }
                else{
                    result='YOU WIN';
                    obj.win++;
                } 
            }

            //jo bhi count rhega of win lsoe and tie usko local moemeory me store kiya in string as string hi leta he 
            localStorage.setItem('count', JSON.stringify(obj));

            document.querySelector('.Resultt').textContent=` ${result}`;

            document.querySelector('.myhand').innerHTML= `You <img src="for images/${playermove}-emoji.png" class="secondimage">
            <img src="for images/${computerchoice}-emoji.png" class="secondimage"> Computer`

            updatewinlosetie();
            
            if(obj.win+obj.lose+obj.tie>=10){
                document.querySelector('.link').innerHTML=`Here  <a href="https://www.youtube.com/watch?v=SWkMYO9V_-k"> <span><u>click<u></span></a>`
            }
            

            
            
            

            

            
            

            
        }