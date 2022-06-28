import { SharedNetworkData } from "./SharedNetworkData";

export const Banner = () => {
  return (
    <SharedNetworkData
      render={(isConnected) => {
        if (!isConnected) {
          return null;
        }

        return <div />;
      }}
    />
  );
};
