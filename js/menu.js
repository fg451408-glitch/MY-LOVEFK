javascript
function mostrarProductos(categoria) {

    const contenedor =
        document.getElementById("productos");


    let productos = [];


    if (categoria === "pasteles") {

        productos = [
            {
                nombre: "Pastel de chocolate",
                precio: "$350"
            },
            {
                nombre: "Pastel de vainilla",
                precio: "$320"
            },
            {
                nombre: "Pastel de fresa",
                precio: "$380"
            }
        ];

    }


    if (categoria === "cupcakes") {

        productos = [
            {
                nombre: "Cupcake de chocolate",
                precio: "$35"
            },
            {
                nombre: "Cupcake de vainilla",
                precio: "$30"
            },
            {
                nombre: "Cupcake de fresa",
                precio: "$35"
            }
        ];

    }


    if (categoria === "galletas") {

        productos = [
            {
                nombre: "Galletas de chocolate",
                precio: "$80"
            },
            {
                nombre: "Galletas decoradas",
                precio: "$120"
            }
        ];

    }


    if (categoria === "postres") {

        productos = [
            {
                nombre: "Cheesecake",
                precio: "$250"
            },
            {
                nombre: "Brownie",
                precio: "$60"
            }
        ];

    }


    contenedor.innerHTML = "";


    productos.forEach(function(producto) {

        contenedor.innerHTML += `

            <div class="producto">

                <h3>
                    ${producto.nombre}
                </h3>

                <p>
                    ${producto.precio}
                </p>

                <button>
                    Ver producto
                </button>

            </div>

        `;

    });

}