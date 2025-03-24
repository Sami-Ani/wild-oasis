import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 2rem;
  background-color: var(--color-grey-300);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1 onClick={() => alert("Howdy partner!")}> The Wild Oasis</H1>
        <Input placeholder="what is your name"></Input>
      </StyledApp>
    </>
  );
}

export default App;
