import React, { useState } from 'react';
//import styled from "styled-components"
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('검색어:', searchTerm);
  };
//여기서 서버와 연결을 해야 하는데........검색 결과를 가져와야 하는데ㅣ...
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="영화 제목을 검색하세요"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchBar;

