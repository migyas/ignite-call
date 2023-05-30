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
  },
});

export const Form = styled(Box, {});
