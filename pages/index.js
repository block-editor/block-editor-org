import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Block Editor - Awesome editor for your web app.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className="logo">
          <img src="/block-editor-logo.svg" />
        </div>
        <h1 className="title">
          Welcome to Block Editor
        </h1>

        <p className="description">
          Coming soon. <a href="https://twitter.com/BlockEditorJS">Follow us at Twitter for updates!</a>
        </p>

        <div className="screenshot">
          <img src="/block-editor-screenshot.png" />
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .logo {
          padding: 3em;
        }

        .logo img {
          width: 128px;
        }

        .screenshot {
          text-align: center;
        }

        .screenshot img {
          width: 100%;
        }
        @media (min-width: 768px) {
          .screenshot img {
            width: 50%;
          }
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
