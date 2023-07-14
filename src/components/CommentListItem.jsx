import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
`;

const ContentText = styled.div`
    width: 40rem;
    font-size: 16px;
    background-color:transparent;
    text-align:left;

`;
const WriteUser = styled.div`
    font-size: 13px;
    background-color:transparent;
    text-align: left;
`;

function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <ContentText>{comment.comment}</ContentText>
      <WriteUser>written by {comment.user}</WriteUser>
    </Wrapper>
  );
}

export default CommentListItem;