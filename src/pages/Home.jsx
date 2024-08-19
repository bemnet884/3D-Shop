import { motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import { CustomeButton } from '../components'

const Home = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'/>
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' />
                DO It
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'> 
              <p className='max-w-md font-normal text-base text-gray-600' >
                Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.</p>
              
              <CustomeButton
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customeStyles="w-fit py-2.5 px-4 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home