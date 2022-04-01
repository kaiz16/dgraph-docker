const { default: axios } = require("axios");
const fs = require("fs");
const DGRAPH_ADMIN_ENDPOINT = "http://127.0.0.1:8080/admin";
const FILE = "./schema.graphql";
const deploy = async () => {
  const query = JSON.stringify({
    query: `
        mutation UpdateGQLSchema($schema: String!){ 
            updateGQLSchema(input: { set: { schema: $schema } }){ 
                gqlSchema{ 
                    schema 
                } 
            } 
        }
        `,
    variables: {
      schema: fs.readFileSync(FILE, { encoding: "utf-8" }),
    },
  });

  const { data } = await axios.post(DGRAPH_ADMIN_ENDPOINT, query, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(data);
};
deploy();
