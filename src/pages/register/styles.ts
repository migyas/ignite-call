import { Box, Heading, Text, styled } from "@ignite-ui/react";

export const Container = styled("main", {
  maxWidth: 572,
  margin: "$20 auto $4",
  padding: "0 $4",
});

export const Header = styled("header", {
  padding: "0 $6",

  [`> ${Heading}`]: {
    lineHeight: "$base",
  },

  [`> ${Text}`]: {
    lineHeight: "$base",
    marginBottom: "$6",
  },
});

export const Form = styled(Box, {
  marginTop: "$6",
  gap: "$4",
  display: "flex",
  flexDirection: "column",

  label: {
    display: "flex",
    flexDirection: "column",
    gap: "$2",
  },
});

export const FormError = styled(Text, {
  color: "#f75a68",
});
