
// Se define un componente Producto el cual se encargará de mostrar
// cada producto. La información a renderizar de cada producto la recibe
// mediante prop ({producto}) desde el componente que lo invoca, que es catalogo.
// Es decir que catalogo llama a producto pasandole props, y producto pinta la
// data del producto para ser mostrada.
// En la linea 14 se puede ver como se recibe la prop luego de la definicion de la
// funcion, y luego se imprime cada uno de los valores que estan dentro de la prop
// como se puede ver en la linea 19 y 20 por ejemplo.

// Esta estratégia permite reutilizar código, ya que la definición del renderizado
// de un producto se realiza una sola vez, luego se cambia dinámicamente la informacion.

const Producto = ({producto}) => {

    return (
        <div className="card">
			<img
				src={producto.imagen}
				alt={producto.nombre}
			/>
			<h2>{producto.nombre}</h2>
			<p>{producto.descripcion}</p>
			<h3>{producto.precio}</h3>
		</div>
    );

}

export default Producto;