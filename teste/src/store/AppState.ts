import { LoadingState } from "src/store/loading/LoadingState";
import { LoginState } from "./login/LoginState";
import { RegisterState } from "./register/RegisterState";

export interface AppState {
    loading: LoadingState;
    login: LoginState;
    register: RegisterState;
}