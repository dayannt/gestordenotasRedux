import { storeRedux } from "../Store/store";

export type RootState = ReturnType<typeof storeRedux.getState>;