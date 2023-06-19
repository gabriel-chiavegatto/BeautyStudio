import Page from '../components/Page';
import styled from 'styled-components';
import Container from '../components/Container';

export default function AuthLayout({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="400px" height="520px">
        {children}
      </StyledContainer>
    </Page>
  );
}

export const StyledContainer = styled(Container)`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

export const Label = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
