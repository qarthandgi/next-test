import React from "react";
import { fetchQuery, ReactRelayContext } from "react-relay";
import { initEnvironment } from "./environment";
import { getQueryRecordsFromEnvironment, getOperationFromQuery } from "../utils";

export const withRelay = (ComposedComponent, options: any = {}) => {
  return class withRelay extends React.Component {
    static displayName = `withRelay(${ComposedComponent.displayName || "ComposedComponent"})`;

    static async getInitialProps(ctx) {
      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      const environment = initEnvironment();
      let queryProps = {};
      let queryRecords = {};
      let operationToRetain;

      if (options.query) {
        
        queryProps = await fetchQuery(
          environment,
          options.query,
          options.variables || {}
        );
        queryRecords = getQueryRecordsFromEnvironment(environment);
        operationToRetain = getOperationFromQuery(
          options.query,
          options.variables
        );
      }

      return {
        ...composedInitialProps,
        ...queryProps,
        queryRecords,
        operationToRetain
      };
    }

    constructor(props) {
      super(props);
      // @ts-ignore
      this.environment = initEnvironment({
        records: props.queryRecords
      });
    }

    render() {
      return (
        <ReactRelayContext.Provider
          // @ts-ignore
          value={{ environment: this.environment}}
        >
          <ComposedComponent {...this.props} />
        </ReactRelayContext.Provider>
      );
    }
  };
};