
import CountryRegion from "countryregionjs";

const countryRegion = new CountryRegion();




const Quote = async () => {

    const states = await countryRegion.getStates(159)

    return (
        <main>

        </main>
    );
}

export default Quote;