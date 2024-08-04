import ThemeSwitcher from './components/common/theme-switcher';
import { ThemeProvider } from './contexts/theme-provider';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
