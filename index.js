let quiz = [{
            question:"1). what is 2 + 2 ?",
            options:["3","2","4","6"],
            answer:"4"
        },
        {
         question:"2). what is the capital of Cameroon ?",
          options:["Bole","Kumba", "Douala","Yaounde"],
          answer:"Yaounde"
        },
        {
            question:"3). Who won the 2024/2025 Ballon dor?",
            options:["Olise", "Dembele","Cole Palmer","Nickolas Jackson"],
            answer:"Dembele"
        },
        {
            question:"4). The first player in the premier league to score 4 goals in a first half match is ?",
            options:["Halland","C.Ronaldo","Cole palmer","Messi"],
            answer:"Cole palmer"
        },
        {
            question:"5). Against which club did cole palmer score against when he score the 4 goals?",
            options:["Brighton","Manchester United","PSG","Monaco"],
            answer:"Brighton"
        },
        {
             question:"6). if X + y = 5 and 2x + y = 10 what is X and Y",
            options:["2 and 4","6 and 0","0 and 1","5 and 0"],
            answer:"5 and 0"
        },
        {
            question:"7). What is the correct syntax for an html hyperlink",
            options:["<a href = '/home.htm'>Visit W3School.com!</a>","<link href = '/home.htm'>Visit W3Schools.com!</link>","<a link href = '/home.htm'>Visit W3Schools.com!</a link>"],
                answer:"<a href = '/home.htm'>Visit W3School.com!</a>"
        }
    ]
        let index = 0
        let time = 30
        let timer;
        let score = 0
        answered = false
        const questionEl = document.getElementById("question")
        const optionsEl = document.getElementById("options")
        const resultEl = document.getElementById("result")
        const timeEl = document.getElementById("time")
        const displayEl = document.getElementById("display")
       function loadQuestion(){
        let current = quiz[index]
        questionEl.textContent = current.question
        optionsEl.innerHTML = ""
        resultEl.innerHTML = ""
        answered = false 
        current.options.forEach((option)=>{
            let btn = document.createElement("button")
            btn.textContent = option 
            btn.onclick = ()=>{
                if(answered)return 
                answered = true 
                if(option === current.answer){
                    resultEl.textContent = "✅ Correct"
                    score++
                    displayEl.textContent = "score:" + score
                }else{
                    resultEl.textContent = "❌ wrong"
                }
            }
            optionsEl.appendChild(btn)
        })
       }
       function next(){
        index++
        if(index >= quiz.length){
            showResult()
        }else{
            loadQuestion()
        }
       }
       function startTimer(){
        clearInterval(timer)
        time = 30
        timeEl.textContent = "Time:"+ time
        timer = setInterval(()=>{
            time--
            timeEl.textContent = "Time:" + time
            if(time===0){
                clearInterval(timer)
                resultEl.textContent = "🕑Time up!"
                questionEl.textContent = "😭Game Over"
                optionsEl.innerHTML = ""
                return
            }
        },1000)
       }
       function showResult(){
        questionEl.textContent = "🎉 You Just Finish This Quiz"
        optionsEl.innerHTML = ""
        resultEl.innerHTML = "score:" + score + "/" + quiz.length
       }
       loadQuestion()
       startTimer()
        