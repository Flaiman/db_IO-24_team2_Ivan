/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "035c912f178b41aa7272a5e7000650a1"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "e20095e8e307f108b0186439d7d38caa"
  },
  {
    "url": "assets/css/0.styles.f932f002.css",
    "revision": "8bb8faa6bed22589d6b1ef3f873de837"
  },
  {
    "url": "assets/img/img1.8d04b24e.png",
    "revision": "8d04b24ee29a3b1bc1dbdfa5733a805f"
  },
  {
    "url": "assets/img/img2.59d03b24.png",
    "revision": "59d03b2449326e508d618b3e2c49f0bc"
  },
  {
    "url": "assets/img/img3.b9c5b013.png",
    "revision": "b9c5b013cc9ba09128f1d765bb245b8f"
  },
  {
    "url": "assets/img/img4.4c458222.png",
    "revision": "4c4582227b196aed6d4b8def377408e6"
  },
  {
    "url": "assets/img/img5.5c33eceb.jpg",
    "revision": "5c33ecebc563500627dcf3ad56d458f0"
  },
  {
    "url": "assets/img/img6.887ec356.png",
    "revision": "887ec3561c72bca3a158279e46cbec72"
  },
  {
    "url": "assets/img/img7.cf767514.png",
    "revision": "cf767514a006470b5e39b917ea6fa3ca"
  },
  {
    "url": "assets/img/img9.fae5bcaa.png",
    "revision": "fae5bcaa5599ea6ba481e5ebfb89f8e5"
  },
  {
    "url": "assets/img/relation_scheme.94590443.png",
    "revision": "9459044361aadcdd25fe8aa59afec3ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d21583a9.js",
    "revision": "f58ffd564dbe68d17f465acb641bea07"
  },
  {
    "url": "assets/js/11.31464515.js",
    "revision": "41d530c993226408088535acef90d045"
  },
  {
    "url": "assets/js/12.b59096b7.js",
    "revision": "c4f816a6689841d072a77077bbb587d8"
  },
  {
    "url": "assets/js/13.9d4b1c53.js",
    "revision": "500969338e3b6af0d075c42af7a153fc"
  },
  {
    "url": "assets/js/14.f69e382e.js",
    "revision": "33f28a353460de5c2e7b3877356bb9ec"
  },
  {
    "url": "assets/js/15.a73220e8.js",
    "revision": "b7a75f89c5f07346f4631fb05c4990cf"
  },
  {
    "url": "assets/js/16.16dcd3a5.js",
    "revision": "49ba3e690591f5e8e1688661ee3e8dae"
  },
  {
    "url": "assets/js/17.c2abdac7.js",
    "revision": "3d66eb8157e737773bf83a413559fa56"
  },
  {
    "url": "assets/js/18.42ab4df2.js",
    "revision": "364f0e4c6cb957646b68fd0e890911c0"
  },
  {
    "url": "assets/js/19.948b30a4.js",
    "revision": "a2d8369b565f1d69ee768b43fe2ecdba"
  },
  {
    "url": "assets/js/2.78838e08.js",
    "revision": "1fdf5486e0cf270145293b3a757bf562"
  },
  {
    "url": "assets/js/20.a76cddd9.js",
    "revision": "46969e137d53148b09770d03aa8a864b"
  },
  {
    "url": "assets/js/21.f6ffcc55.js",
    "revision": "c1c37296a9deab64a114a48977550aad"
  },
  {
    "url": "assets/js/22.75a0cade.js",
    "revision": "50ac91f6c7a4f51cfa4d31fdc02bb856"
  },
  {
    "url": "assets/js/24.125e06dc.js",
    "revision": "d013320cd2902fc5bb30647f9655c382"
  },
  {
    "url": "assets/js/3.3866302b.js",
    "revision": "46314112b71a99927bcdc123b2648111"
  },
  {
    "url": "assets/js/4.168cf795.js",
    "revision": "2d1b7c06db2f815ba01c1e80e00361ac"
  },
  {
    "url": "assets/js/5.d62c8e1a.js",
    "revision": "69943210bef3704b699ff09ec263ae42"
  },
  {
    "url": "assets/js/6.951cdcb1.js",
    "revision": "a831814cee9592c45aaf9e28f5e49d77"
  },
  {
    "url": "assets/js/7.35bc2440.js",
    "revision": "e715ecc2c5f0fc9969a1ec63ced8fea0"
  },
  {
    "url": "assets/js/8.498fadc3.js",
    "revision": "f156783f60c63a85dc7b14da0459bcdf"
  },
  {
    "url": "assets/js/9.d58d17c3.js",
    "revision": "3f08a10756cda16945518e33f7752e7d"
  },
  {
    "url": "assets/js/app.87150a76.js",
    "revision": "b64c5cc537fa2546f0d02080cbe72749"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9c780ec06c41877cc255fdecd0a1e9f7"
  },
  {
    "url": "design/index.html",
    "revision": "ca7d748b5a0b1b159bdb05525fcf17de"
  },
  {
    "url": "index.html",
    "revision": "2d4a5ee905adccdd7d90bf7b0cae41d6"
  },
  {
    "url": "intro/index.html",
    "revision": "f5a4feb2bf41363a4a77c75b94a4efda"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "21b43b34f084a32859aa698a99cb1b55"
  },
  {
    "url": "software/index.html",
    "revision": "f39e19b2dcce144490158c538550b3fd"
  },
  {
    "url": "test/index.html",
    "revision": "9ced7104daa6cf5a8f1746893e365039"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
