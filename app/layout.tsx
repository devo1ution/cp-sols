import { ReactNode } from "react";
import { Page } from "../components/page/Page";
import { font } from "./fonts";
import "katex/dist/katex.css";
import "./global.css";

export default function Layout({children} : {children: ReactNode}) {
    return (
        <html lang="en" className={font.className}>
            <body>
                <Page>
                    {children}
                </Page>
            </body>
        </html>
    )
}
