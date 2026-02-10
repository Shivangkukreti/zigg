import { useContext } from "react";
import Hero from "./hero";
import TextPressure from "./textpressure.jsx";
import { Appcontext } from "../appcontext.jsx";

function Gridsection() {
  const { setactive } = useContext(Appcontext);

  return (
    <div className="z-20 absolute inset-0 grid grid-cols-[auto_1fr_auto] h-full px-10 ">

      {/* ================= LEFT (AUTO WIDTH) ================= */}
      <div className="flex flex-col items-start justify-center gap-60">
        <div onMouseEnter={() => setactive("one")} onMouseLeave={() => setactive("none")}>
          <TextPressure text="ARTWORK_CATEGORIES" italic textColor="#fff" minFontSize={50} />
        </div>

        <div onMouseEnter={() => setactive("two")} onMouseLeave={() => setactive("none")}>
          <TextPressure text="OUR_NEW_ARTISTS" italic textColor="#fff" minFontSize={50} />
        </div>

        <div onMouseEnter={() => setactive("three")} onMouseLeave={() => setactive("none")}>
          <TextPressure text="TODAY'S_FEATURED_ART" italic textColor="#fff" minFontSize={50} />
        </div>
      </div>

      {/* ================= CENTER (TAKES MAX SPACE) ================= */}
      <div className="flex flex-col place-items-center place-content-evenly overflow-hidden">
              {/* <div className="flex flex-col items-center justify-center overflow-hidden"></div> */}
        <div onMouseEnter={() => setactive("four")} onMouseLeave={() => setactive("none")}>
          <TextPressure text="MOST_VISITED_ARTISTS" italic textColor="#ffff" minFontSize={50} />
        </div>

        {/* HERO TAKES REMAINING SPACE */}
        <div className="flex-grow w-full h-full flex items-center justify-center">
          <Hero />
        </div>

        <div onMouseEnter={() => setactive("five")} onMouseLeave={() => setactive("none")}>
          <TextPressure text="WHAT_CUSTOMERS_SAY" italic textColor="#ffff" minFontSize={50} />
        </div>
      </div>

      {/* ================= RIGHT (AUTO WIDTH) ================= */}
      <div className="flex flex-col items-end justify-center gap-60">
        <div onMouseEnter={() => setactive("six")} onMouseLeave={() => setactive("none")}>
          <TextPressure text="OUR_ARTWORK_COLLECTIONS" italic textColor="#ffff" minFontSize={50} />
        </div>

        <div onMouseEnter={() => setactive("seven")} onMouseLeave={() => setactive("none")}>
          <TextPressure text="ARTWORK_AS_PER_STYLE" italic textColor="#ffff" minFontSize={50} />
        </div>

        <div onMouseEnter={() => setactive("eight")} onMouseLeave={() => setactive("none")}>
          <TextPressure text="CONTEST_WINNER" italic textColor="#ffff" minFontSize={50} />
        </div>
      </div>

    </div>
  );
}

export default Gridsection;
