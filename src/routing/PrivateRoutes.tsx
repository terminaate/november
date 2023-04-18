import { Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  // TODO
  // Add logic
  // const {globalLoader} = useAppSelector(state => state.ui);
  // const {isAuth} = useAppSelector(state => state.user);
  /*
   * return (
   *   {(!globalLoader && isAuth) ? <Outlet/> : <Navigate to={"/login"}/>}
   * )
   * */
  return <Outlet />;
};

export default PrivateRoutes;
