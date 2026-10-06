/* RGUHS MPT Paper III - Study Notes - offline service worker.
   Strategy: all pages are PRECACHED so every internal link opens with no network.
   Navigations are network-first (fresh when online, cache when offline); static
   assets and cross-origin files are cache-first. Bump CACHE when you change this. */
var CACHE = 'rguhs-paper3-v1';
var CORE = [
  "./01-introduction-to-assessment.html",
  "./02-screening-head-and-neck.html",
  "./03-screening-cervical-spine.html",
  "./04-screening-lumbar-spine.html",
  "./05-screening-shoulder.html",
  "./06-screening-elbow.html",
  "./07-screening-forearm-hand-wrist.html",
  "./08-screening-knee.html",
  "./09-screening-hip.html",
  "./10-screening-pelvis.html",
  "./11-screening-thigh-ankle-foot.html",
  "./12-direct-access-and-self-referral.html",
  "./13-physiotherapy-diagnosis-msk.html",
  "./14-msk-special-tests.html",
  "./15-diagnostic-imaging-msk.html",
  "./16-exercise-testing-msk.html",
  "./17-recent-advances.html",
  "./18-upper-limb-fracture-assessment-form.html",
  "./19-lower-limb-fracture-assessment-form.html",
  "./20-prescription-guidelines.html",
  "./21-soft-tissue-injury.html",
  "./22-assessment-oa-rheumatology.html",
  "./23-ergonomics.html",
  "./24-icf.html",
  "./icon-192.png",
  "./icon-512.png",
  "./index.html",
  "./manifest.json"
];
var EXTRA = [
  "./pages/p003.jpg",
  "./pages/p010.jpg",
  "./pages/p026.jpg",
  "./pages/p027.jpg",
  "./pages/p028.jpg",
  "./pages/p030.jpg",
  "./pages/p049.jpg",
  "./pages/p050.jpg",
  "./pages/p051.jpg",
  "./pages/p052.jpg",
  "./pages/p053.jpg",
  "./pages/p054.jpg",
  "./pages/p055.jpg",
  "./pages/p056.jpg",
  "./pages/p057.jpg",
  "./pages/p058.jpg",
  "./pages/p059.jpg",
  "./pages/p060.jpg",
  "./pages/p061.jpg",
  "./pages/p062.jpg",
  "./pages/p063.jpg",
  "./pages/p064.jpg",
  "./pages/p065.jpg",
  "./pages/p066.jpg",
  "./pages/p067.jpg",
  "./pages/p068.jpg",
  "./pages/p069.jpg",
  "./pages/p070.jpg",
  "./pages/p071.jpg",
  "./pages/p072.jpg",
  "./pages/p073.jpg",
  "./pages/p074.jpg",
  "./pages/p075.jpg",
  "./pages/p076.jpg",
  "./pages/p077.jpg",
  "./pages/p078.jpg",
  "./pages/p079.jpg",
  "./pages/p080.jpg",
  "./pages/p081.jpg",
  "./pages/p082.jpg",
  "./pages/p083.jpg",
  "./pages/p084.jpg",
  "./pages/p085.jpg",
  "./pages/p086.jpg",
  "./pages/p087.jpg",
  "./pages/p088.jpg",
  "./pages/p089.jpg",
  "./pages/p090.jpg",
  "./pages/p091.jpg",
  "./pages/p092.jpg",
  "./pages/p093.jpg",
  "./pages/p094.jpg",
  "./pages/p095.jpg",
  "./pages/p096.jpg",
  "./pages/p097.jpg",
  "./pages/p098.jpg",
  "./pages/p099.jpg",
  "./pages/p100.jpg",
  "./pages/p101.jpg",
  "./pages/p102.jpg",
  "./pages/p103.jpg",
  "./pages/p104.jpg",
  "./pages/p105.jpg",
  "./pages/p106.jpg",
  "./pages/p107.jpg",
  "./pages/p108.jpg",
  "./pages/p109.jpg",
  "./pages/p111.jpg",
  "./pages/p112.jpg",
  "./pages/p113.jpg",
  "./pages/p114.jpg",
  "./pages/p115.jpg",
  "./pages/p116.jpg",
  "./pages/p117.jpg",
  "./pages/p118.jpg",
  "./pages/p119.jpg",
  "./pages/p120.jpg",
  "./pages/p121.jpg",
  "./pages/p122.jpg",
  "./pages/p123.jpg",
  "./pages/p124.jpg",
  "./pages/p125.jpg",
  "./pages/p126.jpg",
  "./pages/p127.jpg",
  "./pages/p129.jpg",
  "./pages/p130.jpg",
  "./pages/p131.jpg",
  "./pages/p132.jpg",
  "./pages/p133.jpg",
  "./pages/p135.jpg",
  "./pages/p136.jpg",
  "./pages/p137.jpg",
  "./pages/p138.jpg",
  "./pages/p139.jpg",
  "./pages/p140.jpg",
  "./pages/p141.jpg",
  "./pages/p143.jpg",
  "./pages/p144.jpg",
  "./pages/p145.jpg",
  "./pages/p146.jpg",
  "./pages/p171.jpg",
  "./pages/p211.jpg",
  "./pages/p212.jpg",
  "./pages/p214.jpg",
  "./pages/p215.jpg",
  "./pages/p216.jpg",
  "./pages/p223.jpg",
  "./pages/p228.jpg",
  "./pages/p229.jpg",
  "./pages/p249.jpg",
  "./pages/p250.jpg",
  "./pages/p251.jpg",
  "./pages/p293.jpg",
  "./pages/p313.jpg",
  "./pages/p335.jpg",
  "./pages/p363.jpg",
  "./pages/p381.jpg",
  "./pages/p401.jpg",
  "./pages/p413.jpg",
  "./pages/p471.jpg",
  "./pages/p537.jpg",
  "./pages/p538.jpg",
  "./pages/p539.jpg",
  "./pages/p540.jpg",
  "./pages/p541.jpg",
  "./pages/p542.jpg",
  "./pages/p543.jpg",
  "./pages/p544.jpg",
  "./pages/p545.jpg",
  "./pages/p546.jpg",
  "./pages/p547.jpg",
  "./pages/p548.jpg",
  "./pages/p549.jpg",
  "./pages/p550.jpg",
  "./pages/p551.jpg",
  "./pages/p552.jpg",
  "./pages/p553.jpg",
  "./pages/p554.jpg",
  "./pages/p555.jpg",
  "./pages/p556.jpg",
  "./pages/p557.jpg",
  "./pages/p558.jpg",
  "./pages/p559.jpg",
  "./pages/p560.jpg",
  "./pages/p561.jpg",
  "./pages/p580.jpg",
  "./pages/p614.jpg",
  "./pages/p615.jpg",
  "./pages/p616.jpg",
  "./pages/p617.jpg",
  "./pages/p618.jpg",
  "./pages/p619.jpg",
  "./pages/p620.jpg",
  "./pages/p621.jpg",
  "./pages/p622.jpg",
  "./pages/p623.jpg",
  "./pages/p624.jpg",
  "./pages/p650.jpg",
  "./pages/p658.jpg",
  "./pages/p659.jpg",
  "./pages/p669.jpg",
  "./pages/p719.jpg",
  "./pages/p720.jpg",
  "./pages/p721.jpg",
  "./pages/p722.jpg",
  "./pages/p723.jpg",
  "./pages/p724.jpg",
  "./pages/p725.jpg",
  "./pages/p726.jpg",
  "./pages/p727.jpg",
  "./pages/p728.jpg",
  "./pages/p729.jpg",
  "./pages/p730.jpg",
  "./pages/p731.jpg",
  "./pages/p732.jpg",
  "./pages/p733.jpg",
  "./pages/p734.jpg",
  "./pages/p735.jpg",
  "./pages/p736.jpg",
  "./pages/p737.jpg",
  "./pages/p738.jpg",
  "./pages/p739.jpg",
  "./pages/p740.jpg",
  "./pages/p741.jpg",
  "./pages/p742.jpg",
  "./pages/p743.jpg",
  "./pages/p744.jpg",
  "./pages/p745.jpg",
  "./pages/p746.jpg",
  "./pages/p747.jpg",
  "./pages/p748.jpg",
  "./pages/p749.jpg",
  "./pages/p750.jpg",
  "./pages/p751.jpg",
  "./pages/p752.jpg",
  "./pages/p753.jpg",
  "./pages/p754.jpg",
  "./pages/p755.jpg",
  "./pages/p756.jpg",
  "./pages/p757.jpg",
  "./pages/p758.jpg",
  "./pages/p759.jpg",
  "./pages/p763.jpg",
  "./pages/p764.jpg",
  "./pages/p765.jpg",
  "./pages/p766.jpg",
  "./pages/p767.jpg",
  "./pages/p768.jpg",
  "./pages/p769.jpg",
  "./pages/p773.jpg",
  "./pages/p775.jpg",
  "./pages/p776.jpg"
];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(CORE.map(function (u) {
      return c.add(new Request(u, { cache: 'reload' })).catch(function () {});
    }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
                              .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
  if (EXTRA.length) {
    e.waitUntil(caches.open(CACHE).then(function (c) {
      return Promise.all(EXTRA.map(function (u) {
        return c.match(u).then(function (hit) {
          if (hit) return;
          return c.add(u).catch(function () {});
        });
      }));
    }));
  }
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var isDoc = req.mode === 'navigate' || req.destination === 'document';
  if (isDoc) {
    e.respondWith(
      fetch(req).then(function (resp) {
        var copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return resp;
      }).catch(function () {
        return caches.match(req, { ignoreSearch: true }).then(function (hit) {
          return hit || caches.match('./index.html') || caches.match('./');
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (resp) {
        if (resp && (resp.ok || resp.type === 'opaque')) {
          var copy = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return resp;
      }).catch(function () { return hit; });
    })
  );
});
