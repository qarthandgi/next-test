/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type category_item = {
    readonly whateverId: number;
    readonly name: string;
    readonly " $refType": "category_item";
};
export type category_item$data = category_item;
export type category_item$key = {
    readonly " $data"?: category_item$data;
    readonly " $fragmentRefs": FragmentRefs<"category_item">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "category_item",
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
  "type": "category",
  "abstractKey": null
};
(node as any).hash = '8a39d973a777fefb79eeb699d3c2c993';
export default node;
