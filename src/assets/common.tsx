import React, {ReactNode} from "react";
import pizzaIcon from "/pizza.svg"
import moonIcon from  "../assets/moon.svg"
import sunIcon from  "../assets/sun.svg"

function DarkModeButton() {
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode() {
        document.cookie = `darkTheme=${!darkMode};max-age=${60*60*60*24*365}`
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }

    function loadDarkMode() {
        const regexp = document.cookie.match("darkTheme=(.+)")
        if (regexp != null) {
            const isDark = regexp["1"] == "true";
            setDarkMode(isDark)
            if (isDark) {
                document.body.classList.add("dark")
            } else {
                document.body.classList.remove("dark")
            }
        }
    }

    return (
        <button onClick={() => toggleDarkMode()}
                className="size-6 sm:size-6 md:size-10 lg:size-10 xl:size-16 2xl:size-16 min-h-full max-h-full rounded-2xl xl:rounded-3xl
                bg-blue-500 dark:bg-purple-600 hover:bg-blue-400 dark:hover:bg-purple-500 hover:shadow-2xl shadow-black
                -right-0 -top-0 order-last content-center align-middle">
            <img src={darkMode ? sunIcon : moonIcon} alt="a" className="size-14 m-auto min-h-full max-h-full" onLoad={() => loadDarkMode()} />
        </button>
    )
}

type OnlyChildren = { children: ReactNode | undefined }

export function Wrapper({children}: OnlyChildren) {
    return (
        <div className={`absolute h-full w-full dark:bg-purple-700 bg-blue-500 text-balance truncate -z-50 accent-blue-600 dark:accent-purple-800`}>
            <div className={`absolute h-10 sm:h-10 md:h-20 lg:h-20 xl:h-28 2xl:h-28 w-full bg-blue-600 dark:bg-purple-800 content-center 
            px-2 sm:px-2 md:px-6 lg:px-6 xl:px-12 2xl:px-12 py-2 sm:py-2 md:py-4 lg:py-4 xl:py-6 2xl:py-6
            text-2xl space-x-4 flex z-50`}>
                <img src={pizzaIcon} alt="pizza" className={"h-full order-first"} />
                <div className="w-full"/>
                <DarkModeButton/>
            </div>
            <div className={`relative h-full w-full superWrap max-h-full max-w-full z-0 pt-10 sm:pt-10 md:pt-20 lg:pt-20 xl:pt-28 2xl:pt-28`}>
                {children}
            </div>
        </div>
    )
}

export function HyperImage({src, href, className}: { src: string | undefined , href: string | undefined , className: string | undefined }) {
    return (
        <a href={href}>
            <img src={src} alt={`Link to ${href}`} className={className} />
        </a>
    )
}

export function Block({children}: OnlyChildren) {
    return (
        <div className={`relative rounded-3xl w-fit h-fit shadow-2xl bg-blue-600 dark:bg-purple-800 content-center align-middle p-2 flex mt-1 mr-2`}>
            {children}
        </div>
    )
}
