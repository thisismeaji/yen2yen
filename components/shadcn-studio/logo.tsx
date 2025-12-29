

// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className='text-xl font-semibold'>shadcn/studio</span>
    </div>
  )
}

export default Logo
