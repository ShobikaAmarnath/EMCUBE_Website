//headings

import { animate } from "framer-motion"

export const time_div = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { amount: 0.5 }
}

export const time_h2 = {
    initial: { opacity: 0, scale: 0.1 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
}

export const time_p = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.5, duration: 0.5 }
}

//services