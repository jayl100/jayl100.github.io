import styled from "styled-components";
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";


function Main() {
  return (
    <>
      <h1>안녕하세요, 기획자 이주현 입니다.</h1>
      <UlStyled>
        <li>
          <div className='summarySection'>
            <p>기획자로서</p>
            <h2>1년 8개월</h2>
            <Link to={'/about'} className='link'>알아보기<IoIosArrowForward/></Link>
          </div>
        </li>
        <li>
          <div className='summarySection'>
            <p>진행한 프로젝트</p>
            <h2>12개</h2>
            <Link to={'/project'} className='link'>더보기<IoIosArrowForward/></Link>
          </div>
        </li>
        <li>
          <div className='summarySection'>
            <p>궁금한 점은 여기로</p>
            <h2>hyinky@gmail.com</h2>
            <Link to={'/contact'} className='link'>연락하기<IoIosArrowForward/></Link>
          </div>
        </li>
      </UlStyled>
    </>
);
}


const UlStyled = styled.ul`
margin: 40px 0;
padding: 0;
    height: 160px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    li {
        width: 100%;
        background-color: #f2f2f2;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
    }

    h2 {
        padding: 10px 0;
        font-size: 1.4rem;
    }
    
    .summarySection {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    
    .link {
        font-size: 0.8rem;
        color: #777;
        font-weight: 400;
        cursor: pointer;
        display: flex;
        align-items: center;

    }
`

export default Main;