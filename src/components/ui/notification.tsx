import ReactDOM from 'react-dom';
import { cn } from '../utils';

const Notification = ({ title, body, status }: ResponseUIAlert) => {

  let statusClass = '';

  if (status === 'success') {
    statusClass = 'bg-green-500/90';
  }
  if (status === 'pending') {
    statusClass = 'bg-blue-500/80';
  }
  if (status === 'error') {
    statusClass = 'bg-red-500/80';
  }

  return (
    <div className={cn('w-full h-20 px-12 py-6 fixed z-[999] bottom-0 left-0 flex items-center justify-between', statusClass)}>
      <h2 className='font-bold text-2xl text-left text-gray-100'>{title}</h2>
      <p className='text-lg text-gray-200'>{body}</p>
    </div>
  );
}

export default Notification;
