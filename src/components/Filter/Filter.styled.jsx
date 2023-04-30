import styled from "styled-components"; 

export const FilterBox = styled.div`
    display: flex;
    gap: 20px;
    padding-left: 40px;
    align-items: center;
margin-bottom: 20px;
    input{
        background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 36px;
  font-size: 16px;
  border-radius: 40px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  border: 1px solid #999;
  outline: none;
    }
label{
    color: brown;
    font-size: 24px;
    font-weight: bold;
}
`