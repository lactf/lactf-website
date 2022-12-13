# 🚩 LA CTF Website 🚩

![IMG_2169](https://user-images.githubusercontent.com/67720812/207198981-896986e2-a0b1-4fcb-bc40-a57411211fcc.gif)

LA CTF is an annual cybersecurity competition hosted by ACM Cyber at UCLA and Psi Beta Rho. There will be a variety of events ranging from competitive cybersecurity challenges to more relaxed events like typing competitions. Throughout the event, a variety of UCLA professors and cybersecurity experts will be giving talks. LA CTF is open to all skill levels! No matter your experience, there will be challenges just right for you!

This repository contains the source code for the LA CTF website. To see the deployed site, visit [https://lactf.uclaacm.com](https://lactf.uclaacm.com).

## Setup
The LA CTF Website utilizes `Next.js`. In order to locally host this project, first clone the repository.

```
git clone https://github.com/uclaacm/lactf-website.git
cd lactf-website
```

To install the dependencies for the site, run the following command.

```
yarn install
```

To run a local instance of the site, use the following command. An instance should appear at [http://localhost:3000/](http://localhost:3000/).

```
yarn run dev
```

In order to export a production build of the project, use the following command.

```
yarn build
```

You should then see a output similar to the following.

```
Page                                       Size     First Load JS
┌ ○ /                                      15 kB          92.8 kB
├   └ css/67d77372997ed00d.css             3.57 kB
├   /_app                                  0 B            75.4 kB
├ ○ /404                                   861 B          78.7 kB
├   └ css/e5dcbebb251b5094.css             943 B
└ ○ /discord                               930 B          78.7 kB
    └ css/a0adadbfe69d2aac.css             942 B
+ First Load JS shared by all              75.4 kB
  ├ chunks/framework-4556c45dd113b893.js   45.2 kB
  ├ chunks/main-c092d128ebbfab93.js        28.7 kB
  ├ chunks/pages/_app-6b8c5fb413ce69cc.js  663 B
  ├ chunks/webpack-e98feca5962ac6da.js     789 B
  └ css/5ccb302ca34e6d90.css               561 B

○  (Static)  automatically rendered as static HTML (uses no initial props)

✨  Done in 8.16s.
```

## Acknowledgements
Special thanks to Angela Ling for helping to fully design the LA CTF website! Additional thanks to Salma Alandary & Juliet Zhang for contributing to the website design and assets. Shout out to Andrew Kuai, Alec Machlis, Benson Liu, Laura Ness, & Gary Song for all being part of the core team to develop the site content and implementation! To contact the maintainers of this project, please reach out to [uclacyber@gmail.com](mailto:uclacyber@gmail.com).
