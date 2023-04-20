import styled, { createGlobalStyle } from 'styled-components';
import { motion } from "framer-motion"

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

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const boxVariants = {
  start:{
    opacity: 0,
    scale: 0.5,
  },
  end:{
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.5, 
      delayChildren: 0.5,
      staggerChildren: 0.1,
    }
  }
}

const Circle = styled(motion.div)`
  background: teal;
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

const circleVariants = {
  start:{
    opacity: 0,
  },
  end:{
    opacity: 1,
  }
}


function App() {
  return (
    <>
      <Globalstyle />
      <Wrapper>
        <Box variants={boxVariants} initial="start" animate="end" >
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
          <Circle variants={circleVariants}/>
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
