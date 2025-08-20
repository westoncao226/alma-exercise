"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { JsonForms } from "@jsonforms/react";
import { rankWith, scopeEndsWith } from "@jsonforms/core";
import { materialRenderers } from "@jsonforms/material-renderers";
import { signInSchema } from "@/schemas/Authentication/signInSchema";
import { signInUiSchema } from "@/schemas/Authentication/signInUiSchema";
import Button from "@/components/Button";
import TextField from "@/components/TextField";

const customRenderers = [
  ...materialRenderers,
  {
    tester: rankWith(3, scopeEndsWith("userName")),
    renderer: TextField,
  },
  {
    tester: rankWith(3, scopeEndsWith("password")),
    renderer: TextField,
  },
];

interface SignInInfo {
  userName: string;
  password: string;
}

const SignIn = () => {
  const router = useRouter();
  const t = useTranslations();
  const [signInInfo, setSignInInfo] = useState<SignInInfo>({
    userName: "",
    password: "",
  });
  const [signInError, setSignInError] = useState(false);

  const authenticationHandler = () => {
    if (
      signInInfo.userName === process.env.NEXT_PUBLIC_USERNAME &&
      signInInfo.password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      router.push(`/${t("authentication.pages.admin")}`);
    } else setSignInError(true);
  };

  return (
    <Stack
      spacing={4}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top left, #fafdd2 0%, #fafdd2 10%, rgba(250, 253, 210, 0.4) 40%, transparent 100%)",
        height: "100vh",
      }}
    >
      <Image src="/alma-logo-v2.png" alt="Alma logo" width={200} height={200} />

      <JsonForms
        schema={signInSchema}
        uischema={signInUiSchema}
        data={signInInfo}
        renderers={customRenderers}
        onChange={({ data }) => setSignInInfo(data)}
      />

      {signInError && (
        <Typography color="error">
          {t("authentication.signIn.error")}
        </Typography>
      )}

      <Button
        label={t("authentication.buttons.signIn")}
        onClick={authenticationHandler}
      />
    </Stack>
  );
};

export default SignIn;
