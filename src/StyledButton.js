import React from "react";
import styled from "styled-components";

const SearchButton = styled.button`
  background-color: #b9ac65a1;
  color: #f8f9fa;
  text-shadow: 2px 2px 2px rgb(119, 136, 153);
  padding: 12px 12px;
  border: none;
  border-radius: 100%;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-size: 14px;
  margin: 0 10px 0;
`;

export default function StyledButton() {
  return (
    <div className="btn-styled">
      <SearchButton type="submit" disabled="true">
        <i className="fa-solid fa-magnifying-glass" />
      </SearchButton>
    </div>
  );
}
