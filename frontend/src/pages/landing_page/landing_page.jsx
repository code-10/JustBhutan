import ForestSection from "./components/forest_section";
import HeaderSection from "./components/header_section";
import NavbarSection from "./components/navbar_section";
import PlantSection from "./components/plant_section";
import StoryOfTeaSection from "./components/story_of_tea";
import SurveySection from "./components/survey_section";

export default function LandingPage() {
    return(
        <div >
            <NavbarSection/>
            <div className="vstack">
                <HeaderSection/>
                <PlantSection/>
                <ForestSection/>
                <StoryOfTeaSection/>
                <SurveySection/>
            </div>
        </div>
    )
}