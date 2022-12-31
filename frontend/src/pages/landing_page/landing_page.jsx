import ForestSection from "./components/forest_section";
import HeaderSection from "./components/header_section";
import NavbarSection from "./components/navbar_section";
import PlantSection from "./components/plant_section";

export default function LandingPage() {
    return(
        <div >
            <NavbarSection/>
            <div className="vstack gap-5">
                <HeaderSection/>
                <PlantSection/>
                <ForestSection/>
            </div>
        </div>
    )
}