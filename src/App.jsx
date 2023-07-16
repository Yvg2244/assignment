import "./App.css";
import plant from "../public/plant.png";
import mushroom1 from "../public/mushroom1.png";
import round1 from "../public/round1.png";
import round2 from "../public/round2.png";
import Ellipse43 from "../public/Ellipse43.png";
import round3 from "../public/round3.png";
import Button from "./Button";
function App() {
  return (
    <div className="font-poppins md:p-8 lg:p-[4rem] xl:p-[8rem] xl:gap-10 grid grid-cols-12">
      <div className="col-span-12 relative z-[-5] grid p-6 md:p-[4rem] gap-4  xl:gap-10 gird-cols-12">
      <div className="col-span-12 bgImg absolute w-full h-full opacity-40 "></div>
        <h1 className="col-span-12  text-[22px] font-medium text-center">
          The Origin and History of Cordyceps Cordyceps
        </h1>
        <div className="col-span-12 md:col-span-6">
          <img src={plant} alt="" />
        </div>
        <div className="col-span-12 md:col-span-6 gap-4 md:gap-4 content-center grid grid-cols-12">
          <p className="col-span-12">
            Cordyceps is not your ordinary mushroom. It has a rich history
            rooted in traditional Chinese medicine, where it has been revered
            for centuries. The Cordyceps sinensis fungus is known for its
            ability to thrive in high-altitude regions, particularly in the
            Himalayas. Historically, it was used to support various aspects of
            health, including energy, vitality, and respiratory health....
          </p>
          <div className="col-span-12">
            <Button />
          </div>
        </div>
        <div className="col-span-12">
          <img src={mushroom1} alt="" />
        </div>
        <div className="col-span-12 gap-4 grid grid-cols-12">
          <div className="grid grid-cols-12 md:col-span-6 gap-4 col-span-12">
            <p className="col-span-12 text-[22px] font-medium text-center md:text-start">
              Unlock Your Potential with the Power of Mushrooms
            </p>
            <div className="col-span-12">
              <Button />
            </div>
          </div>
          <p className="col-span-12 md:col-span-6">
            Cordyceps is not your ordinary mushroom. It has a rich history
            rooted in traditional Chinese medicine, where it has been revered
            for centuries. The Cordyceps sinensis fungus is known for its
            ability to thrive in high-altitude regions, particularly in the
            Himalayas. Historically, it was used to support various aspects of
            health, including energy, vitality, and respiratory health....
          </p>
        </div>
      </div>
   
      <div className="col-span-12 p-6 gap-x-4 gap-y-2  items-center  grid grid-cols-12 row-cols-12 ">
        <div className="col-span-6 pr-4 md:pr-10  ">
          <img className="max-w-[10rem] w-[5rem] md:w-[8rem]  aspect-square" src={round1} alt="" />
        </div>

        <div className="col-span-6 ">
          <Button />
        </div>

        <div className="col-span-2  ">
          <img className="max-w-[10rem] w-[5rem] md:w-[8rem]  aspect-square" src={round1} alt="" />
        </div>
        <div className="col-span-2  ">
          <img className=" bg-cover" src={Ellipse43} alt="" />
        </div>
        <div className="col-span-8 text-[12px] sm:text-[14px] md:text-[16px] flex gap-4 flex-col text-left">
          <p className=" font-medium ">The Power of Mushrooms: A Natural Remedy for Stress and Anxiety</p>
          <p className="h-[5rem] sm:h-auto  overflow-y-auto">
            Cordyceps is not your ordinary mushroom. It has a rich history
            rooted in traditional Chinese medicine, where it has been revered
            for centuries. The Cordyceps sinensis fungus is known for its
            ability to thrive in high-altitude regions, particularly in the
            Himalayas. Historically, it was used to support various aspects of
            health, including energy, vitality, and respiratory health....
          </p>
        </div>
        <div className="col-span-6  pr-4 md:pr-10   ">
          <img className="max-w-[10rem] w-[5rem] md:w-[8rem]  aspect-square" src={round1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
