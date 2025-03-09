import Link from "next/link"

export default function Home() {
	return (
		<main className="px-4">
			<h1 className="font-black text-3xl py-8 px-4 text-white/75">
				<span className="text-[#de00a1]">IceCreamSwap</span> Widget Tool
			</h1>
			<p>
				This is an example on how to use the IceCreamSwap's swap widget and
				easily integrate it to your UI.
			</p>
			<table className="table-auto border-collapse border border-white/25 border-spacing-2">
				<thead>
					<tr>
						<th>Params</th>
						<th>Value</th>
						<th>Default</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>theme</td>
						<td>
							<ul>
								<li>light</li>
								<li>dark</li>
							</ul>
						</td>
						<td>light</td>
						<td>string</td>
					</tr>
					<tr>
						<td>color</td>
						<td>hex color code without "#"</td>
						<td>f8567f</td>
						<td>string</td>
					</tr>
					<tr>
						<td>chain</td>
						<td>
							chainId <br />
							All chains supported are listed
							<Link
								className="decoration-underline text-[#de00a380] hover:text-[#de00a1] transition-colors duration-300 ease-in-out"
								href="https://github.com/IceCreamSwapCom/IceCreamSwapUi/tree/IceCreamSwapV3/packages/constants/src/chains"
								target="_blank"
							>
								here
							</Link>
							.
						</td>
						<td>1116</td>
						<td>number</td>
					</tr>
					<tr>
						<td>inputCurrency</td>
						<td>token address</td>
						<td>native token of the provided chainId</td>
						<td>string</td>
					</tr>
					<tr>
						<td>outputCurrency</td>
						<td>token address</td>
						<td>undefined</td>
						<td>string</td>
					</tr>
				</tbody>
			</table>
			<div className="flex flex-row justify-between">
				<iframe
					src="https://swap-widget-one.vercel.app/?theme=light&color=de00a1&chain=1116&inputCurrency=0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44&outputCurrency=0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1"
					width="480"
					height="720"
				></iframe>
			</div>
		</main>
	)
}
