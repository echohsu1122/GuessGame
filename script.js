const generatenumber =() =>(Math.floor(Math.random()*101));
        let score =0;
        let answer = generatenumber();
        //click
      
        document.querySelector(".check").addEventListener('click',
        function(){
          
          console.log(answer);
          const guess = Number(document.querySelector(".guess").value);
              if(!guess){
                document.querySelector(".message").textContent="No number!";
              }
              else if(guess === answer){
                document.querySelector(".message").textContent="Correct Number!";
                score +=1;
                document.querySelector(".score").textContent=`${score}`;
                document.querySelector(".answer").textContent=`${answer}`;

              }else if(guess!==answer){
                document.querySelector(".message").textContent=
                  guess > answer ? "TOO HIGH":"TOO LOW";
              }
        });
      document.querySelector(".again").addEventListener('click',
        function(){
          answer =generatenumber();
          document.querySelector(".guess").value="";
          document.querySelector(".message").textContent="Start guessing...";

        });
      document.querySelector(".reset").addEventListener('click',
        function(){
          score = 0;
        })