import React, { useState, useEffect } from "react";
import "./index.css";
import styled from "styled-components";
import Theme from "./Theme";
const App = () => (
  <>
    <Calculator />
  </>
);

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [prevCalc, setPrevCalc] = useState(false);
  const [operator, setOperator] = useState("");
  const [flag, setFlag] = useState(false);

  const operators = "*-+/";

  // useEffect(() => {
  //   setOperand1(result);
  // }, [flag])

  function clear() {
    setResult("0");
    setOperand1("");
    setOperator("");
    setPrevCalc(false);
  }

  function readInput(keyId) {
    if (keyId === "0" && result === "0") {
      return;
    } else if (keyId === "AC") {
      clear();
      return;
    } else if (keyId === "=") {
      showResults();
    } else if (keyId === "negate") {
      setResult((prevState) => {
        if (prevState.includes("-")) {
          return prevState.substring(1);
        } else {
          return "-" + prevState;
        }
      });
    }
    else if (keyId === "%") {
      setResult((prevState) => {
        return (prevState / 100).toString();
      })
    }
    else if (keyId === "." && !result.includes(".")) {
      setResult((prevState) => {
        return prevState += ".";
      })
    }

    if (operators.includes(keyId)) {
      if (operator) {
        showResults();
      } else {
        setOperand1(result);
      }
      setOperator(keyId);
      setFlag((prevFlag) => !prevFlag);
    }

    if("0123456789".includes(keyId)) {
      setResult((prevState) => {
        if (prevState === "0") {
          console.log('also wrong');
          return keyId;
        }
        if ((prevCalc && operator) || (operator && operand1 === result)) {
          console.log('uhoh');
          return keyId;
        }
        return (prevState += keyId);
      });
    }
  }

  console.log(operand1, result, operator, prevCalc);

  function showResults() {
    let calculated = '';
    switch (operator) {
      case "-":
        calculated = (parseFloat(operand1) - parseFloat(result)).toString();
        break;
      case "+":
        calculated = (parseFloat(operand1) + parseFloat(result)).toString();
        break;
      case "*":
        calculated = (parseFloat(operand1) * parseFloat(result)).toString();
        break;
      case "/":
        calculated = 
          (
            Math.round((parseFloat(operand1) / parseFloat(result)) * 100000000) /
            100000000
          ).toString();
        break;
      default:
    }
    setPrevCalc(true);
    //setOperand1(calculated);
    setResult(calculated);
  }

  return (
    <Theme>
      <Container>
        <Result>
          <span>{result}</span>
        </Result>
        <Row>
          <StyledButton
            className="secondary"
            onClick={(e) => readInput(e.target.value)}
            value={"AC"}
          >
            AC
          </StyledButton>
          <StyledButton
            className="secondary"
            onClick={(e) => readInput(e.target.value)}
            value={"negate"}
          >
            &plusmn;
          </StyledButton>
          <StyledButton
            className="secondary"
            onClick={(e) => readInput(e.target.value)}
            value={"%"}
          >
            %
          </StyledButton>
          <StyledButton
            className="accent"
            onClick={(e) => readInput(e.target.value)}
            value="/"
          >
            &#247;
          </StyledButton>
        </Row>
        <Row>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={7}
          >
            7
          </StyledButton>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={8}
          >
            8
          </StyledButton>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={9}
          >
            9
          </StyledButton>
          <StyledButton
            className="accent"
            onClick={(e) => readInput(e.target.value)}
            value="*"
          >
            x
          </StyledButton>
        </Row>
        <Row>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={4}
          >
            4
          </StyledButton>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={5}
          >
            5
          </StyledButton>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={6}
          >
            6
          </StyledButton>
          <StyledButton
            className="accent"
            onClick={(e) => readInput(e.target.value)}
            value="-"
          >
            -
          </StyledButton>
        </Row>
        <Row>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={1}
          >
            1
          </StyledButton>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={2}
          >
            2
          </StyledButton>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={3}
          >
            3
          </StyledButton>
          <StyledButton
            className="accent"
            onClick={(e) => readInput(e.target.value)}
            value="+"
          >
            +
          </StyledButton>
        </Row>
        <Row>
          <StyledButton
            className="button zero"
            onClick={(e) => readInput(e.target.value)}
            value={0}
          >
            <span>0</span>
          </StyledButton>
          <StyledButton
            className="button"
            onClick={(e) => readInput(e.target.value)}
            value={"."}
          >
            .
          </StyledButton>
          <StyledButton
            className="accent"
            onClick={(e) => readInput(e.target.value)}
            value="="
          >
            =
          </StyledButton>
        </Row>
      </Container>
    </Theme>
  );
};

const Container = styled.div`
  display: block;
  width: 225px;
  font-family: "Helvetica";
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  margin: 4rem 0 0 4rem;
`;

const Result = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 4.75rem;
  background-color: ${(props) => `${props.theme.colors.base}`};
  color: white;
  font-size: 2.25rem;
  width: 100%;
  overflow-x: auto;
  & span {
    font-weight: 300;
    margin-right: 0.75rem;
    margin-bottom: 0.25rem;
  }
`;

const StyledButton = styled.button`
  border-radius: 0;
  flex-grow: 1;
  color: ${(props) => `${props.theme.colors.font}`};
  font-size: 1.5rem;
  font-family: "Helvetica";
  height: 2.75rem;
  border: ${(props) => `1px solid ${props.theme.colors.base}`};
  &.base {
    background-color: ${(props) => `${props.theme.colors.base}`};
  }
  &.accent {
    color: white;
    background-color: ${(props) => `${props.theme.colors.accent}`};
  }
  &.secondary {
    background-color: ${(props) => `${props.theme.colors.secondary}`};
  }
  &.button {
    background-color: ${(props) => `${props.theme.colors.button}`};
  }
  &.zero {
    grid-column-start: 1;
    grid-column-end: 3;
    span {
      margin-right: 56%;
    }
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    filter: brightness(0.8);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  &.result {
    grid-template-columns: 1fr;
  }
`;

export default App;
