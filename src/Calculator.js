import React, { useState } from 'react';
import { Row, StyledButton, Result, Container } from './styled';

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [operand1, setOperand1] = useState("");
  const [prevCalc, setPrevCalc] = useState(false);
  const [operator, setOperator] = useState("");
  const [equalFlag, setEqualFlag] = useState(false);

  const operators = "*-+/";

  function clear() {
    setResult("0");
    setOperand1("");
    setOperator("");
    setPrevCalc(false);
    setEqualFlag(false);
  }

  function readInput(keyId) {
    if (keyId === "0" && result === "0") {
      return;
    } 
    
    if (keyId === "AC") {
      clear();
      return;
    } else if (keyId === "=") {
      showResults();
      setEqualFlag(true);
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
      if (operator && !equalFlag) {
        const calculated = showResults();
        setOperand1(calculated); //in order to chain operations, we need to set operand1 to the new calculated result
      } else {
        setOperand1(result);
      }
      setOperator(keyId);
    }

    if("0123456789".includes(keyId)) {
      setResult((prevState) => {
        if (prevState === "0") {
          return keyId;
        }
        if ((prevCalc && operator) || (operator && operand1 === result)) {
          if(prevCalc) {
            setPrevCalc(false);
          }
          return keyId;
        }
        return (prevState += keyId);
      });
    }
  }

  function showResults() {
    let calculated = '';
    const op1 = prevCalc ? result : operand1;
    const op2 = prevCalc ? operand1 : result;
    
    switch (operator) {
      case "-":
        calculated = (parseFloat(op1) - parseFloat(op2)).toString();
        break;
      case "+":
        calculated = (parseFloat(op1) + parseFloat(op2)).toString();
        break;
      case "*":
        calculated = (parseFloat(op1) * parseFloat(op2)).toString();
        break;
      case "/":
        calculated = 
          (
            Math.round((parseFloat(op1) / parseFloat(op2)) * 10000000) /
            10000000
          ).toString();
        break;
      default:
    }

    if(!prevCalc)
      setOperand1(result);

    setPrevCalc(true);
    setResult(calculated);
    return calculated;
  }

  return (

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
  );
};

export default Calculator;