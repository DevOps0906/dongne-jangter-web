// spec/tokens/tokens.json → src/styles/tokens.css
// 실행: npm run tokens
// 생성된 파일은 직접 고치지 않습니다. 값은 spec 레포의 tokens.json에서만 바꿉니다.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'spec/tokens/tokens.json');
const target = resolve(root, 'src/styles/tokens.css');

const t = JSON.parse(readFileSync(source, 'utf8'));

const px = (n) => `${n}px`;
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// 1) 색 (플랫 키만; 중첩 상태색·매너온도색은 아래에서 별도 처리)
const colorVars = [];
for (const [key, value] of Object.entries(t.color)) {
  if (typeof value === 'string') colorVars.push(`  --color-${kebab(key)}: ${value};`);
}
for (const [name, pair] of Object.entries(t.color.status)) {
  colorVars.push(`  --color-status-${name}-fg: ${pair.fg};`);
  colorVars.push(`  --color-status-${name}-bg: ${pair.bg};`);
}
for (const [name, entry] of Object.entries(t.color.mannerTemp)) {
  colorVars.push(`  --color-manner-${name}: ${entry.value};`);
}

// 2) 간격·radius·사이즈
const spaceVars = Object.entries(t.space).map(([k, v]) => `  --space-${k}: ${px(v)};`);
const radiusVars = Object.entries(t.radius).map(([k, v]) => `  --radius-${k}: ${v === 999 ? '9999px' : px(v)};`);
const sizeVars = Object.entries(t.size).map(([k, v]) => `  --size-${kebab(k)}: ${px(v)};`);

// 3) 글자 종류
const fontVars = [
  `  --font-display: ${t.font.display};`,
  `  --font-body: ${t.font.body};`,
];

// 4) 반응형 글자 크기: 모바일 기본, 태블릿(≥768), 데스크탑(≥1200)
const bp = t.breakpoints;
const fontSizes = (bucket) =>
  Object.entries(t.fontSize).map(
    ([name, sizes]) => `  --text-${kebab(name)}: ${px(sizes[bucket])};`,
  );
const fontWeights = Object.entries(t.fontSize).map(
  ([name, sizes]) => `  --weight-${kebab(name)}: ${sizes.weight};`,
);

const css = `/* 자동 생성 파일. 수정하지 마세요. 원본: spec/tokens/tokens.json (v${t.$meta.version}) */

:root {
${colorVars.join('\n')}
${spaceVars.join('\n')}
${radiusVars.join('\n')}
${sizeVars.join('\n')}
${fontVars.join('\n')}
${fontWeights.join('\n')}
  --motion-fast: ${t.motion.fast};
  --motion-base: ${t.motion.base};

  /* 모바일 (~${bp.mobile.max}px) */
${fontSizes('mobile').join('\n')}
}

/* 태블릿 (${bp.tablet.min}px ~ ${bp.tablet.max}px) */
@media (min-width: ${bp.tablet.min}px) {
  :root {
${fontSizes('tablet').map((l) => `  ${l}`).join('\n')}
  }
}

/* 데스크탑 (${bp.desktop.min}px ~) */
@media (min-width: ${bp.desktop.min}px) {
  :root {
${fontSizes('desktop').map((l) => `  ${l}`).join('\n')}
  }
}
`;

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, css, 'utf8');
console.log(`tokens.css 생성: ${target}`);
