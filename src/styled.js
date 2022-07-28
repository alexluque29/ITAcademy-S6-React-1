import styled from "styled-components";

export const Border = styled.div`
  height: 30px;
  border: 1px solid #333;
  border-radius: 25px;
  margin: 10px 20px 0 20px;
  padding-bottom: 25px;
  text-align: center;
  background: ${(props) => (props.selected ? "#ffc0cb" : "none")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
`;

export const ButStyle = styled.div`
  display: flex;
  background: #dcdcdc;
  border: 1px solid #333;
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2em;

  &:hover {
    cursor: pointer;
    background: #585858;
    color: white;
  }
`;

export const Principal = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;