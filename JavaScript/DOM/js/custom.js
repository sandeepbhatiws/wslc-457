
// const data = document.getElementById('row2').innerText;

// const data = document.getElementsByClassName('row');

// const data = document.getElementsByTagName('div');

// var data = document.querySelector('#row');
// var data = document.querySelector('div');

// var data = document.querySelectorAll('#row');
// var data = document.querySelectorAll('.row');
// var data = document.querySelectorAll('div');

// var data = document.getElementById('row1').innerHTML;

// document.getElementById('output').innerHTML = data;


var data = document.getElementById('name').value;

document.getElementById('name').value = 'Sandeep Bhati';
console.log(data);

function cssProperties(){
    document.getElementById('main').style.display = 'none';
}

function addClass(){
    document.getElementById('main').classList.add('d-none');
}

function removeClass(){
    document.getElementById('main').classList.remove('d-none');
}

function toogleClass(){
    document.getElementById('main').classList.toggle('d-none');
}


function changeImage(){
    var image1 = document.getElementById('image1').src;
    var image2 = document.getElementById('image2').src;

    document.getElementById('image1').src = image2;
    document.getElementById('image2').src = image1;
}

function changeImageOver(image1, image2){
    document.getElementById('image1').src = image2;
    document.getElementById('image2').src = image1;
}

function changeImageOut(image1, image2){
    document.getElementById('image1').src = image2;
    document.getElementById('image2').src = image1;
}