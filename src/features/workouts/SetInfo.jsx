/* eslint-disable react/prop-types */

import styled from "styled-components";
import Excercise from "../../ui/Excercise";

const StyledRow = styled.div`
  border-bottom: 1px solid var(--color-grey-100);

  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-grey-500);
  display: flex;

  padding: 1.2rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledCol = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`;

function SetInfo({ set }) {
  const { excerciseId, weight, reps } = set;

  return (
    <StyledRow>
      <StyledCol>
        <Excercise excerciseId={excerciseId} />
      </StyledCol>
      <StyledCol>{reps}</StyledCol>
      <StyledCol>{weight}</StyledCol>
    </StyledRow>
  );
}

export default SetInfo;
