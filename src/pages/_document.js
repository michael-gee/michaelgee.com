import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://www.paypal.com/sdk/js?client-id=AUP4HaGd0gKMWtZBb7Cyst3zp-fpT6juY3F1e39GN0DZTvDAXkSTRffHCGAIWezb25-wr5Q2auM8HBnk"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
