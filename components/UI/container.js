export const CustomContainer = ({ className, children }) => {
  return (
    <div className={` w-11/12 desktop:w-[1220px] m-auto ${className}`}>
      {children}
    </div>
  );
};
