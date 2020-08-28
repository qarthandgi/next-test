import styles from "../../styles/Home.module.scss";
import { categoryQuery } from "../queries/category";
import { withRelay } from "../relay/withRelay";
import Category from "../components/category";
import { useState, useCallback } from "react";

const IndexPage = ({ category }) => {
  const [itemID, setItemID] = useState();
  const onClick = useCallback(id => setItemID(id), []);
  return (
    <div className={styles.container}>
      {(category || []).map((item, index) => {
        return(
          <Category
            key={item.whateverId || index}
            item={item}
            showDetail={item.whateverId === itemID}
            onClick={onClick}
          />
        )
      })}
    </div>
  );
};

export default withRelay(IndexPage, {
  query: categoryQuery,
  variables: {
    distinct_on: "name",
    limit: 10,
    order_by: {
      name: "asc",
    },
  },
});
