import { createContext, useState } from 'react';

export const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [points, setPoints] = useState({});
  const [isUpdateClick, setIsUpdateClick] = useState(false);
  const [selected, setSelect] = useState('Femur Center');

  function handleUpdateClick() {
    setIsUpdateClick(!isUpdateClick);
  }
  return (
    <ConfiguratorContext.Provider
      value={{
        points,
        setPoints,
        selected,
        setSelect,
        handleUpdateClick,
        isUpdateClick,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};
