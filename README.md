### Migrate from Dgraph Cloud to Docker

- Export data from cloud and extract the gz files
- Start the containers `docker-compose up`
- Run live loader to load data into dgraph
  ```
  docker run -it --network host --rm -v {PATH_TO_YOUR_EXTRACTED_DATA}:/tmp dgraph/dgraph:v21.03-slash \
  dgraph live -f /tmp/g01.json -s /tmp/g01.schema -a 127.0.0.1:9080 -z 127.0.0.1:5080 -t TOP_SECRET
  ```
- Deploy the schema
  ```
  npm install
  node deploy-schema.js http://127.0.0.1:8080/admin schema_production.graphql TOP_SECRET
  ```
