import { createContext, useEffect, useState } from "react";
const DataProvider = (props) => {
    const [cart, setCart] = useState({size:0, total:0, movies:{}});
    useEffect(() => { console.log(cart) });
    return (
        <DataContext.Provider value={{'cart': cart, 'setCart': setCart}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;
export const DataContext = createContext();

