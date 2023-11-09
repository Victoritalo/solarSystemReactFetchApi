import styled from "styled-components";

export const MainContainer = styled.main`
  text-align: center;
  height: 100vh;
`;
export const AstroList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AstroItem = styled.li`
  margin: 10px 0;
`;

export const AstroName = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

export const Input = styled.input`
  margin: 10px 0px 10px 0px;
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;
