import styles from '@/src/css/components/form/Left.module.scss';
import Image from 'next/image';

export default function Left({formData, step}) {
	return (
		<div className={styles.container}>
			<div className={styles.bgImg}>
				<Image
					src='/images/bg-sidebar-desktop.svg'
					alt='Super Multi-step form'
					fill
				/>
			</div>
			<div className={styles.content}>
				{formData.map((s, i) => {
					const active = step === i + 1;

					return (
						<div className={styles.step} key={`menu-step-${i}`}>
							<div className={`${styles.number} ${active ? styles.active : ''}`}>{i + 1}</div>
							<div className={styles.stepContent}>
								<span className={styles.stepNumber}>Step {i + 1}</span>
								<span className={styles.stepTitle}>{s.menuTitle}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}