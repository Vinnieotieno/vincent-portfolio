"use client"

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

const PlaceholderImage = ({ width, height, text = "Image", className = "" }: PlaceholderImageProps) => {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 text-gray-600 border-2 border-dashed border-gray-300 ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">📷</div>
        <div className="text-sm font-medium">{text}</div>
        <div className="text-xs opacity-60">
          {width} × {height}
        </div>
      </div>
    </div>
  )
}

export default PlaceholderImage
