import { PuffLoader } from "react-spinners";

export const CustomLoading = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <PuffLoader color="#ff984f" size={30} margin={0} />
      </div>
    </>
  );
};
