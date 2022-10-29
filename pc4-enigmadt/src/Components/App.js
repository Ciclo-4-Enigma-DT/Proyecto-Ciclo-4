import { Header } from "./Header"
import { Ventas } from "./verVentas"


export function App(){
    return(
        <div className="App">
            <Header />
            <Ventas />
            <ShopingCart></ShopingCart>
        </div>
    )
}