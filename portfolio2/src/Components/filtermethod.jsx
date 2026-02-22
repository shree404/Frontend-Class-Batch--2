import {  useState } from "react";

function Colorfilter() {
  const [selectredColor, setSelectredColor] = useState(true);
  const [selectblueColor, setSelectBlueColor] = useState();
  const [selectblackColor, setSelectBlackColor] = useState();
  const [selectyellowColor, setSelectyellowColor] = useState();

  const Clothes = [
    {
      name: "Tshirt",
      color: "red",
    },
    {
      name: "jacket",
      color: "black",
    },
    {
      name: "sweater",
      color: "yellow",
    },
    {
      name: "Hoodie",
      color: "black",
    },
    {
      name: "jens",
      color: "blue",
    },
  ];

  const filterArrayRed = Clothes.filter((cloth) => cloth.color === "red");

  const filterArrayBlue = Clothes.filter((cloth) => cloth.color === "blue");

  const filterArrayBlack = Clothes.filter((cloth) => cloth.color === "black");
  const filterArrayYellow = Clothes.filter((cloth) => cloth.color === "yellow");

  // const Redcolor = () => {

  // }

  const handleRedColor = () => {
    setSelectredColor(true);
    setSelectBlackColor(false);
    setSelectBlueColor(false);
    setSelectyellowColor(false);
  };
  const handleBlueColor = () => {
    setSelectBlueColor(true);
    setSelectredColor(false);
    setSelectBlackColor(false);
    setSelectyellowColor(false);
  };
  const handleBlackColor = () => {
    setSelectBlackColor(true);
    setSelectBlueColor(false);
    setSelectyellowColor(false);
    setSelectredColor(false);
  };
  const handleYellowColor = () => {
    setSelectyellowColor(true);
    setSelectredColor(false);
    setSelectBlackColor(false);
    setSelectBlueColor(false);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={handleRedColor}>Red</button> &nbsp;&nbsp;{" "}
          <button onClick={handleBlackColor}>Black</button> &nbsp;&nbsp;{" "}
          <button onClick={handleBlueColor}>Blue</button> &nbsp;&nbsp;
          <button onClick={handleYellowColor}>Yellow</button>
        </div>
        {selectredColor &&
          filterArrayRed.map((item, index) => (
            <div key={index}>
              <p>
                {" "}
                <span style={{ fontWeight: "600" }}>{item.name} - </span>{" "}
                <span>{item.color}</span>{" "}
              </p>
            </div>
          ))}
        {selectblueColor &&
          filterArrayBlue.map((item, index) => (
            <div key={index}>
              <p>
                {" "}
                <span style={{ fontWeight: "600" }}>{item.name} - </span>{" "}
                <span>{item.color}</span>{" "}
              </p>
            </div>
          ))}
        {selectblackColor &&
          filterArrayBlack.map((item, index) => (
            <div key={index}>
              <p>
                {" "}
                <span style={{ fontWeight: "600" }}>{item.name} - </span>{" "}
                <span>{item.color}</span>{" "}
              </p>
            </div>
          ))}
        {selectyellowColor &&
          filterArrayYellow.map((item, index) => (
            <div key={index}>
              <p>
                {" "}
                <span style={{ fontWeight: "600" }}>{item.name} - </span>{" "}
                <span>{item.color}</span>{" "}
              </p>
            </div>
          ))}

        {/* {Clothes.map((item,index) => ( */}
        {/* {filterArrayRed.map((item,index) => (
                <>
                <div key={index}>
                    <p> <span style={{fontWeight:'600'}}>{item.name} - </span> <span>{item.color}</span> </p>
                </div>
                </>
            ))} */}
      </div>
    </>
  );
}

export default Colorfilter;
