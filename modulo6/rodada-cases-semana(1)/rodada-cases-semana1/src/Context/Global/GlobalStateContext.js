const { createContext, useContext } = require("react");

const GlobalStateContext = createContext();

export default GlobalStateContext;

export const useGlobal = () => useContext(GlobalStateContext);
