//document.getElementById("enviar").addEventListener("click", enviar);

var inputs = document.getElementsByClassName('formulario__input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

var i = 0;
var datos = document.getElementsByTagName('tbody')[0].innerHTML;

function enviar() {
    let name = document.getElementById('name').value;
    let weight = document.getElementById('weight').value;
    let brand = document.getElementById('brand').value;
    console.log(name);
    console.log(weight);
    console.log(brand);
    datos = datos + "<tr><td>"+(i+1)+"</td><td>"+name+"</td><td>"+weight+"</td><td>"+brand+"</td></tr>";
    document.getElementsByTagName('tbody')[0].innerHTML = datos;
    
    document.getElementById("name").value = '';
    document.getElementById("weight").value = "";
    document.getElementById("brand").value = "";
    let data = document.getElementsByTagName("td");
    alinear_tdata(data);
    i += 1;
}

function alinear_tdata(data){
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        element.classList.add('dato');
    }
}