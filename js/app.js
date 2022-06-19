fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{

    let data1="";
    completedata.map((valores)=>{
        data1+=` <div class="card">
        <h1 class="title">${valores.title}</h1>
        <img class="imagen-producto"src=${valores.image} alt="producto">
        
        <p class="category">${valores.category}</p>
        <p class="price">$ ${valores.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})
            
fetch('https://fakestoreapi.com/products/categories')
            .then((categorias)=>{
                return categorias.json();
            }).then((todaslascategorias)=>{
                let categorias1="";
                todaslascategorias.forEach((mostrarcategorias)=>{
                    categorias1+=`<div class="filtrar">
                    <div class="filtrar-coleccion">
                        <label>Filtrar por:</label>
                        <select>
                            <option value="/">${mostrarcategorias}</option>
                            
                        </select>
                    </div>`
                });
                document.getElementById("filtrar").innerHTML=categorias1;
            })  

