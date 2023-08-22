
const Producto = (producto) => {

    return (
        <div className="card">
			<img
				src={producto.imagen}
				alt={producto.nombre}
			/>
			<h2>{producto.nombre}</h2>
			<p>{producto.descripcion}</p>
			<h3>{producto.precio}</h3>
			<div className="agregar-carrito">
					{/* <button>
						<i className="bx bxs-cart-add "></i>
					</button> */}
			</div>
		</div>
    );

}

export default Producto;