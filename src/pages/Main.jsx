import React, { useState, useRef } from "react";
import extremImage from "../assets/extrem.png";
import normal from "../assets/normal.png";
import obese from "../assets/obese.png";
import overWeight from "../assets/overweight.png";
import underWeight from "../assets/under.png";

function Main() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [total, setTotal] = useState(null);
  const imgRef = useRef(null);

  const welcome = localStorage.getItem("username");

  function calculate() {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (!w || !h || h <= 0) {
      alert("يرجى إدخال قيم صحيحة للطول والوزن");
      return;
    }

    const bmi = w / (h * h);
    setTotal(bmi.toFixed(2));

    if (bmi >= 35) {
      imgRef.current.src = extremImage;
    } else if (bmi >= 30) {
      imgRef.current.src = obese;
    } else if (bmi >= 25) {
      imgRef.current.src = overWeight;
    } else if (bmi >= 18.5) {
      imgRef.current.src = normal;
    } else {
      imgRef.current.src = underWeight;
    }
  }

  return (
    <>
      <h1 className="text-center text-4xl mt-4">Hi, {welcome} 🙋🏻</h1>
      <div className="flex justify-center flex-col items-center h-screen">
        <div className="bg-green-200 h-[600px] w-[800px] rounded-4xl p-8">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="mt-2 text-2xl">🍏 أدخل بياناتك</div>
            <input
              type="text"
              className="border-green-400 border-2 mt-5 p-2 w-3/4 text-center"
              placeholder="ادخل الوزن بالكيلوجرام"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <input
              type="text"
              className="border-green-400 border-2 mt-5 mb-5 p-2 w-3/4 text-center"
              placeholder="ادخل الطول بالسنتيمتر"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <button
              className="border-2 border-green-400 bg-green-400 text-white p-2 rounded w-1/2 cursor-pointer"
              onClick={calculate}
            >
              احسب
            </button>
            <div className="mt-10 text-xl">
              {total && (
                <p>
                  مؤشر كتلة الجسم <strong>{total}</strong>
                </p>
              )}
            </div>
            <img ref={imgRef} className="mt-5 w-64 h-64" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
