import { gql } from "@apollo/client";

export const FLIGHT_PAGE_QUERY = gql`
    query Flight {
        flight {
         from
    passengersClass
    to
  }
}
`