import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Providers } from "./providers";
import "./globals.css";
import ClientLayout from "./clientLayout";

export const metadata: Metadata = {
  title: "Alma",
  description: "Try Alma",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <Providers>
          <NextIntlClientProvider>
            <ClientLayout>{children}</ClientLayout>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
