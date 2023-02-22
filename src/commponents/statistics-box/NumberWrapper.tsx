import styled from "styled-components";
import { FlexCenter } from "../../gloabl-style/style-variables";
import { NumberButton } from "./NumberButton";

const NumberWrapperS = styled.div`
  padding: 20px 0px;
  :not(:last-child) {
    border-bottom: 1px solid rgba(43, 93, 168, 0.1);
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.7);
    margin: 5px 0px 10px;
  }
`;

const NumberWrapperGrid = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fit, minmax(38px, 38px));
`;

const NumberWrapperTitle = styled(FlexCenter)`
  svg {
    margin-right: 10px;
  }
  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const NumberWrapper = ({ svg, title, text, api }) => {
  return (
    <NumberWrapperS>
      <NumberWrapperTitle>
        {svg}
        <h3>{title}</h3>
      </NumberWrapperTitle>
      <p>{text}</p>
      <NumberWrapperGrid>
        {api.map((item, index) => {
          return <NumberButton item={item} index={index} />;
        })}
      </NumberWrapperGrid>
    </NumberWrapperS>
  );
};
