import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import { Link } from "src/components";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box className={styles.box}>
        <Typography
          className={styles.title}
          variant="h1"
          component="h1"
          gutterBottom
        >
          <Link href="https://github.com/builderhub-platform/create-builderhub-app">
            test-ssg
          </Link>{" "}
        </Typography>
        <Typography className={styles.subtitle} variant="h2" component="h2">
          description
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
