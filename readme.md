Guide to migrate from dgraph cloud to docker

- Export data from cloud and extract the gz files
- Start the containers `docker-compose up`
- Run live loader to load data into dgraph
  ```
  docker run -it --network host --rm -v {PATH_TO_YOUR_EXTRACTED_DATA}:/tmp dgraph/dgraph:v21.03-slash \
  dgraph live -f /tmp/g01.json -s /tmp/g01.schema -a 127.0.0.1:9080 -z 127.0.0.1:5080
  ```
- Deploy the schema
  ```
  node deploySchema.js
  ```
