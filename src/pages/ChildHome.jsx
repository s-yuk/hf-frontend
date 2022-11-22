import { Header } from '../components/Header'
import IconTabs from '../components/IconTabs'

const ChildHome = () => {
  const name = 'a'
  return (
    <>
      <Header title='子ども用メインページ' name={name} />
      <IconTabs />
    </>
  )
}
export default ChildHome
