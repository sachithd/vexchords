/*
 * Vex Chords v2
 * Mohit Muthanna Cheppudira -- http://0xfe.blogspot.com
 */

import ChordBox from './chordbox';
import { POSITIONS, SHAPES, build } from './builder';

function draw(sel, chord, opts) {
  return new ChordBox(sel, opts).draw(chord);
}

function getSvg(sel, chord, opts) {
  return new ChordBox(null, opts).drawAndReturnSvg(chord);
}

export {
  POSITIONS, SHAPES, ChordBox, build, draw, getSvg,
};
