const correctAnswers = ["A", "B", "A", "B", "A"];

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    //GET THE ANSWERS OF THE USER

    const useranswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //CHECK IF THE ANSWER IS CORRECT
    let score = 0;
    useranswer.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    })

    //TRANSVERS THE DOM AND OUTPUT THE SCORE
    scrollTo(0,0);

    const result = document.querySelector(".result");

    let time = 0;

    const timer = setInterval(() => {
        result.textContent = `You Scored ${time}%`;
        if(time === score){
            clearInterval(timer);
        }else{
            time++;
        }
    }, 30)
  
    result.classList.remove("d-none");
})