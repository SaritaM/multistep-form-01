import { useState } from "react";
import styles from '@/src/css/components/form/MultiStepForm.module.scss';
import Left from "./Left";

export default function MultiStepForm() {
	const [step, setStep] = useState(1);

	const formData = [
		{
			menuTitle: 'Your Info',
			title: '',
			instructions: ''
		},
		{
			menuTitle: 'Select Plan',
			title: '',
			instructions: ''
		},
		{
			menuTitle: 'Add-Ons',
			title: '',
			instructions: ''
		},
		{
			menuTitle: 'Summary',
			title: '',
			instructions: ''
		}
	];

	return (
		<div className={styles.container}>
			<div>
				<Left
					formData={formData}
					step={step}
				/>
			</div>
			<div className={styles.right}>
				Right
			</div>
		</div>
	);
}