import "./Styles.css";
import { motion } from 'framer-motion';

const ListBlock = (props) => {

  const fadeSlide = {
    hidden: { opacity: 0, x: props.direction },
    visible: (customDelay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay: customDelay, duration: 1.0 },
    }),
  }

  return (
    <ul className="list-block">
      {props.items.map((item, index) => (
        <motion.li
          key={index} className="list-block-item"
          variants={fadeSlide}
          initial={"hidden"}
          whileInView={"visible"}
          custom={index * 0.1}
        >
          <div className="list-block-content">
            {item}
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ListBlock;
