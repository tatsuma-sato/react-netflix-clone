import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerRotate = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #e50914 transparent #e50914 transparent;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
`;
