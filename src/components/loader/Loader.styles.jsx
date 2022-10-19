import Styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  `;

export const Container = Styled.div`
    min-height:90vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Loader = Styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`;

export const LoaderItem = Styled.div`
    position: absolute;
    border: 4px solid ${(props) => props.theme.fonts.color.primary};
    opacity: 1;
    border-radius: 50%;
    animation: ${spin} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    &&:nth-child(2) {
    animation-delay: -0.5s;
    
`;
