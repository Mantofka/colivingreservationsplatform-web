import { Routes } from '@angular/router';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { CreateUpdateColivingComponent } from './modules/coliving/create-update-coliving/create-update-coliving.component';
import { ColivingResolver } from './modules/coliving/services/coliving.resolver';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { CreateUpdateRoomComponent } from './modules/rooms/create-update-room/create-update-room.component';
import { RoomResolver } from './modules/rooms/services/room.resolver';
import { RoomsComponent } from './modules/rooms/rooms.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { RoleGuard } from './guards/role.guard';
import { ColivingInformationComponent } from './modules/coliving/coliving-information/coliving-information.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { TenantResolver } from './modules/tenants/services/tenant.resolver';
import { RoleEnum } from './shared/models/roles';
import { OutsideTenantResolver } from './modules/tenants/services/outside-tenant.resolver';
import { CreateUpdateTenantComponent } from './modules/tenants/create-update-tenant/create-update-tenant.component';
import { TenantListComponent } from './modules/tenants/tenant-list/tenant-list.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [RoleGuard],
    data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator, RoleEnum.Tenant] },
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator, RoleEnum.Tenant] } },
      { path: 'coliving/:colivingId', component: ColivingInformationComponent, resolve: { coliving: ColivingResolver }, data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator, RoleEnum.Tenant] } },
      { path: 'coliving/edit/:colivingId', component: CreateUpdateColivingComponent, resolve: { coliving: ColivingResolver }, data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator] } },
      { path: 'coliving/create', component: CreateUpdateColivingComponent, resolve: { coliving: ColivingResolver }, data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator] } },
      { path: 'coliving/view/:colivingId', component: CreateUpdateColivingComponent, resolve: { coliving: ColivingResolver }, data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator] } },
      { path: 'coliving/view/:colivingId/rooms', component: RoomsComponent, data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator] } },
      { path: 'coliving/view/:colivingId/rooms/create', component: CreateUpdateRoomComponent, data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator] } },
      { path: 'coliving/view/:colivingId/rooms/edit/:roomId', component: CreateUpdateRoomComponent, resolve: { room: RoomResolver }, data: { roles: [RoleEnum.ColivingOwner, RoleEnum.Administrator] } },
      { path: 'tenant/:tenantId', component: CreateUpdateTenantComponent, resolve: { tenant: OutsideTenantResolver }, data: { roles: [RoleEnum.Administrator] } },
      { path: 'tenants', component: TenantListComponent, data: { roles: [RoleEnum.Administrator] } },

      { path: 'profile', component: ProfileComponent, resolve: { tenant: TenantResolver }, data: { roles: [RoleEnum.Tenant] } },
    ]
  }
];
