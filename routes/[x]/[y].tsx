import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import Converter from '../../islands/Converter.tsx'

const getPaypalURL = (a: string, b: string) => {
  const [countryA, currencyA] = a.toUpperCase().split('-')
  const [countryB, currencyB] = b.toUpperCase().split('-')

  return `https://www.paypal.com/smarthelp/currency-conversion?fromCountry=${countryA}&toCountry=${countryB}&fromPaymentCurrency=${currencyA}&toTransCurrency=${currencyB}&tType=FX_ON_BALANCE_TRANSFER&transAmount=1`
}

const parseTitle = (title: string) => {
  let title_array = title.split(' = ')
  const obj = {}
  obj[title_array[0].split(' ')[1]] = parseFloat(title_array[0].split(' ')[0])
  obj[title_array[1].split(' ')[1]] = parseFloat(title_array[1].split(' ')[0])

  return obj
}

export const handler: Handlers = {
  async GET(_, ctx) {
    const { x, y } = ctx.params

    if (!x || !y) return ctx.render(null)

    const url = getPaypalURL(x, y)

    const data = await fetch(url, {
      headers: {
        'Accept-Language': 'en-US,en;q=0.9',
      },
    }).then((r) => r.json())

    const title = data.result.split('</p>')[0].replace('<p>', '')
    const obj = parseTitle(title)

    return ctx.render({
      title,
      obj,
    })
  },
}

export default function (props: PageProps) {
  return (
    <>
      <Head>
        <title>Paypal Exchange Rates</title>
      </Head>
      <div class="h-screen w-screen flex flex-col justify-center items-center bg-gray-50">
        <div class="mx-auto max-w-md rounded-lg bg-white shadow-xl">
          <div class="p-4">
            <h3 class="text-xl font-medium text-gray-900">
              {props.data.title}
            </h3>
            <Converter
              from={Object.values(props.data.obj)[0]}
              to={Object.values(props.data.obj)[1]}
            />
          </div>
        </div>
      </div>
    </>
  )
}
