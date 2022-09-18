import { Button, Result } from 'antd'
import Link from 'next/link'

export const Page500 = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary">
          <Link href={'/'}>Back Home</Link>
        </Button>
      }
    />
  )
}
