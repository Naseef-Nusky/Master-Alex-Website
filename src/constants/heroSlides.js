import removeNegative from '../assets/remove_negative.png'
import trustedMethods from '../assets/trusted_methods.png'
import trustedExpert from '../assets/trusted-expert.png'
import experienceInner from '../assets/experience-inner.png'

export const HERO_SLIDES = [
  {
    id: 1,
    tag: 'Energy Cleansing',
    mainWord: 'REMOVE',
    accentWord: 'Negative',
    lines: ['Clear Negative Energy and', 'Restore Peace in Your Life'],
    image: removeNegative,
    path: '/negative-energy-removal',
  },
  {
    id: 2,
    tag: 'Love & Relationships',
    mainWord: 'TRUSTED',
    accentWord: 'Methods to',
    lines: ['Rebuild Your Bond and', 'Reignite Lost Love'],
    image: trustedMethods,
    path: '/get-ex-love-back',
  },
  {
    id: 3,
    tag: 'Love Spells',
    mainWord: 'TRUSTED',
    accentWord: 'Expert',
    lines: ['Powerful Love Spells for Lasting', 'Relationship Harmony'],
    image: trustedExpert,
    path: '/love-spell-caster',
  },
  {
    id: 4,
    tag: 'Aura Healing',
    mainWord: 'Revitalize Your Spiritual Energy and Gain Clarity in',
    accentWord: 'Life',
    lines: ['Achieve Deep Inner Peace Through Trusted Aura Cleansing Methods'],
    image: experienceInner,
    path: '/spiritual-healing',
  },
]
