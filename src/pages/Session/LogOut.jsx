/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";

export const LogOut = ({ setsesion }) => {
	useEffect(() => {
		document.cookie =
			"sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		setsesion(undefined);
	}, []);
	return <></>;
};
