import { useMemo, useState } from 'preact/hooks'

interface CounterProps {
  from: number
  to: number
}

export default function Counter(props: CounterProps) {
  const [from, setFrom] = useState(props.from)

  const to = useMemo(() => parseFloat(from) * props.to, [from])

  return (
    <div class="mx-auto max-w-xs flex gap-4 mt-4">
      <input
        type="number"
        class="block w-full rounded-md border-gray-300 px-8 py-2 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
        placeholder="0.00"
        onChange={(e) => setFrom(e.target.value)}
        min={1}
        value={from}
      />

      <input
        type="number"
        class="block w-full rounded-md border-gray-300 px-8 py-2 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
        placeholder="0.00"
        value={to}
        readonly
      />
    </div>
  )
}
