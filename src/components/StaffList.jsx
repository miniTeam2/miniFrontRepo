import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import StaffListItem from "./StaffListItem";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

function StaffList() {
  const {movieName} = useParams();
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState([]);

  const fetchData = async () => {
    try {
      const staffListData = await axios.get(
        `https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/movielist/detail/${movieName}/`
      );
      setStaffData(staffListData.data.staffs);
    } catch (error) {
      alert("정보를 가져오는데 실패했습니다.");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Wrapper>
      <MoviesContainer>
        {staffData.map((staff) => (
          <StaffListItem
            key={staff.name}
            staff={staff}
          />
        ))}
      </MoviesContainer>
    </Wrapper>
  );
}

export default StaffList;
