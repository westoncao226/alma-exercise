"use client";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import createEmotionCache from "@/theme/emotionCache";

type Props = {
  children: React.ReactNode;
};

const emotionCache = createEmotionCache();
const theme = createTheme();

export function Providers({ children }: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
