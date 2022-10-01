import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface';
import { IAuthData } from '@/services/auth/auth.helper';
import { toastError } from '@/utils/api.utils';
import { AuthService } from '@/services/auth/auth.service';
import { toastr } from 'react-redux-toastr';

export const register = createAsyncThunk<IAuthData, IAuthFields>(
    'auth/register', async ({ email, password }, thunkAPI) => {
        try {
            const response = await AuthService.register(email, password);
            toastr.success('Register', 'Register success!');
            return response;
        } catch (error) {
            toastError(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk<IAuthData, IAuthFields>(
    'auth/login', async ({ email, password }, thunkAPI) => {
        try {
            const response = await AuthService.login(email, password);
            toastr.success('Login', 'Login success!');
            return response;
        } catch (error) {
            toastError(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk('auth/logout', async () => {
    return {};
});