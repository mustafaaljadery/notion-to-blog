const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})


async function main() {
  // notion url
  const url = ""
  const pageId = url.split("notion.so/")[1]

  const response = await notion.pages.retrieve({ page_id: pageId });

  return response.data
}

main()