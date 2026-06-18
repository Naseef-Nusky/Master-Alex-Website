import { BANNER_IMAGES } from './bannerImages'
import removeNegative from '../assets/remove_negative.png'

export const HERO_SLIDES = [
  {
    id: 1,
    tag: 'Energy Cleansing',
    mainWord: 'REMOVE',
    accentWord: 'Negative',
    lines: ['Energies and Restore Peace', 'in Your Life'],
    image: removeNegative,
    path: '/negative-energy-removal',
  },
  {
    id: 2,
    tag: 'Love & Relationships',
    mainWord: 'TRUSTED',
    accentWord: 'Methods to',
    lines: ['Restore Your Relationship', 'and Love'],
    image: BANNER_IMAGES['/get-ex-love-back'],
    path: '/get-ex-love-back',
  },
  {
    id: 3,
    tag: 'Love Spells',
    mainWord: 'TRUSTED',
    accentWord: 'Expert',
    lines: ['Love Spell Caster for True', 'Relationship Harmony'],
    image: BANNER_IMAGES['/love-spell-caster'],
    path: '/love-spell-caster',
  },
  {
    id: 4,
    tag: 'Aura Healing',
    mainWord: 'EXPERIENCE',
    accentWord: 'Inner',
    lines: ['Peace with Effective Aura', 'Cleaning Techniques'],
    image: BANNER_IMAGES['/spiritual-healing'],
    path: '/spiritual-healing',
  },
]
