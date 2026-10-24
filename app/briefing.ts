// Self-contained briefing page. Source of truth:
// nexus 50-projects/appthrust/features/security/2026-10-24-oss-skeptic-briefing-facts.md
export const briefingHtml = /* html */ `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>OSS 化は危険か? — 2024–2026 サプライチェーン事件から見る AppThrust の判断</title>
<meta name="description" content="2024–2026 の主要サプライチェーン攻撃 12 件を因果で分類。自社ソースの公開が主因だった事件は 0 件。">
<style>
:root{
  --bg:#0b0f17;--surface:#121826;--surface2:#182033;--border:#26304a;--fg:#e7ecf5;--muted:#93a0b8;
  --accent:#6ea8ff;--ok:#38d39f;--warn:#f5b84b;--bad:#ff6b6b;
  --c-acct:#ff7a90;--c-ci:#f5b84b;--c-worm:#b58cff;--c-social:#5fd3f3;--c-closed:#8892a6;
  --radius:14px;
}
@media (prefers-color-scheme: light){
  :root{--bg:#f6f8fc;--surface:#fff;--surface2:#eef2f9;--border:#dbe2ee;--fg:#111827;--muted:#5b6578;
  --accent:#2563eb;--ok:#0f9f6e;--warn:#b7791f;--bad:#d64545;
  --c-acct:#e0466a;--c-ci:#c98a12;--c-worm:#7c4dff;--c-social:#0891b2;--c-closed:#6b7280;}
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.75 system-ui,-apple-system,"Hiragino Sans","Noto Sans JP","Yu Gothic UI",sans-serif;-webkit-font-smoothing:antialiased}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}
code{font:0.88em ui-monospace,SFMono-Regular,Menlo,monospace;background:var(--surface2);padding:.1em .4em;border-radius:6px}
.wrap{max-width:1120px;margin:0 auto;padding:0 24px}
nav.top{position:sticky;top:0;z-index:10;background:color-mix(in srgb,var(--bg) 85%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
nav.top .wrap{display:flex;gap:18px;align-items:center;height:52px;overflow-x:auto;white-space:nowrap;font-size:14px}
nav.top b{margin-right:8px}
nav.top a{color:var(--muted)}nav.top a:hover{color:var(--fg);text-decoration:none}
section{padding:72px 0;border-bottom:1px solid var(--border)}
h1{font-size:clamp(30px,4.6vw,52px);line-height:1.2;margin:0 0 20px;letter-spacing:-.01em}
h2{font-size:clamp(24px,3vw,34px);line-height:1.3;margin:0 0 8px}
h3{font-size:18px;margin:0 0 8px}
.lead{color:var(--muted);font-size:18px;max-width:760px;margin:0 0 32px}
.eyebrow{color:var(--accent);font-weight:700;font-size:13px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:10px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:22px}
.grid{display:grid;gap:16px}
.g2{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}
.g3{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
.g4{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.muted{color:var(--muted)}
.small{font-size:13px}
.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:2px 10px;border-radius:999px;border:1px solid var(--border);background:var(--surface2);white-space:nowrap}
.dot{width:9px;height:9px;border-radius:50%;display:inline-block}
.acct{--k:var(--c-acct)}.ci{--k:var(--c-ci)}.worm{--k:var(--c-worm)}.social{--k:var(--c-social)}.closed{--k:var(--c-closed)}
.dot.k{background:var(--k)}
/* hero */
.hero{padding:88px 0 72px}
.hero-grid{display:grid;grid-template-columns:1.25fr 1fr;gap:40px;align-items:center}
@media (max-width:860px){.hero-grid{grid-template-columns:1fr}}
.big{display:flex;align-items:baseline;gap:14px}
.big .n{font-size:clamp(96px,16vw,168px);font-weight:800;line-height:.9;color:var(--ok);letter-spacing:-.04em}
.big .d{font-size:clamp(36px,6vw,64px);font-weight:700;color:var(--muted)}
.verdict{border-left:4px solid var(--ok);padding:6px 0 6px 18px;margin-top:24px;font-size:18px}
/* donut legend */
.legend{display:flex;flex-direction:column;gap:10px;margin-top:18px}
.legend div{display:flex;align-items:center;gap:10px}
.legend .bar{flex:1;height:10px;border-radius:6px;background:var(--surface2);overflow:hidden}
.legend .bar i{display:block;height:100%;background:var(--k)}
.legend .c{width:24px;text-align:right;font-weight:700}
/* timeline */
.filters{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 20px}
.filters button{font:inherit;font-size:13px;cursor:pointer;color:var(--fg);background:var(--surface);border:1px solid var(--border);border-radius:999px;padding:5px 14px;display:inline-flex;gap:8px;align-items:center}
.filters button[aria-pressed="true"]{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,var(--surface))}
.tl{position:relative;margin-left:10px;padding-left:28px;border-left:2px solid var(--border)}
.ev{position:relative;margin:0 0 18px}
.ev::before{content:"";position:absolute;left:-36px;top:20px;width:14px;height:14px;border-radius:50%;background:var(--k);box-shadow:0 0 0 4px var(--bg)}
.ev .card{padding:16px 20px;border-left:3px solid var(--k)}
.ev .meta{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:6px}
.ev .date{font:600 13px ui-monospace,Menlo,monospace;color:var(--muted)}
.ev h3{margin:0}
.ev p{margin:6px 0 0;font-size:15px}
.ev.hide{display:none}
.verdict-chip{font-size:12px;font-weight:700;padding:2px 9px;border-radius:6px}
.v-no{color:var(--ok);background:color-mix(in srgb,var(--ok) 14%,transparent)}
.v-part{color:var(--warn);background:color-mix(in srgb,var(--warn) 14%,transparent)}
.v-closed{color:var(--muted);background:var(--surface2)}
/* stats */
.stat .n{font-size:44px;font-weight:800;line-height:1.1;letter-spacing:-.02em}
.stat .u{font-size:18px;color:var(--muted);font-weight:600;margin-left:4px}
.stat p{margin:8px 0 0;font-size:14px;color:var(--muted)}
/* flow */
.flow{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;align-items:stretch}
@media (max-width:860px){.flow{grid-template-columns:1fr}}
.flow .col{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.flow .col h3{font-size:14px;color:var(--muted);letter-spacing:.06em}
.flow ul{list-style:none;margin:10px 0 0;padding:0;display:flex;flex-direction:column;gap:8px}
.flow li{background:var(--surface2);border-radius:10px;padding:10px 12px;font-size:14px;line-height:1.5}
.flow li small{display:block;color:var(--muted);font-size:12px}
.arrow{text-align:center;color:var(--muted);font-size:14px;margin:14px 0 0}
.callout{margin-top:18px;padding:16px 20px;border-radius:var(--radius);background:color-mix(in srgb,var(--warn) 10%,var(--surface));border:1px solid color-mix(in srgb,var(--warn) 40%,var(--border))}
/* claims */
details.claim{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:12px;overflow:hidden}
details.claim summary{cursor:pointer;list-style:none;padding:18px 22px;display:flex;gap:14px;align-items:center}
details.claim summary::-webkit-details-marker{display:none}
details.claim summary .tag{flex:none;width:34px;height:34px;border-radius:10px;display:grid;place-items:center;font-weight:800;background:var(--surface2);color:var(--accent)}
details.claim summary .q{font-weight:700;font-size:17px;flex:1}
details.claim summary .rate{flex:none}
details.claim summary::after{content:"＋";color:var(--muted);font-weight:700}
details.claim[open] summary::after{content:"－"}
details.claim .body{padding:0 22px 20px 70px}
@media (max-width:640px){details.claim .body{padding:0 18px 18px}}
details.claim .short{font-size:16px;margin:0 0 12px;font-weight:600}
details.claim ul{margin:0;padding-left:18px}
details.claim li{margin:6px 0;font-size:15px}
.r-wrong{color:var(--bad);background:color-mix(in srgb,var(--bad) 13%,transparent)}
.r-half{color:var(--warn);background:color-mix(in srgb,var(--warn) 13%,transparent)}
.r-right{color:var(--ok);background:color-mix(in srgb,var(--ok) 13%,transparent)}
/* concede */
.concede .card{position:relative;padding-left:58px}
.concede .num{position:absolute;left:18px;top:20px;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:14px;background:color-mix(in srgb,var(--ok) 18%,transparent);color:var(--ok)}
.concede p{margin:4px 0 0;font-size:14px;color:var(--muted)}
.where{display:inline-block;margin-top:8px;font-size:12px;font-weight:700}
/* matrix */
.mx{width:100%;border-collapse:separate;border-spacing:0;font-size:14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}
.mx th,.mx td{padding:10px 12px;border-bottom:1px solid var(--border);text-align:center;vertical-align:middle}
.mx th:first-child,.mx td:first-child{text-align:left}
.mx thead th{background:var(--surface2);font-size:12px;color:var(--muted);font-weight:700}
.mx tr:last-child td{border-bottom:0}
.c-y{color:var(--ok);font-weight:800}.c-n{color:var(--bad);font-weight:800}.c-p{color:var(--warn);font-weight:800}
.scroll{overflow-x:auto}
/* LiteLLM vertical */
.vt{list-style:none;margin:0;padding:0;position:relative}
.vt li{display:grid;grid-template-columns:96px 1fr;gap:16px;padding:10px 0;border-bottom:1px dashed var(--border)}
.vt li:last-child{border-bottom:0}
.vt time{font:700 14px ui-monospace,Menlo,monospace;color:var(--muted)}
.vt .hl time{color:var(--bad)}
.vt .hl span{font-weight:700}
/* compare */
.cmp{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media (max-width:760px){.cmp{grid-template-columns:1fr}}
.cmp h3{display:flex;gap:10px;align-items:center}
.cmp ul{margin:8px 0 0;padding-left:18px}.cmp li{margin:6px 0;font-size:15px}
/* posture */
.posture .card h3{display:flex;justify-content:space-between;gap:10px;align-items:baseline}
.posture .card .v{font:800 26px/1 system-ui;color:var(--ok)}
.posture .card p{margin:6px 0 0;font-size:14px;color:var(--muted)}
.todo .card{border-style:dashed}
.todo .card .v{color:var(--warn)}
/* faq */
.faq details{border-bottom:1px solid var(--border);padding:14px 0}
.faq summary{cursor:pointer;font-weight:700;font-size:16px}
.faq p{margin:10px 0 0;color:var(--fg);font-size:15px}
.src{columns:2 360px;column-gap:28px;font-size:14px;padding-left:18px}
.src li{break-inside:avoid;margin:0 0 8px}
footer{padding:40px 0 64px;color:var(--muted);font-size:13px}
</style>
</head>
<body>
<nav class="top"><div class="wrap">
  <b>OSS 化ブリーフィング</b>
  <a href="#answer">結論</a><a href="#timeline">事件年表</a><a href="#numbers">数字</a><a href="#chain">攻撃の型</a><a href="#litellm">LiteLLM 10-21</a><a href="#claims">主張と事実</a><a href="#concede">正しい懸念</a><a href="#controls">統制の限界</a><a href="#appthrust">AppThrust</a><a href="#faq">想定問答</a><a href="#sources">出典</a>
</div></nav>

<header class="hero" id="answer"><div class="wrap hero-grid">
  <div>
    <div class="eyebrow">AppThrust Security Briefing · 2026-10-24</div>
    <h1>「最近 OSS がハックされまくっている。<br>だから OSS にしないほうがいい」は本当か</h1>
    <p class="lead">2024–2026 に報じられた主要サプライチェーン攻撃 12 件を、一次資料(各プロジェクトの advisory・postmortem)で因果ごとに分類した。</p>
    <div class="big"><span class="n">0</span><span class="d">/ 12</span></div>
    <p style="margin:6px 0 0;font-weight:700;font-size:18px">被害プロジェクトの「ソースが公開されていたこと」が主因だった事件</p>
    <div class="verdict">原因はメンテナのアカウント・CI の秘密情報・依存パッケージの乗っ取り。<br><b>非公開化は、恐れられている事件を 1 件も防がない。</b>守るべき境界は「公開可否」ではなく <b>merge と publish</b>。</div>
  </div>
  <div class="card">
    <h3>12 件の主因</h3>
    <svg viewBox="0 0 200 200" width="100%" style="max-width:260px;display:block;margin:12px auto 0" role="img" aria-label="主因の内訳ドーナツ">
      <g transform="rotate(-90 100 100)" fill="none" stroke-width="30">
        <circle r="70" cx="100" cy="100" stroke="var(--c-acct)"   stroke-dasharray="183.26 439.82" stroke-dashoffset="0"/>
        <circle r="70" cx="100" cy="100" stroke="var(--c-ci)"     stroke-dasharray="109.96 439.82" stroke-dashoffset="-183.26"/>
        <circle r="70" cx="100" cy="100" stroke="var(--c-worm)"   stroke-dasharray="109.96 439.82" stroke-dashoffset="-293.22"/>
        <circle r="70" cx="100" cy="100" stroke="var(--c-social)" stroke-dasharray="36.65 439.82"  stroke-dashoffset="-403.17"/>
      </g>
      <text x="100" y="96" text-anchor="middle" font-size="34" font-weight="800" fill="var(--fg)">12</text>
      <text x="100" y="120" text-anchor="middle" font-size="12" fill="var(--muted)">incidents</text>
    </svg>
    <div class="legend">
      <div class="acct"><span class="dot k"></span><span style="width:170px">アカウント乗っ取り</span><span class="bar"><i style="width:41.7%"></i></span><span class="c">5</span></div>
      <div class="ci"><span class="dot k"></span><span style="width:170px">CI / パイプライン秘密情報</span><span class="bar"><i style="width:25%"></i></span><span class="c">3</span></div>
      <div class="worm"><span class="dot k"></span><span style="width:170px">盗んだ token で自己増殖</span><span class="bar"><i style="width:25%"></i></span><span class="c">3</span></div>
      <div class="social"><span class="dot k"></span><span style="width:170px">メンテナ権限の社会工学</span><span class="bar"><i style="width:8.3%"></i></span><span class="c">1</span></div>
    </div>
    <p class="small muted" style="margin:14px 0 0">うち 2 件(xz、Nx)は「外部寄与の受け入れ方」が間接要因。防御は merge 権限と fork PR workflow の設計で、非公開化ではない。</p>
  </div>
</div></header>

<section id="timeline"><div class="wrap">
  <div class="eyebrow">Timeline</div>
  <h2>事件年表 — 起点で色分け</h2>
  <p class="lead">クローズドソースの事例(SolarWinds、3CX)も比較用に並べる。いずれも「ソースが読めたか」ではなく「publish 権限・ビルド環境を取られたか」で決まっている。</p>
  <div class="filters" role="group" aria-label="起点で絞り込み">
    <button data-f="all" aria-pressed="true">すべて</button>
    <button data-f="acct" class="acct" aria-pressed="false"><span class="dot k"></span>アカウント乗っ取り</button>
    <button data-f="ci" class="ci" aria-pressed="false"><span class="dot k"></span>CI / パイプライン</button>
    <button data-f="worm" class="worm" aria-pressed="false"><span class="dot k"></span>自己増殖 worm</button>
    <button data-f="social" class="social" aria-pressed="false"><span class="dot k"></span>社会工学</button>
    <button data-f="closed" class="closed" aria-pressed="false"><span class="dot k"></span>クローズドソース(比較)</button>
  </div>
  <div class="tl" id="tl">
    <div class="ev closed" data-k="closed"><div class="card"><div class="meta"><span class="date">2020-12</span><span class="verdict-chip v-closed">クローズド</span></div><h3>SolarWinds SUNBURST</h3><p>クローズドソースの Orion。ビルドシステムに侵入され、<b>正規署名付き</b>の更新で約 18,000 顧客に配布。</p></div></div>
    <div class="ev closed" data-k="closed"><div class="card"><div class="meta"><span class="date">2023-03</span><span class="verdict-chip v-closed">クローズド</span></div><h3>3CX</h3><p>上流(X_TRADER)の侵害 → 社員端末 → <b>ビルド環境</b>。正規証明書で署名された更新が約 60 万社へ。MITRE は「サプライチェーン侵害が別の侵害を引き起こした初の公開事例」と記録。</p></div></div>
    <div class="ev social" data-k="social"><div class="card"><div class="meta"><span class="date">2024-03</span><span class="verdict-chip v-part">△ 間接要因</span></div><h3>xz-utils backdoor</h3><p>2 年がかりで co-maintainer 権限を得た外部寄与者が、release tarball にだけ backdoor を混入。防御は「権限付与と release の統制」。</p></div></div>
    <div class="ev ci" data-k="ci"><div class="card"><div class="meta"><span class="date">2025-03-14</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>tj-actions/changed-files + reviewdog</h3><p>reviewdog の侵害が連鎖し、23,000+ repo が使う action の <b>全 version tag が force-push</b>。Runner メモリから CI secrets を抜く。利用者側が private repo でも同じ action を pull する。</p></div></div>
    <div class="ev ci" data-k="ci"><div class="card"><div class="meta"><span class="date">2025-08-26</span><span class="verdict-chip v-part">△ 間接要因</span></div><h3>Nx “s1ngularity”</h3><p>脆弱な <code>pull_request_target</code> workflow から npm publish token を窃取。被害者マシンの AI CLI を使って秘密情報を列挙。</p></div></div>
    <div class="ev acct" data-k="acct"><div class="card"><div class="meta"><span class="date">2025-09-08</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>chalk / debug → Shai-Hulud 1.0</h3><p>メンテナへの npm 2FA リセット phishing。週 20 億 DL 超のパッケージ群を汚染。1 週間後、盗んだ token で自己 publish する worm が出現。</p></div></div>
    <div class="ev worm" data-k="worm"><div class="card"><div class="meta"><span class="date">2025-11-24</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>Shai-Hulud 2.0</h3><p><code>preinstall</code> で Bun を取得して第 2 段を実行。token 失効時に被害者ホームを破壊する dead-man's switch。</p></div></div>
    <div class="ev ci" data-k="ci"><div class="card"><div class="meta"><span class="date">2026-02 末 → 03-24</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>TeamPCP: Trivy → Checkmarx KICS → LiteLLM</h3><p><code>pull_request_target</code> から CI secrets 窃取 → <b>非アトミックな rotation</b> の数日で再侵入 → <code>actions/checkout</code> を偽 commit に差し替えて v0.69.4 を release、<code>trivy-action</code> の 76/77 tag を force-push。別途 Docker Hub 資格情報で直接 push も。</p></div></div>
    <div class="ev acct" data-k="acct"><div class="card"><div class="meta"><span class="date">2026-03-31</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>axios</h3><p>メンテナの npm アカウント乗っ取り。悪意ある依存 <code>plain-crypto-js</code> を追加。provenance が無いことだけが兆候だった。</p></div></div>
    <div class="ev acct" data-k="acct"><div class="card"><div class="meta"><span class="date">2026-04-22 / 05-19</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>Shai-Hulud 第 3 波 / @antv</h3><p>系譜の継続。<code>@antv</code> scope はメンテナ account takeover。</p></div></div>
    <div class="ev acct" data-k="acct"><div class="card"><div class="meta"><span class="date">2026-08-04</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>ChainDrop(keyv)</h3><p>メンテナの GitHub アカウント乗っ取り → 4 時間弱で 444 パッケージ / 2,212 版。<b>OIDC Trusted Publishing + 有効な SLSA provenance 付き</b>で publish された。</p></div></div>
    <div class="ev worm" data-k="worm"><div class="card"><div class="meta"><span class="date">2026-09</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>Sckit / MemTensor</h3><p>npm と PyPI を跨ぐ worm。Shai-Hulud 系の手法が Python へ拡大。</p></div></div>
    <div class="ev worm" data-k="worm"><div class="card"><div class="meta"><span class="date">2026-10-08</span><span class="verdict-chip v-no">✗ 無関係</span></div><h3>tensorlake</h3><p><code>tensorlake@0.5.144</code> に Shai-Hulud 系 credential stealer と破壊的 dead-man's switch。</p></div></div>
    <div class="ev acct" data-k="acct"><div class="card"><div class="meta"><span class="date">2026-10-21</span><span class="verdict-chip v-no">✗ 無関係(release は private)</span></div><h3>LiteLLM 2 回目</h3><p>露出した社内サービスのログに残った <code>gh</code> OAuth token → org owner 権限で branch protection を無効化 → lookalike repo から<b>正規署名付き</b>で publish。3 月の被害後に release を <b>private repo へ移した後</b>の事件。<a href="#litellm">詳細 ↓</a></p></div></div>
  </div>
</div></section>

<section id="numbers"><div class="wrap">
  <div class="eyebrow">By the numbers</div>
  <h2>引用できる数字</h2>
  <p class="lead">すべて一次資料の値。攻撃の速度は「人が気づく前」に終わる規模になっている。</p>
  <div class="grid g4">
    <div class="card stat"><div class="n">444<span class="u">pkg</span></div><p>ChainDrop が <b>4 時間弱</b>で汚染したパッケージ数(2,212 版)。起点 <code>keyv</code> は週 1.5 億 DL。</p></div>
    <div class="card stat"><div class="n">76<span class="u">/ 77</span></div><p>Trivy 事件で force-push された <code>trivy-action</code> の version tag。<code>setup-trivy</code> は 7/7。</p></div>
    <div class="card stat"><div class="n">5<span class="u">秒</span></div><p>LiteLLM で branch protection が不正変更を拒否してから、owner 権限で無効化されるまで。</p></div>
    <div class="card stat"><div class="n">23,000<span class="u">+</span></div><p>tj-actions/changed-files を使っていた repo。全 tag が書き換えられた。</p></div>
    <div class="card stat"><div class="n">約 2<span class="u">時間</span></div><p>LiteLLM 1.107.0 が PyPI に存在した時間(11:39–13:23 UTC)。</p></div>
    <div class="card stat"><div class="n">3〜12<span class="u">時間</span></div><p>Trivy 各コンポーネントの露出窓。worm 系は数時間で検出・撤回される。</p></div>
    <div class="card stat"><div class="n">20 億<span class="u">DL/週</span></div><p>chalk / debug 事件で汚染されたパッケージ群の週間ダウンロード合計。</p></div>
    <div class="card stat"><div class="n">0<span class="u">件</span></div><p>Trivy で「source からビルドした利用者」が受けた被害。悪意あるコードは main に commit されていなかった。</p></div>
  </div>
</div></section>

<section id="chain"><div class="wrap">
  <div class="eyebrow">Attack anatomy</div>
  <h2>攻撃の型 — どこにも「ソースを読む」段階が無い</h2>
  <p class="lead">12 件を分解すると、侵入 → 公開 → 増殖の 3 段に収まる。攻撃者が欲しいのはソースではなく <b>publish 権限</b>。</p>
  <div class="flow">
    <div class="col"><h3>① 初期侵入</h3><ul>
      <li>メンテナ account の phishing / token 窃取<small>chalk, axios, ChainDrop</small></li>
      <li><code>pull_request_target</code> 誤設定で CI secrets 窃取<small>Nx, Trivy</small></li>
      <li>不完全(非アトミック)な rotation<small>Trivy 再侵入</small></li>
      <li>ログ・露出サービスから OAuth token 回収<small>LiteLLM 10-21</small></li>
    </ul></div>
    <div class="col"><h3>② 公開経路</h3><ul>
      <li>version tag の force-push<small>tj-actions, Trivy</small></li>
      <li>release workflow の source を lookalike repo に<small>LiteLLM 10-21</small></li>
      <li>registry 資格情報で直接 push<small>Trivy Docker Hub</small></li>
      <li>正規 Trusted Publishing + 有効 provenance<small>ChainDrop</small></li>
    </ul></div>
    <div class="col"><h3>③ 増殖・被害</h3><ul>
      <li><code>preinstall</code> フックで自動実行<small>Shai-Hulud, ChainDrop</small></li>
      <li>CI Runner のメモリ dump で secrets 回収<small>tj-actions, Trivy</small></li>
      <li>盗んだ token で他パッケージへ自己 publish<small>Shai-Hulud 系</small></li>
      <li>token 失効で発火する dead-man's switch<small>Shai-Hulud 2.0, ChainDrop</small></li>
    </ul></div>
  </div>
  <div class="callout"><b>新しい侵入面: AI 開発ツール。</b> LiteLLM の初期侵入は AI コーディングツールが応答本文に埋め込んだ <code>gh</code> OAuth token がログに残ったこと。ChainDrop は <code>.claude/settings.json</code> の SessionStart hook と <code>.vscode/tasks.json</code> に永続化。Nx は被害者の AI CLI で秘密情報を列挙した。いずれも公開可否と無関係。</div>
</div></section>

<section id="litellm"><div class="wrap">
  <div class="eyebrow">Case study · closest to AppThrust</div>
  <h2>LiteLLM 2026-10-21 — 非公開化した後に破られた</h2>
  <p class="lead">3 月の被害を受けて、release を private repo に移し、Trusted Publisher 化、Docker tag を immutable に、image を署名。それでも以下の 2 時間で突破された(UTC、公式 timeline)。</p>
  <div class="grid g2">
    <div class="card"><ol class="vt">
      <li><time>前週</time><span>顧客向け日次 backport のため release 権限を一時的に 2 名へ拡大</span></li>
      <li><time>—</time><span>攻撃者は社員 3 名分の <code>gh</code> OAuth token を保持(露出した社内サービスのログ経由)</span></li>
      <li><time>10:08:29</time><span>branch protection が release workflow の不正変更を<b>拒否</b></span></li>
      <li class="hl"><time>10:08:34</time><span>org owner の token で protection を無効化し force push</span></li>
      <li><time>10:46</time><span>改変 workflow が lookalike repo <code>Berri-AI/litellm</code> を source に staging 実行</span></li>
      <li><time>11:11</time><span>2 人目の token で production 承認ゲートを通過</span></li>
      <li class="hl"><time>11:39</time><span>PyPI に悪意ある wheel 7 本(正規経路で署名)</span></li>
      <li><time>11:46</time><span>Docker Hub / GHCR の <code>latest</code>, <code>main-stable</code> 等を侵害 image に</span></li>
      <li><time>11:53</time><span>3 人目の token で workflow 実行記録を削除</span></li>
      <li><time>13:23</time><span>PyPI から削除(14:20 Docker Hub 修復)</span></li>
    </ol></div>
    <div class="grid" style="align-content:start">
      <div class="card"><h3>効かなかったもの</h3><ul style="margin:0;padding-left:18px">
        <li>release repo の非公開化</li><li>Trusted Publisher</li><li>image 署名(正規経路で署名された)</li><li>branch protection(owner なら外せる)</li></ul></div>
      <div class="card"><h3>効いたもの</h3><ul style="margin:0;padding-left:18px">
        <li><b>private enterprise registry の顧客は無傷</b> — 配布経路の分離</li>
        <li>公開ソース tag との差分 — 「正規 tag に悪意あるファイルは無い」と即座に断定できた</li></ul></div>
      <div class="card" style="border-color:var(--accent)"><h3>示唆</h3><p style="margin:0">守るべきは「誰が merge / publish を承認できるか」。owner 権限の最小化と、複数人承認の強制。</p></div>
    </div>
  </div>
</div></section>

<section id="claims"><div class="wrap">
  <div class="eyebrow">Claims vs. evidence</div>
  <h2>否定派の 6 つの主張と、事実</h2>
  <p class="lead">「OSS だから安全」とは言わない。正しい懸念は正しいと認めたうえで、それが公開可否で解決するかを見る。</p>

  <details class="claim" open><summary><span class="tag">A</span><span class="q">ソースが見えるから脆弱性を見つけられて攻撃される</span><span class="pill rate r-wrong">事実と合わない</span></summary><div class="body">
    <p class="short">12 件のどれも「公開ソースを読んで脆弱性を発見」ではない。全件が資格情報かパイプラインの乗っ取り。</p>
    <ul>
      <li>zero-day で継続的に突かれているのは <b>クローズドのエッジ機器</b>(Fortinet、Citrix、Ivanti、Palo Alto 等)。CISA KEV に恒常的に追加されている。</li>
      <li>AppThrust の挙動の大半は CRD スキーマ、Helm chart、公開コンテナイメージから既に復元可能。非公開化で隠せる量は小さく、遅延効果しかない。</li>
      <li>逆に公開ソースは <b>検出手段</b>になった: Trivy は「source からビルドした人は無傷」、LiteLLM は「正規 source tag に悪意あるファイルは無い」と即断できた。</li>
    </ul></div></details>

  <details class="claim"><summary><span class="tag">B</span><span class="q">クローズドにしておけば安全</span><span class="pill rate r-wrong">事実と合わない</span></summary><div class="body">
    <p class="short">攻撃者が欲しいのは publish 権限。それはクローズドにも存在する。</p>
    <ul>
      <li>LiteLLM 10-21: release を private repo に移した後に、owner token で 5 秒で protection を外され、正規署名付きで publish。</li>
      <li>SolarWinds(2020)、3CX(2023): クローズドソースでビルド環境を侵害され、正規署名付き更新で数万〜数十万社に配布。</li>
      <li>Trivy 03-22: GitHub と無関係に、侵害された Docker Hub 資格情報で直接 push。</li>
    </ul></div></details>

  <details class="claim"><summary><span class="tag">C</span><span class="q">依存パッケージが汚染されるのが怖い</span><span class="pill rate r-half">懸念は正しい / 解決策が違う</span></summary><div class="body">
    <p class="short">正しい懸念。ただし依存を「使う側」である限り、自社ソースの公開可否と無関係に同じ被害を受ける。</p>
    <ul>
      <li>ChainDrop の被害者は <code>keyv</code> を使っていた全員。Go module、npm/bun 依存、GitHub Actions、ベースイメージは private repo でも同じものを pull する。</li>
      <li>防御は消費側の統制: full SHA pin、frozen lockfile、install script 無効化、新版の取り込み遅延(worm は数時間で撤回される)、digest 参照。</li>
    </ul></div></details>

  <details class="claim"><summary><span class="tag">D</span><span class="q">外部の PR から悪意あるコードが入る</span><span class="pill rate r-half">半分正しい</span></summary><div class="body">
    <p class="short">xz と Nx は外部寄与の扱いが間接要因。ただし防御は merge 権限と fork PR workflow の設計。</p>
    <ul>
      <li>公開しても「寄与を受け付けるか」「fork PR に secrets を渡すか」は独立に決められる。<code>pull_request_target</code> を使わなければ Nx / Trivy の初期侵入経路は無い。</li>
      <li>最近の事件は <b>内部者のアカウント</b>が起点のものの方が多い(chalk、axios、ChainDrop、LiteLLM 10-21)。これはクローズドでも起きる。</li>
    </ul></div></details>

  <details class="claim"><summary><span class="tag">E</span><span class="q">競合に真似される・ただ乗りされる</span><span class="pill rate r-half">正しいが別問題</span></summary><div class="body">
    <p class="short">セキュリティではなくライセンスの問題。AppThrust は「ソースは読める・改変できる・有効な契約がある環境でだけ商用機能を実行できる」型のライセンスで扱う。</p>
    <ul>
      <li>LiteLLM 10-21 で private enterprise registry の顧客が無傷だった事実は、商用版の配布経路を分ける設計の根拠になる。非公開化の根拠にはならない。</li>
    </ul></div></details>

  <details class="claim"><summary><span class="tag">F</span><span class="q">署名や provenance で OSS は安全、は嘘だった</span><span class="pill rate r-right">正しい</span></summary><div class="body">
    <p class="short">「署名で足りる」は崩れた。しかし「非公開なら足りる」の根拠にもならない。</p>
    <ul>
      <li>ChainDrop の侵害版は OIDC Trusted Publishing と有効な SLSA provenance 付き。<b>provenance は「どの commit か」を証明し、「承認されたか」は証明しない。</b></li>
      <li>LiteLLM 10-21 も正規 signing 経路で署名済み。</li>
      <li>足りないのは merge の複数人承認と owner 権限の最小化。クローズドでも同じ。</li>
    </ul></div></details>
</div></section>

<section id="concede" class="concede"><div class="wrap">
  <div class="eyebrow">Where skeptics are right</div>
  <h2>否定派が正しい点 — 先に認める</h2>
  <p class="lead">6 点のうち 5 点は公開可否と無関係に今すぐ必要な運用。公開固有なのは 1 点だけ。</p>
  <div class="grid g3">
    <div class="card"><span class="num">1</span><h3>依存乗っ取りは実害がある</h3><p>ChainDrop、Shai-Hulud、axios、tj-actions、Trivy はすべて「使う側」が被害者。</p><span class="where" style="color:var(--muted)">公開可否と無関係</span></div>
    <div class="card"><span class="num">2</span><h3>署名・provenance は承認を証明しない</h3><p>ChainDrop / LiteLLM で実証。</p><span class="where" style="color:var(--muted)">公開可否と無関係</span></div>
    <div class="card"><span class="num">3</span><h3>branch protection は owner に無力</h3><p>LiteLLM で 5 秒で外された。</p><span class="where" style="color:var(--muted)">公開可否と無関係</span></div>
    <div class="card"><span class="num">4</span><h3>AI ツール経由の token 漏洩</h3><p>LiteLLM の初期侵入、ChainDrop の永続化、Nx の秘密情報列挙。</p><span class="where" style="color:var(--muted)">公開可否と無関係</span></div>
    <div class="card"><span class="num">5</span><h3>不完全な rotation は意味がない</h3><p>Trivy は数日の非アトミックな rotation 窓で再侵入された。</p><span class="where" style="color:var(--muted)">公開可否と無関係</span></div>
    <div class="card" style="border-color:var(--warn)"><span class="num" style="background:color-mix(in srgb,var(--warn) 20%,transparent);color:var(--warn)">6</span><h3>履歴に残った秘密情報は公開で露出</h3><p>非公開期間に混入した資格情報は、公開した瞬間に全部見える。</p><span class="where" style="color:var(--warn)">公開固有 → 公開前に履歴スキャンと rotate</span></div>
  </div>
</div></section>

<section id="controls"><div class="wrap">
  <div class="eyebrow">Controls & limits</div>
  <h2>どの統制がどの事件を止められたか</h2>
  <p class="lead">単独で全部を止める統制は無い。「非公開化」の行は全事件で効果なし。</p>
  <div class="scroll"><table class="mx">
    <thead><tr><th>統制</th><th>tj-actions</th><th>Nx</th><th>chalk</th><th>Trivy</th><th>axios</th><th>ChainDrop</th><th>LiteLLM 10-21</th></tr></thead>
    <tbody>
      <tr><td><b>ソースの非公開化</b></td><td class="c-n">✗</td><td class="c-n">✗</td><td class="c-n">✗</td><td class="c-n">✗</td><td class="c-n">✗</td><td class="c-n">✗</td><td class="c-n">✗</td></tr>
      <tr><td>Actions の full SHA pin(利用側)</td><td class="c-y">●</td><td>–</td><td>–</td><td class="c-y">●</td><td>–</td><td>–</td><td>–</td></tr>
      <tr><td><code>pull_request_target</code> を使わない</td><td>–</td><td class="c-y">●</td><td>–</td><td class="c-y">●</td><td>–</td><td>–</td><td>–</td></tr>
      <tr><td>immutable release / tag ruleset</td><td class="c-y">●</td><td>–</td><td>–</td><td class="c-p">◐</td><td>–</td><td>–</td><td>–</td></tr>
      <tr><td>Trusted Publishing + provenance</td><td>–</td><td>–</td><td class="c-p">◐</td><td>–</td><td class="c-p">◐</td><td class="c-n">✗</td><td class="c-n">✗</td></tr>
      <tr><td>image / artifact 署名</td><td>–</td><td>–</td><td>–</td><td class="c-p">◐</td><td>–</td><td class="c-n">✗</td><td class="c-n">✗</td></tr>
      <tr><td>FIDO2 2FA・owner 最小化</td><td>–</td><td>–</td><td class="c-y">●</td><td>–</td><td class="c-y">●</td><td class="c-y">●</td><td class="c-y">●</td></tr>
      <tr><td>merge の複数人承認</td><td>–</td><td>–</td><td>–</td><td class="c-p">◐</td><td>–</td><td class="c-y">●</td><td class="c-p">◐</td></tr>
      <tr><td>新版の取り込み遅延(数日)</td><td class="c-y">●</td><td class="c-y">●</td><td class="c-y">●</td><td class="c-y">●</td><td class="c-y">●</td><td class="c-y">●</td><td class="c-y">●</td></tr>
      <tr><td>install script 無効・lockfile 凍結</td><td>–</td><td class="c-p">◐</td><td class="c-p">◐</td><td>–</td><td class="c-p">◐</td><td class="c-y">●</td><td>–</td></tr>
      <tr><td>アトミックな credential rotation</td><td>–</td><td>–</td><td>–</td><td class="c-y">●</td><td>–</td><td>–</td><td>–</td></tr>
    </tbody>
  </table></div>
  <p class="small muted">● 防げた/大幅に限定できた ◐ 部分的 ✗ 効かなかったと一次資料に記録 – 該当しない。「取り込み遅延」は利用側の視点(露出窓が 2〜12 時間のため)。</p>
</div></section>

<section id="appthrust"><div class="wrap">
  <div class="eyebrow">AppThrust</div>
  <h2>AppThrust はどうするか</h2>
  <div class="cmp" style="margin-bottom:28px">
    <div class="card"><h3><span class="pill r-wrong">非公開のまま</span>得るもの / 失うもの</h3><ul>
      <li>依存乗っ取り・CI 侵害・account 乗っ取り — <b>何も変わらない</b></li>
      <li>コードを読まれにくい — 遅延のみ(CRD・chart・公開イメージから大半は復元可能)</li>
      <li>Kubernetes オペレータ製品としてのソース監査可能性と採用 — <b>失う</b></li></ul></div>
    <div class="card"><h3><span class="pill r-right">OSS 公開</span>得るもの / 必要なこと</h3><ul>
      <li>監査可能性、外部からの脆弱性報告、採用</li>
      <li>公開前: git 履歴の秘密情報スキャン → 検出分を rotate</li>
      <li>公開後: secret scanning / push protection、報告窓口(<code>SECURITY.md</code>)</li></ul></div>
  </div>

  <h3 style="margin-bottom:12px">すでに入っている統制</h3>
  <div class="grid g4 posture" style="margin-bottom:24px">
    <div class="card"><h3>Actions SHA pin<span class="v">100%</span></h3><p>全 <code>uses:</code> が full commit SHA。tag 参照ゼロ。tj-actions / Trivy 型に耐性。</p></div>
    <div class="card"><h3>pull_request_target<span class="v">0</span></h3><p>fork PR から CI secrets に届く workflow が無い。Nx / Trivy の初期侵入経路が無い。</p></div>
    <div class="card"><h3>tag 不変化<span class="v">✓</span></h3><p>配送・昇格・verified tag を ruleset で不変に。tag force-push 型に耐性。</p></div>
    <div class="card"><h3>keyless 署名検証<span class="v">✓</span></h3><p>release index を cosign keyless で署名し、発行 workflow の identity まで検証。</p></div>
  </div>

  <h3 style="margin-bottom:12px">公開可否と無関係に強化する方向</h3>
  <div class="grid g3 posture todo">
    <div class="card"><h3>merge の承認統制<span class="v">→</span></h3><p>release / workflow / 依存定義の変更に作者以外の承認を必須化。provenance が承認を証明しない以上、ここが本丸。</p></div>
    <div class="card"><h3>依存の取り込み遅延<span class="v">→</span></h3><p>自動更新に「公開から数日」の待ちを入れる。worm 系の露出窓は数時間。</p></div>
    <div class="card"><h3>権限と token の衛生<span class="v">→</span></h3><p>owner 最小化 + FIDO2、AI ツール・ログ経由の token 露出点検、アトミックな rotation 手順。</p></div>
  </div>
</div></section>

<section id="faq" class="faq"><div class="wrap">
  <div class="eyebrow">FAQ</div>
  <h2>想定問答</h2>
  <details open><summary>非公開にしておけば、少なくとも攻撃者はコードを読めないのでは?</summary><p>読めなくても publish 権限を取れば同じ。LiteLLM は private release repo を破られ、SolarWinds / 3CX はクローズドでビルド環境を破られた。AppThrust の CRD・chart・公開イメージからは挙動の大半が復元できるので、隠せる量も小さい。</p></details>
  <details><summary>ChainDrop は OSS の問題でしょう?</summary><p>ChainDrop の被害者は <code>keyv</code> を「使っていた」全員。自社 repo が private でも、依存に汚染版が入れば同じ。防御は lockfile 凍結・install script 無効・取り込み遅延で、公開可否ではない。</p></details>
  <details><summary>署名していれば大丈夫と言っていたのに ChainDrop は署名付きだった。OSS の安全神話は崩れたのでは?</summary><p>崩れたのは「署名で足りる」。署名は「どの commit か」を証明し「承認されたか」は証明しない。足りないのは merge の複数人承認と owner 権限の最小化で、これはクローズドでも同じ。</p></details>
  <details><summary>公開したら今まで以上に狙われるのでは?</summary><p>狙われる対象は publish 権限と CI secrets で、それは今も存在する。公開で増えるのは外部からの脆弱性報告(受け口が要る)。公開で増える具体的なリスクは履歴内の秘密情報だけ。</p></details>
  <details><summary>公開するために最低限何をするのか?</summary><p>① git 履歴の秘密情報スキャン → 検出分を rotate、② merge の承認統制、③ workflow 変更を自動 merge の対象外に、④ 依存自動更新に取り込み遅延、⑤ 公開後に secret scanning / push protection。②〜④ は公開しなくても必要。</p></details>
  <details><summary>商用機能が盗まれる心配は?</summary><p>ライセンスの問題として扱う。LiteLLM が private enterprise registry の顧客を無傷で守れた事実は、商用版の配布経路を分ける設計の根拠になる。</p></details>
</div></section>

<section id="sources"><div class="wrap">
  <div class="eyebrow">Sources</div>
  <h2>出典(一次資料優先・閲覧 2026-10-24)</h2>
  <ul class="src">
    <li>LiteLLM 10-21 <a href="https://docs.litellm.ai/blog/security-incident-oct-21-2026">公式 incident report</a> / <a href="https://github.com/BerriAI/litellm/issues/47826">Issue #47826</a></li>
    <li>Trivy <a href="https://github.com/advisories/GHSA-69fq-xp46-6x23">GHSA-69fq-xp46-6x23 / CVE-2026-33634</a></li>
    <li>TeamPCP <a href="https://www.microsoft.com/en-us/security/blog/2026/03/24/detecting-investigating-defending-against-trivy-supply-chain-compromise">Microsoft Security Blog</a> / <a href="https://www.trendmicro.com/en_us/research/26/c/inside-litellm-supply-chain-compromise.html">Trend Micro</a></li>
    <li>ChainDrop <a href="https://www.stepsecurity.io/blog/chaindrop-npm-worm">StepSecurity</a> / <a href="https://www.microsoft.com/en-us/security/blog/2026/08/04/chaindrop-supply-chain-compromise-anatomy-self-propagating-worm">Microsoft</a> / <a href="https://www.elastic.co/security-labs/threat-command/shai-hulud-chaindrop-npm-supply-chain">Elastic</a></li>
    <li>axios <a href="https://github.com/axios/axios/issues/10636">Post Mortem #10636</a> / <a href="https://www.cisa.gov/news-events/alerts/2026/04/20/supply-chain-compromise-impacts-axios-node-package-manager">CISA</a></li>
    <li>Shai-Hulud <a href="https://attack.mitre.org/software/S9008/">MITRE ATT&amp;CK S9008</a> / <a href="https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm">Datadog 2.0</a> / <a href="https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks">Unit 42</a></li>
    <li>chalk / debug <a href="https://www.sonatype.com/blog/npm-chalk-and-debug-packages-hit-in-software-supply-chain-attack">Sonatype</a></li>
    <li>Nx <a href="https://nx.dev/blog/s1ngularity-postmortem">s1ngularity postmortem</a></li>
    <li>tj-actions <a href="https://www.cisa.gov/news-events/alerts/2025/03/18/supply-chain-compromise-third-party-github-action-cve-2025-30066">CISA</a> / <a href="https://github.com/reviewdog/reviewdog/issues/2079">reviewdog #2079</a></li>
    <li>tensorlake <a href="https://github.com/tensorlakeai/tensorlake/security/advisories/GHSA-8g63-53c9-65j2">GHSA-8g63-53c9-65j2</a></li>
    <li>Sckit <a href="https://www.stepsecurity.io/blog/sckit-supply-chain-worm-hits-memtensor-npm-pypi-scopes">StepSecurity</a></li>
    <li>3CX <a href="https://cloud.google.com/blog/topics/threat-intelligence/3cx-software-supply-chain-compromise">Mandiant</a> / <a href="https://attack.mitre.org/campaigns/C0057">MITRE C0057</a></li>
    <li>エッジ機器 <a href="https://it.tenable.com/blog/edge-infrastructure-under-siege">Tenable × SentinelOne</a> / <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog">CISA KEV</a></li>
  </ul>
</div></section>

<footer><div class="wrap">AppThrust Platform · Security briefing · 2026-10-24。数字と日付は各一次資料の記載値。分類(主因・間接要因)は AppThrust による判定。</div></footer>

<script>
(function(){
  var btns=document.querySelectorAll('.filters button');
  var evs=document.querySelectorAll('#tl .ev');
  btns.forEach(function(b){b.addEventListener('click',function(){
    var f=b.getAttribute('data-f');
    btns.forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});
    evs.forEach(function(e){e.classList.toggle('hide',f!=='all'&&e.getAttribute('data-k')!==f)});
  })});
})();
</script>
</body>
</html>`;
