import { useEffect, useState } from "react";

const Home = () => {
    // let x = 'Friction plate';
    // console.log(x);
    // x = 'thrust bearing';
    /* Component state is data(array, object, string) that is associated with a component.  Hooks allow us react to changes in 
    a components' state and/or manipulate it.  useState(), useEffect(), and useContext()-- these are some of the most common
    examples but we can still even define our own custom hooks!
    */

   const [animal, setAnimal] = useState('Grizzly Bear');

   const changeAnimal = () => {
    console.log('Change animal button clicked');
    if (animal === 'Grizzly Bear'){
        setAnimal('Tiger')
    } else if (animal === 'Tiger'){
        setAnimal('Lion')
    } else {
        setAnimal('Grizzly Bear')
    }
   }
   useEffect(()=>{console.log('HOME component state has been rendered or re-rendered')})
    
    return (
        <div>
            <h1>Welcome home, there's no place like it!</h1>
            <h2>{animal}</h2>
            <button className="btn btn-warning" onClick={changeAnimal}> Change the animal:</button>
        </div>
    )
}
export default Home;