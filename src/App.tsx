import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
//if i want to use animation, i have to do like <motion.HTMLtag>

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgb(255, 255, 255);
  color: black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const OverPage = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 부모 variants 에서의 start, end 등의 값을 정하면 자식들에게도 같은 이름이 자동 부여됨
// 부모 variants 에서 "delayChildren" 과 같은 옵션을 사용해 children 값 조정 가능

// animation 을 위한 color 지정 시 "blue" 와 같은 string 이 아닌 rgba 와 같은 숫자로 주어야 애니메이트 됨

// initial 은 animation 의 초기값 설정

// motionvalue is not triggering react's render cycle

// var varname = useTransform(변환하려는 값, [현재값], [변환되는 값])
// ex)  const scale = useTransform(y, [-550, 0, 550], [2, 1, 2]);

function App() {
  const [id, setId] = useState<null | string>(null);
  console.log(id);
  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""}></Box>
        ))}
      </Grid>
      {id !== null ? (
        <AnimatePresence>
          <OverPage onClick={() => setId(null)}>
            <Box layoutId={id} style={{ height: 250, width: 500 }} />
          </OverPage>
        </AnimatePresence>
      ) : null}
    </Wrapper>
  );
}
export default App;
