import communication from '@/public/skill1.png'
import critical from '@/public/criticalSkill.png'
import creative from '@/public/creative.png'
import citizinship from '@/public/citizinship.png'
import problem from '@/public/problem.png'
// CARD DATA START
import chair from '../public/2.png'
import blackBoard from '../public/1+1.png'
import note from '../public/note.png'
import icon_next from '../public/Icon_next.png'
import reading from '../public/reading.png'
import Aguy from '../public/Aguy.png'
import childs from '../public/childs.png'
// CARD DATA END

export const skillsComp = [
  {
    img: communication,
    text: 'Communication and cooperation',
    id: '1'
  },
  {
    img: critical,
    text: 'Critical thinking',
    id: '2'
  },
  {
    img: creative,
    text: 'Creativity and imagination',
    id: '3'
  },
  {
    img: citizinship,
    text: 'Citizenship',
    id: '4'
  },
  {
    img: problem,
    text: 'Problem solving ',
    id: '5'
  }
]

export const newDataSection = [
  {
    id: '1',
    img: chair,
    title: 'The Basic Skills you will Learn',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: icon_next,
    flex: 'row'
  },
  {
    id: '2',
    img: [blackBoard, note],
    title: 'The Basic Skills you will Learn',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: icon_next,
    flex: 'column'
  },
  {
    id: '3',
    img: [reading, Aguy],
    title: 'The Basic Skills you will Learn',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: icon_next,
    flex: 'row'
  },
  {
    id: '4',
    img: childs,
    title: 'The Basic Skills you will Learn',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: icon_next,
    flex: 'row'
  }
]
