import Lanyard from "@/components/common/Lanyard"
function Contact() {
  return (
    <>
    <div className="absolute z-20">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
    </div>
    </>
  )
}

export default Contact