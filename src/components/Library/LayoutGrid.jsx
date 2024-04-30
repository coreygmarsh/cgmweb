import React from 'react'
import { Danita,
   PortraitOne,
    PortraitThree,
    BlackSea,
  Botanical,
    Palace,
     Eser,
      Waves,
       Swim,
        WaterRoad,
           GuitarOne,
            LetMeLoose,
             Tension,
              TwentyFive, } from '../../images/ImgAssets'

const LayoutGrid = () => {
  return (
    <div>


<div className="grid gap-4 flex-col justify-center items-center">
    <div>
        <img className="h-auto max-w-full rounded-lg" src={LetMeLoose} alt=""/>
    </div>
    <div className="grid grid-cols-5 gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={PortraitOne} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={PortraitThree}/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={TwentyFive} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={Botanical} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={LetMeLoose} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={Tension} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={Waves} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={Waves} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={Waves} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={Botanical} alt=""/>
        </div>
        <div>
        </div>
    </div>
</div>

    </div>
  )
}

export default LayoutGrid
