import { useContext } from "react";
import Hero from "./hero";
import TextPressure from "./textpressure.jsx";
import { Appcontext } from "../appcontext.jsx";

function Gridsection() {
  let{active,setactive}=useContext(Appcontext)
  return (
    <div className="z-2 absolute top-0 left-0 right-0 bottom-0 place-content-center place-items-center grid grid-cols-3">
      <div className="flex flex-col gap-35 ">
        <div  onMouseEnter={() => setactive("one")}
      onMouseLeave={() => setactive("none")} style={{ position: "relative"}}>
          <TextPressure
            text="ARTWORK_CATEGORIES"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={50}
          />
        </div>
        <div onMouseEnter={() => setactive("two")}
      onMouseLeave={() => setactive("none")} style={{ position: "relative" }}>
          <TextPressure
            text="OUR_NEW_ARTISTS"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={50}
          />
        </div>
        <div onMouseEnter={() => setactive("three")}
      onMouseLeave={() => setactive("none")} style={{ position: "relative"}}>
          <TextPressure
            text="TODAY'S_FEATURED_ART"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={50}
          />
        </div>
      </div>
      <div className="colspan-2 flex flex-col overflow-hidden justify-center items-center gap-20">
        <div onMouseEnter={() => setactive("four")}
      onMouseLeave={() => setactive("none")} style={{ position: "relative" }}>
          <TextPressure
            text="MOST_VISITED_ARTISTS"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={50}
          />
        </div>
        <Hero></Hero>
        <div onMouseEnter={() => setactive("five")}
      onMouseLeave={() => setactive("none")} style={{ position: "relative"}}>
          <TextPressure
            text="WHAT_CUSTOMERS_SAY"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={50}
          />
        </div>
      </div>

      <div className="flex flex-col gap-35 ">
        <div onMouseEnter={() => setactive("six")}
      onMouseLeave={() => setactive("none")} style={{ position: "relative" }}>
          <TextPressure
            text="OUR_ARTWORK_COLLECTIONS"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={50}
          />
        </div>
        <div onMouseEnter={() => setactive("seven")}
      onMouseLeave={() => setactive("none")} style={{ position: "relative" }}>
          <TextPressure
            text="ARTWORK_AS_PER_STYLE"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={50}
          />
        </div>
        <div onMouseEnter={() => setactive("eight")}
      onMouseLeave={() => setactive("none")} style={{ position: "relative" }}>
          <TextPressure
            text="CONTEST_WINNER"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight
            italic={true}
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={50}
          />
        </div>
      </div>
    </div>
  );
}

export default Gridsection;
