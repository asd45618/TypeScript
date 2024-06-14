// import Circle from "./Circle";

import styled from "styled-components";

// import { useState } from "react";

function App() {
  // const [item, setItem] = useState("");
  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setItem(value);
  // };

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("hello", item);
  // };

  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  const H1 = styled.div`
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <div>
      {/* <Circle borderColor="yellow" bgColor="teal" /> */}
      {/* <Circle text="im here" bgColor="tomato" /> */}

      {/* <form onSubmit={onSubmit}>
        <input
          value={item}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form> */}
      <Container>
        <H1>protected</H1>
      </Container>
    </div>
  );
}

export default App;
