import FooterSection from "./components/footer_section";
import ForestSection from "./components/forest_section";
import HeaderSection from "./components/header_section";
import NavbarSection from "./components/navbar_section";
import PlantSection from "./components/plant_section";
import StoryOfTeaSection from "./components/story_of_tea";
import SurveySection from "./components/survey_section";

export default function LandingPage() {
    return(
        <div className="pt-0">
            <NavbarSection/>
            <div className="vstack">
                <HeaderSection/>
                <PlantSection/>
                <ForestSection/>
                <StoryOfTeaSection/>
                <SurveySection/>
                <FooterSection/>
            </div>
        </div>
    )
}