import React, { useContext } from "react";
import { QueryRenderer, ReactRelayContext, graphql} from "react-relay";

export const categoryByPkQuery = graphql`
  query categoryByPkQuery($id: Int!) {
    category_by_pk(id: $id) {
      whateverId: id
      name
    }
  } 
`;

export const CategoryByPkQueryRenderer = ({ children, id }) => {
  const { environment } = useContext(ReactRelayContext);
  return (
    <QueryRenderer
      environment={environment}
      query={categoryByPkQuery}
      render={children}
      variables={{
        id
      }}
      fetchPolicy="store-and-network"
    />
  );
};