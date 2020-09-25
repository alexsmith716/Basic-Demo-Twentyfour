import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadInfo } from '../../redux/modules/info';
import { Loading } from '../Loading';
import { Button } from '../Button';
import * as Styles from './styles';

interface StateInfo {
	info: any
}

export const InfoBar = () => {

	const dispatch = useDispatch();

	const data = useSelector((state: StateInfo) => state.info.data);
	const loading = useSelector((state: StateInfo) => state.info.loading);
	const error = useSelector((state: StateInfo) => state.info.error);
	const errorResponse = useSelector((state: StateInfo) => state.info.errorResponse);

	console.log('>>>>>>>>>>>>>>>>>>>>>>>> InfoBar > data					????: ', data);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> InfoBar > loading				????: ', loading);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> InfoBar > error					????: ', error);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> InfoBar > errorResponse	????: ', errorResponse);

	const doLoadInfo = async () => {
		try {
			await dispatch(loadInfo())
		}
		catch (error) { 
			console.log(error.message)
		}
	}

	return (

		<div className="container">
			<Styles.InfoBarContainerBgColor className="flex-column-center mb-5">
				<Styles.InfoBarContainer className="flex-column-center">

					{/* (>>>>>>>>>>>>>>>>>>>>>> LOADING >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{loading && (
						<Loading text="Loading" />
					)}

					{/* (>>>>>>>>>>>>>>>>>>>>>> ERROR >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{error && (
						<>
							<div>RENDERING ERROR</div>
							<div>{`Message: ${errorResponse.message}`}</div>
							<div>{`Url: ${errorResponse.documentation_url}`}</div>
						</>
					)}

					{/* (>>>>>>>>>>>>>>>>>>>>>>>> LOADED >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{!loading && (
						<Styles.InfoBarContainerStyled className="flex-column-center">
							<div>InfoBar message: '<Styles.DataMessage>{data ? data.message : 'no message!'}</Styles.DataMessage>'</div>
							<div>{data && new Date(data.time).toString()}</div>
							<div>{data && data.timeElapsed}</div>

							<div className="mt-2">
								<Button type="button" className="btn-primary" onClick={doLoadInfo}>
									Reload from server
								</Button>
							</div>
						</Styles.InfoBarContainerStyled>
					)}
				</Styles.InfoBarContainer>
			</Styles.InfoBarContainerBgColor>
		</div>
	);
}
