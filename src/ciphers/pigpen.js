// src/ciphers/pigpen.js
// Uses Standard Galactic Alphabet (Minecraft Enchanting Table font) unicode characters

const SGA_MAP = {
  a: 'ᔑ', b: 'ʖ',  c: 'ᓵ', d: '↸', e: 'ᒷ', f: '⎓', g: '⊣', h: '⍑',
  i: '╎', j: '⋮',  k: 'ꖌ', l: 'ꖎ', m: 'ᒲ', n: 'リ', o: '𝙹', p: '!¡',
  q: 'ᑑ', r: '∷',  s: 'ᓭ', t: 'ℸ', u: '⚍', v: '⍊', w: '∴', x: '̇/',
  y: '||', z: '⨅'
};

const REVERSE_SGA_MAP = Object.fromEntries(
  Object.entries(SGA_MAP).map(([letter, symbol]) => [symbol, letter])
);

export function pigpenEncrypt(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .split('')
    .map(char => {
      if (char === ' ') return ' ';
      return SGA_MAP[char] || char;
    })
    .join('');
}

export function pigpenDecrypt(encoded) {
  if (!encoded) return '';
  return encoded
    .split('')
    .map(char => {
      if (char === ' ') return ' ';
      return REVERSE_SGA_MAP[char] || char;
    })
    .join('');
}
