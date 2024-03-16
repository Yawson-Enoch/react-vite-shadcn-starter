import * as React from 'react';

type ThemeContext = {
  theme: string;
  setTheme: (theme: string) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
};

export const ThemeContext = React.createContext({} as ThemeContext);

export const ThemeProvider = ({
  children,
  defaultTheme = 'dark',
  storageKey = 'theme',
}: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem(storageKey) ?? defaultTheme,
  );

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: string) => {
          localStorage.setItem(storageKey, theme);
          setTheme(theme);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
