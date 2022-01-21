import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Barly's Portfolio</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Vollkorn+SC&display=swap"
                          rel="stylesheet"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta property="og:title" content="Barly's Portfolio" key={'title'}/>
                    <meta name="description"
                          content="I'm a Frontend Developer. I have been working for more than 2 years now in Frontend
                          development. I'm using ReactJs and VueJs on daily basis at work. This website is created to show
                          people my personal portfolio. I hope you can enjoy it!"
                    />
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:site_name" content="barlydjaja.com"/>
                </Head>
                <body className={'bg-gradient-to-r from-green to-blue-400'}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
