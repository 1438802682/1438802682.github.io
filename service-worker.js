if(!self.define){let e,a={};const i=(i,d)=>(i=new URL(i+".js",d).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let f={};const b=e=>i(e,r),s={module:{uri:r},exports:f,require:b};a[r]=Promise.all(d.map((e=>s[e]||b(e)))).then((e=>(c(...e),f)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1e9aaa0562168cfb3a8d1712c645be56"},{url:"about/index.html",revision:"2f3ade359e14b410f6d6e913cc31eaf6"},{url:"archives/2022/07/index.html",revision:"c58d261b7968acef2ba6a6131ea0bf53"},{url:"archives/2022/08/index.html",revision:"f45828cb5dfd46c46e58111da28d1ea5"},{url:"archives/2022/08/page/2/index.html",revision:"7e4993974c038c191825a64eec8c046c"},{url:"archives/2022/08/page/3/index.html",revision:"3626fcbfc0628c263a97f80fed29de20"},{url:"archives/2022/08/page/4/index.html",revision:"ccc5affa610f95129a4daa9e6c3d5ba4"},{url:"archives/2022/09/index.html",revision:"acb09d346c7788d09a740ea2f1cc0ca3"},{url:"archives/2022/10/index.html",revision:"3ada365fe7dc65e2ce4914eac8c0840b"},{url:"archives/2022/10/page/2/index.html",revision:"b1270005d339ccb04e47a328864357f7"},{url:"archives/2022/10/page/3/index.html",revision:"e4dc2f6ee26b4a2c0dfddf08d6482c6d"},{url:"archives/2022/11/index.html",revision:"c8ca45056ecf2501dfb005db6801c11e"},{url:"archives/2022/11/page/2/index.html",revision:"8eb3d25e4f4d7db086c4a6eff0e84d93"},{url:"archives/2022/11/page/3/index.html",revision:"be03a8074571e2d1356c94c83f4ac4a4"},{url:"archives/2022/12/index.html",revision:"3f2c8f05f17f63c0bd79f5f5774837e8"},{url:"archives/2022/index.html",revision:"e12da0b20106e06cd0144be515d45d43"},{url:"archives/2022/page/10/index.html",revision:"3de78c6d50378444a35305f281270bbe"},{url:"archives/2022/page/11/index.html",revision:"1f104c8c7a4490e5b42584ae7c9f4e8b"},{url:"archives/2022/page/2/index.html",revision:"4d85ca976cbf1d1bb38236861f69f967"},{url:"archives/2022/page/3/index.html",revision:"a1fde0ac581102b3a6317f38fd0957fa"},{url:"archives/2022/page/4/index.html",revision:"fd928bbf3f4b814f21c8eb6e418e183b"},{url:"archives/2022/page/5/index.html",revision:"43775cd76a391cd232b2eab67e000b23"},{url:"archives/2022/page/6/index.html",revision:"ccc7c22cd845ddd0964a014033264273"},{url:"archives/2022/page/7/index.html",revision:"6e93af7700a4a189245c06aab528bc1d"},{url:"archives/2022/page/8/index.html",revision:"e431384e690f8726181e03db0a1b7a40"},{url:"archives/2022/page/9/index.html",revision:"4082fb82306259807fcc01f82ec70172"},{url:"archives/index.html",revision:"7287528b497b858f2a1328656ad9a446"},{url:"archives/page/10/index.html",revision:"610abce4979a677e2c1619fa72944024"},{url:"archives/page/11/index.html",revision:"dcf50f447dbeb220b3b08c642b50dceb"},{url:"archives/page/2/index.html",revision:"10a8f34ff7ca57816d469137f6eb4b32"},{url:"archives/page/3/index.html",revision:"b120f25fc91f277e53deb63c15c89d38"},{url:"archives/page/4/index.html",revision:"e32c85aafef10e23de6c45e2baba0c04"},{url:"archives/page/5/index.html",revision:"7a58487edc0a4014b8e997a53b3d36eb"},{url:"archives/page/6/index.html",revision:"2bb475034a8d84103e1b95a7ca3c80f0"},{url:"archives/page/7/index.html",revision:"36630216128598f5aa21861725e9b440"},{url:"archives/page/8/index.html",revision:"ccad4f9b79b3e1f78d38cba5e4901b24"},{url:"archives/page/9/index.html",revision:"0a3c2166c6a4383ee7a5af80249a17ad"},{url:"categories/408/computerNetwork/index.html",revision:"9de1608fc4ce4bdef5683d55ec39b4ca"},{url:"categories/408/index.html",revision:"62e6b24d732d1a2c4134b093f78ac137"},{url:"categories/Algorithm/index.html",revision:"f43e62b4876c13e4b0f4dfa4fc51ca8c"},{url:"categories/English/Grammar/index.html",revision:"57042cd7411ddbfd79e73748ed0bdb35"},{url:"categories/English/index.html",revision:"0347621baab3d03fadf6e3a18a2cec67"},{url:"categories/English/Vocabulary/index.html",revision:"60e1c310f0f0410d9031c4a4662644de"},{url:"categories/Git/index.html",revision:"4620b650b493456d5db50bfd2203021f"},{url:"categories/Hexo/Butterfly/index.html",revision:"cd78b5c45c001b37307e969a437c0a91"},{url:"categories/Hexo/index.html",revision:"68f6bb3a057dfb3c46cbda92ef2d5411"},{url:"categories/index.html",revision:"88735717233c337b6d3eedd14f100b23"},{url:"categories/Java/index.html",revision:"4a8e3e535ab6fc6bdac613f514f6eae6"},{url:"categories/Linux/index.html",revision:"e6ed8c13d23d6090da49e060b79eff8d"},{url:"categories/Math/HigherMathematics/index.html",revision:"8d2e64b5843c335355bfb3ec033328d4"},{url:"categories/Math/index.html",revision:"3fe7e6e7a4acdc27360c47c70d6a5d24"},{url:"categories/MySQL/index.html",revision:"df9c42a73d6646ceb9fb6ba641d2012e"},{url:"categories/Programming/C/index.html",revision:"a47c87b2e10761737dc6a21e9fc2b52b"},{url:"categories/Programming/C/page/2/index.html",revision:"cdc01ac5c742a4ab1a9bf0326f46da68"},{url:"categories/Programming/C/page/3/index.html",revision:"3d98f75403d0fc750c8e387406570c44"},{url:"categories/Programming/C/page/4/index.html",revision:"4cd6715418b450df207b4a6fa859d687"},{url:"categories/Programming/CPP/DQuestion/index.html",revision:"754704e385b92b66e8d87e2e881e7edf"},{url:"categories/Programming/CPP/index.html",revision:"6e4864478548c263e732c02ad1a609e7"},{url:"categories/Programming/CPP/page/2/index.html",revision:"2be3b21ae5e820b8df91ebabd3fae4bd"},{url:"categories/Programming/CPP/page/3/index.html",revision:"99683867e8e5bcf6a5465fb4d2e58547"},{url:"categories/Programming/CPP/page/4/index.html",revision:"bc7f8167a9e0c7600e8459d642db4128"},{url:"categories/Programming/CPP/page/5/index.html",revision:"b8feaeb136c5da520a2f0504d9024607"},{url:"categories/Programming/CPP/Project/index.html",revision:"7354a61bebf8d2ac730a0c844d847613"},{url:"categories/Programming/CPP/Project/page/2/index.html",revision:"7becc75a8b0fc71b33e8c1b1c9268174"},{url:"categories/Programming/index.html",revision:"7b1eb9ea8457fc908001d72abb31356c"},{url:"categories/Programming/page/2/index.html",revision:"472a90ea25983d45b236f7c89f3a6e62"},{url:"categories/Programming/page/3/index.html",revision:"963957f2a5099be41e7412ba16593f0f"},{url:"categories/Programming/page/4/index.html",revision:"d37dc39963be9594436dbbfe86807979"},{url:"categories/Programming/page/5/index.html",revision:"8ccac570ae370979594653fea8ef78fe"},{url:"categories/Programming/page/6/index.html",revision:"815b304662198479ac7fbe9f346659a3"},{url:"categories/Programming/page/7/index.html",revision:"0fbbcba2303d673c66e98d8701fe0140"},{url:"categories/Programming/page/8/index.html",revision:"6474996bdb2cf48cd9bcca071fa455ea"},{url:"categories/Programming/page/9/index.html",revision:"c73bca803832bfde62bdf7e45dd69d53"},{url:"categories/python/index.html",revision:"8ddb4cd7d3918c3f389459fdf31d9892"},{url:"css/index.css",revision:"bfa1099a75a01a9a8f7026a64f1d9059"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"game/index.html",revision:"1078f00c56682fa8c440947bd94c23ab"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.png",revision:"4221f2b75fed442abbe1d1da04ae950e"},{url:"img/favicon.png",revision:"113b785a351b5fb2d582f7308790ccc0"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.png",revision:"4a1deb0101b09779956d919d7c699921"},{url:"index.html",revision:"8522ceab42451d97fe726c6ef991b2de"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"caff2e9fe63c4b26a962ca7dfb4fae98"},{url:"live2dw/assets/assets/moc/haruto.2048/texture_00.png",revision:"56ff69b411abfc80cb68d0b1267959c5"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/10/index.html",revision:"9de3134daca233e68595841435bedd6a"},{url:"page/11/index.html",revision:"3f1f5f48ec320b13be69cb8b1aae5316"},{url:"page/2/index.html",revision:"7c04d6cae8d0c9b946c92ed183f20789"},{url:"page/3/index.html",revision:"75bbe49521fe03145e866bfd4d3703b7"},{url:"page/4/index.html",revision:"f853528a0c366e2e17ac14dc2c3f6c8d"},{url:"page/5/index.html",revision:"497da82752e51b9cf0dbf420ee549926"},{url:"page/6/index.html",revision:"1111692dddc93c16d577f6c5a0ceb90f"},{url:"page/7/index.html",revision:"6dbb9f27355d6bf37eba3a806d0d01dc"},{url:"page/8/index.html",revision:"eaf31a5b823fee1dc4ad50043367accd"},{url:"page/9/index.html",revision:"55c1606c804eb70cfdcff56867b69dc1"},{url:"picture-BG/index.html",revision:"722a3bf8dc8fa0416c16c3dad1d8348c"},{url:"picture/index.html",revision:"96e907513afa3facf9f03db7e332c753"},{url:"post/107469e8.html",revision:"3f9c6a0deb69d8a1c77b2c195591cba0"},{url:"post/12b219dc.html",revision:"a5d18a109c007da6e8ca143a350d70de"},{url:"post/136817cb.html",revision:"1af8a8bc0ce056cabbe39d5226e56d94"},{url:"post/13e173c0.html",revision:"d96b07bb618c6bdd5f711cc6a9ba7ee6"},{url:"post/14e6f1eb.html",revision:"d641071ee69e025ecb9cc1d98ec1e74d"},{url:"post/17aafb82.html",revision:"f9ac9f52afb3b70d190c122a1f482910"},{url:"post/1d02ebea.html",revision:"69aaa02a1a131cac79a78a8b830a4630"},{url:"post/218c7301.html",revision:"2ae3fecc12241f1c9c5ee37f875e8733"},{url:"post/21c70a52.html",revision:"bf4a33f8d057252f19636bb11d7c32fc"},{url:"post/2279719a.html",revision:"76e4a7c37afda908a962cdf84ccd5b64"},{url:"post/297a89d9.html",revision:"fa11d591e8d7fbce2daea3dd75027398"},{url:"post/2b15f09d.html",revision:"a82dd28a7e52a0ed6c5439e8ccfdaad7"},{url:"post/2e197172.html",revision:"4f0b8bf34a6d0ddbc2c788056217f98b"},{url:"post/35f67eeb.html",revision:"f5c512ef5ffad0a873279e4f4a6d8848"},{url:"post/3613e636.html",revision:"f155f62bbf76537482116527bf283539"},{url:"post/3f943c81.html",revision:"38fecc7f5858688e0038b0005745728b"},{url:"post/4569e647.html",revision:"2f3cd78f952413cc86c83595cecf06a4"},{url:"post/48bdaf25.html",revision:"f95de0cc0a22adfe31dfe852a5bb4daf"},{url:"post/4cca7a5f.html",revision:"b0f74193a1dd641481f515933d7c724e"},{url:"post/5375af34.html",revision:"20f451c3b0787c4a41dd8b5cc133dfd9"},{url:"post/56e6e333.html",revision:"241a0e9f6794f5da511381d0b4bd5982"},{url:"post/570b279e.html",revision:"9e095612ecac9f405c6b80908d6474f5"},{url:"post/583ca853.html",revision:"a405512d358cb639219f0a08cd94821c"},{url:"post/5d626569.html",revision:"247ffaf3321e408027c4532a4152733e"},{url:"post/5f6de10f.html",revision:"5735680d70b99b2c0dd81f5743e425db"},{url:"post/60244a2a.html",revision:"87526235e342a7dadcd12251626c696c"},{url:"post/607cb866.html",revision:"57574cd7f44e97b95f8b5d9a8dd9e6a0"},{url:"post/616b8959.html",revision:"70b84525b17bc2a0a2a2c9a5381d1cbc"},{url:"post/618c8f74.html",revision:"4aa62323e52e6a105ddc255624511d74"},{url:"post/65f175f3.html",revision:"8f7038135f316ecf23fa3c9a3d797431"},{url:"post/6a7e0b6e.html",revision:"e793f2375c762e9fc6c3fc40d0b2ecf4"},{url:"post/6b6155ea.html",revision:"9d8b4e72b58e6cd3eeecb34e59f321aa"},{url:"post/72164e0e.html",revision:"3ad7bb16a400a4b70c11e8404c28ad8e"},{url:"post/728fe936.html",revision:"5676b3d3fc263607ebc2aad37846be19"},{url:"post/7357f1d2.html",revision:"f5916b5348ab936213f52b8072b9bf31"},{url:"post/73acccd.html",revision:"d809195d4c11107b25f217ef288bcfd4"},{url:"post/74a5716f.html",revision:"65c680efbaeffaf5356945c9cfdf016b"},{url:"post/75a942c6.html",revision:"c19ff208912e13aaaad516e2a5da5c80"},{url:"post/78ae65ae.html",revision:"9dd74ab44e9ddcbe01fe55a988fac793"},{url:"post/7977ead.html",revision:"454736689e81ffe5d34d81d403eb2083"},{url:"post/7af7302a.html",revision:"c1e0036c064737b64abef6985616bd18"},{url:"post/7d0e0323.html",revision:"8cd176cd7c3f74040aca81bb58b60b37"},{url:"post/7d7b0878.html",revision:"3c2224c94b541a830edf8fcc46d2b05f"},{url:"post/806d473f.html",revision:"308f8bd33304b2fc9983d02013366e9e"},{url:"post/81d713b6.html",revision:"c362b504a65571a077fb764b951b6deb"},{url:"post/8343ef68.html",revision:"ab4b1527aadce2b14ddf02f828e77f19"},{url:"post/84f0a32f.html",revision:"13a81fc54aada831d81f273b20db17e3"},{url:"post/868c7499.html",revision:"843a237cc7742c98f61ac3fef9a56373"},{url:"post/876bee38.html",revision:"b66ed3901132edb18e0d3b3226dad84c"},{url:"post/890e68d4.html",revision:"2bee778adc937734e3fb297a1799cfe1"},{url:"post/8a3216a4.html",revision:"5db8e3dcb9941f36ba7a71aff616e9c3"},{url:"post/8f9da6fe.html",revision:"9b8edcdf4083017f53ebbd29e50b03b7"},{url:"post/8ff97697.html",revision:"0a9c7c26b66a0ff7e39cc821de4474d2"},{url:"post/92a027c3.html",revision:"1e5915c858c373abd887d5ab66c1d9e2"},{url:"post/94e82c82.html",revision:"67c72240a70082d6b15c16cd4f0729b7"},{url:"post/9d0f9673.html",revision:"d092b79a495824357583db73ccba897b"},{url:"post/9dc7f79f.html",revision:"fb0d8bcdd28e3dc0fc2e533d868a9f9a"},{url:"post/9ef88645.html",revision:"fc3ecd167c450969f417ef1238638c8c"},{url:"post/a1c9fb61.html",revision:"8fbcad2f4bf060d73082e28b50701da3"},{url:"post/a1d1d3e4.html",revision:"1c90158f72660f8d44654d45ec4f3e02"},{url:"post/a45a6071.html",revision:"e50e68b779dbac4f6ae581f0841764f5"},{url:"post/a5ee83d3.html",revision:"b8299a9c5c0ff91e9d747ef23cdff837"},{url:"post/a9b5bacb.html",revision:"3073a531c5672ed7458bc2124ec6d6f2"},{url:"post/afda3148.html",revision:"362cfdba8b1564b2b0a507d301187890"},{url:"post/b1068ff7.html",revision:"a90ce23a4abe15fc46be20d7a69827c8"},{url:"post/b3383107.html",revision:"2941725218d8b10f7ac4b22cc25378a2"},{url:"post/b48031f.html",revision:"0919247aaee041f332e6fbe1928ee658"},{url:"post/b8a18feb.html",revision:"c2e086d2be0896730d2a7c0d12d3d4e3"},{url:"post/bb4f1c32.html",revision:"886bf8dc229476f0b6bb5bb218307d70"},{url:"post/bd470ae2.html",revision:"ad0f387c14fbccfac22e1fc71cce16ac"},{url:"post/bdcc3023.html",revision:"4157235ce9c7723b7bb0c0d2832e2f7d"},{url:"post/be9f6e35.html",revision:"b545b279813565c612fb802caf58d851"},{url:"post/bee4b2c2.html",revision:"7da093c35a003401eb7213e46a10835b"},{url:"post/bfcf6434.html",revision:"f2e8efa22269adb403d8223181eb9b3a"},{url:"post/c517fdec.html",revision:"bd7c26e5dfab95f693c9dd45976a14f7"},{url:"post/c959178a.html",revision:"a939157f9c87b0b7bd59ae2673b281a1"},{url:"post/c9703b4.html",revision:"9aeabd510a66ff36b04a007bf35fef34"},{url:"post/ccc10390.html",revision:"a01d433e4097778228cb5b634d53d6da"},{url:"post/ce3b24b0.html",revision:"7f620ab02538664753215471f4b77203"},{url:"post/ce90d395.html",revision:"4f28daa36fab2fba492ef29c51c3111f"},{url:"post/cec14348.html",revision:"83a4a603ee5c7749ef1092bb3a541726"},{url:"post/cf5299f0.html",revision:"8b03e5a503eed2157ca607ee36987034"},{url:"post/cfae5f43.html",revision:"4eb6e4b39db66f18e226b517f48c9887"},{url:"post/d07e4b4c.html",revision:"f79769cda2da583354da53ac441278dc"},{url:"post/d0e87572.html",revision:"8d0f3abce0d559bf25a9290660d78c54"},{url:"post/d21414f3.html",revision:"5f6529289ef6f6aba1022d839d359273"},{url:"post/d68548b0.html",revision:"677df9718fbb59379bd38f6a1cd0cc3a"},{url:"post/d87cea2c.html",revision:"6dfe6e13915d2802fe8b0ede833fc781"},{url:"post/d87f1b1b.html",revision:"4f5d31062ba3a99af60fb677ff917538"},{url:"post/da04c6bd.html",revision:"80af2ecafc7022ba41ebf9b6824e624f"},{url:"post/db7fa94c.html",revision:"117c090ba3bccce3e3510e6f76540d18"},{url:"post/db8c6ea0.html",revision:"ee121fadbb765f7ffb751a8e6c93fdf2"},{url:"post/df681ed9.html",revision:"fda77234096ead4f6755b9b7e5db3bf1"},{url:"post/e03b0ffb.html",revision:"d51c3e507ebcb3feab275b142304055a"},{url:"post/e869f7c3.html",revision:"3d53d83ef4628d3e4be77244099436ca"},{url:"post/e896cd1a.html",revision:"fcbfa3c0274fff1299796496fde2f58d"},{url:"post/ea10355e.html",revision:"84ceb80af87656113313233f58d3307c"},{url:"post/eec960c5.html",revision:"2543646f21a70d33f5d9bafedc321b76"},{url:"post/efe35c1.html",revision:"0b5e2d1a3b6f640ed4b4bec31d651421"},{url:"post/f254dc1d.html",revision:"abab32893bfd46ba04b27ac93d9eed6e"},{url:"post/f63e76e8.html",revision:"342e55d44c83dccf10d525abf2d5c0d2"},{url:"post/f828300a.html",revision:"96aed61cb0f74c58d08aa80226df94db"},{url:"post/f8f1ac38.html",revision:"1ca00679d215b8b2775d821ccd671d44"},{url:"post/fc7c3087.html",revision:"0cc8634dd3c35f86ffee33f6688ca88d"},{url:"post/fe9385a0.html",revision:"1c09c83cdad58988a29c79690452a395"},{url:"tags/Algorithm/index.html",revision:"087bcbed0b5f3e987768bb065172f329"},{url:"tags/C/index.html",revision:"2c030c0c192103bb8ee74ef12c2c3d51"},{url:"tags/C/page/2/index.html",revision:"c5a6c7e1b744ca06bd58f70b8703a3a3"},{url:"tags/C/page/3/index.html",revision:"15a0f33f5e70b4c5663a00e4f38ee86e"},{url:"tags/C/page/4/index.html",revision:"229ec18d69b00387bd222fafae1b8725"},{url:"tags/computerNetwork/index.html",revision:"df41b034a9ded000c1a9f5c12d900f2e"},{url:"tags/CPP/index.html",revision:"7f68306dc9d37980c8fb5ff502f17a53"},{url:"tags/CPP/page/2/index.html",revision:"4f7fc10f3f7a2b42b1ecf7dea334216e"},{url:"tags/CPP/page/3/index.html",revision:"6c1677844b2c497283e07a53e89bea85"},{url:"tags/CPP/page/4/index.html",revision:"e55abf6c2074a4803dea402c59ab401a"},{url:"tags/CPP/page/5/index.html",revision:"ea6e74ad764c214d0db4a2646a5d9bad"},{url:"tags/CPP/page/6/index.html",revision:"2de989b6ac9e313bedb566ffb8bb38fd"},{url:"tags/English/index.html",revision:"ae4830772c2a16d1f4bcd1515d634dd0"},{url:"tags/Git/index.html",revision:"1efaa5e1f2a734b92d6f742084ae92ea"},{url:"tags/Hexo/index.html",revision:"162f781ba7698ba54f5ce492f1e35412"},{url:"tags/index.html",revision:"919f6ac1202a41a3ec70ee0c11d3e3d6"},{url:"tags/Java/index.html",revision:"e1e26749de4df702f4dbced39469de2e"},{url:"tags/Linux/index.html",revision:"f9473bad85af52508a5ce87206b90680"},{url:"tags/Markdown/index.html",revision:"36a74d3ad78b0993133ad0f1ec77ef6f"},{url:"tags/Math/index.html",revision:"18012524b6045f62ff6373094652a692"},{url:"tags/MySQL/index.html",revision:"862674a48a01dacb56fb4072b4788680"},{url:"tags/Poem/index.html",revision:"18762f7bc146da1324b50abb28d07f6c"},{url:"tags/python/index.html",revision:"72a17df7c6d51b8f926d000a494014f6"},{url:"tags/STL/index.html",revision:"2b3fe636f96fc12173b02e6a076b4203"},{url:"tags/vocabulary/index.html",revision:"d7245c53bce760c138abd46a0931f382"},{url:"tags/合集/index.html",revision:"94d0715ad26357acc38793baf7c278e7"},{url:"tags/域名/index.html",revision:"60466f1c4084c7e5bc1e1e88ad153ea9"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
