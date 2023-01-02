import Image from "next/image"
import MenuAlt1Icon from "@heroicons/react/outline"
import{
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"

function Header(){
    return(
        <header>
            {/*PARTE SUPERIOR DEL NAVBAR, personalizamos cada parte con flex para reponsividad*/}
          <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            {/*BARRA DE BUSQUEDA, personalizamos para que en pantalla movil se esconda por motivos de espacio*/}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <SearchIcon className="h-12 p-4" />
            </div>         

            {/*PARTE DERECHA DEL NAVBAR*/}
            <div className="text-white flex items-center text-xs space-x-6 mx-6">
                <div className="link">
                    <p>Hola Karla</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className="link">
                    <p>Retiros</p>
                    <p className="font-extrabold md:text-sm">& Ordenes</p>
                </div>
                <div className="relative link flex items-center">
                    <span className="absolute top-0 right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">0</span>
                    <ShoppingCartIcon className="h-10"/>
                    <p className="hidden md:inline font-extrabold md:text-sm mt-2">Carrito</p>
                </div>     
            </div>
        </div>
        {/*PARTE INFERIOR DEL NAVBAR, menu chiquito*/}
        <div className="flex items-center space-x-3 p-2 pl-6  bg-amazon_blue-light text-white text-sm">
           <p className="link flex items-center ">
           <MenuIcon className="h-6 mr-1"/>
           Todo              
           </p>
           <p className="link">Damas</p>
           <p className="link">Caballeros</p>
           <p className="link">Blusas</p>
           <p className="link">Camisas</p>
           <p className="link">Pantalones</p>
           <p className="link">Faldas</p>
           <p className="link hidden lg:inline-flex">Accesorios</p>
        </div>
        </header>
    )

}
export default Header