import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return <div>DashboardPage</div>
}

export default DashboardPage
