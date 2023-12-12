import styled from "styled-components";

export const StyledCardWraper = styled.li`
  position: relative;
  width: 274px;
  display: flex;
  flex-direction: column;
`;

export const StyledImg = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 14px;
  background-color: lightblue;
`;

export const StyledSvg = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  fill: ${(props) => (props.$like ? "#3470FF" : "transparent")};
  stroke: ${(props) => (props.$like ? "#3470FF" : "#fafafa")};
`;

export const StyledTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  div {
    display: flex;
  }
`;

export const StyledTextTitle = styled.h3`
  max-height: 24px;
  color: #121417;
  font-weight: 500;
  line-height: 1.5;
  font-size: 16px;

  span {
    font-weight: 500;
    line-height: 24px;
    color: #3470ff;
    font-size: 16px;
  }
`;

export const StyledInfo = styled.div`
  width: 274px;
  margin-bottom: 28px;
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  word-wrap: break-word;
`;

export const StyledInfoText = styled.p`
  max-height: 24px;
  color: #12141780;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  span {
    font-weight: 400;
    line-height: 24px;
    color: #3470ff;
    font-size: 12px;
  }
`;
