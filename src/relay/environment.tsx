import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store
} from "relay-runtime";
import fetch from "isomorphic-unfetch";
import { isSSR } from "../utils";

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });
let environment = null;

function fetchQuery(operation, variables, cacheConfig) {
  const queryID = operation.text;
  const isMutation = operation.operationKind === "mutation";
  const isQuery = operation.operationKind === "query";
  const forceFetch = cacheConfig && cacheConfig.force;
  const fromCache = cache.get(queryID, variables);

  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  return fetch(
    "https://robust-whippet-70.hasura.app/v1/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "working-together-24"
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    }
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (isQuery && json) {
        cache.set(queryID, variables, json);
      }
      if (isMutation) {
        cache.clear();
      }

      return json;
    });
}

export const initEnvironment = ({ records = {} } = {}) => {
  const network = Network.create(fetchQuery);
  const store = new Store(new RecordSource(records));

  if (isSSR) {
    return new Environment({
      network,
      store
    });
  }

  if (!environment) {
    environment = new Environment({
      network,
      store
    });
  }

  return environment;
};