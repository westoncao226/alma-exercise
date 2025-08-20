"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Ajv from "ajv";
import { JsonForms } from "@jsonforms/react";
import { rankWith, scopeEndsWith } from "@jsonforms/core";
import { materialRenderers } from "@jsonforms/material-renderers";
import { userInfoSchema } from "@/schemas/Assessment/userInfoSchema";
import { userInfoUiSchema } from "@/schemas/Assessment/userInfoUiSchema";
import { visaCategoriesSchema } from "@/schemas/Assessment/visaCategoriesSchema";
import { visaCategoriesUiSchema } from "@/schemas/Assessment/visaCategoriesUiSchema";
import { fileUploadSchema } from "@/schemas/Assessment/fileUploadSchema";
import { fileUploadUiSchema } from "@/schemas/Assessment/fileUploadUiSchema";
import { inquirySchema } from "@/schemas/Assessment/inquirySchema";
import { inquiryUiSchema } from "@/schemas/Assessment/inquiryUiSchema";
import TextField from "@/components/TextField";
import Autocomplete from "@/components/Autocomplete";
import Checkbox from "@/components/Checkbox";
import TextareaAutosize from "@/components/TextareaAutosize";
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";

const formContainerStyle = { alignItems: "center" };

const formQuestionStyle = { fontSize: "20px", fontWeight: 600 };

const formQuestionDescriptionStyle = {
  fontWeight: 500,
  textAlign: "center",
  width: "500px",
};

const formErrorStyle = {
  fontSize: "14px",
};

const ajv = new Ajv({ allErrors: true, strict: false });

const customRenderers = [
  ...materialRenderers,
  {
    tester: rankWith(3, scopeEndsWith("firstName")),
    renderer: TextField,
  },
  {
    tester: rankWith(3, scopeEndsWith("lastName")),
    renderer: TextField,
  },
  {
    tester: rankWith(3, scopeEndsWith("email")),
    renderer: TextField,
  },
  {
    tester: rankWith(3, scopeEndsWith("countryOfCitizenship")),
    renderer: Autocomplete,
  },
  {
    tester: rankWith(3, scopeEndsWith("personalLink")),
    renderer: TextField,
  },
  {
    tester: rankWith(3, scopeEndsWith("nonimmigrant")),
    renderer: Checkbox,
  },
  {
    tester: rankWith(3, scopeEndsWith("employmentBasedFirstPreference")),
    renderer: Checkbox,
  },
  {
    tester: rankWith(3, scopeEndsWith("employmentBasedSecondPreference")),
    renderer: Checkbox,
  },
  {
    tester: rankWith(3, scopeEndsWith("unsure")),
    renderer: Checkbox,
  },
  {
    tester: rankWith(3, scopeEndsWith("resume")),
    renderer: FileUpload,
  },
  {
    tester: rankWith(3, scopeEndsWith("inquiry")),
    renderer: TextareaAutosize,
  },
];

const QuestionnaireForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const [userInfoData, setUserInfoData] = useState({});
  const [visaCategoriesData, setVisaCategoriesData] = useState({});
  const [fileUploadData, setFileUploadData] = useState({});
  const [inquiryData, setInquiryData] = useState({});
  const [userInfoErrors, setUserInfoErrors] = useState<string[]>([]);
  const [visaCategoriesErrors, setVisaCategoriesErrors] = useState<string[]>(
    []
  );
  const [fileUploadErrors, setFileUploadErrors] = useState<string[]>([]);
  const [inquiryErrors, setInquiryErrors] = useState<string[]>([]);

  const validateForm = (data: any, schema: any): string[] => {
    const validate = ajv.compile(schema);
    const valid = validate(data);

    console.log(data)

    if (!valid && validate.errors) {
      return validate.errors.map((error) => `${error.params.missingProperty}`);
    }
    return [];
  };

  const handleSubmitAssessment = () => {
    const userInfoError = validateForm(userInfoData, userInfoSchema);
    const visaCategoriesError = validateForm(
      visaCategoriesData,
      visaCategoriesSchema
    );
    const fileUploadError = validateForm(fileUploadData, fileUploadSchema);
    const inquiryError = validateForm(inquiryData, inquirySchema);

    setUserInfoErrors(userInfoError);
    setVisaCategoriesErrors(visaCategoriesError);
    setFileUploadErrors(fileUploadError);
    setInquiryErrors(inquiryError);

    const hasErrors =
      userInfoError.length ||
      visaCategoriesError.length ||
      fileUploadError.length ||
      inquiryError.length;

    if (!hasErrors) {
      router.push(`${pathname}/confirmation`);
    }
  };

  return (
    <Stack spacing={4} sx={{ alignItems: "center", padding: "40px 10px" }}>
      <Stack spacing={2} sx={formContainerStyle}>
        <Image src="/info.png" alt="info" width={40} height={40} />
        <Typography sx={formQuestionStyle}>
          {t("assessment.questionnaire.form.userInfo.question")}
        </Typography>
        <Typography sx={formQuestionDescriptionStyle}>
          {t("assessment.questionnaire.form.userInfo.description")}
        </Typography>

        <Stack>
          <JsonForms
            schema={userInfoSchema}
            uischema={userInfoUiSchema}
            data={userInfoData}
            renderers={customRenderers}
            onChange={({ data }) => setUserInfoData(data)}
          />
          {userInfoErrors.length > 0 &&
            userInfoErrors.map((error, index) => (
              <Typography key={index} color="error" sx={formErrorStyle}>
                {t(`assessment.questionnaire.errors.${error}`)}
              </Typography>
            ))}
        </Stack>
      </Stack>

      <Stack spacing={2} sx={formContainerStyle}>
        <Image src="/dice.png" alt="dice" width={50} height={50} />
        <Typography sx={formQuestionStyle}>
          {t("assessment.questionnaire.form.visaCategories.question")}
        </Typography>
        <Stack>
          <JsonForms
            schema={visaCategoriesSchema}
            uischema={visaCategoriesUiSchema}
            data={visaCategoriesData}
            renderers={customRenderers}
            onChange={({ data }) => setVisaCategoriesData(data)}
          />
          {visaCategoriesErrors.length > 0 && (
            <Typography color="error" sx={formErrorStyle}>
              {t(`assessment.questionnaire.errors.visaCategories`)}
            </Typography>
          )}
        </Stack>
      </Stack>

      <Stack spacing={2} sx={formContainerStyle}>
        <Image src="/info.png" alt="upload" width={40} height={40} />
        <Typography sx={formQuestionStyle}>
          {t("assessment.questionnaire.form.fileUpload.question")}
        </Typography>
        <Stack>
          <JsonForms
            schema={fileUploadSchema}
            uischema={fileUploadUiSchema}
            data={fileUploadData}
            renderers={customRenderers}
            onChange={({ data }) => setFileUploadData(data)}
          />
          {fileUploadErrors.length > 0 &&
            fileUploadErrors.map((error, index) => (
              <Typography key={index} color="error" sx={formErrorStyle}>
                {t(`assessment.questionnaire.errors.${error}`)}
              </Typography>
            ))}
        </Stack>
      </Stack>

      <Stack spacing={2} sx={formContainerStyle}>
        <Image src="/heart.png" alt="heart" width={50} height={50} />
        <Typography sx={formQuestionStyle}>
          {t("assessment.questionnaire.form.inquiry.question")}
        </Typography>
        <Stack>
          <JsonForms
            schema={inquirySchema}
            uischema={inquiryUiSchema}
            data={inquiryData}
            renderers={customRenderers}
            onChange={({ data }) => setInquiryData(data)}
          />
          {inquiryErrors.length > 0 &&
            inquiryErrors.map((error, index) => (
              <Typography key={index} color="error" sx={formErrorStyle}>
                {t(`assessment.questionnaire.errors.${error}`)}
              </Typography>
            ))}
        </Stack>
      </Stack>

      <Stack sx={{ width: "350px" }}>
        <Button
          label={t("assessment.buttons.submit")}
          onClick={handleSubmitAssessment}
        />
      </Stack>
    </Stack>
  );
};

export default QuestionnaireForm;
