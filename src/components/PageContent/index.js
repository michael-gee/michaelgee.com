import { motion } from 'framer-motion'

export const PageContent = props => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.6 }}
      exit={{ opacity: 0, transition: 0 }}
      className="page-content"
      {...props}
    >
      {props.children}
    </motion.div>
  )
}
