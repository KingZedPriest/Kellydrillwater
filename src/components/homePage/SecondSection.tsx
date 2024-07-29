//Import Needed Components
import ScrollReveal from "../RevelOnScroll";
import Aboutus from "./Aboutus";
import QuoteLink from "./machinePage";



const SecondSection = () => {
    return (
        <main className="bg-whiteColor py-20 mt-20">
            <ScrollReveal>
                <QuoteLink />
            </ScrollReveal>
            <ScrollReveal>
                <Aboutus />
            </ScrollReveal>
        </main>
    );
}

export default SecondSection;