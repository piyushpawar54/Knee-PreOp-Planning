import { createContext, useContext, useState } from 'react';

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  return (
    <ConfiguratorContext.Provider
      value={{
        points,
        setPoints,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
