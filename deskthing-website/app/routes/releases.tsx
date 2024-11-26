import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Releases() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [navigate])

  return <div className="w-full h-screen bg-black"></div>
}