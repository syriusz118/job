import {
  AdditionalFieldsWrapper,
  CheckBoxWrapper,
  Container,
  InputLabel,
  InputWrapper,
  PortInput,
  PortInputLabel,
  SSLCheckbox,
  SubmitButton,
  SubmitButtonWrapper,
  TextInput,
  Wrapper
} from "./App.styles.tsx";
import {FormControl, MenuItem} from "@mui/material";
import {TextInputComponent} from "./components/textInput/Textinput.tsx";
import {ChangeEvent, ReactElement, useEffect, useState} from "react";

const ACCOUNT_TYPES = ['Advanced', 'Manual'];

export const App = (): ReactElement => {
  const [data, setData] = useState<Record<string, any>>({ssl: false});
  const [selectedAccountType, setSelectedAccountType] = useState(ACCOUNT_TYPES[0]);
  const isAdvancedAccountType = selectedAccountType === ACCOUNT_TYPES[0];

  const onSubmit = () => {
    alert(JSON.stringify(data));
  }

  const onSelectChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {target: {value}} = event;
    setSelectedAccountType(value);
  }

  const onPortChange = ({target: { value }}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prevState => ({...prevState, port: value}));
  }

  const onSSLChange = () => {
    setData(prevState => ({...prevState, ssl: !data.ssl}));
  }

  useEffect(() => {
    if (isAdvancedAccountType) {
      return;
    }
    const cloneData = {...data};
    delete cloneData.ssl;
    delete cloneData.port;
    setData(cloneData);
  }, [selectedAccountType]);

  return <Container>
    <Wrapper>
      <form onSubmit={onSubmit}>
        <InputWrapper>
          <InputLabel>Account Type:</InputLabel>
          <FormControl>
            <TextInput select defaultValue={ACCOUNT_TYPES[0]} name='type' onChange={onSelectChange}>
              {ACCOUNT_TYPES.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextInput>
          </FormControl>
        </InputWrapper>
        <TextInputComponent setData={setData} required label='User Name:' placeholder='example@email.com' name='email' type='email' />
        <TextInputComponent setData={setData} required label='Password:' name='password' type='password' placeholder='password' />
        <TextInputComponent setData={setData} label='Server Address:' placeholder='example.com' name='url' type='url' />
        <TextInputComponent setData={setData} label='Server Path:' placeholder='/calendar/user' name='path' type='text' />
        <AdditionalFieldsWrapper>
          {isAdvancedAccountType &&
            <>
              <PortInputLabel>Port:</PortInputLabel>
              <PortInput type='number' placeholder='Port' name='port' onChange={onPortChange} />
              <CheckBoxWrapper>
                <SSLCheckbox onClick={onSSLChange} />
                <PortInputLabel>Use SSL</PortInputLabel>
              </CheckBoxWrapper>
            </>
          }
        </AdditionalFieldsWrapper>
        <SubmitButtonWrapper>
          <SubmitButton type='submit' variant='contained'>Submit</SubmitButton>
        </SubmitButtonWrapper>
      </form>
    </Wrapper>
  </Container>
}
