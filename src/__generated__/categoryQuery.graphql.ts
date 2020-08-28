/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type category_select_column = "created_on" | "id" | "name" | "%future added value";
export type order_by = "asc" | "asc_nulls_first" | "asc_nulls_last" | "desc" | "desc_nulls_first" | "desc_nulls_last" | "%future added value";
export type category_order_by = {
    created_on?: order_by | null;
    id?: order_by | null;
    name?: order_by | null;
};
export type category_bool_exp = {
    _and?: Array<category_bool_exp | null> | null;
    _not?: category_bool_exp | null;
    _or?: Array<category_bool_exp | null> | null;
    created_on?: timestamptz_comparison_exp | null;
    id?: Int_comparison_exp | null;
    name?: String_comparison_exp | null;
};
export type timestamptz_comparison_exp = {
    _eq?: unknown | null;
    _gt?: unknown | null;
    _gte?: unknown | null;
    _in?: Array<unknown> | null;
    _is_null?: boolean | null;
    _lt?: unknown | null;
    _lte?: unknown | null;
    _neq?: unknown | null;
    _nin?: Array<unknown> | null;
};
export type Int_comparison_exp = {
    _eq?: number | null;
    _gt?: number | null;
    _gte?: number | null;
    _in?: Array<number> | null;
    _is_null?: boolean | null;
    _lt?: number | null;
    _lte?: number | null;
    _neq?: number | null;
    _nin?: Array<number> | null;
};
export type String_comparison_exp = {
    _eq?: string | null;
    _gt?: string | null;
    _gte?: string | null;
    _ilike?: string | null;
    _in?: Array<string> | null;
    _is_null?: boolean | null;
    _like?: string | null;
    _lt?: string | null;
    _lte?: string | null;
    _neq?: string | null;
    _nilike?: string | null;
    _nin?: Array<string> | null;
    _nlike?: string | null;
    _nsimilar?: string | null;
    _similar?: string | null;
};
export type categoryQueryVariables = {
    distinct_on?: Array<category_select_column> | null;
    limit?: number | null;
    offset?: number | null;
    order_by?: Array<category_order_by> | null;
    where?: category_bool_exp | null;
};
export type categoryQueryResponse = {
    readonly category: ReadonlyArray<{
        readonly whateverId: number;
        readonly " $fragmentRefs": FragmentRefs<"category_item">;
    }>;
};
export type categoryQuery = {
    readonly response: categoryQueryResponse;
    readonly variables: categoryQueryVariables;
};



/*
query categoryQuery(
  $distinct_on: [category_select_column!]
  $limit: Int
  $offset: Int
  $order_by: [category_order_by!]
  $where: category_bool_exp
) {
  category(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    whateverId: id
    ...category_item
  }
}

fragment category_item on category {
  whateverId: id
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "distinct_on"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "limit"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "offset"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order_by"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "distinct_on",
    "variableName": "distinct_on"
  },
  {
    "kind": "Variable",
    "name": "limit",
    "variableName": "limit"
  },
  {
    "kind": "Variable",
    "name": "offset",
    "variableName": "offset"
  },
  {
    "kind": "Variable",
    "name": "order_by",
    "variableName": "order_by"
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "alias": "whateverId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "categoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "category",
        "kind": "LinkedField",
        "name": "category",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "category_item"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "categoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "category",
        "kind": "LinkedField",
        "name": "category",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "37ae4f59996606128d8d9e1d82976afd",
    "id": null,
    "metadata": {},
    "name": "categoryQuery",
    "operationKind": "query",
    "text": "query categoryQuery(\n  $distinct_on: [category_select_column!]\n  $limit: Int\n  $offset: Int\n  $order_by: [category_order_by!]\n  $where: category_bool_exp\n) {\n  category(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {\n    whateverId: id\n    ...category_item\n  }\n}\n\nfragment category_item on category {\n  whateverId: id\n  name\n}\n"
  }
};
})();
(node as any).hash = 'cb8d99cf4460ad9b507b9d42a19eb596';
export default node;
