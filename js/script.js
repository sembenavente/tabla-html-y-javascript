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


var productos = [];

function enviar() {
    let nam = document.getElementById('name').value;
    let pric = document.getElementById('price').value;
    let hmuch = document.getElementById('howmuch').value;
    console.log(nam);
    console.log(pric);
    console.log(hmuch);
    let p = parseFloat(pric);
    let hm = parseInt(hmuch);
    let sub = p*hm;
    console.log(p);
    console.log(hm);
    console.log(sub);

    var objProduct = {
        name : nam,
        price : p,
        howmuch : hm,
        subtotal : sub
    }

    productos.push(objProduct);

    listar();

    document.getElementById("name").value = '';
    document.getElementById("price").value = "";
    document.getElementById("howmuch").value = "";
    
}

function listar(){
    let contenido = '';
    let suma = 0.0;
    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        suma += parseFloat(element.subtotal);
        contenido = contenido + '<tr><td>' + (i+1) + '</td><td>' + element.name + '</td><td>' + element.price + 
        '</td><td>' + element.howmuch + '</td><td>' + element.subtotal + '</td><td>'+ '<img src="image/edit.png" width="30px" onclick="modificar(' + i + ')">' + 
        '<img src="image/delete.png" width="30px" onclick="eliminar(' + i +')">' + '</td></tr>';
    }
    console.log(suma);
    let igv = suma*0.18;
    let total = suma + igv;
    document.getElementsByTagName('tbody')[0].innerHTML = contenido;
    document.getElementById('total_sub').value = suma;
    document.getElementById('igv').value = igv;
    document.getElementById('total').value = total;
    let data = document.getElementsByTagName("td");
    alinear_tdata(data);
}

function alinear_tdata(data){
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        element.classList.add('dato');
    }
}

function eliminar(index) {
    console.log(index);
    if (confirm("Confirmar eliminación de producto")) {

        productos.splice(index , 1);
        listar();
    }
}

function modificar(index){
    console.log(index);
    document.getElementById("name").value = productos[index].name;
    document.getElementById("price").value = productos[index].price;
    document.getElementById("howmuch").value = productos[index].howmuch;
    document.getElementById('boton_enviar').innerHTML = '<input type="submit" value="Modificar" class="formulario__submit btn_modificar" onclick="cambiar(' + index + ')">';

}

function cambiar(index){
    let nam = document.getElementById('name').value;
    let pric = document.getElementById('price').value;
    let hmuch = document.getElementById('howmuch').value;
    console.log(nam);
    console.log(pric);
    console.log(hmuch);
    let p = parseFloat(pric);
    let hm = parseInt(hmuch);
    let sub = p*hm;
    console.log(p);
    console.log(hm);
    console.log(sub);
    var objProduct = {
        name : nam,
        price : p,
        howmuch : hm,
        subtotal : sub
    }
    productos[index] = objProduct;
    listar();

    document.getElementById("name").value = '';
    document.getElementById("price").value = "";
    document.getElementById("howmuch").value = "";
    document.getElementById('boton_enviar').innerHTML = '<input type="submit" class="formulario__submit" onclick="enviar()">';
}