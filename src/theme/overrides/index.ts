import { Theme } from '@mui/material';

import button from './button';
import input from './input';
import textField from './textField';

export default function componentsOverrides(theme: Theme) {
  return Object.assign(button(theme), input(theme), textField(
    // theme
    ));
}
