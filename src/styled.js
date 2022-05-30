import styled from 'styled-components';

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: block;
  width: 225px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  margin: 4rem 0 0 4rem;
`;

const Result = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 6rem;
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

export { Row, Container, StyledButton, Result };