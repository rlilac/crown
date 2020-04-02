import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
import sessions, { SessionsState } from 'app/modules/account/sessions/sessions.reducer';
// prettier-ignore
import supplyPoint, {
  SupplyPointState
} from 'app/entities/supply-point/supply-point.reducer';
// prettier-ignore
import resource, {
  ResourceState
} from 'app/entities/resource/resource.reducer';
// prettier-ignore
import supplyPointResource, {
  SupplyPointResourceState
} from 'app/entities/supply-point-resource/supply-point-resource.reducer';
// prettier-ignore
import delivery, {
  DeliveryState
} from 'app/entities/delivery/delivery.reducer';
// prettier-ignore
import requestPoint, {
  RequestPointState
} from 'app/entities/request-point/request-point.reducer';
// prettier-ignore
import request, {
  RequestState
} from 'app/entities/request/request.reducer';
// prettier-ignore
import recieverSupplier, {
  RecieverSupplierState
} from 'app/entities/reciever-supplier/reciever-supplier.reducer';
// prettier-ignore
import recieverResource, {
  RecieverResourceState
} from 'app/entities/reciever-resource/reciever-resource.reducer';
// prettier-ignore
import supplierResource, {
  SupplierResourceState
} from 'app/entities/supplier-resource/supplier-resource.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly sessions: SessionsState;
  readonly supplyPoint: SupplyPointState;
  readonly resource: ResourceState;
  readonly supplyPointResource: SupplyPointResourceState;
  readonly delivery: DeliveryState;
  readonly requestPoint: RequestPointState;
  readonly request: RequestState;
  readonly recieverSupplier: RecieverSupplierState;
  readonly recieverResource: RecieverResourceState;
  readonly supplierResource: SupplierResourceState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  sessions,
  supplyPoint,
  resource,
  supplyPointResource,
  delivery,
  requestPoint,
  request,
  recieverSupplier,
  recieverResource,
  supplierResource,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar
});

export default rootReducer;
