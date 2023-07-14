import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";
import axios from "axios"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const CommentTextInput = styled.input`
    width: 100%;
    max-width: 720px;
    height: 4rem;
    padding-left: 20px;
    border-radius: 20px;
  `

const CommentButton = styled.button`
  width: 7rem;
  height: 2.3rem;
  margin: 20px 0px 20px 20px;
  margin-left:auto;
  border-radius:20px;
  `

function CommentList() {
  const { movieName } = useParams();
  const [comment,setComment] = useState([]);
  const [newcomment,setNewComment] = useState('');
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/movielist/detail/${movieName}/comments/`
      );
      setComment(response.data.results);
    } catch (error) {
      alert("정보를 가져오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const commentPostHandler = async () => {
    try {
      const response = await axios.post(`https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/movielist/detail/${movieName}/comments/`, {
        comment: newcomment
      });
      alert('댓글을 작성하였습니다.');
      setNewComment('');
      fetchData();
    } catch (error) {
      console.log(error)
      alert('예상치 못한 에러가 발생했습니다. 잠시 후에 다시 시도해주세요.');
    }
  }
  

  return (
    <Wrapper>
      <CommentTextInput 
        value={newcomment}
        onChange = {(e) => setNewComment(e.target.value)} 
        placeholder = "한줄평을 작성해보세요!"/>
      <CommentButton 
          title="댓글 작성하기"
          onClick={commentPostHandler}>Comment</CommentButton>
      {comment.map((comment) => {
        return <CommentListItem key={comment.created_at} comment={comment} />;
      })}
    </Wrapper>
  );
}

export default CommentList;