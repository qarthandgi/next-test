/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type categoryByPkQueryVariables = {
    id: number;
};
export type categoryByPkQueryResponse = {
    readonly category_by_pk: {
        readonly whateverId: number;
        readonly name: string;
    } | null;
};
export type categoryByPkQuery = {
    readonly response: categoryByPkQueryResponse;
    readonly variables: categoryByPkQueryVariables;
};



/*
query categoryByPkQuery(
  $id: Int!
) {
  category_by_pk(id: $id) {
    whateverId: id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "category",
    "kind": "LinkedField",
    "name": "category_by_pk",
    "plural": false,
    "selections": [
      {
        "alias": "whateverId",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "categoryByPkQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "categoryByPkQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d5366fd25d8c075da453c89c8ed5554e",
    "id": null,
    "metadata": {},
    "name": "categoryByPkQuery",
    "operationKind": "query",
    "text": "query categoryByPkQuery(\n  $id: Int!\n) {\n  category_by_pk(id: $id) {\n    whateverId: id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '0b1cb60bdd12d5a7957f3add42ed8e8e';
export default node;
