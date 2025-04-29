import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      0: '#ffffff',
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB69',
      500: '#43A046',
      600: '#388E3B',
      700: '#237D31',
      800: '#1B5E1F',
      900: '#103E13',
    },
  },
});

export default MyPreset;
