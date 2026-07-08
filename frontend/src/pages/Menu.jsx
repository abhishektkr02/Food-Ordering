import "./../styles/Menu.css";

import FoodCard from "../components/FoodCard";

import ChickenBiryani from "../assets/Chicken Biriyani.png";
import Mandi from "../assets/Mandi.jpg";
import MuttonBiryani from "../assets/Mutton Biriyani.jpeg";

import BeetrootRoll from "../assets/Beetroot Roll.jpeg";
import ChickenFry from "../assets/Chicken Fry.jpg";
import ChickenNoodles from "../assets/Chicken Noodles.jpg";

import ChocolateIceCream from "../assets/Chocolate Ice Cream.jpg";
import VanillaIceCream from "../assets/Vanilla Ice Cream.jpg";
import ChocoVanillaIceCreamCake from "../assets/Choco Vanilla Ice Cream Cake.jpg";

function Menu() {
  return (
    <div className="menu-page">

      {/* MAIN COURSES */}

      <section className="menu-section">

        <h1 className="menu-title">
          MAIN COURSES
        </h1>

        <div className="food-grid">

          <FoodCard
            image={ChickenBiryani}
            name="Chicken Biryani"
            price="426"
          />

          <FoodCard
            image={Mandi}
            name="Mandi"
            price="272"
          />

          <FoodCard
            image={MuttonBiryani}
            name="Mutton Biryani"
            price="295"
          />

        </div>

      </section>

      {/* STARTERS */}

      <section className="menu-section">

        <h1 className="menu-title">
          STARTERS
        </h1>

        <div className="food-grid">

          <FoodCard
            image={BeetrootRoll}
            name="Beetroot Roll"
            price="168"
          />

          <FoodCard
            image={ChickenFry}
            name="Chicken Fry"
            price="205"
          />

          <FoodCard
            image={ChickenNoodles}
            name="Chicken Noodles"
            price="568"
          />

        </div>

      </section>

      {/* DESERTS */}

      <section className="menu-section">

        <h1 className="menu-title">
          DESERTS
        </h1>

        <div className="food-grid">

          <FoodCard
            image={ChocolateIceCream}
            name="Chocolate Ice Cream"
            price="262"
          />

          <FoodCard
            image={VanillaIceCream}
            name="Vanilla Ice Cream"
            price="443"
          />

          <FoodCard
            image={ChocoVanillaIceCreamCake}
            name="Choco Vanilla Ice Cream Cake"
            price="342"
          />

        </div>

      </section>

    </div>
  );
}

export default Menu;