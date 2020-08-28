import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { CategoryByPkQueryRenderer } from "./categoryByPkQuery";

const Category = ({ item, onClick, showDetail }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick(item.whateverId);
        }}
      >
        ID: {item.whateverId}
      </button>
      {showDetail && (
        <CategoryByPkQueryRenderer id={item.whateverId}>
          {({ error, props }) => {
            if (error) {
              return <div>Error</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return <div>{JSON.stringify(props)}</div>;
          }}
        </CategoryByPkQueryRenderer>
      )}
    </div>
  );
};

export default createFragmentContainer(Category, {
  item: graphql`
    fragment category_item on category {
      whateverId: id
      name
    }
  `,
});
