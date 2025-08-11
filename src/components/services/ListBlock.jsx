import "./styles.css";
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';

const ListBlock = (props) => {
  const fadeSlide = {
    hidden: { opacity: 0, x: props.direction },
    visible: (customDelay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay: customDelay, duration: 1.0 },
    }),
  };

  const components = {
    marks: {
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic text-gray-600">{children}</em>,
      link: ({ value, children }) => (
        <a
          href={value?.href}
          className="text-indigo-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
    },
  };

  return (
    <ul className="list-block">
      {props.items?.map((item, index) => (
        <motion.li
          key={index}
          className="list-block-item"
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index * 0.1}
        >
          <div className="list-block-content">
            <PortableText value={[item]} components={components} />
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ListBlock;
