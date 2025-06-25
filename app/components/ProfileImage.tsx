import Image from "next/image"

interface ProfileImageProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

const ProfileImage = ({ 
  width = 300, 
  height = 300, 
  className = "", 
  priority = false,
  sizes = "(max-width: 768px) 280px, 320px"
}: ProfileImageProps) => {
  return (
    <Image
      src="/vincent.webp"
      alt="Vincent Otieno"
      width={width}
      height={height}
      className={`object-cover object-center ${className}`}
      priority={priority}
      sizes={sizes}
    />
  )
}

export default ProfileImage 