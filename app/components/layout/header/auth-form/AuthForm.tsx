import { FunctionComponent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';
import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';
import styles from './AuthForm.module.scss';
import stylesIcon from '../icons-right/IconsRight.module.scss';
import { useOutside } from '../../../../../hooks/useOutside';
import { useAuth } from '../../../../../hooks/useAuth';
import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface';
import { validEmail } from '@/components/layout/header/auth-form/auth.valid';
import { useActions } from '../../../../../hooks/useActions';

const AuthForm: FunctionComponent = () => {
    const { ref, isShow, setIsShow } = useOutside(false);
    const [type, setType] = useState<'login' | 'register'>('login');

    const { login, register: registerAction } = useActions();

    const { isLoading } = useAuth();

    const { register, formState: { errors }, handleSubmit } = useForm<IAuthFields>({
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<IAuthFields> = data => {
        if (type === 'login') login(data);
        else if (type === 'register') registerAction(data);
    };

    return (
        <div className={styles.wrapper} ref={ref}>
            <button className={stylesIcon.button} onClick={() => setIsShow(!isShow)}>
                <FaUserCircle fill="#A4A4A4"/>
            </button>

            {isShow && (
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        {...register('email', {
                            required: 'E-mail is required!',
                            pattern: {
                                value: validEmail,
                                message: 'Invalid e-mail address!'
                            }
                        })}
                        placeholder="E-mail"
                        error={errors.email}
                    />
                    <Field
                        {...register('password', {
                            required: 'Password is required!',
                            minLength: {
                                value: 6,
                                message: 'At least 6 characters required!'
                            }
                        })}
                        placeholder="Password"
                        error={errors.password}
                        type="password"
                    />

                    <div className="mt-5 mb-1 text-center">
                        <Button
                            onClick={() => setType('login')}
                            disabled={isLoading}
                        >
                            Login
                        </Button>
                    </div>
                    <button
                        className={styles.register}
                        onClick={() => setType('register')}
                        disabled={isLoading}
                    >
                        Register
                    </button>

                </form>
            )}
        </div>
    );
};

export default AuthForm;