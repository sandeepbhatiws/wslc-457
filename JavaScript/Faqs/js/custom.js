
var allQuestion = document.querySelectorAll('.question_answer');

allQuestion.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        element.lastElementChild.classList.toggle('d-none');

        if(element.firstElementChild.lastElementChild.innerText == '-'){
            element.firstElementChild.lastElementChild.innerText = '+';
        } else {
            element.firstElementChild.lastElementChild.innerText = '-';
        }
        
        allQuestion.forEach((e, i) => {
            if(index != i){
                e.lastElementChild.classList.add('d-none');
                e.firstElementChild.lastElementChild.innerText = '+';
            }
        })

    })
})