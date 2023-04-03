class ProductManager {
    constructor() {
        this.products = [];
    }

    //Método para obtener todos los productos.
    getProducts() {
        return this.products;
    }

    //Función para agregar un producto al array.
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const PRODUCT = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        //Validamos si el campo code"code" se repite.
        const FOUND = this.products.find(productos => productos.code === PRODUCT.code)
        if(FOUND) {
            return console.error(`El campo "CODE" se está encuentra repetido.`);
        }

        
        //Validamos si el producto está completo.
        if(!Object.values(PRODUCT).every(property => property)) {
            return console.error(`El producto está incompleto`);
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
producto.addProduct("Coca cola", "500 ML", 250, "coca-cola.jpg", "#A01", "5"); //Agregamos un nuevo producto al array.
producto.addProduct("Pepsi", "500 ML", 230, "pepsi.jpg", "#A02", "5"); //Agregamos un nuevo producto al array.
producto.addProduct("Manaos", "500 ML", 150, "manaos.jpg", "#A03", "5"); //Agregamos un nuevo producto al array.
producto.getProductById(1); //Buscamos el producto por su ID.
producto.getProductById(2); //Buscamos el producto por su ID.
producto.getProductById(3); //Buscamos el producto por su ID.

//Acá corroboramos que si no cumplen con las condiciones no se muestra el producto.
producto.addProduct("Torasso", "500 ML", 150, "", "#A03", "5"); //Agregamos un nuevo producto sin una propiedad al array.

//Corroboramos que no existe un producto
producto.getProductById(4); //Buscamos un producto por su ID (no existente).