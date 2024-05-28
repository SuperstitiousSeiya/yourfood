import React from "react";
import { Loader } from "lucide-react";
const loading = () => {
  return (
    <div className="h-[90vh] grid place-items-center">
      <Loader className="animate-spin w-full" size={40}></Loader>
    </div>
  );
};

export default loading;
