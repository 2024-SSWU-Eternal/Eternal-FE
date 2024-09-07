import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";

const Loading = () => {
	return (
		<div className='Loading_wrap container'>
			<div>
				<h4>잠시만 기다려주세요</h4>
				<Player
					autoplay
					loop
					controls={true}
					src="https://lottie.host/50a5d83c-21ff-4eed-9029-0d53137a0c50/jILiaTg8e6.json"
				/>
			</div>
		</div>
	);
}

export default Loading;
