import { Button } from 'reactstrap';
import { useRouter } from 'next/router';

export default function Header({classType}) {
  const navigate = useRouter()
  return (
    <div className={classType}>
      <img src={"https://www.cubie.art/images/dfbc31dada3586107a843274f52ab736.svg"} alt='Cubie Logo' />

      <div className='p-3'>
        <Button className='btn-primary myCubiesBtn' onClick={() => navigate.push('/my-cubies')}>
          My Cubies
        </Button>
      </div>
    </div>
  )
}