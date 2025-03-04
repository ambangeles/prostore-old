import loader from "@/assets/loader.gif";
import Image from "next/image";

const LoadingPage = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				width: "100%",
			}}
		>
			<Image src={loader} height={150} width={150} alt="Loading..." />
		</div>
	);
};

export default LoadingPage;
