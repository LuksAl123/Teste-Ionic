import { LoadingState } from "src/store/loading/LoadingState";
import { LoginState } from "./login/LoginState";

export interface AppState {
    loading: LoadingState;
    login: LoginState;
}