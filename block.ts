const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function getBlock() {
  const blockId = '';
  const response = await notion.blocks.retrieve({
    block_id: blockId,
  });

  return response
}

async function updateBlock() {
  const blockId = '';
  const response = await notion.blocks.update({
    "block_id": blockId,
    "heading_2": {
      "rich_text": [
        {
          "text": {
            "content": "Lacinato kale"
          },
          "annotations": {
            "color": "blue"
          }
        }
      ]
    }
  })

  return response
}

async function deleteBlock() {
  const blockId = '';
  const response = await notion.blocks.delete({
    block_id: blockId,
  });

  return response
}