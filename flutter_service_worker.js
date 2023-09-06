'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9ad3d32d84f1af4e5104c583e78d6643",
"index.html": "b2571778573515421afad530df1c3c61",
"/": "b2571778573515421afad530df1c3c61",
"main.dart.js": "5b3b73b399ecc8f9b367165b52927d11",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d71fd06daaf45a9cfa688f7a814f7472",
".git/config": "38a81a99eab949faa496683aa8ffdc17",
".git/objects/92/348a5c2c4ab849ab9c5d7be7c42fcfb32e5f69": "3c0a1ce6dde3c3c3b01bc28e7ca8c143",
".git/objects/3e/2b97235c52d2271fdcffaf7368bdaf5edf9181": "1102423a1489040c5b8afd94ba31ea48",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/259c727af95753327d77fc84f32783bef18524": "e8b90df84df2840069dc5d6b3725a08e",
".git/objects/04/de2ba94d0b2cf5c3640eaaf1abafade78116cf": "09ea615b5aacee3e354d23920781ce39",
".git/objects/6a/710a3f290776716aad9816ab79c735e464dab9": "381f723e985aefcbd77f30399d4996ca",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/acde08c6a133f95f2e67f790cd2e5ae345d440": "23f60eee06438d2d95eaaa5e3006f16e",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/0b/77097c57f5ce68e0527c07d37658314fc6d176": "68fc18dc7d4453b605046c37fd677bc9",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/648e4f098a5ab5eca94450e830d1290a9d92f2": "7ca7dd390d23161f63711fb991a59bbe",
".git/objects/33/d9a01bfb730cb0d549b1313933040fe4f65a0e": "a8c2b8f9210cc8e7639b9e0ddcac152e",
".git/objects/02/042b7fd04eacfbb64c4cb21be919f761b9af10": "87656cf477a94478e6143d7432e6ecff",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/0002f7524d337ad7762873e519b22da3b8e586": "e354c92b90d9eb7a6923e89a6e867c60",
".git/objects/ad/80e0412e5350ecf7abd218dbe938732539d796": "18ac345689bb800d0ab4aae50866183c",
".git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/19036b430d032e2752e6b2e5d8b9e5eab46409": "63256e6aeb91da71f72ecb06addd4a72",
".git/objects/be/fe04de0d5a541e9766b27aff6769af603c9ccc": "1f36f7adae434948f81a2bb4a287401e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ab028b2dd764355f7d05a84eb807ccd96dd23a": "915bf3c57fb4d5e59f0b8c9d308e6f0a",
".git/objects/ae/98c0e7d37e17e1a268dd17e928e505939e83bd": "d1164842b9ab2be3155314368e9fdce0",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/b4bdb88fe64c0932e848d4cf4c3c6ec591aae5": "9d1cffceac808e2ef3bfc3c59c40c27e",
".git/objects/f4/ab69003a30d0f2cd18fc5176ef8256bd101384": "0ea2acd3682b4121fb480f91a152de8b",
".git/objects/f3/a3a32d2b9338f0075c1d06e50ed9354c476aaa": "fc1139340a6c428cafa36e8e1a34e512",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/fb79e92f26a061155a7afa367f162df68c0b6e": "7727bad3d1c59dae0e9edeed1452a5a5",
".git/objects/c9/0a4ecba852ca97f2e60c8031a557983174512c": "eb57aa17f215fef29091c8eb91c6d2e6",
".git/objects/c1/51a6544963b148c0299d70b60dcdc8d05ba6c9": "43c0b25336a05edd5ae45f9a71f50827",
".git/objects/c1/89a708f72cbf7fed529e75af62e3ccdba5bf80": "689aa0f02c2a1f54ec5659a77f548254",
".git/objects/ec/47a2f2ae5521a9f89033b1475992b33f339f36": "914e1c8c5bd7901f3a8dce8bbc55d070",
".git/objects/4e/55e92d8ced2e3e9a9e91f3337af1c752dfeccd": "ce06bc3c4478f9dd8c7c9e85b4dcc80e",
".git/objects/20/a6895ec4dd4be92a2fc5efa108f0db4b45d596": "6d3f82510a165b74f195c1bc7b667ab1",
".git/objects/27/d4099e0cb2c7b8b6efe8bfcbb52f916cfb69d4": "170e3b4b42b23b695be71bd142e5dbc2",
".git/objects/89/73bb10d52cecbde5c2486a353a8569f83e5a71": "3bfed87c2eb935b629e92f6edb2104ba",
".git/objects/87/021b8b8e017a31768173f2e15d31543390c293": "86acbf9955fa79324ec969af200971e0",
".git/objects/87/84dc37d0172574556f5a9e05eddd4ededb48b8": "1007a0257f197185073cc1d7e01640d4",
".git/objects/28/9400aaf0bd4935318eeee9473b0b2593bf0d7b": "e865d797f08f7b8b34245cbef4f988d1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/d9f9bb46b90288fa99286ed31356056be0b9ec": "482da701f1ec7ad10d66f64fa7f25b12",
".git/objects/10/0569b4630d559b288a0e47421c25aa5846bb76": "6127d91a10b3fd9be143e77c909b1130",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/44/253a54c73aea8f17aec2594c1b86ffff769ef8": "5463a07fa76613714dbde6b7363e932b",
".git/objects/44/c1b47eb03a5ea910f72823740c6c476f72962e": "a2e084ac3960fc86cd2677e7beace634",
".git/objects/43/d369df342f62b9dacf5045ea8c643909852996": "ab74de8f94a2ccb23f7174be3aaf68e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/8bcb9f19f370d1da76d3f79c6cf4680d710baf": "8e6eb8be770d32b10bf14a4d7cf69c2f",
".git/objects/36/f7ba0359a4d8cf27be885abcd28ae5ef602859": "94325f814292e2046d97a8fcba6146be",
".git/objects/5c/ed7bbe775085875d166891da37915829a6b790": "0000b22e1d3d4b5a74565552894ee331",
".git/objects/09/d8f3a078d18bda1971fe75e61a101d3b70134d": "97baf337526e123fe3e6042dbac36273",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/98/1c5f8589cda3704bc1e3e61f0f3ccbccf59546": "d23753dd94b38eb35823c5fe9ed62f9b",
".git/objects/53/287069c309b7d5eed33221f2f2552bff726851": "560e58be22b2e36d561728f4e954d9d7",
".git/objects/30/51c23c29390a16aacaffee0cc3ed3cd2e15601": "af361ceadbd660e154f092759d45973a",
".git/objects/5b/41a3a9959970fdf471e810d6dc1ac8e3cee870": "4017eac8e01d23d7913a15b5160fd277",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/1c3074be1969b872fdc5a5522a711f0a054760": "4e283c6799b5f8a0fc7e2e9992e096af",
".git/objects/6c/70c1516aecdd1c9e65324a8414c8bf95d886a9": "1f6486ed93fb599d66e6c0745f471d4f",
".git/objects/39/935f00e484e8cdf361c6e6bbac0f9704091cc6": "d0664e03f50e27ea92dafff91e2eaaca",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/bf/a0b872642626768609a3f60e7312eeb145ee91": "837cb02150764a723d48b555be0d6fe0",
".git/objects/bf/894bf350109f1e713ac9e8908fe8b42270b396": "57008c2fb798fa7d9e8f723c052f60a3",
".git/objects/d3/63f284cf4421a84bf1babcafa5abcaf45b98f2": "78cc86f48a044c2e43f9133efd3de97f",
".git/objects/d3/91b810a4257f36cc69060aab14635306334e6d": "5a6df2ceb7b985d0354c5d5d49225b79",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/ed6015507991e2ef8d90376d721dad994247f2": "8534aa4108283b32cfed46ad772889f1",
".git/objects/b6/c44dacd681bcc356ebb6e8dc4b3512deef8b0a": "986ad911a8a8543ab9c9fa57d1e82d87",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7b74a36899df87eed171e36084edd2e97a8f74": "475eb1ae8b507181934f1d165ecdd472",
".git/objects/a8/70d7a207fa83ae2385d160e0c01e2a2db286b4": "a9173d0852bf82cc8091a303c203182c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/d340aeeeaf979e1a84341688bb746b0e36166e": "bd9c6dcd16ff392016b86203d7cd2cda",
".git/objects/cd/25d02396dc958f78381fa50149e2465e7fcfc1": "cba4a7d36b782d2245e16b2f0df88d99",
".git/objects/f7/0df6eb9f2f20a9dd3e446a5676e5564b34e77a": "e0bcddbdcd76820f4207406ab469b5d3",
".git/objects/fa/01af961958a7fed13a099877f6ea1f5bc8c919": "e36c251f28cd72f84d0b6f81b01dc1d1",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/c96dd093e1807809dfa81bbc6ee170d956484f": "86a8d806f0657211c71420af733e2dd8",
".git/objects/f8/6915864a316dac6ebb1b85eae9aed7959e24d3": "2ba384489a8c088b0b767c7720de7ec2",
".git/objects/ce/55bbc15a22064df510df03d356c91de54c427d": "2b59501c1a0f24154cb13db027620fd2",
".git/objects/e0/1acf6cef510b16ea3b2f3767e8e5bcdd122bc4": "63cc4c8c50fe5744c57a3217f0a58925",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
".git/objects/2c/51296a11c667a52dea8ff223efa48340d76e11": "747d8cd293fd8314163bfb39e318cbc3",
".git/objects/79/87f4005706dade7b8ebe9f92dbe8c3e01d4985": "6b740b4caab1dc42bb7362318e789903",
".git/objects/79/f05f48f90b539baa7772554aece1f12a80919e": "fff584d524f223389351b7ac8f138523",
".git/objects/41/54a916a8f6e84f9637a2d1ecbfed6acfe50e6f": "cbb8bd46cd3f07f7caf8695ba6df073e",
".git/objects/1b/5220d390aaaffb19e72bac45d0fd06e8761270": "d9a2104332b7fc1bf106bfeaae3409fc",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/15/cba9284fc6ed64147bb58524ca94c813b22002": "cea0d50e5391c79b209c07d78ff7afbb",
".git/objects/15/45d1b49ab0c0b6aa15b841a0c06330859419ac": "77f5315b7bd1f9d9e8a4c0583df27b28",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/58ae2b0abf850dd6f0bdfe8be3ed052bdcfca8": "26f878e0e839ae9505652c3b1b4c271d",
".git/objects/71/f7eb2c928678378b2aa6242957e4847989e521": "2c79da4bc3f212c5faaac60031bdf0cc",
".git/objects/1c/18833a858410ac67344084ce02a1aa3b8e9aec": "8d3df2fd9dfdfb87dec7f6d62885e06c",
".git/objects/47/a394dd11ce9b5b5338f75ff673dd93cff01d16": "f4f46892dc89d69dcb9cb8ccd2df8e84",
".git/objects/78/603630876bcb396497ca2e49fe8c6b9ad36629": "479e53bc1c59f53e90ddf6c6551cea20",
".git/objects/7f/931e087f846894dc49754924831123d0991709": "ecb78a5fd7efba4bf282e46b4287f3e5",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/1bc67f957cb62dfde52b8a8a9f84cb3b1fa621": "29241f1b5c17efa7f5eae2e668de1d47",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3562cbb1b4c879f55f8ad58b0ac1b4e4",
".git/logs/refs/heads/main": "3562cbb1b4c879f55f8ad58b0ac1b4e4",
".git/logs/refs/remotes/origin/main": "5a0b5a598405a14507775f5a58fdd449",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b2bc9afb1a9a6fcf380c05f27cefa7aa",
".git/refs/remotes/origin/main": "b2bc9afb1a9a6fcf380c05f27cefa7aa",
".git/index": "879a8588fe6355a39e1b7aad76d04b9a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "f59ecc3d9ffa6575a6088c3058144b82",
"assets/AssetManifest.json": "cf817cdfb9c6c6302e4b4d93a22a2b21",
"assets/NOTICES": "3c427d420848e008ead795aa4ac63b64",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places_hoc081098/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_hoc081098/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c0d439d8a6edd34690fea2fad5ba2439",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/ad.png": "94830945c0dedc913c0a2d4c93a72d2a",
"assets/assets/chicken.jpg": "725251d1adba54758e5b6bd66b698164",
"assets/assets/background.jpg": "f94c7801c24aeaafb8e27e7ae612cbbe",
"assets/assets/logo.png": "8a9b7af23913e7e415adbbabf765d61a",
"assets/assets/bucket.jpg": "1fc465359d12dae6c45b685a023076ee",
"assets/assets/google.png": "1e01fe36388e7453ab926c23b190827c",
"assets/assets/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/burger.jpg": "e821631c779ead1b118885894684f1b3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
