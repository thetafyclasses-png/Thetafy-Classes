const LoadingSpinner = ({ size = 'md', text = 'Loading...' }: { size?: 'sm' | 'md' | 'lg', text?: string }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className={`animate-spin rounded-full border-4 border-blue-200 border-t-blue-600 ${sizeClasses[size]} mb-4`}></div>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  )
}

export default LoadingSpinner