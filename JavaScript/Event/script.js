function getData(){
    var output = document.getElementById('address').value;
    document.getElementById('output').innerText = output;
}

function getData(){
    console.log('Hello');
}

// document.getElementById('button1').addEventListener('click', getData);

document.getElementById('button1').addEventListener('click', (event) => {
    // console.log('Welcome');

    console.log(event.target.innerText);
});


// () => {

// }