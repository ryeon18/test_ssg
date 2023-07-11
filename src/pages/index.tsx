import { Container } from "@mui/material";
import GridBox from "src/components/GridBox";
import { getPage } from "../pages/api/notion";

export interface dataType {
  role: string;
  name: string;
  description: string;
  icon: string;
  priority: string;
}

export interface HomeProps {
  result: dataType[];
}

export function findMainRole(
  array: dataType[],
  filterFunc: (item: {
    role: string;
    name: string;
    description: string;
    icon: string;
    priority: string;
  }) => boolean
) {
  const newArray: dataType[] = [];
  array.map((e: dataType) => {
    if (filterFunc(e)) {
      newArray.push(e);
    }
  });
  return newArray;
}

export default function Home({ result }: HomeProps) {
  if (!result) return null;
  const mainRole = findMainRole(result, (item) => item.priority === "메인");
  const subRole = findMainRole(result, (item) => item.priority === "서브");

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <article
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {mainRole.map((data, i) => {
          const { role, description, name, icon, priority } = data;
          return (
            <GridBox
              key={i}
              role={role}
              description={description}
              name={name}
              icon={icon}
              priority={priority}
            />
          );
        })}
      </article>
      <article
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "50px",
        }}
      >
        {subRole.map((data, i) => {
          const { role, description, name, icon, priority } = data;
          return (
            <GridBox
              key={i}
              role={role}
              description={description}
              name={name}
              icon={icon}
              priority={priority}
            />
          );
        })}
      </article>
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
