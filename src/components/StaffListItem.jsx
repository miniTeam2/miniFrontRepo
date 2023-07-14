import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 6rem;
  height: 11rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: transparent;
  border-radius: 15px;
  &:hover {
    background-color: lightgrey;
  }
  border: 1px solid lightgrey;
`;

const StaffPoster = styled.img`
  width: 100%;
  height: 7rem;
  border-radius: 15px 15px 0px 0px;
`;

const StaffName = styled.div`
  font-size: 17px;
  text-align: left;
`;

const RoleName = styled.div`
    font-size: 15px;
    text-align: left;`

function MovieListItem(props) {
  const { staff, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <StaffPoster src={staff.image_url} />
      <RoleName>{staff.role}</RoleName>
      <StaffName>{staff.name}</StaffName>
    </Wrapper>
  );
}

export default MovieListItem;
