/* ============================================================
   Frontrunner hero — the dashboard runs itself.
   Work is emitted from the sidebar, routed through the stat
   cards, written into the activity feed and lands in pipeline.
   Every packet is a real state change, not a looping gif.
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var SVGNS = 'http://www.w3.org/2000/svg';
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var dash = $('#dash');
  var wrap = $('.dash-wrap');
  var railsG = $('#rails');
  var cometsG = $('#comets');
  var rowsEl = $('#rows');

  /* ---------------- content ---------------- */
  var COMPANIES = [
    'Acme Robotics', 'Weaviate', 'Vantage Health', 'Northwind Co', 'Lattice Grid',
    'Orbital Freight', 'Hyperion Labs', 'Cedar Analytics', 'Brightwell', 'Kova Systems',
    'Ardent Bio', 'Pinecrest Retail', 'Halo Logistics', 'Trellis Data'
  ];

  // nav: index in the sidebar · stat: which stat card it feeds
  var JOBS = [
    { nav: 1, stat: 0, tone: 'g', color: '#22c55e', act: 'Researched account',      bump: [1, 3],   worth: 0 },
    { nav: 2, stat: 1, tone: 'b', color: '#5b8def', act: 'Found {n} prospects at',  bump: [7, 22],  worth: 0 },
    { nav: 3, stat: 2, tone: 'a', color: '#f0ad3d', act: 'Launched campaign for',   bump: [1, 1],   worth: 9 },
    { nav: 4, stat: 3, tone: 'g', color: '#22c55e', act: 'Qualified inbound lead from', bump: [1, 2], worth: 14 },
    { nav: 5, stat: 3, tone: 'v', color: '#9b7cf0', act: 'Updated CRM record for',  bump: [1, 2],   worth: 5 }
  ];

  var rnd = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); };
  var lastPick = '';
  var pick = function (a) {
    var v;
    do { v = a[rnd(0, a.length - 1)]; } while (a.length > 1 && v === lastPick);
    return (lastPick = v);
  };
  var fmt = function (n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); };

  /* ---------------- geometry helpers ---------------- */
  // Layout coords relative to .dash, immune to the wrapper's scale transform.
  function rel(el) {
    var x = 0, y = 0, n = el;
    while (n && n !== dash) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    return { x: x, y: y, w: el.offsetWidth, h: el.offsetHeight };
  }
  function inside(r, p) { return p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h; }

  // Orthogonal path with rounded corners — reads like a circuit trace.
  function tracePath(pts, radius) {
    var p = pts.filter(function (q, i) {
      return i === 0 || Math.abs(q.x - pts[i - 1].x) > .5 || Math.abs(q.y - pts[i - 1].y) > .5;
    });
    if (p.length < 2) return '';
    var d = 'M ' + p[0].x + ' ' + p[0].y;
    for (var i = 1; i < p.length - 1; i++) {
      var a = p[i - 1], c = p[i], b = p[i + 1];
      var la = Math.hypot(c.x - a.x, c.y - a.y), lb = Math.hypot(b.x - c.x, b.y - c.y);
      var r = Math.min(radius, la / 2, lb / 2);
      var i1 = { x: c.x + (a.x - c.x) / la * r, y: c.y + (a.y - c.y) / la * r };
      var i2 = { x: c.x + (b.x - c.x) / lb * r, y: c.y + (b.y - c.y) / lb * r };
      d += ' L ' + i1.x + ' ' + i1.y + ' Q ' + c.x + ' ' + c.y + ' ' + i2.x + ' ' + i2.y;
    }
    var e = p[p.length - 1];
    return d + ' L ' + e.x + ' ' + e.y;
  }

  function mk(tag, attrs) {
    var el = document.createElementNS(SVGNS, tag);
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  /* ---------------- routes ---------------- */
  var routes = [];
  var navItems = $$('.nav-item');

  function buildRoutes() {
    railsG.innerHTML = '';
    routes = [];

    var side = rel($('.side')), head = rel($('.dash-head')), stats = rel($('#stats')),
        lower = rel($('.lower')), feed = rel($('#feed')), pipe = rel($('#pipeline'));
    var H = dash.offsetHeight;

    var spine = (side.x + side.w + stats.x) / 2;          // gutter beside the sidebar
    var chanA = (head.y + head.h + stats.y) / 2;          // above the stat row
    var chanB = (stats.y + stats.h + lower.y) / 2;        // between stats and the lower row
    var chanC = (lower.y + lower.h + H) / 2;              // return channel along the bottom

    $('#flow').setAttribute('viewBox', '0 0 ' + dash.offsetWidth + ' ' + H);

    JOBS.forEach(function (job, i) {
      var nav = rel(navItems[job.nav]);
      var st = rel($('#stat-' + job.stat));
      var o = (i - 2) * 4;                                 // parallel traces in each gutter
      var navY = nav.y + nav.h / 2;
      var stx = st.x + st.w * (0.32 + (i % 2) * 0.26);
      var fex = feed.x + 46 + i * 30;
      var pcy = pipe.y + pipe.h * 0.44 + (i - 2) * 7;

      routes.push(makeRoute([
        { x: nav.x + nav.w - 12, y: navY },
        { x: spine + o, y: navY },
        { x: spine + o, y: chanA + o },
        { x: stx, y: chanA + o },
        { x: stx, y: chanB + o },
        { x: fex, y: chanB + o },
        { x: fex, y: pcy },
        { x: pipe.x + pipe.w * 0.5, y: pcy }
      ]));
    });

    // closing the loop: pipeline → CRM sync → back into Accounts
    var navAcc = rel(navItems[1]);
    routes.push(makeRoute([
      { x: pipe.x + pipe.w * 0.5, y: pipe.y + pipe.h - 14 },
      { x: pipe.x + pipe.w * 0.5, y: chanC },
      { x: spine - 13, y: chanC },
      { x: spine - 13, y: navAcc.y + navAcc.h / 2 },
      { x: navAcc.x + navAcc.w - 12, y: navAcc.y + navAcc.h / 2 }
    ]));
  }

  function makeRoute(pts) {
    var d = tracePath(pts, 9);
    var rail = mk('path', { d: d, class: 'rail' });
    railsG.appendChild(rail);
    return { d: d, measure: rail, rail: rail };
  }

  /* ---------------- state ---------------- */
  var stats = [1284, 9412, 18, 342];
  var pipeline = 482;
  var today = 0;
  var accounts = 84;
  var bars = [];
  var barEls = [];

  function initBars() {
    var host = $('#bars');
    host.innerHTML = '';
    bars = []; barEls = [];
    for (var i = 0; i < 16; i++) {
      bars.push(18 + Math.round(Math.pow(i / 15, 1.5) * 58) + rnd(-5, 5));
      var s = document.createElement('span');
      s.style.height = Math.max(6, bars[i]) + '%';
      host.appendChild(s); barEls.push(s);
    }
    barEls[15].classList.add('lit');
  }

  function pushBar(amount) {
    bars.shift();
    bars.push(Math.min(100, bars[bars.length - 1] + amount + rnd(1, 5)));
    barEls.forEach(function (el, i) {
      el.style.height = Math.max(6, bars[i]) + '%';
      el.classList.toggle('lit', i === barEls.length - 1);
    });
  }

  function tick(el, from, to, suffix, ms) {
    if (calm) { el.textContent = (suffix || '') + fmt(to); return; }
    var t0 = performance.now();
    (function step(now) {
      var k = Math.min(1, (now - t0) / (ms || 620));
      var e = 1 - Math.pow(1 - k, 3);
      el.textContent = (suffix || '') + fmt(Math.round(from + (to - from) * e));
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }

  function tickMoney(el, from, to) {
    if (calm) { el.textContent = '$' + fmt(to) + 'K'; return; }
    var t0 = performance.now();
    (function step(now) {
      var k = Math.min(1, (now - t0) / 760);
      var e = 1 - Math.pow(1 - k, 3);
      el.textContent = '$' + fmt(Math.round(from + (to - from) * e)) + 'K';
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }

  function flash(el, ms) {
    el.classList.add('hit');
    setTimeout(function () { el.classList.remove('hit'); }, ms || 900);
  }

  /* ---------------- feed ---------------- */
  function addRow(job, company, n) {
    var row = document.createElement('div');
    row.className = 'row enter';
    row.innerHTML =
      '<span class="rdot ' + job.tone + '"></span>' +
      '<span class="rtext"><span class="ract">' + job.act.replace('{n}', n) + '</span>' +
      '<span class="rent">' + company + '</span></span>' +
      '<span class="rtime">just now</span>';
    rowsEl.insertBefore(row, rowsEl.firstChild);

    var last = 0;
    $$('.row', rowsEl).forEach(function (r, i) {
      if (i === 0) return;
      var age = Math.max((+r.dataset.age || 0) + rnd(1, 3), last + rnd(2, 5));
      r.dataset.age = age;
      $('.rtime', r).textContent = age + 'm ago';
      last = age;
    });
    setTimeout(function () { row.classList.remove('enter'); }, 600);
    while (rowsEl.children.length > 6) rowsEl.removeChild(rowsEl.lastChild);
  }

  function seedFeed() {
    var seed = [
      [JOBS[0], 'Acme Robotics', 0, 2], [JOBS[1], 'Weaviate', 12, 6],
      [JOBS[2], 'Vantage Health', 0, 14], [JOBS[3], 'Northwind Co', 0, 22],
      [JOBS[4], 'Lattice Grid', 0, 31], [JOBS[0], 'Orbital Freight', 0, 38]
    ];
    seed.forEach(function (s) {
      var row = document.createElement('div');
      row.className = 'row';
      row.dataset.age = s[3];
      row.innerHTML =
        '<span class="rdot ' + s[0].tone + '"></span>' +
        '<span class="rtext"><span class="ract">' + s[0].act.replace('{n}', s[2]) + '</span>' +
        '<span class="rent">' + s[1] + '</span></span>' +
        '<span class="rtime">' + s[3] + 'm ago</span>';
      rowsEl.appendChild(row);
    });
  }

  /* ---------------- the packet ---------------- */
  var SEG = 78;
  function sendPacket(route, color, stops, dur) {
    var L = route.measure.getTotalLength();
    var comet = mk('path', {
      d: route.d, class: 'comet', stroke: color,
      'stroke-dasharray': SEG + ' ' + (L + SEG), 'stroke-dashoffset': SEG
    });
    var head = mk('circle', { r: 3.4, fill: color, filter: 'url(#glow)' });
    cometsG.appendChild(comet); cometsG.appendChild(head);

    var fired = {}, t0 = performance.now();
    (function frame(now) {
      var k = Math.min(1, (now - t0) / dur);
      var e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;   // easeInOutQuad
      comet.setAttribute('stroke-dashoffset', SEG - e * (L + SEG));
      var p = route.measure.getPointAtLength(e * L);
      head.setAttribute('cx', p.x); head.setAttribute('cy', p.y);
      head.setAttribute('opacity', k > .93 ? (1 - k) / .07 : 1);

      stops.forEach(function (s, i) {
        if (!fired[i] && inside(rel(s.el), p)) { fired[i] = 1; s.fn(); }
      });
      if (k < 1) requestAnimationFrame(frame);
      else { comet.remove(); head.remove(); }
    })(t0);
  }

  /* ---------------- one unit of work ---------------- */
  function runJob(i) {
    var job = JOBS[i];
    var company = pick(COMPANIES);
    var n = rnd(job.bump[0], job.bump[1]);
    var navEl = navItems[job.nav];
    var statEl = $('#stat-' + job.stat);
    var feedEl = $('#feed');
    var pipeEl = $('#pipeline');

    navEl.classList.add('ping');
    setTimeout(function () { navEl.classList.remove('ping'); }, 900);

    if (calm) { applyStat(); addRow(job, company, n); applyPipe(); return; }

    sendPacket(routes[i], job.color, [
      { el: statEl, fn: function () { flash(statEl); applyStat(); } },
      { el: feedEl, fn: function () { flash(feedEl, 700); addRow(job, company, n); } },
      { el: pipeEl, fn: function () {
          if (!job.worth) return;
          flash(pipeEl);
          applyPipe();
          setTimeout(syncBack, 700);
        } }
    ], 3000);

    function applyStat() {
      var el = $('.s-val', statEl);
      var from = stats[job.stat];
      stats[job.stat] += n;
      tick(el, from, stats[job.stat]);
    }
    function applyPipe() {
      var add = job.worth + rnd(0, 6);
      var from = pipeline;
      pipeline += add; today += add;
      tickMoney($('#pipeVal'), from, pipeline);
      $('#pipeDelta').textContent = '+$' + today + 'K today';
      pushBar(Math.round(add / 2));
    }
  }

  // pipeline → CRM sync → Accounts: the loop closes, account count grows
  function syncBack() {
    var navAcc = navItems[1];
    sendPacket(routes[JOBS.length], '#22c55e', [
      { el: navAcc, fn: function () {
          navAcc.classList.add('ping');
          setTimeout(function () { navAcc.classList.remove('ping'); }, 900);
          var from = accounts; accounts += rnd(1, 2);
          tick($('#acctCount'), from, accounts);
        } }
    ], 2200);
  }

  /* ---------------- fit + tilt ---------------- */
  var scale = 1, tilt = 0;
  function applyTransform() {
    dash.style.transform = 'scale(' + scale + ') rotateX(' + tilt + 'deg)';
  }
  function fit() {
    scale = Math.min(1, wrap.clientWidth / 1120);
    applyTransform();
    wrap.style.height = Math.ceil(dash.offsetHeight * scale) + 'px';
  }
  function onScroll() {
    if (calm) return;
    var r = wrap.getBoundingClientRect();
    var k = Math.max(0, Math.min(1, (r.top - window.innerHeight * .25) / (window.innerHeight * .75)));
    tilt = k * 7;
    applyTransform();
  }

  /* ---------------- boot ---------------- */
  function boot() {
    seedFeed();
    initBars();
    fit();
    buildRoutes();
    onScroll();

    if (calm) return;

    var i = 0;
    setTimeout(function () { runJob(i++ % JOBS.length); }, 900);
    setInterval(function () { runJob(i++ % JOBS.length); }, 2400);

    // ambient life: agents coming online, times ageing
    setInterval(function () {
      var el = $('#agentsOnline');
      var v = Math.max(4, Math.min(9, +el.textContent + rnd(-1, 1)));
      el.textContent = v;
    }, 7000);
  }

  // the sidebar is live: hover lights the route, click dispatches the work
  JOBS.forEach(function (job, i) {
    var el = navItems[job.nav];
    el.addEventListener('mouseenter', function () {
      if (routes[i]) routes[i].rail.classList.add('lit');
    });
    el.addEventListener('mouseleave', function () {
      if (routes[i]) routes[i].rail.classList.remove('lit');
    });
    el.addEventListener('click', function (e) { e.preventDefault(); if (!calm) runJob(i); });
  });

  window.addEventListener('resize', function () { fit(); buildRoutes(); });
  window.addEventListener('scroll', onScroll, { passive: true });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(boot);
  else window.addEventListener('load', boot);
})();
