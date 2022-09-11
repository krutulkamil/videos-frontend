import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./AuthForm.module.scss";
import stylesIcon from "../icons-right/IconsRight.module.scss";
import { useOutside } from "../../../../../hooks/useOutside";
import { useAuth } from "../../../../../hooks/useAuth";
import { IAuthFields } from "@/components/layout/header/auth-form/auth-form.interface";
import { FaUserCircle } from "react-icons/fa";

const AuthForm: FunctionComponent = () => {
    const { ref, isShow, setIsShow } = useOutside(false);
    const [type, setType] = useState<"login" | "register">("login");

    // const { isLoading } = useAuth();

    const { register, formState: { errors }, handleSubmit } = useForm<IAuthFields>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<IAuthFields> = data => {

    };

    return (
        <div className={styles.wrapper} ref={ref}>
            <button className={stylesIcon.button} onClick={() => setIsShow(!isShow)}>
                <FaUserCircle fill="#A4A4A4" />
            </button>

            {isShow && (
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                </form>
            )}
        </div>
    );
};

export default AuthForm;