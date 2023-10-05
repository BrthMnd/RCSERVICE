/* eslint-disable react/prop-types */

const ModalQuestion = ({
	isOpen,
	title,
	message,
	acceptText,
	rejectText,
	onAccept,
	onReject,
}) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal-overlay">
			<div className="modal-c">
				<h2>{title}</h2>
				<p>{message}</p>
				<div className="button-container">
					<button
						className="page-button modal-button reject-button"
						onClick={onReject}
					>
						{rejectText}
					</button>
					<button
						className="modal-button accept-button page-button"
						onClick={onAccept}
					>
						{acceptText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalQuestion;
