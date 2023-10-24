import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-2xl 
    mx-auto px-4 overflow-hidden ">
      {children}
    </div>
  )
}

export default Wrapper
