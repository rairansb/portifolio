import { Player } from '@lottiefiles/react-lottie-player';

import Dev from '../assets/motion/animation_dev4.json';


const MotionDev = () => {
  return <Player
  autoplay
  loop
  src={Dev}
  style={{ height: '550px', width: '550px' }}
>
</Player>
}

export default MotionDev;