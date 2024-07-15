// import RingLoader from "react-spinners/MoonLoader";

// import { LoaderBackdrop } from "./Loader.styled";

// export const Loader = () => {
//   return (
//     <LoaderBackdrop>
//       <RingLoader color="#dbe2e2" size={50} />
//     </LoaderBackdrop>
//   );
// };
// =============================================
import React from "react";
import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loaderWrap} style={{ backgroundColor: "transparent" }}>
      <ColorRing
        className={css.loaderWrap}
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
      />
    </div>
  );
};

// const Loader = () => {
// 	const { isLoading } = useSelector(selectorAppState)

// 	return isLoading && <h1>Loading...</h1>
// }

// export default Loader
