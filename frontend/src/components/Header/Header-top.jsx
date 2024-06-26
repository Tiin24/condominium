import { useUserStore } from '../../store/userStore';

function HeaderTop() {
  const user = useUserStore((state) => state.user);
  return (
    <header className='w-full'>
      <div className='px-1 py-7'>
        <h4 className='text-base font-normal text-gray-500'>
          <span className='font-bold text-gray-900'>
            Hola {user?.firstName} -
          </span>{' '}
          esto es lo que está pasando con tu condominio hoy
        </h4>
      </div>
    </header>
  );
}
export default HeaderTop;
