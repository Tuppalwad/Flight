const { gql } = require("apollo-server-express");

const typedefs = gql`
  type Query {
    flight: [flight!]!
  }

  type flight {
    from: String!
    to: String!
    passengersClass: String!
  }
`;

module.exports = typedefs;
