import googlecloud from "../public/images/google_cloud.png";
import latticework from "../public/images/latticework.png";
import ottersec from "../public/images/ottersec.png";
import sandia from "../public/images/sandia_national_laboratories.svg";
import trailofbits from "../public/images/trail-of-bits.png";
import affiliateFlag from "../public/images/affiliateFlag.svg";
import infraFlag from "../public/images/infraFlag.svg";
import lockheedmartin from "../public/images/lockheed_martin.svg";
import tryhackme from "../public/images/tryhackme.png";
import crowdstrike from "../public/images/crowdstrike.png";
import spacex from "../public/images/spacex.png";
import binaryNinja from "../public/images/binary-ninja.png";
import microsoft from "../public/images/microsoft.jpg";
import aerospace from "../public/images/aerospace.png";
import lockheed from "../public/images/lockheed.png";

// const data = {
//   sponsors: [
//     {
//       name: "Sandia National Laboratories",
//       url: "https://www.sandia.gov/",
//       image: sandia,
//       flag: {
//         image: affiliateFlag,
//         blurb: "Affiliate",
//       },
//       // Taken from https://www.sandia.gov/missions/
//       blurb:
//         "Sandia strives to become the laboratory that the U.S. turns to first for technology solutions to the most challenging problems that threaten peace and freedom for our nation and the globe.",
//     },
//     {
//       name: "Google Cloud",
//       url: "https://goo.gle/ctfsponsorship",
//       image: googlecloud,
//       blurb:
//         "Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML.",
//       flag: {
//         image: infraFlag,
//         blurb: "Infra sponsored by goo.gle/ctfsponsorship",
//       },
//     },
//     {
//       name: "Trail of Bits",
//       url: "https://www.trailofbits.com/",
//       image: trailofbits,
//       blurb:
//         "Trail of Bits helps secure the world's most targeted organizations and products. We combine high-end security research with a real-world attacker mentality to reduce risk and fortify code.",
//     },
//     {
//       name: "OtterSec",
//       url: "https://osec.io/",
//       image: ottersec,
//       blurb:
//         "OtterSec is the leading blockchain security audit team, working closely with various Layer 1s and the protocols built on them.",
//     },
//     {
//       name: "Amber by LatticeWork",
//       url: "https://www.myamberlife.com/",
//       image: latticework,
//       blurb:
//         "Store your data locally and access it from anywhere without subscription fees! UCLA students, open a ticket in the LA CTF discord for a 25% discount.",
//     },
//   ],
// };
const data = {
  sponsors: [
    {
      name: "The Aerospace Corporation",
      url: "https://aerospace.org/",
      image: aerospace,
      flag: {
        image: affiliateFlag,
        blurb: "Affiliate",
      },
      // Taken from https://aerospace.org/ SEO metadata
      blurb:
        "Aerospace operates the only federally funded research and development center (FFRDC) committed exclusively to the space enterprise. Our technical experts span every discipline of space-related science and engineering.",
    },
    {
      name: "Lockheed Martin",
      url: "https://www.lockheedmartin.com/",
      image: lockheed,
      // Taken from https://aerospace.org/ SEO metadata
      blurb:
        "Lockheed Martin is a leading global security, defense and aerospace contractor, ensuring those we serve always stay ahead of ready.",
      flag: {
        image: affiliateFlag,
        blurb: "Affiliate",
      },
    },
    {
      name: "OtterSec",
      url: "https://osec.io/",
      image: ottersec,
      blurb:
        "OtterSec is the leading blockchain security audit team, working closely with various Layer 1s and the protocols built on them.",
    },
    {
      name: "Microsoft",
      url: "https://www.microsoft.com/",
      image: microsoft,
      // Taken from https://www.microsoft.com/en-us/about
      blurb:
        "Microsoft's mission is to empower every person and every organization on the planet to achieve more.",
    },
    {
      name: "Google Cloud",
      url: "https://goo.gle/ctfsponsorship",
      image: googlecloud,
      blurb:
        "Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML.",
      flag: {
        image: infraFlag,
        blurb: "Infra sponsored by goo.gle/ctfsponsorship",
      },
    },
    {
      name: "CrowdStrike",
      url: "https://www.crowdstrike.com/",
      image: crowdstrike,
      // Taken from https://www.crowdstrike.com/en-us/about-us/
      blurb:
        "CrowdStrike secures the most critical areas of risk – endpoints and cloud workloads, identity, and data – to keep customers ahead of today’s adversaries and stop breaches.",
    },
    {
      name: "Trail of Bits",
      url: "https://www.trailofbits.com/",
      image: trailofbits,
      blurb:
        "Trail of Bits helps secure the world's most targeted organizations and products. We combine high-end security research with a real-world attacker mentality to reduce risk and fortify code.",
    },
    {
      name: "SpaceX",
      url: "https://www.spacex.com/",
      image: spacex,
      blurb:
        "SpaceX is looking for world-class talent ready to tackle challenging projects that will ultimately enable life on other planets. For example, we’re leveraging our experience in building rockets and spacecraft to deploy Starlink, the world’s most advanced broadband internet system.",
    },
    {
      name: "Vector 35 - Binary Ninja",
      url: "https://binary.ninja/",
      image: binaryNinja,
      blurb:
        "Binary Ninja is an interactive decompiler, disassembler, debugger, and binary analysis platform built by reverse engineers, for reverse engineers. Developed with a focus on delivering a high-quality API for automation and a clean and usable GUI, Binary Ninja is in active use by malware analysts, vulnerability researchers, and software developers worldwide.",
    },
    {
      name: "Amber by LatticeWork",
      url: "https://www.myamberlife.com/",
      image: latticework,
      blurb:
        "Store your data locally and access it from anywhere without subscription fees! UCLA students, open a ticket in the LA CTF Discord for a 25% discount.",
    },
  ],
};

export default data;
