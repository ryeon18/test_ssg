import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const getPage = async () => {
  if (!notion) return;
  const response = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
  });

  const drama = response.results as Drama[];

  //   return drama;

  return drama.map((item) => {
    return handler(item);
  });
};

const handler = (data: Drama) => {
  if (data.properties) {
    const { name, role, description, icon, priority } = data.properties;
    return {
      name: name.title[0].plain_text,
      role: role.rich_text[0].plain_text,
      description: description.rich_text[0].plain_text,
      icon: icon.rich_text[0].plain_text,
      priority: priority.rich_text[0].plain_text,
    };
  }
};

export interface Drama {
  archived: boolean;
  cover?: string | null;
  created_by: { [key: string]: string };
  created_time: string;
  icon?: string | null;
  id: string;
  last_edited_by: { [key: string]: string };
  last_edited_time: string;
  object: string;
  parent: { [key: string]: string };
  properties: {
    priority: {
      id: string;
      type: string;
      rich_text: { [key: string]: string | null }[];
    };
    description: {
      id: string;
      type: string;
      rich_text: { [key: string]: string | null }[];
    };
    name: {
      id: string;
      type: string;
      title: { [key: string]: string | null }[];
    };
    role: {
      id: string;
      type: string;
      rich_text: { [key: string]: string | null }[];
    };
    icon: {
      id: string;
      type: string;
      rich_text: { [key: string]: string | null }[];
    };
  };
  public_url?: string | null;
  url: string;
}
