import React from 'react';
import styled from 'styled-components';
import fallbackImage from '../../../assets/images/fallback.jpg'
import {Link} from 'react-router-dom'

function Albums({ albums }) {
   const getImage = (album) => album.image[3]['#text'] || fallbackImage
   return (
      albums[0] && (
         <Container>
            <h2>Top Albums</h2>
            <div>
               {albums.map((album, i) => (
                  <Link
                     to={`/albums/${album.name}`}
                     style={{
                        backgroundImage: `url(${getImage(album)})`,
                     }}
                     key={i}
                  >
                     <span>
                        <span>{album.name}</span>
                        <br />
                        Artist: {album.artist}
                     </span>
                  </Link>
               ))}
            </div>
         </Container>
      )
   );
}

export default Albums;
const Container = styled.section`
   margin-top: 3rem;
   h2 {
      margin-top: 1rem;
      margin-bottom: 2rem;
      font-size: var(--fontxl);
   }
   div {
      display: grid;
      grid-template-columns: 19% 19% 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
         'i1 i1 i2 i3'
         'i1 i1 i4 i5';
      gap: 1.5rem;
      a:first-child {
         grid-area: i1;
      }
      a:nth-child(2) {
         grid-area: i2;
      }
      a:nth-child(3) {
         grid-area: i3;
      }
      a:nth-child(4) {
         grid-area: i4;
      }
      a:nth-child(5) {
         grid-area: i5;
      }
      a {
         position: relative;
         background-repeat: no-repeat;
         background-size: cover;
         background-position: center;
         border-radius: 1rem;
         overflow: hidden;
         box-shadow: 0 0 5px #c3c1c1;
         &:first-child {
            padding-top: 300px;
         }
         & > span {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            padding: 5px 10px;
            background-color: var(--white);
            color: var(--black);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 14px;
            color: var(--gray-text);
            span {
               color: var(--black);
            }
         }
      }
   }
`;
