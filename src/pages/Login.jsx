import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 4rem;

  & > * {
    flex: 1;
  }
`;

function Login() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/register");
  }

  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />

      <StyledDiv>
        <Button onClick={handleClick}>Sign up</Button>
      </StyledDiv>
    </LoginLayout>
  );
}

export default Login;
