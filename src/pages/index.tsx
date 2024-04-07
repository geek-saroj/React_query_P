
// import { useLocation } from 'react-router-dom';

// function MyComponent() {
//   const location = useLocation();

//   return (
//     <div>
//       <h2>Current Pathname: {location.pathname}</h2>
//       <h2>Current Search: {location.search}</h2>
//       <h2>Current Hash: {location.hash}</h2>
//       <h2>Current State: {JSON.stringify(location.state)}</h2>
//     </div>
//   );
// }

// export default MyComponent;



import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.2)]">
      <div>
        <PulseLoader color="#13CE66" size={20} />
      </div>
    </div>
  );
};

export default Loader;

