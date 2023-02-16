import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 70%;
    padding: 10px;
    float: left;
    font-size: 16px;
    border-bottom: 1px solid black;
    text-align: center;
  }
  input:placeholder-shown {
    text-align: center;
  }
`;
