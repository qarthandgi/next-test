import {graphql} from "react-relay";

export const categoryQuery = graphql`
  query categoryQuery(
    $distinct_on: [category_select_column!]
    $limit: Int
    $offset: Int
    $order_by: [category_order_by!]
    $where: category_bool_exp
  ) {
    category(
      distinct_on: $distinct_on
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      whateverId: id
      ...category_item
    }
  }
`;
