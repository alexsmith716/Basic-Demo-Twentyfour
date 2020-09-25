import React from 'react';
const styles = require('./scss/SvgExample.scss');

export const SvgExample = () => {

	return (

		<div className="container">
			<div className="mt-5 mb-5 pt-5 pb-5">
				<div className={styles.svgExampleContainer}>

					<div>
						<span className={styles.svgBirthdayCakeX}></span>
						<span className="font-norwester color-purple">birthday-cake!</span>
					</div>

					<div>
						<div className={styles.svgExampleItems}>
							<span className={styles.svgBirthdayCake}></span>
							<span className="font-norwester color-purple">birthday-cake!</span>
						</div>
					</div>

					<div className={styles.fontSizeThirtyTwoPixels}>
						we are the same font size
					</div>

					<div className={styles.fontSizeTwoRem}>
						we are the same font size
					</div>

					<div className={styles.fontSizeTwentyFourPixels}>
						i am 24px
					</div>

					<div className={styles.fontSizeOneAndHalfRem}>
						i am 1.5rem
					</div>

					<div className={styles.fontSizeSixteenPixels}>
						i am 16px
					</div>

					<div className={styles.fontSizeOneRem}>
						i am 1rem
					</div>

				</div>
			</div>
		</div>
	);
}
