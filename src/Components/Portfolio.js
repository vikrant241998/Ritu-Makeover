import React, { useState } from "react";
import "../App.css";
import CloseIcon from '@mui/icons-material/Close';

import img01 from "../Components/img/img01.jpg";
import img02 from "../Components/img/img02.jpg";
import img03 from "../Components/img/img03.jpg";
import img04 from "../Components/img/img04.jpg";
import img05 from "../Components/img/img05.jpg";
import img06 from "../Components/img/img06.JPG";
import img07 from "../Components/img/img07.JPG";
import img08 from "../Components/img/img08.JPG";
import img09 from "../Components/img/img09.JPG";
import img10 from "../Components/img/img10.JPG";
import img11 from "../Components/img/img11.JPG";
import img12 from "../Components/img/img12.jpeg";
import img13 from "../Components/img/img13.jpeg";
import img14 from "../Components/img/img14.jpeg";
import img15 from "../Components/img/img15.jpeg";
import img16 from "../Components/img/img16.jpeg";
import img17 from "../Components/img/img17.jpeg";
import img18 from "../Components/img/img18.jpeg";
import img19 from "../Components/img/img19.jpeg";
import img20 from "../Components/img/img20.jpeg";
import img21 from "../Components/img/img21.JPG";
import img22 from "../Components/img/img22.JPG";
import img23 from "../Components/img/img23.JPG";
import img24 from "../Components/img/img24.JPG";
import img25 from "../Components/img/img25.JPG";
import img26 from "../Components/img/img26.JPG";
import img27 from "../Components/img/img27.JPG";
import img28 from "../Components/img/img28.JPG";
import img29 from "../Components/img/img29.JPG";
import img30 from "../Components/img/img30.JPG";
import img31 from "../Components/img/img31.JPG";
import img32 from "../Components/img/img32.JPG";
import img33 from "../Components/img/img33.JPG";
import img34 from "../Components/img/img34.JPG";
import img35 from "../Components/img/img35.JPG";
import img36 from "../Components/img/img36.JPG";
import img37 from "../Components/img/img37.JPG";
import img38 from "../Components/img/img38.JPG";
import img39 from "../Components/img/img39.JPG";
import img40 from "../Components/img/img40.JPG";
import img41 from "../Components/img/img41.JPG";
import img42 from "../Components/img/img42.JPG";
import img43 from "../Components/img/img43.JPG";
import img44 from "../Components/img/img44.JPG";
import img45 from "../Components/img/img45.JPG";
import img46 from "../Components/img/img46.JPG";
import img47 from "../Components/img/img47.JPG";
import img48 from "../Components/img/img48.JPG";
import img49 from "../Components/img/img49.JPG";
import img50 from "../Components/img/img50.jpg";
import img51 from "../Components/img/img51.JPG";
import img52 from "../Components/img/img52.JPG";
import img53 from "../Components/img/img53.JPG";
import img54 from "../Components/img/img54.JPG";
import img55 from "../Components/img/img55.jpg";
import img56 from "../Components/img/img56.jpg";
import img57 from "../Components/img/img57.jpg";
import img58 from "../Components/img/img58.jpg";
import img59 from "../Components/img/img59.jpg";
import img60 from "../Components/img/img60.jpg";
import img61 from "../Components/img/img61.jpg";
import img62 from "../Components/img/img62.jpg";
import img63 from "../Components/img/img63.jpg";
import img64 from "../Components/img/img64.jpg";
import img65 from "../Components/img/img65.jpg";
import img66 from "../Components/img/img66.JPG";
import img67 from "../Components/img/img67.JPG";
import img68 from "../Components/img/img68.JPG";
import img69 from "../Components/img/img69.JPG";
import img70 from "../Components/img/img70.JPG";
import img71 from "../Components/img/img71.JPG";
import img72 from "../Components/img/img72.JPG";
import img73 from "../Components/img/img73.JPG";
import img74 from "../Components/img/img74.JPG";
import img75 from "../Components/img/img75.JPG";
import img76 from "../Components/img/img76.JPG";
import img77 from "../Components/img/img77.JPG";
import img78 from "../Components/img/img78.JPG";
import img79 from "../Components/img/img79.JPG";
import img80 from "../Components/img/img80.JPG";
import img81 from "../Components/img/img81.JPG";
import img82 from "../Components/img/img82.JPG";
import img83 from "../Components/img/img83.JPG";
import img84 from "../Components/img/img84.JPG";
import img85 from "../Components/img/img85.JPG";
import img86 from "../Components/img/img86.JPG";

export default function Portfolio() {
  let data = [
    {
      id: 1,
      imgSrc: img01,
      text: "Makup Artist",
    },

    {
      id: 2,
      imgSrc: img02,
    },
    {
      id: 3,
      imgSrc: img03,
    },

    {
      id: 4,
      imgSrc: img04,
    },

    {
      id: 5,
      imgSrc: img05,
    },

    {
      id: 6,
      imgSrc: img06,
      text: "Makup Artist",
    },

    {
      id: 7,
      imgSrc: img07,
    },
    {
      id: 8,
      imgSrc: img08,
    },

    {
      id: 9,
      imgSrc: img09,
    },

    {
      id: 10,
      imgSrc: img10,
    },

    {
      id: 11,
      imgSrc: img11,
      text: "Makup Artist",
    },

    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },

    {
      id: 14,
      imgSrc: img14,
    },

    {
      id: 15,
      imgSrc: img15,
    },

    {
      id: 16,
      imgSrc: img16,
      text: "Makup Artist",
    },

    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },

    {
      id: 19,
      imgSrc: img19,
    },

    {
      id: 20,
      imgSrc: img20,
    },

    {
      id: 21,
      imgSrc: img21,
      text: "Makup Artist",
    },

    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },

    {
      id: 24,
      imgSrc: img24,
    },

    {
      id: 25,
      imgSrc: img25,
    },

    {
      id: 26,
      imgSrc: img26,
      text: "Makup Artist",
    },

    {
      id: 27,
      imgSrc: img27,
    },
    {
      id: 28,
      imgSrc: img28,
    },

    {
      id: 29,
      imgSrc: img29,
    },

    {
      id: 30,
      imgSrc: img30,
    },

    {
      id: 31,
      imgSrc: img31,
      text: "Makup Artist",
    },

    {
      id: 32,
      imgSrc: img32,
    },
    {
      id: 33,
      imgSrc: img33,
    },

    {
      id: 34,
      imgSrc: img34,
    },

    {
      id: 35,
      imgSrc: img35,
    },

    {
      id: 36,
      imgSrc: img36,
    },

    {
      id: 37,
      imgSrc: img37,
    },
    {
      id: 38,
      imgSrc: img38,
    },

    {
      id: 39,
      imgSrc: img39,
    },

    {
      id: 40,
      imgSrc: img40,
    },

    {
      id: 41,
      imgSrc: img41,
    },

    {
      id: 42,
      imgSrc: img42,
    },
    {
      id: 43,
      imgSrc: img43,
    },

    {
      id: 44,
      imgSrc: img44,
    },

    {
      id: 45,
      imgSrc: img45,
    },

    {
      id: 46,
      imgSrc: img46,
    },

    {
      id: 47,
      imgSrc: img47,
    },
    {
      id: 48,
      imgSrc: img48,
    },

    {
      id: 49,
      imgSrc: img49,
    },

    {
      id: 50,
      imgSrc: img50,
    },

    {
      id: 51,
      imgSrc: img51,
      text: "Makup Artist",
    },

    {
      id: 52,
      imgSrc: img52,
    },
    {
      id: 53,
      imgSrc: img53,
    },

    {
      id: 54,
      imgSrc: img54,
    },

    {
      id: 55,
      imgSrc: img55,
    },

    {
      id: 56,
      imgSrc: img56,
      text: "Makup Artist",
    },

    {
      id: 57,
      imgSrc: img57,
    },
    {
      id: 58,
      imgSrc: img58,
    },

    {
      id: 59,
      imgSrc: img59,
    },

    {
      id: 60,
      imgSrc: img60,
    },
    
    {
      id: 61,
      imgSrc: img61,
      text: "Makup Artist",
    },

    {
      id: 62,
      imgSrc: img62,
    },
    {
      id: 63,
      imgSrc: img63,
    },

    {
      id: 64,
      imgSrc: img64,
    },

    {
      id: 65,
      imgSrc: img65,
    },

    {
      id: 66,
      imgSrc: img66,
      text: "Makup Artist",
    },

    {
      id: 67,
      imgSrc: img67,
    },
    {
      id: 68,
      imgSrc: img68,
    },

    {
      id: 69,
      imgSrc: img69,
    },

    {
      id: 70,
      imgSrc: img70,
    },

    {
      id: 71,
      imgSrc: img71,
      text: "Makup Artist",
    },

    {
      id: 72,
      imgSrc: img72,
    },
    {
      id: 73,
      imgSrc: img73,
    },

    {
      id: 74,
      imgSrc: img74,
    },

    {
      id: 75,
      imgSrc: img75,
    },

    {
      id: 76,
      imgSrc: img76,
      text: "Makup Artist",
    },

    {
      id: 77,
      imgSrc: img77,
    },
    {
      id: 78,
      imgSrc: img78,
    },

    {
      id: 79,
      imgSrc: img79,
    },

    {
      id: 80,
      imgSrc: img80,
    },

    {
      id: 81,
      imgSrc: img81,
      text: "Makup Artist",
    },

    {
      id: 82,
      imgSrc: img82,
    },
    {
      id: 83,
      imgSrc: img83,
    },

    {
      id: 84,
      imgSrc: img84,
    },

    {
      id: 85,
      imgSrc: img85,
    },

    {
      id: 86,
      imgSrc: img86,
      text: "Makup Artist",
    },

  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, settempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    settempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
    <div className="portfolio-top">
          <h1>My Portfolio Pictures</h1>
    </div>

     <div className={model? "model open" :  "model"}>
        <img src={tempImgSrc} />
        <CloseIcon onClick={()=> setModel (false)} />         
    </div>


      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}
