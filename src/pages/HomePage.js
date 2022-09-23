import Navigation from "../components/navigation/Navigation.js";
import Header from "../components/header/Header.js";
import Section from "../components/section/Section.js";
import Card from "../components/card/Card.js";

const HomePage = () =>{
    return(
        <>
            <Navigation />
            <Header
                bigTitle="Coffeez"
                smallTitle="Coffee that will make u smile"
                buttonText="order now"
            />
            <Section headerTitle="Our Qualitys">
                <Card image="koffiemolen.jpg" text="" />
                <Card image="i-love-coffee.jpg" text=""/>
                <Card image="ruiken.jpg" text=""/>
                <Card image="vruchten.jpg" text=""/>
            </Section>
        </>
    )
}

export default HomePage