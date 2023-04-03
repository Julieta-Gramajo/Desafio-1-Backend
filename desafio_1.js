class ProductManager {
    constructor() {
        this.products = [];
    }

    //Método para obtener todos los productos.
    getProducts () {
        return console.log(this.products);
    }

    //Método para agregar un producto al array.
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const PRODUCT = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        //Validamos si el campo "code" se repite.
        const FOUND = this.products.find(productos => productos.code === PRODUCT.code)
        if(FOUND) {
            console.error(`Error en agregar el producto debido a que el campo "CODE" se está encuentra repetido.`);
            return null;
        }

        
        //Validamos si el producto está completo.
        if(!Object.values(PRODUCT).every(property => property)) {
            console.error(`Error en agregar el producto debido a que el producto está incompleto`);
            return null;
        }

        //Validamos si ya existen productos en el array
        if (this.products.length === 0) {
            PRODUCT.id = 1;
        } // Si no existe, agregamos el primer ID que será 1.
        else {
            PRODUCT.id = this.products[this.products.length-1].id+1;
        } // Si ya existe, sumamos uno al último ID ya encontrado.

        //Push para agregar el producto al array
        this.products.push(PRODUCT);
    }

    //Busca productos por su ID.
    getProductById(id) {
        const FOUND_ID = this.products.find(productos => productos.id === id)
        if(FOUND_ID) {
            return console.log(this.products[id-1]);
        }
        else {
            return console.error(`Not found`);
        }
    }

}

//Creamos un nuevo producto.
let producto = new ProductManager();
producto.getProducts(); //Llamamos a getProducts para corroborar que devuelve un array vacío.

producto.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25); //Agregamos un nuevo producto al array con id automático.
producto.addProduct("producto prueba 2", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25); //Este producto arrojará un mensaje en consola y no se agregará al array debido a que valor CODE es igual al del anterior producto.
producto.addProduct("producto prueba 3", "Este es un producto prueba", 200, "Sin imagen", "abc1234", 25); //Agregamos un nuevo producto al array con nuevo id automático.
producto.getProducts(); //Llamamos a getProducts para corroborar los nuevos productos agregados al array.

producto.addProduct("producto prueba", "Este es un producto prueba", 200, "", "abc12345", 25); //Agregamos un nuevo producto sin una propiedad (thumbnail) al array y corroboramos que, como no cumple con la condución, no se muestra el producto.

producto.getProductById(3); //Buscamos un producto por su ID (no existente).
producto.getProductById(2); //Buscamos un producto por su ID (existente).