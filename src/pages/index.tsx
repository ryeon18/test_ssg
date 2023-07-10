import { Container, Typography, Box, Link } from "@mui/material";
import Image from "next/image";
import { getPage } from "../pages/api/notion";

export interface HomeProps {
  result: {
    role: string;
    description: string;
    name: string;
    icon: string;
  }[];
}

export default function Home({ result }: HomeProps) {
  if (!result) return null;
  console.log({ result });
  return (
    <Container maxWidth="lg">
      {result.map((data, i) => {
        const { role, description, name, icon } = data;
        return (
          <div key={i}>
            {/* <img src={icon} /> */}
            <Image alt={role} src={icon} width={200} height={200} />
            <h1>
              등장인물: {role} ({name})
            </h1>
            <p>{description}</p>
          </div>
        );
      })}
    </Container>
  );
}
export const getStaticProps = async () => {
  const result = await getPage();

  return {
    props: {
      result: result,
    },
  };
};
