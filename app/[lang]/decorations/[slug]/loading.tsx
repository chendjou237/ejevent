

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mb-4"></div>
      <h1 className="text-2xl font-semibold text-gray-700">Loading Content...</h1>
      <p className="text-gray-500 mt-2">Please wait while we prepare your content</p>
    </div>
  )
}
