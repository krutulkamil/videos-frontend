import { forwardRef } from 'react';
import styles from './TextArea.module.scss';
import { ITextArea } from '@/components/ui/text-area/text-area.interface';

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ error, style, ...rest }, ref) => {
        return (
            <div className={styles['editor']} style={style}>
                <textarea ref={ref} {...rest}>
                    {error && <div className={styles.error}>{error.message}</div>}
                </textarea>
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';

export default TextArea;