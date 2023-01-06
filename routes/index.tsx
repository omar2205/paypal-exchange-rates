import { Head } from '$fresh/runtime.ts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Paypal Exchange Rates</title>
      </Head>

      <div class="h-screen w-screen flex flex-col justify-center items-center bg-gray-50">
        <div class="mx-auto max-w-md rounded-lg bg-white shadow-xl">
          <div class="p-4">
            <h3 class="text-xl font-medium text-gray-900">How to use</h3>
            <p>Edit the URL with the following </p>
            <pre>
              /&lt;COUNTRY&gt;-&lt;CURRENCY&gt;/&lt;COUNTRY&gt;-&lt;CURRENCY&gt;
              <br />
              <b>ex:</b>/uk-GBP/us-USD
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}
