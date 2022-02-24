import { createContext, useContext, useState } from "react";

// create a context and export it
export const LoaderContext = createContext();

export const IsLoadingObject = () => {
  const [isLoading, setIsLoading] = useContext(LoaderContext);
  return { isLoading, setIsLoading };
};

// export a loader provider
export const LoaderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoaderContext.Provider value={[isLoading, setIsLoading]}>
      {children}
    </LoaderContext.Provider>
  );
};
