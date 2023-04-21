import styled, { createGlobalStyle } from 'styled-components';
import { AnimatePresence, motion, useMotionValue, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from 'react';

const Globalstyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cormorant:wght@300&family=Do+Hyeon&family=Nanum+Myeongjo&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  font-family: 'Nanum Myeongjo', serif;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration : none;
  color : inherit;
}
* {
  box-sizing : border-box;
}
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: black;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: black;
`;

const box = {
  invisible: {
    x: 500,
    scale: 0,
    opacity:0
  }, 
  visible: {
    x: 0,
    scale: 1,
    opacity:1,
    transition:{
      duration: 1
    }
  },
  exits: {
    x: -500,
    scale: 0,
    opacity:0,
    transition:{
      duration: 1
    }
  },
}

function App() {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 6) ? 6 : prev + 1)
  const previousPlease = () => setVisible((prev) => (prev === 1) ? 1 : prev - 1)
  return (
    <>
      <Globalstyle />
      <Wrapper>
        <AnimatePresence>
          {[1, 2, 3, 4, 5, 6].map(i =>
            i === visible ?
            <Box
            variants={box}
            initial="invisible"
            animate="visible"
            exit="exits"
            key={i}
            >{i}
            </Box> : null)},
        </AnimatePresence>
        <button style={{position : "absolute", marginTop : 300}} onClick={nextPlease}>next</button>
        <button style={{position : "absolute", marginTop : 350}} onClick={previousPlease}>previous</button>
      </Wrapper>
    </>
  );
}

export default App;
