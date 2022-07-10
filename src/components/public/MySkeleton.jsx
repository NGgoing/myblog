import * as React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

const variants = ["h3", "body1", "caption", "h2", "body2"];

function TypographyDemo() {
  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          <Skeleton />
        </Typography>
      ))}
    </div>
  );
}

/**
 * MySkeleton Copied from MUI
 */
export default function MySkeleton(props) {
  return (
    <Grid container spacing={12} {...props}>
      <Grid item xs>
        <TypographyDemo />
        <TypographyDemo />
      </Grid>
    </Grid>
  );
}
