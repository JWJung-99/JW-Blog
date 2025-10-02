import { ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
}

const Button = ({ children, type = 'button', ...args }: ButtonProps) => {
	return (
		<button type="button" className={styles.button} {...args}>
			{children}
		</button>
	);
};

export default Button;
