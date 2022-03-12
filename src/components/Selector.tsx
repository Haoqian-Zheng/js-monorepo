import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import spacings from '../styles/spacings';

interface SelectorProps {
  text: string;
  icon?: JSX.Element;
  onClick: () => void;
}

export default function Selector({ text, icon, onClick }: SelectorProps) {
  return (
    <SelectorWrapper onClick={onClick} hasIcon={!!icon}>
      <SelectorText hasIcon={!!icon}>{text}</SelectorText> {icon}
    </SelectorWrapper>
  );
}

const SelectorWrapper = styled.button<{ hasIcon: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ hasIcon }) => (hasIcon ? 'space-between' : 'center')};
  align-items: center;
  padding: 6px 8px;
  background-color: ${colors.backgroundColor};
  border: 0;
  outline: 0;
  cursor: pointer;

  :hover {
    background-color: #13133a;
    transition: background-color 200ms ease-in;
  }
  :active {
    background-color: #13133a;
    transition: background-color 200ms ease-in;
  }
`;

const SelectorText = styled.span<{ hasIcon: boolean }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  color: ${colors.lightBlue.primary};
  ${({ hasIcon }) => {
    return hasIcon
      ? `margin-right: ${spacings.margin.big};`
      : `margin: 0 ${spacings.margin.biggest};`;
  }}
`;
