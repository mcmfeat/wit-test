import React from "react";
import styled from "styled-components";

const SearchButton = styled.button`
  background-color: #4778ffa1;
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

const SearchButtonDisabled = styled.button`
  color: #f8f9fa;
  text-shadow: 2px 2px 2px rgb(119, 136, 153);
  padding: 12px 12px;
  border: none;
  border-radius: 100%;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  margin: 0 10px 0;
`;

export default function StyledButton(props) {
  return (
    <div className="btn-styled">
      {props.formInfo.isValid && props.formInfo.dirty ? (
        <SearchButton type="submit">
          <i className="fa-solid fa-magnifying-glass" />
        </SearchButton>
      ) : (
        <SearchButtonDisabled type="button">
          <i className="fa-solid fa-magnifying-glass" />
        </SearchButtonDisabled>
      )}
    </div>
  );
}
