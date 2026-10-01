// Badge medallions and Piri drawings shared by the mockups (mockup-mof26-badges.html, mockup-mof37-home.html).

// Every badge: fill colour, the pepper's expression, and one glyph drawn on top (in the 120 x 120 medallion space).
const INK = '#1E1410';
const BADGES = [
  { code: 'first_pepper',    name: 'Baby Steps',                 desc: 'Your first burn. It only gets worse from here.', fill: '#7DAA68', mood: 'happy', scale: 0.5, baby: true, glyph: 'pacifier', earned: '26 Sep 2026' },
  { code: 'ten_peppers',     name: 'Getting Spicy',              desc: 'Ten peppers eaten in total.',                    fill: '#E9C64A', mood: 'happy', glyph: 'flames' },
  { code: 'hundred_peppers', name: 'Pepper Vacuum',              desc: 'One hundred peppers eaten in total.',            fill: '#F0953A', mood: 'vacuum', glyph: 'crumbs' },
  { code: 'variety_10',      name: 'Collector',                  desc: 'Ten different kinds of pepper.',                 fill: '#FFF1B8', mood: 'trio' },
  { code: 'hot_100k',        name: "Now We're Talking",          desc: 'A single pepper of at least 100,000 SHU.',       fill: '#E4611F', mood: 'cool', glyph: 'bubble', earned: '26 Sep 2026' },
  { code: 'superhot_club',   name: 'Superhot Club',              desc: 'A single pepper of at least 1,000,000 SHU.',     fill: '#6B1030', mood: 'dead', glyph: 'skull', earned: '26 Sep 2026' },
  { code: 'million_total',   name: 'Scoville Millionaire',       desc: 'One million Scoville eaten in total.',           fill: '#E9C64A', mood: 'happy', glyph: 'tag:1M', earned: '26 Sep 2026' },
  { code: 'brave_raw',       name: 'No Regrets (Many Regrets)',  desc: 'A whole pepper with pain rating 10.',            fill: '#C8321E', mood: 'cry', glyph: 'sweat', earned: '26 Sep 2026' },
  { code: 'world_tour',      name: 'Passport of Pain',           desc: 'Peppers from five different countries.',         fill: '#3E8E9E', mood: 'happy', scale: 0.5, glyph: 'globe', glyph2: 'bucket' },
  { code: 'dish_master',     name: "Chef's Kiss",                desc: 'Ten burns in a dish.',                           fill: '#F0953A', mood: 'squint', scale: 0.52, glyph: 'hat' },
  { code: 'hundred_million_total', name: 'Scoville Tycoon',     desc: 'One hundred million Scoville eaten in total.',   fill: '#1E1410', mood: 'smoked', scale: 0.56, glyph: 'tag:100M', glyph2: 'skulls3', glyph3: 'smoke' },
  { code: 'group_top',         name: 'Top of the Squad',         desc: 'Number one on your group score card.',           fill: '#F2C14E', gold: true, mood: 'happy', scale: 0.52, glyph: 'trophy' },
  { code: 'board_leader',      name: 'Hottest Mouth on Earth',   desc: 'All-time number one on the community board.',    fill: '#F2C14E', gold: true, mood: 'happy', scale: 0.52, glyph: 'crown' },
  { code: 'tears_of_joy',      name: 'Tears of Joy',             desc: 'Pain 10 and five stars for taste. It hurt, you loved it.', fill: '#8CC3E8', mood: 'cry', glyph: 'hearts' },
];

function pepper(mood, grey, body = '#E43D28', baby = false) {
  const ink = INK, stem = grey ? '#A99D90' : '#5E9E4C', fill = grey ? '#C9BDB0' : body;
  let face = '';
  if (mood === 'happy') face = `<circle cx="58" cy="70" r="6" fill="${ink}"/><circle cx="80" cy="70" r="6" fill="${ink}"/><circle cx="60" cy="68" r="2" fill="#fff"/><circle cx="82" cy="68" r="2" fill="#fff"/><path d="M58 90 Q70 102 82 90" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><ellipse cx="50" cy="86" rx="6" ry="4" fill="#F79A8C"/><ellipse cx="90" cy="86" rx="6" ry="4" fill="#F79A8C"/>`;
  if (mood === 'squint') face = `<path d="M52 70 Q58 64 64 70 M74 70 Q80 64 86 70 M58 92 Q70 100 82 92" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`;
  if (mood === 'dead') face = `<path d="M52 64 l12 12 M64 64 l-12 12 M74 64 l12 12 M86 64 l-12 12" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><ellipse cx="70" cy="98" rx="9" ry="7" fill="${ink}"/>`;
  if (mood === 'cry') face = `<path d="M50 66 Q58 72 66 66 M74 66 Q82 72 90 66" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><path d="M60 96 Q70 88 80 96" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><path d="M56 76 q-5 12 0 16 q5 -4 0 -16z M84 76 q5 12 0 16 q-5 -4 0 -16z" fill="#8CC3E8" stroke="${ink}" stroke-width="2"/>`;
  if (mood === 'cool') face = `<path d="M46 66 h20 a4 4 0 0 1 4 4 v6 a6 6 0 0 1 -6 6 h-8 a6 6 0 0 1 -6 -6z M72 66 h20 a4 4 0 0 1 4 4 v6 a6 6 0 0 1 -6 6 h-8 a6 6 0 0 1 -6 -6z" fill="${ink}"/><path d="M66 70 h6" stroke="${ink}" stroke-width="3"/><path d="M52 74 l6 -4 M78 74 l6 -4" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/><path d="M58 94 q10 8 24 -2" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><path d="M74 58 q8 -4 14 0" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`;
  if (mood === 'smoked') face = `<path d="M52 64 l12 12 M64 64 l-12 12 M74 64 l12 12 M86 64 l-12 12" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><path d="M63 90 l12 12 M75 90 l-12 12" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>`;
  if (mood === 'roar') face = `<path d="M50 70 l8 -5 l-8 -5 M90 70 l-8 -5 l8 -5" fill="none" stroke="${ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M56 86 q14 -6 28 0 q-2 22 -14 22 q-12 0 -14 -22z" fill="${ink}"/><path d="M62 100 q8 -6 16 0 q-2 8 -8 8 q-6 0 -8 -8z" fill="#E9535E"/><path d="M58 88 l4 5 l3 -5 M78 88 l-4 5 l-3 -5" fill="#fff" stroke="none"/><path d="M100 84 q6 4 0 10 M104 80 q10 7 0 18" fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>`;
  if (mood === 'vacuum') face = `<circle cx="58" cy="68" r="6" fill="${ink}"/><circle cx="80" cy="68" r="6" fill="${ink}"/><ellipse cx="66" cy="96" rx="9" ry="10" fill="${ink}"/><ellipse cx="66" cy="96" rx="5" ry="6" fill="#8A1E12"/>`;
  const stemPath = baby ? 'M57 24 C55 15 61 12 64 17 C67 12 73 15 71 24 Z' : 'M50 22 C46 10 56 4 62 12 C70 6 82 10 78 22 Z';
  return `<path d="${stemPath}" fill="${stem}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M40 30 C20 55 24 105 44 130 C52 140 70 142 84 128 C100 112 104 62 86 34 C76 20 50 20 40 30 Z" fill="${fill}" stroke="${ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M50 40 C42 60 44 95 56 118" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="5" stroke-linecap="round"/>${face}`;
}

function glyph(kind, grey) {
  const ink = INK, c = (x) => (grey ? '#B5A99C' : x);
  switch (kind) {
    case 'pacifier': return `<g transform="translate(65 69)"><ellipse cx="0" cy="0" rx="11" ry="7" fill="${c('#8CC3E8')}" stroke="${ink}" stroke-width="3"/><circle cx="0" cy="0" r="4" fill="${c('#FBF5EC')}" stroke="${ink}" stroke-width="2.5"/></g>`;
    case 'flames': return ['M84 30','M96 44','M90 58'].map((m, i) => `<path d="${m} c-6 -8 -2 -12 2 -16 c0 6 6 6 6 12 a6 6 0 0 1 -8 4z" fill="${c(i === 1 ? '#E4611F' : '#F0953A')}" stroke="${ink}" stroke-width="2.5" stroke-linejoin="round"/>`).join('');
    case 'crumbs': return [[22,58,7],[14,72,5],[30,80,4]].map(([x,y,r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r*0.7}" fill="${c('#E43D28')}" stroke="${ink}" stroke-width="2"/>`).join('') + `<path d="M34 66 q8 4 12 14" fill="none" stroke="${ink}" stroke-width="2" stroke-dasharray="3 3"/>`;
    case 'bubble': return `<g transform="translate(86 26)"><path d="M-14 -12 h28 a6 6 0 0 1 6 6 v14 a6 6 0 0 1 -6 6 h-10 l-8 8 v-8 h-10 a6 6 0 0 1 -6 -6 v-14 a6 6 0 0 1 6 -6z" fill="${c('#FBF5EC')}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/><text x="0" y="6" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="20" fill="${ink}">!</text></g>`;
    case 'skull': return `<g transform="translate(92 30)"><path d="M-11 -2 a11 11 0 0 1 22 0 v6 a5 5 0 0 1 -5 5 v4 h-12 v-4 a5 5 0 0 1 -5 -5z" fill="${c('#FBF5EC')}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/><circle cx="-4.5" cy="-1" r="2.6" fill="${ink}"/><circle cx="4.5" cy="-1" r="2.6" fill="${ink}"/><path d="M-4 9 v4 M0 9 v4 M4 9 v4" stroke="${ink}" stroke-width="2"/></g>`;
    case 'crown': return `<g transform="translate(61.5 0)"><path d="M-19 52 V32 l8 9 l11 -17 l11 17 l8 -9 V52z" fill="${c('#F2C14E')}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/><rect x="-20" y="50" width="40" height="9" rx="2.5" fill="${c('#F2C14E')}" stroke="${ink}" stroke-width="3"/><circle cx="-19" cy="32" r="3.2" fill="${c('#E43D28')}" stroke="${ink}" stroke-width="2"/><circle cx="0" cy="24" r="3.6" fill="${c('#8CC3E8')}" stroke="${ink}" stroke-width="2"/><circle cx="19" cy="32" r="3.2" fill="${c('#E43D28')}" stroke="${ink}" stroke-width="2"/><circle cx="-9" cy="54.5" r="2" fill="${c('#7DAA68')}"/><circle cx="0" cy="54.5" r="2" fill="${c('#E43D28')}"/><circle cx="9" cy="54.5" r="2" fill="${c('#7DAA68')}"/></g>`;
    case 'sweat': return `<path d="M32 44 q-5 10 0 14 q5 -4 0 -14z M90 40 q-5 10 0 14 q5 -4 0 -14z M96 62 q-4 8 0 11 q4 -3 0 -11z" fill="${c('#8CC3E8')}" stroke="${ink}" stroke-width="2"/>`;
    case 'globe': return `<g transform="translate(60 64)"><circle r="42" fill="${c('#8CC3E8')}" stroke="${ink}" stroke-width="3"/><path d="M-34 -14 c6 -12 18 -14 26 -6 c-2 8 -10 10 -12 18 c-8 2 -14 -4 -14 -12z M-8 14 c6 -2 12 4 10 12 c-6 4 -12 0 -10 -12z M12 -28 c10 -4 22 2 24 12 c-6 8 -16 8 -22 2 c-4 -4 -6 -10 -2 -14z M22 8 c8 0 14 8 10 16 c-8 2 -14 -4 -10 -16z" fill="${c('#7DAA68')}" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/><ellipse rx="42" ry="12" fill="none" stroke="${ink}" stroke-width="1.5" opacity=".45"/><ellipse rx="16" ry="42" fill="none" stroke="${ink}" stroke-width="1.5" opacity=".45"/></g>`;
    case 'bucket': return `<g transform="translate(61.5 0)"><path d="M-15 46 V40 a15 11 0 0 1 30 0 V46z" fill="${c('#E9C64A')}"/><path d="M-10 46 V33 h6 V46z M4 46 V33 h6 V46z" fill="${c('#E43D28')}"/><path d="M-3 46 V31 h6 V46z" fill="${c('#7DAA68')}"/><path d="M-15 46 V40 a15 11 0 0 1 30 0 V46z" fill="none" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/><path d="M-15 44 l-9 8 h48 l-9 -8z" fill="${c('#F0953A')}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/></g>`;
    case 'hat': return `<g transform="translate(61.5 0)"><path d="M-17 50 V38 c-12 2 -14 -18 -2 -16 c0 -14 22 -16 28 -4 c12 -4 16 14 4 18 V50z" fill="${c('#FBF5EC')}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/><rect x="-19" y="48" width="38" height="10" rx="3" fill="${c('#FBF5EC')}" stroke="${ink}" stroke-width="3"/><path d="M-8 40 v6 M0 38 v8 M8 40 v6" stroke="${ink}" stroke-width="2" stroke-linecap="round" opacity=".5"/></g>`;
    case 'hairfire': return `<g transform="translate(61.5 34)"><path d="M-14 4 c-8 -10 -2 -18 4 -22 c-1 8 6 8 6 -2 c8 6 8 16 2 22z" fill="${c('#F0953A')}" stroke="${ink}" stroke-width="2.5" stroke-linejoin="round"/><path d="M2 4 c-8 -12 0 -24 6 -30 c0 10 8 10 8 0 c8 8 8 22 -2 30z" fill="${c('#E4611F')}" stroke="${ink}" stroke-width="2.5" stroke-linejoin="round"/><path d="M-6 4 c-4 -8 0 -14 4 -18 c0 6 5 6 5 0 c5 6 4 14 -1 18z" fill="${c('#E9C64A')}" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/></g>`;
    case 'skulls3': return [[28, 32], [94, 30], [24, 82]].map(([x, y]) => glyph('skull', grey).replace('translate(92 30)', `translate(${x} ${y})`)).join('');
    case 'smoke': return `<g fill="${c('#D9D2CB')}" stroke="${ink}" stroke-width="2.5"><path d="M58 40 c-4 0 -5 -5 -1 -6 c0 -4 6 -5 8 -1 c4 -2 7 2 4 5 c1 3 -3 5 -5 2 c-2 2 -5 1 -6 0z"/><path d="M62 30 c-5 0 -6 -6 -1 -8 c0 -5 8 -6 10 -1 c5 -2 9 3 5 7 c1 4 -4 6 -6 3 c-2 2 -7 2 -8 -1z"/><path d="M68 20 c-6 0 -8 -8 -2 -10 c0 -7 10 -8 12 -2 c6 -3 12 4 7 9 c2 5 -5 8 -8 4 c-3 3 -8 2 -9 -1z"/></g>`;
    case 'dragoncrown': {
      // one dragon head in profile, snout to the right; open = roaring
      const head = (col, open) => `<path d="M-2 54 C-7 46 -7 34 0 28 C4 24 10 24 14 27 L25 30 L24 34 L15 35 L17 38 L9 38 C6 42 4 48 4 54 Z" fill="${c(col)}" stroke="${ink}" stroke-width="2.5" stroke-linejoin="round"/>` +
        `<path d="M1 27 l-4 -9 l7 6z M7 26 l1 -9 l4 8z" fill="${c(col)}" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/>` +
        `<path d="M-4 34 l-6 -3 l5 -3z M-6 41 l-6 -2 l4 -4z M-6 48 l-6 -1 l4 -4z" fill="${c(col)}" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/>` +
        `<ellipse cx="9" cy="31" rx="2.6" ry="1.8" fill="#fff" stroke="${ink}" stroke-width="1.2"/><path d="M9.5 29.4 v3.4" stroke="${ink}" stroke-width="1.4"/><circle cx="22" cy="32" r="1" fill="${ink}"/>` +
        (open ? `<path d="M13 36 L28 42 L17 47 C12 47 10 42 12 38 Z" fill="#8A1E12" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/><path d="M15 36 l1.5 3 l1.5 -3 M20 37.5 l1.5 3 l1.5 -2.5 M16 46 l1.5 -3 l1.5 3" fill="#fff"/><path d="M31 33 q4 5 0 10 M35 30 q7 8 0 16" fill="none" stroke="${ink}" stroke-width="2.2" stroke-linecap="round" opacity=".6"/>` : `<path d="M12 37 l6 2" stroke="${ink}" stroke-width="1.5" stroke-linecap="round"/>`);
      return `<g transform="translate(61.5 0)"><g transform="translate(-16 2) scale(-0.85 0.85)">${head('#5E9E4C', false)}</g><g transform="translate(16 2) scale(0.85)">${head('#E43D28', false)}</g><g transform="translate(-8 -8) scale(1.05)">${head('#E9C64A', true)}</g>` +
        `<rect x="-22" y="50" width="44" height="9" rx="2.5" fill="${c('#C4CAD1')}" stroke="${ink}" stroke-width="3"/><path d="M-13 54.5 l3 -3 l3 3 l-3 3z M10 54.5 l3 -3 l3 3 l-3 3z" fill="${c('#8CC3E8')}" stroke="${ink}" stroke-width="1.5"/><path d="M-1.5 54.5 l3 -3 l3 3 l-3 3z" fill="${c('#E43D28')}" stroke="${ink}" stroke-width="1.5"/></g>`;
    }
    case 'trophy': return glyph('tag:#1', grey).replace('translate(', 'translate(-64 0) translate(') + `<g transform="translate(92 92)"><path d="M-10 -14 h20 v8 a10 10 0 0 1 -20 0z" fill="${c('#FFF1B8')}" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/><path d="M-10 -10 h-5 a5 5 0 0 0 5 8 M10 -10 h5 a5 5 0 0 1 -5 8" fill="none" stroke="${ink}" stroke-width="2.5"/><path d="M-3 4 h6 v5 h5 v4 h-16 v-4 h5z" fill="${c('#FFF1B8')}" stroke="${ink}" stroke-width="2.5" stroke-linejoin="round"/></g>`;
    case 'hearts': return `<path d="M30 40 c-4 -8 -14 -4 -10 4 c2 4 10 8 10 8 c0 0 8 -4 10 -8 c4 -8 -6 -12 -10 -4z M92 30 c-3 -6 -11 -3 -8 3 c2 3 8 6 8 6 c0 0 6 -3 8 -6 c3 -6 -5 -9 -8 -3z" fill="${c('#E43D28')}" stroke="${ink}" stroke-width="2.5" stroke-linejoin="round"/>`;
    default:
      if (kind.startsWith('tag:')) { const t = kind.slice(4); const w = 14 + t.length * 9; return `<g transform="translate(${112 - w / 2} 96)"><rect x="${-w / 2}" y="-10" width="${w}" height="20" rx="6" fill="${c('#FBF5EC')}" stroke="${ink}" stroke-width="3"/><text x="0" y="5.5" text-anchor="middle" font-family="Baloo 2, sans-serif" font-weight="800" font-size="13" fill="${ink}">${t}</text></g>`; }
      return '';
  }
}

function medal(b, size, earned) {
  const grey = !earned;
  const fill = grey ? '#E8DCCF' : b.fill;
  if (b.bare) { const g0 = (b.glyph ? glyph(b.glyph, grey) : '') + (b.glyph2 ? glyph(b.glyph2, grey) : '') + (b.glyph3 ? glyph(b.glyph3, grey) : ''); const s0 = b.scale ?? 0.6, w0 = 120 * s0, h0 = 150 * s0; const y0 = b.glyph === 'hat' || b.glyph === 'crown' || b.glyph2 === 'crown' || b.glyph2 === 'dragoncrown' ? 36 : (120 - h0) / 2 + 2; return `<svg class="medal" width="${size}" height="${size}" viewBox="0 0 120 120" role="img" aria-label="${b.name}"><g transform="translate(${(120 - w0) / 2} ${y0}) scale(${s0})">${pepper(b.mood, grey, b.body ?? '#E43D28', !!b.baby)}</g>${g0}</svg>`; }
  let inner;
  if (b.mood === 'trio') {
    inner = ['#7DAA68', '#E9C64A', '#E43D28'].map((col, i) => `<g transform="translate(${8 + i * 26} 36) scale(0.42)">${pepper('happy', grey, col)}</g>`).join('');
  } else {
    const s = b.scale ?? 0.6, w = 120 * s, h = 150 * s;
    const y = b.glyph === 'globe' ? 34 : b.glyph === 'hat' ? 36 : b.glyph === 'crown' ? 36 :  (120 - h) / 2 + 2;
    inner = `<g transform="translate(${(120 - w) / 2} ${y}) scale(${s})">${pepper(b.mood, grey, b.body ?? '#E43D28', !!b.baby)}</g>`;
  }
  const g = (b.glyph ? glyph(b.glyph, grey) : '') + (b.glyph2 ? glyph(b.glyph2, grey) : '') + (b.glyph3 ? glyph(b.glyph3, grey) : '');
  const ring = b.gold && !grey ? `<circle cx="60" cy="60" r="49" fill="none" stroke="#FFF1B8" stroke-width="4"/><circle cx="60" cy="60" r="46" fill="none" stroke="${INK}" stroke-width="2"/>` : '';
  const fire = b.flames && !grey ? glyph('flames', false) + glyph('flames', false).replace(/M84 30|M96 44|M90 58/g, (m) => ({ 'M84 30': 'M28 34', 'M96 44': 'M18 50', 'M90 58': 'M26 66' })[m]) : '';
  const lock = grey ? `<g transform="translate(94 94)"><rect x="-9" y="-3" width="18" height="14" rx="3" fill="#B5A99C" stroke="${INK}" stroke-width="2.5"/><path d="M-5 -3 v-4 a5 5 0 0 1 10 0 v4" fill="none" stroke="${INK}" stroke-width="2.5"/></g>` : '';
  return `<svg class="medal" width="${size}" height="${size}" viewBox="0 0 120 120" role="img" aria-label="${b.name}${grey ? ', not earned yet' : ''}">
    <circle cx="60" cy="60" r="56" fill="${fill}" stroke="${INK}" stroke-width="4"/>${ring}${fire}
    ${b.glyph === 'globe' ? glyph('globe', grey) : ''}
    <clipPath id="c-${b.code}-${size}-${earned ? 1 : 0}"><circle cx="60" cy="60" r="54"/></clipPath>
    <g clip-path="url(#c-${b.code}-${size}-${earned ? 1 : 0})">${inner}</g>
    ${b.glyph === 'globe' ? (b.glyph2 ? glyph(b.glyph2, grey) : '') : g}${lock}
  </svg>`;
}

