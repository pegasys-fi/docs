import { opacify } from '../utils/opacify'

// Based mostly on https://github.com/Pegasys-fi/interface/blob/2ea70d1894f08c22b0e8c739c2ac55158659ca82/src/theme/colors.ts#L4
export const colors = {
  redVibrant: '#F14544',
  greenVibrant: '#5CFE9D',
  yellowVibrant: '#FAF40A',
  deepShadow: `0px 10px 24px ${opacify(24, '#00D9EF')}, 10px 0px 24px ${opacify(24, '#8C15E8')}`,
  cyan: '#00D9EF',
  purpleVibrantMain: '#8C15E8',
  purpleMain: '#665EE1',
  deep: '#081120',
  input: '#0B172C',
  backgroundOpacity: opacify(72, '#081120'),
}
