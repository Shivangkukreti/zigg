import { act, useContext } from "react";
import { Appcontext } from "../appcontext";
import Artworkcat from "./artworkcat";
import Ournewartists from "./ournewartists";
import Todayart from "./todayart";
import Mostview from "./mostviewart";
import Whatcustomersay from "./whatcustomersay";
import Ourartworkcollection from "./ourartworkcollection";
import Artworkasperstyle from "./artworkasperstyle";
import ContentWinner from "./contentwinner";

function Hero() {
    let{active,setactive}=useContext(Appcontext)    
    return ( 
        <div className=" shadow-lg shadow-white/40 h-120 rounded-4xl p-0 m-0 w-240 overflow-hidden"
>
            {active=='one'&& <Artworkcat></Artworkcat>}
            {active=='two'&& <Ournewartists></Ournewartists>}
            {active=='three'&& <Todayart></Todayart>}
            {active=="four"&& <Mostview></Mostview>}
            {active=="five"&& <Whatcustomersay></Whatcustomersay>}
            {active=="six"&& <Ourartworkcollection></Ourartworkcollection>}
            {active=="seven"&& <Artworkasperstyle></Artworkasperstyle>}
            {active=="eight"&& <ContentWinner></ContentWinner>}
        </div>
     );
}

export default Hero;