import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

function SignUp() {
  const SignUpLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: auto;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
  `;

  return (
    <SignUpLayout>
      <Logo />
      <Heading as="h4">Create Stronger account</Heading>
      <SignupForm />
    </SignUpLayout>
  );
}

export default SignUp;
