import {Checkbox, styled} from "@mui/material";
import {TextFieldElement} from 'react-hook-form-mui';

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

export const TextInput = styled(TextFieldElement)`
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

export const PortInput = styled(TextFieldElement)`
  width: 100px;
  margin-right: 20px;
  
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
