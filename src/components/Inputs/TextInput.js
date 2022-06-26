import { useField } from "formik";
// style
import style from "./style.module.scss";

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className={style.container}>
			<label className={style.label}>{label}</label>
			<input
				className={`${style.input} ${
					meta.touched && meta.error
						? style["input--error"]
						: style["input--valid"]
				}`}
				placeholder={`enter ${field.name}`}
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className={style.error}>{meta.error}</div>
			) : null}
		</div>
	);
};

export default TextInput;
