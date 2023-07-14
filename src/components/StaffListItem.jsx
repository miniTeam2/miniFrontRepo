import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 7rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  cursor: pointer;
  background: transparent;
  &:hover {
    background-color: lightgrey;
  }
`;

const StaffPoster = styled.img`
  width: 100%;
  height: 6rem;
`;

const StaffName = styled.div`
  font-size: 20px;
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
