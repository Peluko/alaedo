import * as jdu from 'jdu';

const spanishToAlaedoDict = {
    'a': 'o',
    'b': 'j',
    'c': 'w',
    'd': 'l',
    'e': 'u',
    'f': 'v',
    'g': 'b',
    'h': 'x',
    'i': 'a',
    'j': 't',
    'k': 'r',
    'l': 's',
    'm': 'd',
    'n': 'z',
    'ñ': 'q',
    'o': 'e',
    'p': 'h',
    'q': 'g',
    'r': 'y',
    's': 'm',
    't': 'c',
    'u': 'i',
    'v': 'k',
    'w': 'n',
    'x': 'p',
    'y': 'f',
    'z': 'ñ'
};

let alaedoToSpanishDict: any;

function initializeDict() {
    if (alaedoToSpanishDict === undefined) {
        for (const k in spanishToAlaedoDict) {
            if (spanishToAlaedoDict.hasOwnProperty(k)) {
              const uk = k.toUpperCase();
              const uv = spanishToAlaedoDict[k].toUpperCase();
              spanishToAlaedoDict[uk] = uv;
            }
        }
        alaedoToSpanishDict = {};
        for (const k in spanishToAlaedoDict) {
            if (spanishToAlaedoDict.hasOwnProperty(k)) {
                alaedoToSpanishDict[spanishToAlaedoDict[k]] = k;
            }
        }
    }
}

function translate(c: string, dict: {}): string {
    let tlt = '';
    for (let i = 0; i < c.length; i++) {
      let chr = c.charAt(i);
      if (chr !== 'ñ') {
        chr = jdu.replace(chr);
      }
      if (dict.hasOwnProperty(chr)) {
        chr = dict[chr];
      }
      tlt = tlt.concat(chr);
    }
    return tlt;
}

export function spanishToAlaedo(txt: string): string {
  initializeDict();
  return translate(txt, spanishToAlaedoDict);
}

export function alaedoToSpanish(txt: string): string {
  initializeDict();
  return translate(txt, alaedoToSpanishDict);
}
