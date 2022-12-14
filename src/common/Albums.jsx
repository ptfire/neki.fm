import React from 'react';
import styled from 'styled-components';
import { TbSend } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Albums({ albums }) {
   return (
      <Container>
         <div>
            {albums.map((album, i) => (
               <Link
                  to={`/albums/${album.name + '-' + album.artist.name}`}
                  style={{ backgroundImage: `url(${album.image[3]['#text']})` }}
                  className='lazy'
                  key={i}
               >
                  <p>
                     <span className='ellipsis'> {album.name}</span>
                     <span className='ellipsis'>{album.artist.name}</span>
                  </p>
                  <button>
                     Discover <TbSend />
                  </button>
               </Link>
            ))}
         </div>
      </Container>
   );
}

export default Albums;

const Container = styled.section`
   margin-top: 3rem;
   div {
      display: flex;
      flex-wrap: wrap;
      gap: 2%;

      a {
         position: relative;
         width: 23.5%;
         padding-top: 26%;
         margin-bottom: 2rem;
         background: no-repeat center/cover;
         border-radius: 1rem;
         overflow: hidden;
         user-select: none;
         box-shadow: 0 0 5px #e7e5e5;
         @media only screen and (max-width: 850px) {
            width: calc(33% - 1.27%);
         }
         & > p {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: clamp(5rem, 25%, 6rem);
            background-color: var(--white);
            padding: 5px 1rem;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            font-size: 14px;
            span {
               color: var(--black);
            }
            span:last-child {
               color: var(--gray-text);
            }
         }
         button {
            position: absolute;
            top: 45%;
            left: 50%;
            height: clamp(38px, 20%, 42px);
            width: fit-content;
            padding: 0 1.8rem;
            border-radius: 5rem;
            background-color: var(--white);
            border: 1px solid var(--black);
            color: var(--black);
            font-size: var(--fontxs);
            white-space: nowrap;
            opacity: 0;
            transform: translate(-50%, -8%);
            visibility: hidden;
            transition: 0.25s linear;
            svg {
               margin-left: 5px;
            }
         }
         &::before {
            content: '';
            position: absolute;
            inset: 0;
            background-color: var(--black);
            opacity: 0;
            transition: 0.25s linear;
         }
      }
      a:hover {
         &::before {
            opacity: 0.4;
         }
         button {
            opacity: 1;
            transform: translate(-50%, -75%);
            visibility: visible;
         }
      }
   }
`;
