import styled from 'styled-components/macro';

export const PictureBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 280px;
  }
  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

export const ProfilePicture = styled.img`
  width: auto;
  max-height: 100%;
  @media (max-width: 600px) {
    border: 1px solid ${props => props.theme.border};
    border-radius: 50%;
    margin-left: 10px;
  }
  @media (max-width: 420px) {
    border-radius: 0;
    border: none;
    margin: 0;
    padding: 0;
  }
`;
