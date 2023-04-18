import cl from './GlobalLoader.module.scss';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';
import { useAppSelector } from '@/hooks/useAppSelector';

const opacityAnimation: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const opacityAnimationTransition: Transition = {
  duration: 0.6,
};

const GlobalLoader = () => {
  const { globalLoader } = useAppSelector((state) => state.ui);

  return (
    <AnimatePresence>
      {globalLoader && (
        <motion.div
          variants={opacityAnimation}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={opacityAnimationTransition}
          className={cl.loaderScreen}
        >
          <span>Loading...</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalLoader;
