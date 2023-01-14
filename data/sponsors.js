import googlecloud from "../public/images/google_cloud.png";
import latticework from "../public/images/latticework.png";
import ottersec from "../public/images/ottersec.png";
import sandia from "../public/images/sandia_national_laboratories.svg";
import trailofbits from "../public/images/trail-of-bits.png";
import affiliateFlag from "../public/images/affiliateFlag.svg"
import infraFlag from "../public/images/infraFlag.svg"

const data = {
    sponsors: [
        {
            name: "Sandia National Laboratories",
            url: "https://www.sandia.gov/",
            image: sandia,
            flag: {
                image: affiliateFlag,
                blurb: "Affiliate",
            }
        },
        {
            name: "Google Cloud",
            url: "https://goo.gle/ctfsponsorship",
            image: googlecloud,
            flag: {
                image: infraFlag,
                blurb: "Infra sponsored by goo.gle/ctfsponsorship"
            },
        },
        {
            name: "Trail of Bits",
            url: "https://www.trailofbits.com/",
            image: trailofbits
        },
        {
            name: "OtterSec",
            url: "https://osec.io/",
            image: ottersec
        },
        {
            name: "LatticeWork, Inc.",
            url: "https://www.latticeworkinc.com/",
            image: latticework
        }
    ],
}

export default data;