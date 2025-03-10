"use client"

import Link from "next/link"
import { CSSProperties, useState } from "react"

export default function Home() {
  const [mainColor, setMainColor] = useState<string>("f8567f")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9a-fA-F]/g, "")
    value = value.slice(0, 6)

    setMainColor(value)
  }

  return (
    <main
      className="flex flex-col gap-y-4 px-4 text-white/75"
      style={{ "--tw-primary-color": `#${mainColor}` } as CSSProperties}
    >
      <h1 className="font-black text-3xl py-8 px-4 text-white/75">
        <span
          style={{
            color: `#${mainColor}`
          }}
        >
          IceCreamSwap
        </span>{" "}
        Widget Tool
      </h1>
      <p>
        This is an example on how to use the IceCreamSwap&apos;s swap widget and
        easily integrate it to your UI.
      </p>
      <table className="table-auto border-collapse border border-white/25 border-spacing-2 bg- backdrop-blur-lg">
        <thead
          className="font-bold py-2"
          style={{
            backgroundColor: `#${mainColor}`
          }}
        >
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
            <td>
              hex color code without &quot;<b>#</b>&quot;
            </td>
            <td>f8567f</td>
            <td>string</td>
          </tr>
          <tr>
            <td>chain</td>
            <td>
              chainId <br />
              All supported chains are listed{" "}
              <Link
                className="decoration-underline transition-colors duration-300 ease-in-out"
                href="https://github.com/IceCreamSwapCom/IceCreamSwapUi/tree/IceCreamSwapV3/packages/constants/src/chains"
                target="_blank"
                style={{
                  color: `#${mainColor}`
                }}
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
      {/* Playground */}
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl uppercase">Playground</div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => setMainColor("00bba7")}
            className="bg-teal-500"
            type="button"
          >
            Teal
          </button>
          <button
            onClick={() => setMainColor("7ccf00")}
            className="bg-lime-500"
            type="button"
          >
            Lime
          </button>
          <div className="rounded-xl border border-white/25 text-white/50 relative">
            <span className="absolute top-[22%] left-5">#</span>
            <input
              className="w-32 px-6 py-2 rounded-xl outline-none text-center"
              value={mainColor}
              maxLength={6}
              onChange={handleChange}
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            // className=""
            style={{
              border: `1px solid #${mainColor}`,
              color: `#${mainColor}`
            }}
            type="button"
          >
            {isDarkMode ? "Dark" : "Light"}
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <iframe
          src={`https://swap-widget-one.vercel.app/?theme=${
            isDarkMode ? "dark" : "light"
          }&color=${mainColor}&chain=1116&inputCurrency=0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44&outputCurrency=0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1`}
          width="480"
          height="720"
        ></iframe>
      </div>
    </main>
  )
}
