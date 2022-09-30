import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { rootReducer } from '@/store/root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { rtkQueryErrorLogger } from '@/store/middlewares/error.middleware';
import { api } from '@/store/api/api';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
        .concat(rtkQueryErrorLogger)
        .concat(api.middleware)
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;