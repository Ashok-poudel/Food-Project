import AOS from "aos"
import "aos/dist/aos.css";
import {useEffect, usestate} from "react";


function App(){
    const [orderPopup, setOrderPopup] = useState(false);
   const handleOrderpopup =() =>{
    setOrderPopup(!orderPopup);
   }
   useEffect(() =>{
    AOS.init({
        offset:100,
        duration:800,
        easing:"ease-in-sine",
        delay:100,
    })
    AOS.refresh();
 })
   return (
    <>
    <div className=""> 
        </div></>
   ) 
}
export default App;