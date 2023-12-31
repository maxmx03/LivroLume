import { useEffect, useState } from 'react';
import { selectTheme } from '../features/settings/settings-reducer';
import colors, { Colors } from '../theme/colors';
import { useAppSelector } from './use-app-selector';

const useTheme = () => {
  const [color, setColor] = useState<Colors>(colors.theme);
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    setColor(colors[theme]);
  }, [theme]);

  return { theme, colors: color };
};

export default useTheme;
