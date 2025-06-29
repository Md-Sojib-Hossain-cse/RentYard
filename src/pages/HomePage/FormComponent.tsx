import SmallCard from "../../components/CardItems/SmallCard";
import House1 from "../../assets/p1/house02.png";
import House2 from "../../assets/p1/house01.png";
import House3 from "../../assets/p1/building03.png";
import { useState } from "react";

const FormComponent = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  return (
    <div className="flex flex-col justify-between">
      <div className="space-y-3 md:space-y-4 lg:space-y-5">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
          Property type
        </h2>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 justify-between items-center ">
          <SmallCard
            logo={House1}
            title={"Single House Property"}
            subTitle={"Single unit house for single family"}
            isSelected={selectedCard === "singleHouse"}
            onClick={() => setSelectedCard("singleHouse")}
          ></SmallCard>
          <SmallCard
            logo={House2}
            title={"Apartments Complex"}
            subTitle={"Multiple unit house for families"}
            isSelected={selectedCard === "apartmentComplex"}
            onClick={() => setSelectedCard("apartmentComplex")}
          ></SmallCard>
          <SmallCard
            logo={House3}
            title={"Condominiums"}
            subTitle={"Multiple unit house for families"}
            isSelected={selectedCard === "condominiums"}
            onClick={() => setSelectedCard("condominiums")}
          ></SmallCard>
        </div>
        <div className="space-y-3 md:space-y-4 lg:space-y-5">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
            Select Your Role
          </h2>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5 justify-between items-center ">
            <SmallCard
              logo={House1}
              title={"Landlord"}
              subTitle={"Owner of the property"}
              isSelected={selectedCard === "house1"}
              onClick={() => setSelectedCard("house1")}
            ></SmallCard>
            <SmallCard
              logo={House2}
              title={"Retailor"}
              subTitle={"Manage property on behalf of owner"}
              isSelected={selectedCard === "house2"}
              onClick={() => setSelectedCard("house2")}
            ></SmallCard>
            <SmallCard
              logo={House3}
              title={"Property Management Company"}
              subTitle={"For management company"}
              isSelected={selectedCard === "house3"}
              onClick={() => setSelectedCard("house3")}
            ></SmallCard>
          </div>
        </div>
      </div>
      <div>hi</div>
    </div>
  );
};

export default FormComponent;
