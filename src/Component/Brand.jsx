import React from 'react';
import Marquee from "react-fast-marquee";
import sponsorImage1 from '/src/assets/images/sponsor/01.png';
import sponsorImage2 from '/src/assets/images/sponsor/02.png';
import sponsorImage3 from '/src/assets/images/sponsor/03.png';
import sponsorImage4 from '/src/assets/images/sponsor/04.png';
import sponsorImage5 from '/src/assets/images/sponsor/05.png';
import sponsorImage6 from '/src/assets/images/sponsor/06.png';

const Brand = () => {
    return (
        <Marquee>
            <img src={sponsorImage1} alt="Sponsor 1" style={{ margin: "3rem" }} />
            <img src={sponsorImage2} alt="Sponsor 2" style={{ margin: "3rem" }} />
            <img src={sponsorImage3} alt="Sponsor 3" style={{ margin: "3rem" }} />
            <img src={sponsorImage4} alt="Sponsor 4" style={{ margin: "3rem" }} />
            <img src={sponsorImage5} alt="Sponsor 5" style={{ margin: "3rem" }} />
            <img src={sponsorImage6} alt="Sponsor 6" style={{ margin: "3rem" }} />
        </Marquee>
    );
}

export default Brand;
