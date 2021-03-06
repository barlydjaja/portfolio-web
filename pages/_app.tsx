import '../styles/globals.css'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider attribute={'class'}>
            <div className={'grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:px-20 md:px-32'}>
                <div className={'lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl col-span-12 p-4 text-center'}>
                    <Sidebar/>
                </div>
                <div
                    className={'lg:col-span-9 bg-white rounded-2xl dark:bg-slate-900 col-span-12 flex flex-col lg:col-span-9 rounded-2xl overflow-hidden'}>
                    <Navbar/>
                    <Component {...pageProps} />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MyApp
