import getExLoveImg from '../../assets/get-ex-love.png'
import { CallButton } from './Buttons'

export default function GetExLovePromo({ className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="ex-love-promo-perspective">
        <div className="ex-love-promo-rotate">
          <div className="relative overflow-hidden rounded-xl shadow-lg border border-white/20 bg-master-purple">
            <img
              src={getExLoveImg}
              alt="Get your ex love back with Master Alex"
              className="w-full h-72 sm:h-80 md:h-96 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
            <div className="absolute top-4 left-0 right-0 text-center px-3">
              <p className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
                Get Your Ex
              </p>
              <p className="ex-love-script text-2xl sm:text-3xl text-red-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] -mt-0.5 leading-tight">
                Love Back
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <CallButton variant="dark" className="w-full" compact />
      </div>
    </div>
  )
}
