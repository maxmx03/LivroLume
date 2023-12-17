import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { Layout } from '../../components';
import { Themes } from '../../theme';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { selectTheme, setTheme } from './settings-reducer';
import { useAppSelector } from '../../hooks/use-app-selector';

type Props = {
  children: React.ReactNode;
  label: string;
};

const SettingsField: React.FC<Props> = ({ children, label }) => {
  return (
    <Stack spacing={4} direction="row">
      <Text>{label}</Text>
      {children}
    </Stack>
  );
};

const Settings = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  return (
    <Layout padding={10}>
      <SettingsField label="Theme">
        <RadioGroup
          onChange={(value: Themes) => dispatch(setTheme(value))}
          value={theme}
        >
          <Stack direction="column">
            <Radio value="theme">Default</Radio>
            <Radio value="gruvbox">GruvBox</Radio>
            <Radio value="onedark">Onedark</Radio>
            <Radio value="solarized">Solarized</Radio>
          </Stack>
        </RadioGroup>
      </SettingsField>
    </Layout>
  );
};

export default Settings;
