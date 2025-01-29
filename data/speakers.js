import nader from "../public/images/nader.jpg";
import alyssa from "../public/images/alyssa.jpeg";
import akshara from "../public/images/akshara.png";
import sanjana from "../public/images/sanjana.jpg";
import peter from "../public/images/peter.png";
import defund from "../public/images/defund.png";
import placeholder from "../public/images/placeholder.jpg";
import lowLevel from "../public/images/lowlevel.jpg";

const data = {
  speakers: [
    {
      name: "Ed (LowLevel)",
      title: "Security Researcher, YouTuber",
      info: "Ed (LowLevel) is an offensive security researcher and security engineer. Ed has been doing penetration tests, vulnerability research, and security audits for the last 10 years. On YouTube, he has a following of 750,000 subscribers and makes videos about recent vulnerabilities, and how we can all make software safer.",
      image: lowLevel,
    },
    {
      name: "Dr. Nader Sehatbakhsh",
      title: "Assistant Professor, UCLA Electrical and Computer Engineering Department",
      info: "Nader Sehatbakhsh runs the Secure Systems and Architectures (SsysArch) research lab at UCLA. His research interest is in the broad area of Security and Privacy with emphasis on hardware support for security and privacy. Specifically, he is interested in computer architecture, IoT Security, embedded/cyber-physical systems, and security and privacy in machine learning. He is affiliated with the Computer Engineering Lab in Electrical and Computer Engineering (ECE) Department at UCLA. Prior to joining to UCLA, Dr. Nader Sehatbakhsh was a PhD student at the School of Computer Science at Georgia Tech where he worked on Securing Computing Systems by Mitigating and Leveraging Side-Channels. He earned his PhD in Computer Science from Georgia Tech in 2020. Before that, he earned his B.Sc. in Electrical Engineering from the University of Tehran in 2013. He joined UCLA since July 2020.",
      image: nader,
    },
    {
      name: "Akshara Sundararajan",
      title: "Senior Software Engineer, Google",
      info: "Akshara Sundararajan is a founding member and former president of ACM Cyber. Akshara now works as a senior software engineer at Google Cloud, where she leads abuse protections for GenAI APIs, including Gemini API and Vertex AI. Her work focuses on detecting and mitigating scaled attacks against Google Cloud resources and APIs. She also previously interned at Google, Symantec, Thomson Reuters, and Ariento. Her work has been featured in the Google Cloud Security & Identity blog.",
      image: akshara,
    },
    {
      name: "Sanjana Sarda",
      title: "Offensive Security, Anduril",
      info: "Sanjana Sarda is a UCLA and ACM Cyber alum who currently leads offensive security efforts at Anduril, building on her focus in AI security and privacy from her master's at Stanford. She has spoken at DEFCON, LayerOne, and BSides San Diego, and her research has been featured in Forbes and Vice's Motherboard.",
      image: sanjana,
    },
    {
      name: "Peter Sutarjo",
      title: "Anti-Cheat Engineer, Moonshot Games",
      info: "Peter Sutarjo is a former ACM Cyber Officer and ACM Studio President. He has previously hosted workshops on game hacking for ACM Cyber and ACM Studio. He is currently a Game Security Engineer at Blizzard working on anticheat and antitamper technologies for games such as Overwatch 2 and Diablo IV. Besides Blizzard, he has also previously interned at Novacoast and Symantec. He also is a Lead Programmer for Sondering Studio, an indie-game studio founded by ACM Studio alumni aiming to make narrative-driven games with heart.",
      image: peter,
    },
    {
      name: "William Wang",
      title: "PhD Student (Cryptography), NYU",
      info: "William is a former ACM Cyber officer, and currently a PhD student at NYU. He works on cryptography and also plays CTFs with DiceGang.",
      image: defund,
    },
  ],
};

export default data;
