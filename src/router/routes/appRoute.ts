import Home from '../../pages/index'
import Service from '../../pages/service/index'
import Login from '../../pages/auth/login'
import Product from '../../pages/products/index'
// import validate from '../../pages/validate/index'



interface IAppRoutes {
    id: string;
    path: string;
    component: React.FC;
    meta: {
      appLayout: boolean;
      privateRoute: boolean;
    };
  }


  const appRoutes: IAppRoutes[] = [
    {
      id: 'homee',
      path: '/',
      component: Home,
      meta: {
        appLayout: true,
        privateRoute: false
      }

    },
      {
        id: 'service',
        path: '/service',
        component: Service,
        meta: {
          appLayout: true,
          privateRoute: true
        }
      }
      ,
      {
        id: 'login',
        path: '/login',
        component: Login,
        meta: {
          appLayout: true,
          privateRoute: false
        }
      },

      {
        id: 'product',
        path: '/product',
        component: Product,
        meta: {
          appLayout: true,
          privateRoute: true
        }
      }



      // {
      //   id: 'validate',
      //   path: '/validate',
      //   component: validate,
      //   meta: {
      //     appLayout: true,
      //     privateRoute: false
      //   }
      // }
    
    
  ]

  export default appRoutes;