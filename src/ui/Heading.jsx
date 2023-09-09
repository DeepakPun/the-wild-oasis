import styled, { css } from 'styled-components';

// const test = css`
//   text-align: center;
//   color: teal;
// `;

const Heading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${props =>
    props.type === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${props =>
    props.type === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  // My own style. remove from final project.
  ${props =>
    props.type === 'custom' &&
    css`
      font-size: 40px;
      font-weight: 600;
      background-color: teal;
      color: white;
      border-radius: 10px;
      padding: 15px;
      margin: 10px;
      text-align: center;
      letter-spacing: 3px;
    `} // My own style. Remove everything above this line
`;
/* ${test}; */

export default Heading;
