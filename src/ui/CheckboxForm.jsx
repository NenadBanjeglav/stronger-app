import styled from "styled-components";

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: flex;
  gap: 1.6rem;
  height: 2.4rem;
  width: 2.4rem;
  outline-offset: 2px;
  transform-origin: 0;
  accent-color: var(--color-brand-600);
  cursor: pointer;

  &:disabled {
    accent-color: var(--color-brand-600);
  }
`;

export default StyledCheckbox;
