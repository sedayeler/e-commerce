import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/compenents/dashboard/dashboard.component';
import { HomeComponent } from './ui/compenents/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: ([
      { path: "", component: DashboardComponent },
      {
        path: "customers", loadChildren: () => import("./admin/compenents/customers/customers.module").then
          (module => module.CustomersModule)
      },
      {
        path: "orders", loadChildren: () => import("./admin/compenents/orders/orders.module").then
          (module => module.OrdersModule)
      },
      {
        path: "products", loadChildren: () => import("./admin/compenents/products/products.module").then
          (module => module.ProductsModule)
      },
    ])
  },
  { path: "", component: HomeComponent },
  {
    path: "baskets", loadChildren: () => import("./ui/compenents/baskets/baskets.module").then(module => module.BasketsModule),
  },
  {
    path: "products", loadChildren: () => import("./ui/compenents/products/products.module").then(module => module.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
