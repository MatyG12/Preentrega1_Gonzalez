import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <main>
            <h2>Tienda de repuestos</h2>
            <div>
                <button>Inicio</button>
                <button>Galeria</button>
                <button>Productos</button>
            </div>

            <CartWidget />
        </main>
    )
}

export default NavBar;