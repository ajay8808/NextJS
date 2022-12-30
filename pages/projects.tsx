
import {TOKEN,DATABASE_ID} from "../config"
const { Client } = require('@notionhq/client');

export default function Projects() {
  return (
   <div>
       asd
   </div>
  )
 }


export function getStaticProps(context) {


    const notion = new Client({ auth: TOKEN });

    (async () => {
        const databaseId = DATABASE_ID
        const response = await notion.databases.query({
            database_id: databaseId,
        });
        console.log(response);
    })();

    return {
        props: {}, // will be passed to the page component as props
    }
}