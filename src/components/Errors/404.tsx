import { Button, Result } from 'antd'
import Link from 'next/link'
import { ROUTE } from 'src/constants/route'

export const Page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link href={ROUTE.BASE.URL}>Back Home</Link>
        </Button>
      }
    />
  )
}
