import {Button, Checkbox, styled, TextField} from "@mui/material";

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #646cff;
`;

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  background-color: #FFF;
  border-radius: 10px;
`;

export const InputWrapper = styled('div')`
  width: 330px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
`;

export const InputLabel = styled('p')`
  color: #1a1a1a;
  margin-right: 10px;
`;

export const PortInputLabel = styled('span')`
  color: #1a1a1a;
  margin-right: 10px;
`;

export const TextInput = styled(TextField)`
  min-width: 195px;
  
  & .MuiTextField-root {
    height: 30px;
  }
  & .MuiOutlinedInput-root {
    height: 30px;
  }
  & .MuiInputBase-root {
    height: 30px;
  }
`

export const AdditionalFieldsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  width: 450px;
  height: 30px;
  padding-left: 17px;
  margin-top: 10px;
`;

export const CheckBoxWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 150px;
`;

export const SSLCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const PortInput = styled(TextField)`
  width: 100px;
  margin-right: 10px;
  
  & .MuiTextField-root {
    height: 30px;
  }
  & .MuiOutlinedInput-root {
    height: 30px;
  }
  & .MuiInputBase-root {
    height: 30px;
  }
`

export const SubmitButtonWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

export const SubmitButton = styled(Button)`
  width: 150px;
`;
