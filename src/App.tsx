import {
  AdditionalFieldsWrapper,
  CheckBoxWrapper,
  Container,
  InputLabel,
  InputWrapper,
  PortInput,
  PortInputLabel,
  SSLCheckbox,
  TextInput,
  Wrapper
} from "./App.styles.tsx";
import {FormControl, MenuItem} from "@mui/material";
import {FormContainer} from "react-hook-form-mui";

const ACCOUNT_TYPES = ['Advanced', 'Manual'];

export const App = () => {

  return <Container>
    <Wrapper>
      <FormContainer defaultValues={{name: ''}}>
        <InputWrapper>
          <InputLabel>Account Type:</InputLabel>
          <FormControl>
            <TextInput value={ACCOUNT_TYPES[0]} select name='type'>
              {ACCOUNT_TYPES.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextInput>
          </FormControl>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>User Name:</InputLabel>
          <FormControl>
            <TextInput type='email' placeholder='example@email.com' name='userName' />
          </FormControl>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Password:</InputLabel>
          <FormControl>
            <TextInput required type='password' placeholder='password' name='password' />
          </FormControl>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Server Address:</InputLabel>
          <FormControl>
            <TextInput type='url' placeholder='example.com' name='url' />
          </FormControl>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Server Path:</InputLabel>
          <FormControl>
            <TextInput type='text' placeholder='/calendar/user' name='path' />
          </FormControl>
        </InputWrapper>
        <AdditionalFieldsWrapper>
          <PortInputLabel>Port:</PortInputLabel>
          <PortInput type='number' placeholder='Port' name='port' />
          <CheckBoxWrapper><SSLCheckbox /> <PortInputLabel>Use SSL</PortInputLabel></CheckBoxWrapper>
        </AdditionalFieldsWrapper>
      </FormContainer>
    </Wrapper>
  </Container>
}
