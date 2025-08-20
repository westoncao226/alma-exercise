import React, { SyntheticEvent } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteRenderInputParams,
  Autocomplete as MuiAutocomplete,
  TextField,
} from "@mui/material";

interface Option {
  label: string;
  value: string;
}

const Autocomplete = ({ data, handleChange, path, uischema }: ControlProps) => {
  const options: Option[] = uischema.options?.enumOptions || [];

  return (
    <MuiAutocomplete
      options={options}
      getOptionLabel={(option: Option) => option.label}
      value={options.find((option: Option) => option.value === data) || null}
      onChange={(
        _: SyntheticEvent<Element, Event>,
        newValue: Option | null,
        _reason: AutocompleteChangeReason,
        _details?: AutocompleteChangeDetails<Option>
      ) => {
        handleChange(path, newValue?.value || "");
      }}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label={typeof uischema?.label === "string" ? uischema.label : ""}
          placeholder={uischema.options?.placeholder}
          variant="outlined"
          sx={{
            width: "350px",
            marginBottom: "12px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
            "& .MuiOutlinedInput-input": {
              height: "12px",
              fontSize: "14px",
            },
          }}
        />
      )}
      renderOption={(props, option) => {
        const { key, ...rest } = props;
        return (
          <li key={key} {...rest} style={{ fontSize: "14px" }}>
            {option.label}
          </li>
        );
      }}
    />
  );
};

export default withJsonFormsControlProps(Autocomplete);
