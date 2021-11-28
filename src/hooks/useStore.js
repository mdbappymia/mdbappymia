import { useContext } from "react";
import { SiteContext } from "../contexts/AllProvider";

const useStore = () => {
  return useContext(SiteContext);
};

export default useStore;
